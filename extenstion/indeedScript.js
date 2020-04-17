window.addEventListener("load", () => {
  const indeedList = ['https://www.indeed.com', 'https://gigs.indeed.com']
  for (let i = 0; i < indeedList.length; i++) {
    if (window.location.origin === indeedList[i]) {

      const shadow = document.createElement('div')
      const container = document.createElement('div')
      const form = document.createElement('form')
      const formTitle = document.createElement('div')
      const formLogo = document.createElement('img')
      const companyLabel = document.createElement('label')
      const companyInput = document.createElement('input')
      const jobTitleLabel = document.createElement('label')
      const jobTitleInput = document.createElement('input')
      const locationLabel = document.createElement('label')
      const locationInput = document.createElement('input')
      const jobPostUrlLabel = document.createElement('label')
      const jobPostUrlInput = document.createElement('input')
      const jobDescription = document.createElement('label')
      const jobDescriptionInput = document.createElement('textarea')
      const openButton = document.createElement('img')
      const submitButton = document.createElement('button')
      const closeButton = document.createElement('button')

      shadow.setAttribute('id', 'shadowBox')
      container.classList.add('form-popup')
      container.setAttribute('id', 'myForm')
      form.classList.add('form-container')
      openButton.classList.add('open-button')
      submitButton.classList.add('btn')
      submitButton.setAttribute('id', 'saveJob')
      closeButton.classList.add('btn')
      closeButton.classList.add('cancel')
      formTitle.setAttribute('id', 'formLogo')
      formLogo.src = chrome.runtime.getURL('./images/logo.png')

      companyLabel.setAttribute('for', 'company')
      companyInput.setAttribute('type', 'text')
      companyInput.setAttribute('placeholder', 'Company')
      companyInput.setAttribute('name', 'company')
      jobTitleLabel.setAttribute('for', 'jobTitle')
      jobTitleInput.setAttribute('type', 'text')
      jobTitleInput.setAttribute('placeholder', 'Job Title')
      jobTitleInput.setAttribute('name', 'jobTitle')
      locationLabel.setAttribute('for', 'location')
      locationInput.setAttribute('type', 'text')
      locationInput.setAttribute('placeholder', 'Location')
      locationInput.setAttribute('name', 'location')
      jobPostUrlLabel.setAttribute('for', 'postUrl')
      jobPostUrlInput.setAttribute('type', 'text')
      jobPostUrlInput.setAttribute('placeholder', 'Job Post Url')
      jobPostUrlInput.setAttribute('name', 'postUrl')
      jobDescription.setAttribute('for', 'description')
      jobDescriptionInput.setAttribute('type', 'textarea')
      jobDescriptionInput.setAttribute('placeholder', 'Description')
      jobDescriptionInput.setAttribute('name', 'description')
      submitButton.textContent = 'Add'
      closeButton.textContent = 'Close'
      openButton.src = chrome.extension.getURL("./images/icon48.png")
      companyLabel.textContent = 'Company'
      jobTitleLabel.textContent = 'Job Title'
      jobPostUrlLabel.textContent = 'Job Post Url'
      locationLabel.textContent = 'Location'
      jobDescription.textContent = 'Description'

      form.appendChild(formTitle)
      formTitle.appendChild(formLogo)
      form.appendChild(companyLabel)
      form.appendChild(companyInput)
      form.appendChild(jobTitleLabel)
      form.appendChild(jobTitleInput)
      form.appendChild(locationLabel)
      form.appendChild(locationInput)
      form.appendChild(jobPostUrlLabel)
      form.appendChild(jobPostUrlInput)
      form.appendChild(jobDescription)
      form.appendChild(jobDescriptionInput)
      form.appendChild(submitButton)
      form.appendChild(closeButton)
      container.appendChild(form)

      window.document.body.appendChild(openButton)
      window.document.body.appendChild(container)

      const shadowRoot = container.attachShadow({ mode: 'open' });
      const formStyle = document.createElement('style')
      formStyle.textContent = `
      body {font-family: Arial, Helvetica, sans-serif;}
      * {box-sizing: border-box;}
      
      #formLogo {
        display: flex;
        justify-content: center;
      }
      
      /* Button used to open the contact form - fixed at the bottom of the page */
      .open-button {
        padding: 16px 20px;
        border: none;
        cursor: pointer;
        opacity: 0.8;
        position: fixed;
        bottom: 23px;
        right: 28px;
        display: block !important;
        z-index: 985696587451232547;
        /* width: 280px; */
      }
      
      /* The popup form - hidden by default */
      .form-popup {
        display: none;
        position: fixed;
        bottom: 95px;
        right: 15px;
        border: 3px solid #f1f1f1;
        z-index: 999999999999;
      }
      
      /* Add styles to the form container */
      .form-container {
        max-width: 300px;
        padding: 10px;
        background-color: white;
        z-index: 999999999999999;
      }
      
      /* Full-width input fields */
      .form-container input[type=text], .form-container input[type=text] {
        width: 100%;
        padding: 15px;
        margin: 5px 0 22px 0 !important;
        border: none;
        background: #f1f1f1;
      }
      
      .form-container textarea {
        width: 100%;
        padding: 15px;
        margin: 5px 0 22px 0 !important;
        border: none;
        background: #f1f1f1;
        height: 100px;
        overflow-y: auto
      }
      
      /* When the inputs get focus, do something */
      .form-container input[type=text]:focus, .form-container textarea:focus {
        background-color: #ddd;
        outline: none;
      }
      
      /* Set a style for the submit/login button */
      .form-container .btn {
        background-color: #08A6C9;
        color: white;
        padding: 16px 20px;
        border: none;
        cursor: pointer;
        width: 100%;
        margin-bottom:10px;
        opacity: 0.8;
      }
      
      /* Add a background color to the cancel button */
      .form-container .cancel {
        background-color: #ddd;
        color: white;
      }
      
      /* Add some hover effects to buttons */
      .form-container .btn:hover, .open-button:hover {
        opacity: 1;
      }
      
      .form-container label {
        font-size: 12px !important;
        font-weight: bold;
      }
      `
      shadowRoot.appendChild(formStyle)
      shadowRoot.appendChild(form)

      const setCompanyName = (company) => {
        if (company) {
          company.info = { company: company.textContent, companyUrl: company.href || null };
        } else {
          return null
        }
      };

      document.querySelector(".open-button").addEventListener("click", (event) => {
        event.preventDefault()
        const title =
          document.querySelector('#vjs-jobtitle') ||
          document.querySelector('.jobsearch-JobInfoHeader-title-container h3') ||
          document.querySelector('.TitleText') ||
          null
        const company =
          document.querySelector('#vjs-cn a') ||
          document.querySelector('#vjs-cn') ||
          document.querySelector('.icl-u-lg-mr--sm a') ||
          document.querySelector('.icl-u-lg-mr--sm') ||
          document.querySelector('.CompanyName') ||
          null
        setCompanyName(company);
        const jobLocation =
          document.querySelector('#vjs-loc') ||
          document.querySelectorAll(".icl-u-xs-mt--xs")[1] ||
          document.querySelector('.Location') ||
          null

        const description =
          document.querySelector('#vjs-desc') ||
          document.querySelector('#jobDescriptionText') ||
          document.querySelector('.JobContent') ||
          null

        jobPostUrlInput.value = window.location.href
        jobTitleInput.value = title ? title.textContent : null
        companyInput.value = company ? company.info.company : null
        locationInput.value = jobLocation ? jobLocation.lastChild.textContent : null
        jobDescriptionInput.value = description ? description.innerText : null
        container.style.display = "block";
      })

      shadowRoot.querySelector(".cancel").addEventListener("click", (event) => {
        event.preventDefault()
        container.style.display = "none";
      })


      const addJob = shadowRoot.querySelector('#saveJob')
      addJob.addEventListener("click", (event) => {
        event.preventDefault()
        addJob.innerHTML = 'Loading...'
        const logo =
          document.querySelector('#vjs-img-cmL') ||
          document.querySelector('.vjs-JobInfoHeader-logo-container img') ||
          document.querySelector('.jobsearch-CompanyAvatar-image') ||
          null;
        const company =
          document.querySelector('#vjs-cn a') ||
          document.querySelector('#vjs-cn') ||
          document.querySelector('.icl-u-lg-mr--sm a') ||
          document.querySelector('.icl-u-lg-mr--sm') ||
          document.querySelector('.CompanyName') ||
          null;
        setCompanyName(company);

        chrome.storage.local.get('token', function (result) {
          if (!result.token) {
            return chrome.runtime.sendMessage({ type: 'getToken' });
          }

          const accessToken = result.token;

          const data = {
            jobTitle: jobTitleInput.value,
            urlText: jobPostUrlInput.value,
            logo: logo ? logo.src : null,
            companyTitle: companyInput.value,
            companyUrl: company ? company.info.companyUrl : null,
            description: jobDescriptionInput.value,
            location: locationInput.value
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
                addJob.innerHTML = 'Add'
                return chrome.runtime.sendMessage({ type: 'getToken' });
              }
              if (data.message === 'Job Post Created') {
                addJob.innerHTML = 'Add'
                return chrome.runtime.sendMessage({ type: 'jobSaveSuccess' });
              }
            })
            .catch((error) => {
              console.error('Error:', error);
              addJob.innerHTML = 'Add'
              chrome.runtime.sendMessage({ type: 'Error' });
            });
        });
      })

      chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        if (request.type === 'hide') {
          const tack = 
          document.querySelector('.open-button')
          tack.setAttribute('style', 'display: none !important')
        }
      
        if (request.type === 'getTokenFromStorage') {
          if (
            window.location.href ===
            'https://staging.d3d1q8nq7a3fmz.amplifyapp.com/dashboard'
          ) {
            return setToken();
          }
        }
      })


      const setToken = () => {
        const token = localStorage.getItem('token');
        chrome.storage.local.set({ token }, () => {
          chrome.runtime.sendMessage({ type: 'tokenSet' });
        });
      };
    }
  }


})