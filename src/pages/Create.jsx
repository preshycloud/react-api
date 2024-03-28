import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Create() {
    const [id, setId ] = useState('')
    const [name, setName ] = useState('')
    const [phone, setPhone ] = useState('')
    const [email, setEmail ] = useState('')
    const navigate = useNavigate()

    const submitForm = () => {
        fetch("http://localhost:8080/students", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                id:id,
                name:name,
                phone:phone,
                email:email
            })
        })
        .then((response)=>{
            alert("Student data added successfully")
            navigate('/')
        })
        .catch((error)=>console.error(error))
    }
  return (
    <div>
      

      <div className="container">
        <div className="content">
        <h1 className='text-center text-decoration-underline my-5 text-seconday'>Add new Student</h1>

        <div className="form-container  d-flex justify-content-center ">
        <form className='border w-50 shadow p-4' onSubmit={submitForm}> 

        <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">ID</label>
            <input  value={id} type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=> setId(e.target.value)}/>
        </div>

        <div class="mb-3">
            <label for="exampleInputEmail1" className="form-label">NAME</label>
            <input value={name} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setName(e.target.value)}/>
            <div id="emailHelp" className="form-text">We'll never share your name with anyone else.</div>
        </div>

        <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">PHONE</label>
            <input value={phone} type="tel" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setPhone(e.target.value)}/>
            <div id="emailHelp" className="form-text">We'll never share your phone number with anyone else.</div>
        </div>

        <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">EMAIL</label>
            <input value={email} type="email" className="form-control" id="exampleInputPassword1" onChange={(e) => setEmail(e.target.value)}/>
        </div>
        
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Create
