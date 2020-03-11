chrome.runtime.onMessage.addListener(request => {
  if (request.type === "getUrl") {
    console.log(request.title)
    console.log(request.url)

    // Here we are creating a iframe, setting some styles and appending iframe to document to run react as iframe src
    const modal = document.createElement('iframe');
    modal.setAttribute("style", "border: none; display: block; height: 35%; overflow: hidden; position: fixed; right: 0px; top: 0px; left: auto; float: none; width: auto; z-index: 2147483647; background: transparent;")
    modal.id = "jobSave"
    document.body.appendChild(modal)

    const iframe = document.getElementById("jobSave")
    iframe.src = chrome.runtime.getURL('./index.html')
    iframe.frameBorder = 0;
  }
})