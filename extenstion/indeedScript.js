window.addEventListener("load", () => {
  const indeedList = ['https://www.indeed.com', 'https://gigs.indeed.com']
  for (let i = 0; i < indeedList.length; i++) {
    if (window.location.origin === indeedList[i]) {

      const shadow = document.createElement('div')
      const popup = document.createElement('div')
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
      const drag = document.createElement('img')

      shadow.setAttribute('id', 'shadowBox')
      popup.setAttribute('id', 'popup')
      popup.classList.add('formSuccess')
      popup.setAttribute('style', 'display: none !important')
      container.classList.add('form-popup')
      container.setAttribute('id', 'myForm')
      form.classList.add('form-container')
      openButton.classList.add('open-button')
      openButton.setAttribute('style', 'display: none !important')
      submitButton.classList.add('btn')
      submitButton.setAttribute('id', 'saveJob')
      formTitle.setAttribute('id', 'formLogo')
      formLogo.src = chrome.runtime.getURL('./images/logo.png')
      drag.src = chrome.runtime.getURL('./images/drag24.png')

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
      drag.setAttribute('id', 'dragForm')
      jobDescriptionInput.setAttribute('name', 'description')
      submitButton.textContent = 'Add'
      openButton.src = chrome.extension.getURL("./images/icon48.png")
      companyLabel.textContent = 'Company'
      jobTitleLabel.textContent = 'Job Title'
      jobPostUrlLabel.textContent = 'Job Post Url'
      locationLabel.textContent = 'Location'
      jobDescription.textContent = 'Description'
      popup.innerHTML = `
      <p style="color: #08A6C9; margin: 0px; font-size: 16px; font-family: lato; font-weight: 400; letter-spacing: 0px; line-height: 23px;">Your job was saved to<p>
      <p style="color: #08A6C9; margin: 10px 0px 30px; font-size: 35px; font-family: lato; font-weight: 600; letter-spacing: 0px; line-height: 42px; text-transform: capitalize;">SaveThisJob</p>
      <a href="http://localhost:3000/dashboard" target="_blank" style="box-sizing: border-box; line-height: 15px; text-decoration: none; display: inline-block; padding: 10px 20px; color: white; font-weight: 600; border-radius: 4px; transition: all 0.4s ease-out 0s; background-color: #08A6C9; text-align: center; font-size: 14px; border: 1px solid rgba(0, 0, 0, 0); position: relative; box-shadow: rgba(25, 4, 69, 0.05) 0px 4px 10px;">View Dashboard</a>
      `
      form.appendChild(drag)
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
      container.appendChild(form)
      container.appendChild(popup)

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
        padding-bottom: 15px;
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
      }
      
      /* The popup form - hidden by default */
      .form-popup {
        display: none;
        position: fixed;
        bottom: 95px;
        right: 15px;
        z-index: 999999999999;
      }
      
      /* Add styles to the form container */
      .form-container {
        padding: 20px;
        border-radius: 8px;
        background-color: white;
        box-shadow: rgba(25, 4, 69, 0.4) 0px 0px 1px, rgba(25, 4, 69, 0.2) 0px 3px 10px;
        width: 280px;
        position: absolute;
        right: 0px;
        bottom: 60px;
        overflow: visible;
        height: 654px;
      }
      
      /* Full-width input fields */
      .form-container input[type=text], .form-container input[type=text] {
        background-color: #fff;
        background-image: none !important;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Lato', sans-serif !important;
        font-size: 14px !important;
        letter-spacing: 0px;
        width: 100%;
        border-top: none !important;
        border-left: none !important;
        border-right: none !important;
        box-shadow: none !important;
        border-bottom: 1px solid #eee !important;
        font-weight: 400 !important;
        margin-bottom: 10px !important;
        color: #08A6C9 !important;
        border-radius: 0 !important;
        line-height: normal !important;
        padding: 20px 0 !important;
      }
      
      .form-container textarea {
        background-color: #fff;
        background-image: none !important;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Lato', sans-serif !important;
        font-size: 14px !important;
        letter-spacing: 0px;
        width: 100%;
        border-top: none !important;
        border-left: none !important;
        border-right: none !important;
        box-shadow: none !important;
        border-bottom: 1px solid #eee !important;
        font-weight: 400 !important;
        margin-bottom: 10px !important;
        color: #08A6C9 !important;
        border-radius: 0 !important;
        line-height: normal !important;
        padding: 20px 0 !important;
      }
      
      /* When the inputs get focus, do something */
      .form-container input[type=text]:focus, .form-container textarea:focus {
        background-image: none !important;
        box-sizing: border-box;
        font-family: 'Lato', sans-serif !important;
        letter-spacing: 0px;
        width: 100%;
        border-top: none !important;
        border-left: none !important;
        border-right: none !important;
        border-bottom: 1px solid #08A6C9 !important;
        box-shadow: none !important;
        font-weight: 400 !important;
        margin-bottom: 10px !important;
        color: #08A6C9 !important;
        border-radius: 0 !important;
        padding: 20px 0 !important;
      }

      .form-container label {
        margin: 0px !important;
        font-size: 14px !important;
        font-family: 'Lato', sans-serif !important;
        font-weight: 600 !important;
        letter-spacing: 0px !important;
        line-height: 21px !important;
        text-align: left !important;
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
      
      /* Add some hover effects to buttons */
      .form-container .btn:hover, .open-button:hover {
        opacity: 1;
      }
      
      .formSuccess {
        display: flex !important;
        flex-direction: column;
        height: 250px;
        align-items: center;
        justify-content: center;
        padding: 5px;
        background-color: #f1f1f1;
        z-index: 9999999999999999
      }

      #dragForm {
        cursor: move;
        z-index: 10;
      }
      `
      shadowRoot.appendChild(formStyle)
      shadowRoot.appendChild(form)
      shadowRoot.appendChild(popup)

      chrome.storage.local.get('token', (storage) => {
        if (!storage.token) {
          const openPopup = document.querySelector('.open-button')
          openPopup.setAttribute('style', 'display: none !important')
          return openPopup
        } else {
          const openPopup = document.querySelector('.open-button')
          openPopup.setAttribute('style', 'display: block !important')
          return openPopup
        }
      })

      const setCompanyName = (company) => {
        if (company) {
          company.info = { company: company.textContent, companyUrl: company.href || null };
        } else {
          return null
        }
      };

      function togglePopup() {
        const iframe = document.querySelector('#vjs-container-iframe')
        const titleElmnt = iframe ? iframe.contentWindow.document.querySelector('.jobsearch-JobInfoHeader-title-container h3') : null
        const title =
          document.querySelector('#vjs-jobtitle') ||
          titleElmnt ||
          document.querySelector('.jobsearch-JobInfoHeader-title-container h3') ||
          document.querySelector('.TitleText') ||
          null

        const companyATag = iframe ? iframe.contentWindow.document.querySelector('.icl-u-lg-mr--sm a') : null
        const companyElmnt = iframe ? iframe.contentWindow.document.querySelector('.icl-u-lg-mr--sm') : null
        const company =
          document.querySelector('#vjs-cn') ||
          companyElmnt ||
          document.querySelector('.icl-u-lg-mr--sm') ||
          document.querySelector('.CompanyName') ||
          null
        setCompanyName(company);

        const locationElmnt = iframe ? iframe.contentWindow.document.querySelectorAll('.icl-u-xs-mt--xs')[1] : null
        const jobLocation =
          document.querySelector('#vjs-loc') ||
          locationElmnt ||
          document.querySelectorAll(".icl-u-xs-mt--xs")[1] ||
          document.querySelector('.Location') ||
          null

        const descriptionElmnt = iframe ? iframe.contentWindow.document.querySelector('#jobDescriptionText') : null
        const description =
          document.querySelector('#vjs-desc') ||
          descriptionElmnt ||
          document.querySelector('#jobDescriptionText') ||
          document.querySelector('.JobContent') ||
          null

        const element = document.querySelector("#myForm");
        const success = shadowRoot.querySelector('#popup')
        if (element.style.display !== "block") {
          openButton.src = chrome.extension.getURL("./images/close-window-50.png")
          if (success.style.display === "flex") {
            success.setAttribute('style', 'display: none !important')
            form.style.display = "block";
            openButton.src = chrome.extension.getURL("./images/close-window-50.png")
          } else {
            null
          }
          jobPostUrlInput.value = window.location.href
          jobTitleInput.value = title ? title.textContent : null
          companyInput.value = company ? company.info.company : null
          locationInput.value = jobLocation ? jobLocation.lastChild.textContent : null
          jobDescriptionInput.value = description ? description.innerText : null
          form.style.display = "block";
          element.style.display = "block";
          form.setAttribute('style', 'bottom: 10px; right: 15px;')
        } else {
          element.style.display = "none";
          openButton.src = chrome.extension.getURL("./images/icon48.png")
        }
      }

      function dragElement(elmnt) {
        let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        if (shadowRoot.getElementById('dragForm')) {
          shadowRoot.getElementById('dragForm').onmousedown = dragMouseDown;
        } else {
          elmnt.onmousedown = dragMouseDown;
        }

        function dragMouseDown(e) {
          e = e || window.event;
          e.preventDefault();
          // get the mouse cursor position at startup:
          pos3 = e.clientX;
          pos4 = e.clientY;
          document.onmouseup = closeDragElement;
          // call a function whenever the cursor moves:
          document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
          e = e || window.event;
          e.preventDefault();
          // calculate the new cursor position:
          pos1 = pos3 - e.clientX;
          pos2 = pos4 - e.clientY;
          pos3 = e.clientX;
          pos4 = e.clientY;
          // set the element's new position:
          elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
          elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }


        function closeDragElement() {
          /* stop moving when mouse button is released:*/
          document.onmouseup = null;
          document.onmousemove = null;
        }
      }



      document.querySelector(".open-button").addEventListener("click", () => {
        togglePopup()
        dragElement(shadowRoot.querySelector('.form-container'));
      })

      const addJob = shadowRoot.querySelector('#saveJob')
      addJob.addEventListener("click", (event) => {
        const iframe = document.querySelector('#vjs-container-iframe')
        event.preventDefault()
        addJob.innerHTML = 'Loading...'
        const img = iframe ? iframe.contentWindow.document.querySelector('.jobsearch-JobInfoHeader-logo') : null
        const logo =
          document.querySelector('#vjs-img-cmL') ||
          img ||
          document.querySelector('.vjs-JobInfoHeader-logo-container img') ||
          document.querySelector('.jobsearch-CompanyAvatar-image') ||
          null;

        const companyATag = iframe ? iframe.contentWindow.document.querySelector('.icl-u-lg-mr--sm a') : null
        const company =
          document.querySelector('#vjs-cn a') ||
          companyATag ||
          document.querySelector('.icl-u-lg-mr--sm a') ||
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
            location: locationInput.value,
            column_id: 'column-1',
            index: 0
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
              if (data.message === 'Job post created') {
                form.style.display = 'none'
                popup.style.display = 'flex'
                jobPostUrlInput.value = ""
                jobTitleInput.value = ""
                companyInput.value = ""
                locationInput.value = ""
                jobDescriptionInput.value = ""
                addJob.innerHTML = 'Add'
                chrome.storage.local.get('currentJobs', (res) => {
                  res.currentJobs && res.currentJobs.map((job) => {
                    fetch(`https://staging-save-this-job.herokuapp.com/users/updateJob/${job.id}`, {
                      method: 'PUT',
                      headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${accessToken}`,
                      },
                      body: JSON.stringify({index: job.index + 1}),
                    })
                    .then((res) => {
                      return res.json()
                    })
                    .then((response) => {
                      console.log(response)
                    })
                  })

                })
                chrome.runtime.sendMessage({ type: 'jobSaveSuccess' });
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
        if (request.type === 'showForm') {
          togglePopup()
          dragElement(shadowRoot.querySelector('.form-container'));
        }

        if (request.type === 'hide') {
          chrome.storage.local.get('token', (storage) => {
            if (storage.token) {
              const tack =
                document.querySelector('.open-button')
              tack.setAttribute('style', 'display: block !important')
              console.log('show')
              return tack
            } else {
              chrome.storage.local.get('token', () => {
                const tack =
                  document.querySelector('.open-button')
                tack.setAttribute('style', 'display: none !important')
                console.log('hide')
                return tack
              })
            }
          })
        }

        if (request.type === 'show') {
          chrome.storage.local.get('token', (storage) => {
            if (storage.token) {
              const tack =
                document.querySelector('.open-button')
              tack.setAttribute('style', 'display: block !important')
              return tack
            } else {
              chrome.storage.local.get('token', () => {
                const tack =
                  document.querySelector('.open-button')
                tack.setAttribute('style', 'display: none !important')
                return tack
              })
            }
          })
        }


        if (request.type === 'tabActivated') {
          chrome.storage.local.get('token', (storage) => {
            if (storage.token) {
              const tack =
                document.querySelector('.open-button')
              tack.setAttribute('style', 'display: block !important')
              return tack
            } else {
              const tack =
                document.querySelector('.open-button')
              tack.setAttribute('style', 'display: none !important')
              return tack
            }
          })
        }
      })
    }
  }
})