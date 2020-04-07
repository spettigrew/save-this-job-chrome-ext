chrome.runtime.onInstalled.addListener(function () {
  // This is where we create the context menu that's available through left click in the browser
  chrome.contextMenus.create({
    id: "Save this Job",
    title: "Save this Job Url",
    contexts: ['all']
  })

  chrome.contextMenus.create({
    id: "Second",
    title: "Sign Out",
    contexts: ['all']
  })

  chrome.contextMenus.onClicked.addListener((info, tab) => {
    // This is where we add an event listener to listen for when a user clicks on our context menu item we created above and sends a message to the current tab with the url and title
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
        chrome.storage.local.clear(function () {
          console.log('You have signed out successfully')
        })
        chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
          chrome.tabs.sendMessage(tabs[0].id, {
            type: "sign-out",
          })
        })
      }
    }
  })

  chrome.runtime.onMessage.addListener(request => {
    if (request.type === "getToken") {
      chrome.tabs.create({ 'url': 'http://localhost:3000/login' }, function () {
        chrome.tabs.onUpdated.addListener(() => {
          chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
            const tabId = tabs[0].id
            const tabLink = tabs[0].url
            chrome.tabs.sendMessage(tabId, {
              type: "getTokenFromStorage",
              id: tabId,
              url: tabLink
            })
          })
        })
      })
    }
  })
})




