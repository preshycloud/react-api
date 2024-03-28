
// import React from 'react'
// import Navbar from './component/Navbar'

// function App() {
  
//   const api = 'http://localhost:8080/students'


//   const fetchData = () => {
//     fetch(api)
//     .then((response)=> response.json())
//     .then((data)=> console.log(data))
//     .catch((error)=>console.log(error))
//   }


//   return (
//     <div>
//       <Navbar/>
//       <button onClick={fetchData}>Click me!</button>
//     </div>
//   )
// }

// export default App

import React from 'react'
import Navbar from './component/Navbar'
import Home from "./pages/Home";
import Create from "./pages/Create";
import Update from "./pages/Update";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/create' element= {<Create/>}/>
          <Route path='/update' element= {<Update/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
