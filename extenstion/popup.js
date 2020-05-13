const shadow = document.createElement('div')
const popup = document.createElement('div')
const loginSuccess = document.createElement('div')
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
const companyTooltip = document.createElement('div')
const titleTooltip = document.createElement('div')
const locationTooltip = document.createElement('div')
const descriptionTooltip = document.createElement('div')
const drag = document.createElement('img')


shadow.setAttribute('id', 'shadowBox')
popup.setAttribute('id', 'popup')
popup.classList.add('formSuccess')
popup.setAttribute('style', 'display: none !important')
loginSuccess.setAttribute('id', 'loginSuccess')
loginSuccess.className = 'loginSuccess'
loginSuccess.setAttribute('style', 'display: none !important')
container.classList.add('form-popup')
container.setAttribute('id', 'myForm')
form.classList.add('form-container')
openButton.classList.add('open-button')
submitButton.classList.add('btn')
submitButton.setAttribute('id', 'saveJob')
formTitle.setAttribute('id', 'formLogo')
formLogo.src = chrome.runtime.getURL('./images/logo.png')
companyTooltip.src = chrome.runtime.getURL('./images/info-15.png')
titleTooltip.src = chrome.runtime.getURL('./images/info-15.png')
locationTooltip.src = chrome.runtime.getURL('./images/info-15.png')
descriptionTooltip.src = chrome.runtime.getURL('./images/info-15.png')
drag.src = chrome.runtime.getURL('./images/drag24.png')
companyInput.classList.add('input')
jobTitleInput.classList.add('input')
locationInput.classList.add('input')
jobDescriptionInput.classList.add('input')
companyTooltip.classList.add('tooltip')
titleTooltip.classList.add('tooltip')
locationTooltip.classList.add('tooltip')
descriptionTooltip.classList.add('tooltip')

companyLabel.setAttribute('for', 'company')
companyInput.setAttribute('type', 'text')

companyInput.setAttribute('name', 'company')
jobTitleLabel.setAttribute('for', 'jobTitle')
jobTitleInput.setAttribute('type', 'text')

jobTitleInput.setAttribute('name', 'jobTitle')
locationLabel.setAttribute('for', 'location')
locationInput.setAttribute('type', 'text')

locationInput.setAttribute('name', 'location')
jobPostUrlLabel.setAttribute('for', 'postUrl')
jobPostUrlInput.setAttribute('type', 'text')

jobPostUrlInput.setAttribute('name', 'postUrl')
jobDescription.setAttribute('for', 'description')
jobDescriptionInput.setAttribute('type', 'textarea')

jobDescriptionInput.setAttribute('name', 'description')
drag.setAttribute('id', 'dragForm')
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
loginSuccess.innerHTML = `
<div style="display: flex; flex-direction: column; height: 450px; padding: 0px 40px; text-align: center; align-items: center; justify-content: center;">
  <img src="data:image/png;base64,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" style="width: 85px; height: 35px; border: none; margin-bottom: 40px;">
  <p style="color: #08A6C9; margin: 0px 0px 7px; font-size: 22px; font-family: lato; font-weight: 600; letter-spacing: 0px; line-height: 30px; text-transform: capitalize;">You’re All Set!</p>
  <p style="margin: 15px 0px 30px; font-size: 16px; font-family: lato; font-weight: 400; letter-spacing: 0px; line-height: 23px;">The extension is ready</p>
  <div>
  <div style="padding: 15px 0px; text-align: left; border-bottom: 1px solid #08A6C9">
    <p style="color: #08A6C9; margin: 0px 10px 0px 0px; font-size: 16px; font-family: lato; font-weight: 800; letter-spacing: 0px; display: inline-block; line-height: 23px;">1.</p>
    <p style="margin: 0px; font-size: 16px; font-family: lato; font-weight: 400; letter-spacing: 0px; display: inline-block; line-height: 23px;">Find a job post online</p>
  </div>
  <div style="padding: 15px 0px; text-align: left; border-bottom: 1px solid #08A6C9">
    <p style="color: #08A6C9; margin: 0px 10px 0px 0px; font-size: 16px; font-family: lato; font-weight: 800; letter-spacing: 0px; display: inline-block; line-height: 23px;">2.</p>
    <p style="margin: 0px; font-size: 16px; font-family: lato; font-weight: 400; letter-spacing: 0px; display: inline-block; line-height: 23px;">Click on the thumbtack</p>
  </div>
  <div style="padding: 15px 0px; text-align: left; border-bottom: 1px solid #08A6C9">
    <p style="color: #08A6C9; margin: 0px 10px 0px 0px; font-size: 16px; font-family: lato; font-weight: 800; letter-spacing: 0px; display: inline-block; line-height: 23px;">3.</p>
    <p style="margin: 0px; font-size: 16px; font-family: lato; font-weight: 400; letter-spacing: 0px; display: inline-block; line-height: 23px;">Save your job</p>
  </div>
  </div>
</div>
`
companyTooltip.innerHTML = `
<div class="tooltip">
  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAAIRlWElmTU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAIdpAAQAAAABAAAAWgAAAAAAAABIAAAAAQAAAEgAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAAA+gAwAEAAAAAQAAAA8AAAAA9Ay2CgAAAAlwSFlzAAALEwAACxMBAJqcGAAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAAApxJREFUKBVVU8tOU1EUXfvclwXaYquWgsQXTjQGX2hk4sixOPBF5AP8A3RgHAlxbkw0cWLCAAf6DyZGQaNxQEwkRhMJFAVaioX23nu26zTBR5Pe7p6z1t5r772uwH3uqsFdsS6Mpt8NSJxcUcFQCO1uqVSbwGwuSKfXrwzPO8w2XrYDd7ZjamZCoOOtbB55a7GaMl/Cb+CjuFlHAzK5OXrmlsM6nrQDPqKpN8+9YmmkuVLRfiOtr7E1JyJPHp07pPOrdXv9/UIYlXulsPbjxeK1oUuOZ9xjx9TrCUOiXalspAoteyZCnAZZz/hHevJBXzYTIVEV3qOwe8Qn3vGk3WOSfFYIhSqKImYpTkEyru7pwv6uCA8rdazHFmXf2GXmCMjTND1s3HCEPbJgvNMRreqRyMeT43vx+MJR3Bzsx2DgAaqaNWIUaDm8eP5lI5yqcjAZttBQXlkrF1mxlI0Q+QahZ/CylbRVku9+DYhnsSGXiWUtKFQ2+Odk6GNioYYHc0toEvRxqQqsNzEQGPwk2QeXSDwn3e3INapFi8JyPNly2Qm+sW8nskz0YbkOUEGGEmu88tiuEs+wakQxC0rjNm2Om5tjz8j4ONaTxwbljn9b4w0rEunqkWSFeIHMGqVzUK852WEnJ47YysGOgD1n8KlSwynGY+Uc3vPcV7U+cUq8pskz02xbTielWJJQaKLU2vO5DAqdEY7vLeDO0V7UWZnV7R6DRkIcO5xsjg3P/3GY0GEHdpVGviwt6nBH2Lp/ep/ZihMZ//Bd327Gti8w4WqhJDTSi+bo2bbD/vO2mZq5l4Peqnbluc0YbiXwPXSFAZJ6lXORidbomdtuX3+9/e9b9fTVgE8D/OIeufvubpFqg0OtsUdQ6jbRvYW/AXy8QgCGuIyXAAAAAElFTkSuQmCC" />
  <span class="tooltiptext">Highlight any text on the page, then click this input field to auto fill company name</span>
</div>
`
titleTooltip.innerHTML = `
<div class="tooltip">
  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAAIRlWElmTU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAIdpAAQAAAABAAAAWgAAAAAAAABIAAAAAQAAAEgAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAAA+gAwAEAAAAAQAAAA8AAAAA9Ay2CgAAAAlwSFlzAAALEwAACxMBAJqcGAAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAAApxJREFUKBVVU8tOU1EUXfvclwXaYquWgsQXTjQGX2hk4sixOPBF5AP8A3RgHAlxbkw0cWLCAAf6DyZGQaNxQEwkRhMJFAVaioX23nu26zTBR5Pe7p6z1t5r772uwH3uqsFdsS6Mpt8NSJxcUcFQCO1uqVSbwGwuSKfXrwzPO8w2XrYDd7ZjamZCoOOtbB55a7GaMl/Cb+CjuFlHAzK5OXrmlsM6nrQDPqKpN8+9YmmkuVLRfiOtr7E1JyJPHp07pPOrdXv9/UIYlXulsPbjxeK1oUuOZ9xjx9TrCUOiXalspAoteyZCnAZZz/hHevJBXzYTIVEV3qOwe8Qn3vGk3WOSfFYIhSqKImYpTkEyru7pwv6uCA8rdazHFmXf2GXmCMjTND1s3HCEPbJgvNMRreqRyMeT43vx+MJR3Bzsx2DgAaqaNWIUaDm8eP5lI5yqcjAZttBQXlkrF1mxlI0Q+QahZ/CylbRVku9+DYhnsSGXiWUtKFQ2+Odk6GNioYYHc0toEvRxqQqsNzEQGPwk2QeXSDwn3e3INapFi8JyPNly2Qm+sW8nskz0YbkOUEGGEmu88tiuEs+wakQxC0rjNm2Om5tjz8j4ONaTxwbljn9b4w0rEunqkWSFeIHMGqVzUK852WEnJ47YysGOgD1n8KlSwynGY+Uc3vPcV7U+cUq8pskz02xbTielWJJQaKLU2vO5DAqdEY7vLeDO0V7UWZnV7R6DRkIcO5xsjg3P/3GY0GEHdpVGviwt6nBH2Lp/ep/ZihMZ//Bd327Gti8w4WqhJDTSi+bo2bbD/vO2mZq5l4Peqnbluc0YbiXwPXSFAZJ6lXORidbomdtuX3+9/e9b9fTVgE8D/OIeufvubpFqg0OtsUdQ6jbRvYW/AXy8QgCGuIyXAAAAAElFTkSuQmCC" />
  <span class="tooltiptext">Highlight any text on the page, then click this input field to auto fill job title</span>
</div>
`
locationTooltip.innerHTML = `
<div class="tooltip">
  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAAIRlWElmTU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAIdpAAQAAAABAAAAWgAAAAAAAABIAAAAAQAAAEgAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAAA+gAwAEAAAAAQAAAA8AAAAA9Ay2CgAAAAlwSFlzAAALEwAACxMBAJqcGAAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAAApxJREFUKBVVU8tOU1EUXfvclwXaYquWgsQXTjQGX2hk4sixOPBF5AP8A3RgHAlxbkw0cWLCAAf6DyZGQaNxQEwkRhMJFAVaioX23nu26zTBR5Pe7p6z1t5r772uwH3uqsFdsS6Mpt8NSJxcUcFQCO1uqVSbwGwuSKfXrwzPO8w2XrYDd7ZjamZCoOOtbB55a7GaMl/Cb+CjuFlHAzK5OXrmlsM6nrQDPqKpN8+9YmmkuVLRfiOtr7E1JyJPHp07pPOrdXv9/UIYlXulsPbjxeK1oUuOZ9xjx9TrCUOiXalspAoteyZCnAZZz/hHevJBXzYTIVEV3qOwe8Qn3vGk3WOSfFYIhSqKImYpTkEyru7pwv6uCA8rdazHFmXf2GXmCMjTND1s3HCEPbJgvNMRreqRyMeT43vx+MJR3Bzsx2DgAaqaNWIUaDm8eP5lI5yqcjAZttBQXlkrF1mxlI0Q+QahZ/CylbRVku9+DYhnsSGXiWUtKFQ2+Odk6GNioYYHc0toEvRxqQqsNzEQGPwk2QeXSDwn3e3INapFi8JyPNly2Qm+sW8nskz0YbkOUEGGEmu88tiuEs+wakQxC0rjNm2Om5tjz8j4ONaTxwbljn9b4w0rEunqkWSFeIHMGqVzUK852WEnJ47YysGOgD1n8KlSwynGY+Uc3vPcV7U+cUq8pskz02xbTielWJJQaKLU2vO5DAqdEY7vLeDO0V7UWZnV7R6DRkIcO5xsjg3P/3GY0GEHdpVGviwt6nBH2Lp/ep/ZihMZ//Bd327Gti8w4WqhJDTSi+bo2bbD/vO2mZq5l4Peqnbluc0YbiXwPXSFAZJ6lXORidbomdtuX3+9/e9b9fTVgE8D/OIeufvubpFqg0OtsUdQ6jbRvYW/AXy8QgCGuIyXAAAAAElFTkSuQmCC" />
  <span class="tooltiptext">Highlight any text on the page, then click this input field to auto fill location</span>
</div>
`
descriptionTooltip.innerHTML = `
<div class="tooltip">
  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAAIRlWElmTU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAIdpAAQAAAABAAAAWgAAAAAAAABIAAAAAQAAAEgAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAAA+gAwAEAAAAAQAAAA8AAAAA9Ay2CgAAAAlwSFlzAAALEwAACxMBAJqcGAAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAAApxJREFUKBVVU8tOU1EUXfvclwXaYquWgsQXTjQGX2hk4sixOPBF5AP8A3RgHAlxbkw0cWLCAAf6DyZGQaNxQEwkRhMJFAVaioX23nu26zTBR5Pe7p6z1t5r772uwH3uqsFdsS6Mpt8NSJxcUcFQCO1uqVSbwGwuSKfXrwzPO8w2XrYDd7ZjamZCoOOtbB55a7GaMl/Cb+CjuFlHAzK5OXrmlsM6nrQDPqKpN8+9YmmkuVLRfiOtr7E1JyJPHp07pPOrdXv9/UIYlXulsPbjxeK1oUuOZ9xjx9TrCUOiXalspAoteyZCnAZZz/hHevJBXzYTIVEV3qOwe8Qn3vGk3WOSfFYIhSqKImYpTkEyru7pwv6uCA8rdazHFmXf2GXmCMjTND1s3HCEPbJgvNMRreqRyMeT43vx+MJR3Bzsx2DgAaqaNWIUaDm8eP5lI5yqcjAZttBQXlkrF1mxlI0Q+QahZ/CylbRVku9+DYhnsSGXiWUtKFQ2+Odk6GNioYYHc0toEvRxqQqsNzEQGPwk2QeXSDwn3e3INapFi8JyPNly2Qm+sW8nskz0YbkOUEGGEmu88tiuEs+wakQxC0rjNm2Om5tjz8j4ONaTxwbljn9b4w0rEunqkWSFeIHMGqVzUK852WEnJ47YysGOgD1n8KlSwynGY+Uc3vPcV7U+cUq8pskz02xbTielWJJQaKLU2vO5DAqdEY7vLeDO0V7UWZnV7R6DRkIcO5xsjg3P/3GY0GEHdpVGviwt6nBH2Lp/ep/ZihMZ//Bd327Gti8w4WqhJDTSi+bo2bbD/vO2mZq5l4Peqnbluc0YbiXwPXSFAZJ6lXORidbomdtuX3+9/e9b9fTVgE8D/OIeufvubpFqg0OtsUdQ6jbRvYW/AXy8QgCGuIyXAAAAAElFTkSuQmCC" />
  <span class="tooltiptext">Highlight any text on the page, then click this input field to auto fill job description</span>
</div>
`
form.appendChild(drag)
form.appendChild(formTitle)
formTitle.appendChild(formLogo)
form.appendChild(companyLabel)
companyLabel.appendChild(companyTooltip)
form.appendChild(companyInput)
form.appendChild(jobTitleLabel)
jobTitleLabel.appendChild(titleTooltip)
form.appendChild(jobTitleInput)
form.appendChild(locationLabel)
locationLabel.appendChild(locationTooltip)
form.appendChild(locationInput)
form.appendChild(jobPostUrlLabel)
form.appendChild(jobPostUrlInput)
form.appendChild(jobDescription)
jobDescription.appendChild(descriptionTooltip)
form.appendChild(jobDescriptionInput)
form.appendChild(submitButton)
container.appendChild(form)
shadow.appendChild(container)
shadow.appendChild(openButton)
container.appendChild(popup)
container.appendChild(loginSuccess)

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
      display: none !important;
      z-index: 9856965874512325479999999999999999;
    }
    
    /* The popup form - hidden by default */
    .form-popup {
      display: none;
      position: fixed;
      bottom: 95px;
      right: 15px;
      z-index: 99999999999999999999999;
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

    .form-container label {
      margin: 0px !important;
      font-size: 14px !important;
      font-family: lato !important;
      font-weight: 600 !important;
      letter-spacing: 0px !important;
      line-height: 21px !important;
      text-align: left !important;
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
    
    /* Set a style for the submit button */
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
      display: flex;
      flex-direction: column;
      height: 250px;
      align-items: center;
      justify-content: center;
      padding: 5px;
      background-color: #f1f1f1;
      z-index: 9999999999999999
      content: 'Success'
    }

    .tooltip {
      position: relative;
      display: inline-block;
      padding-left: 4px;
    }
    
    .tooltip .tooltiptext {
      visibility: hidden;
      width: 120px;
      background-color: #f1f1f1;
      color: #08A6C9;
      text-align: center;
      border-radius: 6px;
      padding-left: 7px;
      padding-right: 7px;
      padding-top: 1px;
      
      /* Position the tooltip */
      position: absolute;
      z-index: 1;
      top: -5px;
      left: 105%;
    }
    
    .tooltip:hover .tooltiptext {
      visibility: visible;
      opacity: 1;
    }
  
    #dragForm {
      cursor: move;
      z-index: 10;
    }

    .loginSuccess {
      border-radius: 8px;
      background-color: white;
      box-shadow: rgba(25, 4, 69, 0.4) 0px 0px 1px, rgba(25, 4, 69, 0.2) 0px 3px 10px;
      width: 270px;
      position: absolute;
      right: 0px;
      bottom: 40px;
      overflow: visible;
      max-height: 609px;
    }
`

const shadowRoot = shadow.attachShadow({ mode: 'open' });

function togglePopup() {
  const element = shadowRoot.querySelector("#myForm");
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
    const inputs = shadowRoot.querySelectorAll('.input')

    function onCompanyInputMouseUp() {
      const selection = window.getSelection().toString()
      companyInput.value = companyInput.value ? companyInput.value : selection
    }

    function onJobTitleInputMouseUp() {
      const selection = window.getSelection().toString()
      jobTitleInput.value = jobTitleInput.value ? jobTitleInput.value : selection
    }

    function onLocationInputMouseUp() {
      const selection = window.getSelection().toString()
      locationInput.value = locationInput.value ? locationInput.value : selection
    }

    function onDescriptionInputMouseUp() {
      const selection = window.getSelection().toString()
      jobDescriptionInput.value = jobDescriptionInput.value ? jobDescriptionInput.value : selection
    }

    inputs[0].addEventListener('focus', onCompanyInputMouseUp, false);
    inputs[1].addEventListener('focus', onJobTitleInputMouseUp, false);
    inputs[2].addEventListener('focus', onLocationInputMouseUp, false);
    inputs[3].addEventListener('focus', onDescriptionInputMouseUp, false);

    jobPostUrlInput.value = window.location.href
    container.style.display = "block";
    form.style.display = "block";
    form.setAttribute('style', 'bottom: 10px; right: 15px;')
    element.style.display = "block";
  } else {
    element.style.display = "none";
    loginSuccess.setAttribute('style', 'display: none !important')
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

window.addEventListener("load", () => {

  window.document.body.appendChild(shadow)



  const autoFills = ['https://www.monster.com', 'https://www.indeed.com', 'https://gigs.indeed.com']

  for (let i = 0; i < autoFills.length; i++) {
    if (window.location.origin === autoFills[i]) {
      return window.document.body.removeChild(shadow)
    }
  }

  chrome.storage.local.get('token', (storage) => {
    if (!storage.token) {
      const openPopup = shadowRoot.querySelector('.open-button')
      openPopup.setAttribute('style', 'display: none !important')
      return openPopup
    } else {
      const openPopup = shadowRoot.querySelector('.open-button')
      openPopup.setAttribute('style', 'display: block !important')
      return openPopup
    }
  })

  shadowRoot.appendChild(formStyle)
  shadowRoot.appendChild(openButton)
  shadowRoot.appendChild(container)

  const addJob = shadowRoot.querySelector('#saveJob')
  const thumbtack = shadowRoot.querySelector('.open-button');

  thumbtack.addEventListener("click", () => {
    togglePopup()
    dragElement(shadowRoot.querySelector('.form-container'));
  })

  addJob.addEventListener("click", (event) => {
    event.preventDefault()
    addJob.innerHTML = 'Loading...'

    chrome.storage.local.get('token', function (result) {
      if (!result.token) {
        return chrome.runtime.sendMessage({ type: 'getToken' });
      }

      const accessToken = result.token;

      const data = {
        jobTitle: jobTitleInput.value,
        urlText: jobPostUrlInput.value,
        logo: null,
        companyTitle: companyInput.value,
        companyUrl: null,
        description: jobDescriptionInput.value,
        location: locationInput.value,
        column_id: 'column-1'
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
          console.log(data)
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
            return chrome.runtime.sendMessage({ type: 'jobSaveSuccess' });
          } else {
            return addJob.innerHTML = 'Add'
          }
        })
        .catch((error) => {
          console.error('Error:', error);
          addJob.innerHTML = 'Add'
          chrome.runtime.sendMessage({ type: 'Error' });
        });
    });
  })

})

chrome.runtime.onMessage.addListener((request) => {
  if (request.type === 'showForm') {
    togglePopup()
    dragElement(shadowRoot.querySelector('.form-container'));
  }

  if (request.type === 'hide') {
    chrome.storage.local.get('token', (storage) => {
      if (storage.token) {
        const tack =
          shadowRoot.querySelector('.open-button')
        tack.setAttribute('style', 'display: block !important')
        return tack
      } else {
        chrome.storage.local.get('token', () => {
          const tack =
            shadowRoot.querySelector('.open-button')
          tack.setAttribute('style', 'display: none !important')
          return tack
        })
      }
    })
  }

  if (request.type === 'show') {
    chrome.storage.local.get('token', (storage) => {
      if (storage.token) {
        const tack =
          shadowRoot.querySelector('.open-button')
        tack.setAttribute('style', 'display: block !important')
        return tack
      } else {
        chrome.storage.local.get('token', () => {
          const tack =
            shadowRoot.querySelector('.open-button')
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
          shadowRoot.querySelector('.open-button')
        tack.setAttribute('style', 'display: block !important')
        return tack
      } else {
        const tack =
          shadowRoot.querySelector('.open-button')
        tack.setAttribute('style', 'display: none !important')
        return tack
      }
    })
  }

  if (request.type === 'getTokenFromStorage') {
    chrome.storage.local.get('token', (res) => {
      if (res.token) {
        return null
      } else {
        if (
          window.location.href ===
          'http://localhost:3000/dashboard'
        ) {
          return setToken();
        }
      }
    })
  }
})



const setToken = () => {
  const token = localStorage.getItem('token');
  chrome.storage.local.set({ token }, () => {
    chrome.runtime.sendMessage({ type: 'tokenSet' }, () => {
      container.setAttribute('style', 'display: block !important')
      form.setAttribute('style', 'display: none !important')
      loginSuccess.setAttribute('style', 'display: block !important')
      openButton.setAttribute('style', 'display: block !important')
      openButton.src = chrome.extension.getURL("./images/close-window-50.png")
    });
  });
};


