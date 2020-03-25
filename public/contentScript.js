chrome.runtime.onMessage.addListener(request => {
  if (request.type === "getUrl") {
    chrome.storage.local.get('token', function (result) {
      const accessToken = result.token

      if (result.token === undefined) {
        return chrome.runtime.sendMessage({ type: "getToken" })
      }
      const data = { jobTitle: request.title, url: request.url };

      fetch('http://localhost:8080/users/addJob', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          if (data.message === "Job Post Created") {
            
            const modal = document.createElement('iframe');
            modal.setAttribute("style", "border: none; display: block; height: 60%; width: 200px; overflow: hidden; position: fixed; right: 0px; top: 0px; left: auto; float: none; width: auto; z-index: 2147483647; background: transparent;")
            modal.id = "jobSave"
            document.body.appendChild(modal)

            const iframe = document.getElementById("jobSave")
            iframe.src = chrome.runtime.getURL('./index.html')
            iframe.frameBorder = 0;
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    });
  }

  if (request.type === "getTokenFromStorage") {
    if (window.location.href === "http://localhost:3000/dashboard") {
      return setToken()
    }
  }

  if (request.type === "sign-out") {

  }
})


const setToken = () => {
  const token = localStorage.getItem('token')
  chrome.storage.local.set({ token });
}


