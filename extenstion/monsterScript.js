window.addEventListener("load", () => {
  if (window.location.origin === 'https://www.monster.com') {
    const title = document.querySelector('#JobViewHeader h1.title').textContent.toString() || null
    // const split = title.indexOf('at ')
    // title.slice(split + 3)
    chrome.runtime.sendMessage({ from: "monster", companyName: title });
  }
});
