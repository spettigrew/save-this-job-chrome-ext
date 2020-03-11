import React, { useEffect } from 'react';
import './App.css';
import Swal from 'sweetalert2'

function App() {


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
 
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
