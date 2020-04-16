chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.local.get('token', (result) => {
    if (result.token) {
      chrome.contextMenus.create({
        id: 'ViewDashboard',
        title: 'View Dashboard',
        contexts: ['all'],
        visible: true,
      });
      chrome.contextMenus.create({
        id: 'logout',
        title: 'Logout',
        contexts: ['all'],
        visible: true,
      });
      chrome.contextMenus.create({
        id: 'login',
        title: 'Login',
        contexts: ['all'],
        visible: false,
      });

      chrome.tabs.onHighlighted.addListener(function () {
        chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
          const tabUrl = tabs[0].url;
          chrome.tabs.sendMessage(tabs[0].id, {
            type: "sendUrl",
            url: tabUrl
          })
        })
      })

      chrome.tabs.onCreated.addListener(function () {
        chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
          const tabUrl = tabs[0].url;
          chrome.tabs.sendMessage(tabs[0].id, {
            type: "sendUrl",
            url: tabUrl
          })
        })
      })

      chrome.tabs.onUpdated.addListener(function () {
        chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
          const tabUrl = tabs[0].url;
          chrome.tabs.sendMessage(tabs[0].id, {
            type: "sendUrl",
            url: tabUrl
          })
        })
      })

      chrome.tabs.onActivated.addListener(function () {
        chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
          const tabUrl = tabs[0].url;
          chrome.tabs.sendMessage(tabs[0].id, {
            type: "sendUrl",
            url: tabUrl
          })
        })
      })

    } else {
      chrome.contextMenus.create({
        id: 'login',
        title: 'Login',
        contexts: ['all'],
        visible: true,
      });
      chrome.contextMenus.create({
        id: 'logout',
        title: 'Logout',
        contexts: ['all'],
        visible: false,
      });
      chrome.contextMenus.create({
        id: 'ViewDashboard',
        title: 'View Dashboard',
        contexts: ['all'],
        visible: false,
      });
    }
  });
})

chrome.contextMenus.onClicked.addListener((info, tab) => {
  // This is where we add a event listener for when a user clicks on our context menu items we created above and sends a message to the current tab with the url and title
  if (tab) {

    if (info.menuItemId === 'logout') {
      chrome.storage.local.get('token', (result) => {
        if (result.token) {
          return signOut();
        } else {
          return chrome.contextMenus.update('logout', { visible: false });
        }
      });
    }

    if (info.menuItemId === 'login') {
      chrome.storage.local.get('token', (result) => {
        if (!result.token) {
          return login();
        } else {
          return chrome.contextMenus.update('login', { visible: true });
        }
      });
    }

    if (info.menuItemId === 'ViewDashboard') {
      chrome.storage.local.get('token', (result) => {
        if (result.token) {
          return chrome.tabs.create({
            url: 'https://staging.d3d1q8nq7a3fmz.amplifyapp.com/dashboard',
          });
        } else {
          return chrome.contextMenus.update('ViewDashboard', { visible: true });
        }
      });
    }
  }
});
let tabId
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'getToken') {
    return login();
  }

  if (request.type === 'jobSaveSuccess') {
    const notificationOptions = {
      type: 'basic',
      iconUrl: './images/icon48.png',
      title: 'Job Save Success!',
      message: 'Your Job url was successfully saved to your dashboard!',
    };
    return chrome.notifications.create(notificationOptions);
  }

  if (request.type === 'Error') {
    const notificationOptions = {
      type: 'basic',
      iconUrl: './images/icon48.png',
      title: 'Job Save Error',
      message:
        'There was a problem saving your job post to the database. Please try again later.',
    };
    return chrome.notifications.create(notificationOptions);
  }

  if (request.type === 'tokenSet') {
    chrome.contextMenus.update('logout', { visible: true }, function () {
      chrome.contextMenus.update('login', { visible: false }, function () {
        chrome.contextMenus.update('ViewDashboard', { visible: true });
      });
    });
  }

  if (request.from === "popup") {
    tabId = sender.tab.id;
  }
  if (request.from === "monster") {
    console.log('message received')
    chrome.tabs.query({active: true, currentWindow: true}, function() {
      chrome.tabs.sendMessage(tabId, {message: 'sent'});
    });
  }
  chrome.tabs.sendMessage(tabId, request)
});

function login() {
  chrome.tabs.create(
    { url: 'https://staging.d3d1q8nq7a3fmz.amplifyapp.com/login' },
    function () {
      chrome.tabs.onUpdated.addListener(() => {
        chrome.tabs.query({ currentWindow: true, active: true }, function (
          tabs,
        ) {
          const tabId = tabs[0].id;
          chrome.tabs.sendMessage(tabId, { type: 'getTokenFromStorage' });
        });
      });
    },
  );
}

function signOut() {
  chrome.storage.local.clear(function () {
    chrome.contextMenus.update('login', { visible: true }, function () {
      chrome.contextMenus.update('logout', { visible: false }, function () {
        chrome.contextMenus.update('ViewDashboard', { visible: false }, function () {
          const notificationOptions = {
            type: 'basic',
            iconUrl: './images/icon48.png',
            title: 'Sign-Out Success!',
            message:
              'Your are now logged off. Try saving a new job to log back in!',
          };
          return chrome.notifications.create(notificationOptions);
        })
      });
    });
  });
}

