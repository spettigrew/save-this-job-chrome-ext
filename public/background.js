chrome.runtime.onInstalled.addListener(function () {
  // This is where we create the context menu that's available through left click in the browser
  chrome.contextMenus.create({
    id: "Job Book",
    title: "Save Job Url",
    contexts: ['frame', 'page']
  })

  chrome.contextMenus.onClicked.addListener(() => {
    // This is where we add an event listener to listen for when a user clicks on our context menu item we created above and sends a message to the current tab with the url and title
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      const tabTitle = tabs[0].title;
      const tabUrl = tabs[0].url;
      chrome.tabs.sendMessage(tabs[0].id, {
        type: "getUrl",
        title: tabTitle,
        url: tabUrl
      })
    })
  })
  chrome.runtime.onMessage.addListener(request => {
    if (request.type === "getToken") {
      chrome.tabs.create({ 'url': 'http://localhost:3000/login' }, function (tab) {
        console.log("new", tab)
        chrome.tabs.sendMessage(tab[0].id, {
          type: "getTokenFromLocalStorage"
        })
      })
    }
  })
})


