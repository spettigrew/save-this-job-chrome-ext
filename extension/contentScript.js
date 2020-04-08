chrome.runtime.onMessage.addListener((request) => {
  if (request.type === 'getUrl') {
    chrome.storage.local.get('token', function (result) {
      if (result.token === undefined) {
        return chrome.runtime.sendMessage({ type: 'getToken' });
      }

      const accessToken = result.token;
      const logo =
        document.querySelector('#vjs-img-cmL') ||
        document.querySelector('.vjs-JobInfoHeader-logo-container img') ||
        document.querySelector('.jobsearch-CompanyAvatar-image') ||
        null;
      const title =
        document.querySelector('#vjs-jobtitle') ||
        document.querySelector('.jobsearch-JobInfoHeader-title-container h3');
      const company =
        document.querySelector('#vjs-cn a') ||
        document.querySelector('#vjs-cn') ||
        document.querySelector('.icl-u-lg-mr--sm a') ||
        document.querySelector('.icl-u-lg-mr--sm');
      setCompanyName(company);

      const data = {
        jobTitle: title.textContent,
        url: request.url,
        logo: logo ? logo.src : null,
        companyTitle: company.info ? company.info.company : company.name,
        companyUrl: company.info ? company.info.companyUrl : null,
      };

      fetch('https://staging-save-this-job.herokuapp.com/users/addJob', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data === 'Jwt is expired') {
            return chrome.runtime.sendMessage({ type: 'getToken' });
          }
          if (data.message === 'Job Post Created') {
            return chrome.runtime.sendMessage({ type: 'jobSaveSuccess' });
          }
        })
        .catch((error) => {
          console.error('Error:', error);
          chrome.runtime.sendMessage({ type: 'Error' });
        });
    });
  }

  if (request.type === 'getTokenFromStorage') {
    // need to add our actual deployed link here
    if (
      window.location.href ===
      'https://staging.d3d1q8nq7a3fmz.amplifyapp.com/dashboard'
    ) {
      return setToken();
    }
  }
});

const setToken = () => {
  const token = localStorage.getItem('token');
  chrome.storage.local.set({ token }, () => {
    chrome.runtime.sendMessage({ type: 'tokenSet' });
  });
};

const setCompanyName = (company) => {
  if (company.href) {
    company.info = { company: company.textContent, companyUrl: company.href };
    return company.info;
  } else {
    company.name = company.textContent;
    return company.name;
  }
};
