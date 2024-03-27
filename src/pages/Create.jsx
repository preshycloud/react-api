import React from 'react'


function Create() {
  return (
    <div>
      

      <div className="container">
        <div className="content">
        <h1 className='text-center text-decoration-underline my-5 text-seconday'>Add new Student</h1>

        <div className="form-container  d-flex justify-content-center ">
        <form className='border w-50 shadow p-4'>

        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">ID</label>
            <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>

        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">NAME</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" class="form-text">We'll never share your name with anyone else.</div>
        </div>

        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">PHONE</label>
            <input type="tel" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" class="form-text">We'll never share your phone number with anyone else.</div>
        </div>

        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">EMAIL</label>
            <input type="email" class="form-control" id="exampleInputPassword1"/>
        </div>
        
        <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Create
