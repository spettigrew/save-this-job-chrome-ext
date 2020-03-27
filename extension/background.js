
// This is where we create the context menu that's available through left click in the browser

chrome.contextMenus.create({
  id: "First",
  title: "Save Job Post",
  contexts: ['all'],
})

chrome.storage.local.get('token', result => {
  if (result.token) {
    chrome.contextMenus.create({
      id: "Second",
      title: "Sign-Out",
      contexts: ['all'],
      visible: true
    })
  } else {
    chrome.contextMenus.create({
      id: "Second",
      title: "Sign-Out",
      contexts: ['all'],
      visible: false
    })
  }
})


chrome.contextMenus.onClicked.addListener((info, tab) => {
  // This is where we add a event listener for when a user clicks on our context menu items we created above and sends a message to the current tab with the url and title
  if (tab) {
    if (info.menuItemId === "First") {
      chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        const tabTitle = tabs[0].title;
        const tabUrl = tabs[0].url;
        chrome.tabs.sendMessage(tabs[0].id, {
          type: "getUrl",
          title: tabTitle,
          url: tabUrl
        })
      })
    }

    if (info.menuItemId === "Second") {
      chrome.storage.local.get('token', result => {
        if (result.token) {
          return signOut()
        } else {
          return chrome.contextMenus.update('Second', { visible: false })
        }
      })
    }
  }

})

chrome.runtime.onMessage.addListener(request => {
  if (request.type === "getToken") {
    return login()
  }

  if (request.type === "jobSaveSuccess") {
    const notificationOptions = {
      type: "basic",
      iconUrl: "./images/icon48.png",
      title: "Job Save Success!",
      message: "Your Job url was successfully saved to your dashboard!"
    }
    return chrome.notifications.create(notificationOptions)
  }

  if (request.type === "Error") {
    const notificationOptions = {
      type: "basic",
      iconUrl: "./images/icon48.png",
      title: "Job Save Error",
      message: "There was a problem saving your job post to the database. Please try again later."
    }
    return chrome.notifications.create(notificationOptions)
  }
})

function login() {
  chrome.tabs.create({ 'url': 'http://localhost:3000/login' }, function () {
    chrome.contextMenus.update('Second', { visible: true }, function () {
      chrome.tabs.onUpdated.addListener(() => {
        chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
          const tabId = tabs[0].id
          chrome.tabs.sendMessage(tabId, { type: "getTokenFromStorage" })
        })
      })
    })
  })
}

function signOut() {
  chrome.storage.local.clear(function () {
    chrome.contextMenus.update('Second', { visible: false }, function () {
      const notificationOptions = {
        type: "basic",
        iconUrl: "./images/icon48.png",
        title: "Sign-Out Success!",
        message: "Your are now logged off. Try saving a new job to log back in!"
      }
      return chrome.notifications.create(notificationOptions)
    })
  })
}




