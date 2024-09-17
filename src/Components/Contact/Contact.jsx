import React, { useState } from 'react'
import './Contact.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Contact() {
  const [name , setname] = useState("")
  const [email , setemail] = useState("")
  const [messege , setmessege] = useState("")

  const setName = (e)=>{
      setname(e.target.value)
  }


const setEmail  = (e)=>{
  setemail(e.target.value)
}
const setMessege = (e)=>{
  setmessege(e.target.value)
}


const SubmitForm = (e)=>{
  e.preventDefault()
   toast.success('Submitted')
}
  return (
    <div className='main'>
      <ToastContainer/>
      <div className='main_div'>
           <div className='left'>
              <form action="" onSubmit={SubmitForm}>
                   <input type="text" placeholder='Enter your name' className='input'/>
                   <input type="text" placeholder='Enter your email' className='input'/>
                   <textarea name="" id="" placeholder='Enter your messege here' className='textarea'></textarea>
                   <button className='btns'>Submit</button>
              </form>
           </div>
           <div className='right'>
              <img id='img' src="https://img.freepik.com/free-photo/cute-freelance-girl-using-laptop-sitting-floor-smiling_176420-20221.jpg" alt="" />
           </div>
      </div>
    </div>
  )
}

export default Contact