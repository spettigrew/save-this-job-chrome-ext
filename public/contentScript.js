chrome.runtime.onMessage.addListener(request => {
  if (request.type === "getUrl") {
    chrome.storage.local.get('email', function (result) {
      console.log(result.email)
      
      if (result.email === undefined) {
        return chrome.runtime.sendMessage({ type: "getToken" })
      }
      const url = ""
      const data = { title: request.title, url: request.url }
      const otherParam = {
        headers: {
          "content-type": "application/json; charset=UTF-8"
        },
        body: data,
        method: "POST"
      }

      fetch(url, otherParam)
        .then(data => { return data.json() })
        .then(res => {
          console.log(res)
         
        })
        .catch(err => console.log(err))
    });
  }

  if (request.type === "getTokenFromStorage") {
    if (window.location.href === "http://localhost:3000/dashboard") {
      return setToken()
    }
  }

  if (request.type === "sign-out") {
    const modal = document.createElement('iframe');
    modal.setAttribute("style", "border: none; display: block; height: 60%; width: 200px; overflow: hidden; position: fixed; right: 0px; top: 0px; left: auto; float: none; width: auto; z-index: 2147483647; background: transparent;")
    modal.id = "jobSave"
    document.body.appendChild(modal)

    const iframe = document.getElementById("jobSave")
    iframe.src = chrome.runtime.getURL('./index.html')
    iframe.frameBorder = 0;
  }
})

const setToken = () => {
  const email = localStorage.getItem('email')
  const token = localStorage.getItem('token')
  chrome.storage.local.set({ email, token }, function () {
    console.log("Email is set to ", email)
  });
}


