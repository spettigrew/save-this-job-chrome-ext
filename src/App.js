/*global chrome*/
import { useEffect } from 'react';
import Swal from 'sweetalert2'

function App() {

  function jobSaveSuccess() {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: false,
      onOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: 'success',
      title: 'Job Saved Successfully !'
    })
  }

  function userSignOutSuccess() {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: false,
      onOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: 'success',
      title: 'You have sign out successfully !'
    })
  }
  
  chrome.runtime.onMessage.addListener(request => {
    if (request.type === "sign-out") {
      return userSignOutSuccess()
    }
  })
    
  

  return null
}

export default App;
