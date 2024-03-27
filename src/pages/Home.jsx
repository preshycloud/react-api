import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
    // state varibles for student data
    
    const [studentsData, setStudentData] = useState(null)

    // variable for API
    const api = "http://localhost:8080/students"

    // function to fetch data for API
    const fetchStudents = () => {
            fetch(api)
            .then((response)=> response.json())
            .then((data)=> setStudentData(data))
            .catch((error)=>console.log(error))
    }

    // useEffect hook to fetch data from API
    useEffect( () => {
        fetchStudents()
    }, [])
  return (
    <>
     <div className="container">
        <div className="content">
            <h1 className='text-center text-decoration-underline my-4 text-seconday'>CRUD OPERATION</h1>
            <Link to={`/create`} className="btn btn-success">Add new +</Link>

        <div className="table-container d-flex justify-content-center mt-4 p-4">
            <table class="table w-75 shadow">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">NAME</th>
      <th scope="col">EMAIL</th>
      <th scope="col">PHONE</th>
      <th scope='col'>ACTION</th>
    </tr>
  </thead>
  <tbody>
    {
        studentsData && studentsData.map((studentData)=>(
            <tr key ={studentData.id}>
                <th scope="row">{studentData.id}</th>
                <td>{studentData.name}</td>
                <td>{studentData.email}</td>
                <td>{studentData.phone}</td>
                <td>
                    <button className='btn btn-primary me-3'> EDIT </button>
                    <button className='btn btn-danger'>DELETE</button>
                </td>
            </tr>
        ))
    }
  </tbody>
</table>
</div>
        </div>
     </div>
    </>
  )
}

export default Home
