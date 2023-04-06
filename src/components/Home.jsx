import React from 'react'
import '../styles/Home.css'
import { Link } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa';



const Home = () => {
  return (
    <div className='Home'>

      <div className='Main'>
        <div className='books'>
          <img src="/images/sag.webp" alt="" width={350} />
        </div>

        <div className='Items'>
          <h1 className='title'>Library Management System</h1>



          <div className='mariodiv'>
             <img src="/images/mario.webp" alt="" width={155} style={{ marginRight: "10px", borderRadius: "15px" }} /> 
             <h2>Signin As ...?  </h2>
          </div>


          <div className='links'>
            <Link to="/admin"> <button className="button-85" > <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}><FaUserCircle size={25} style={{ marginBottom: "5px" }} /> Admin Login </div>  </button></Link>
            <Link to="/userlogin"> <button className="button-85" ><div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}><FaUsers size={25} style={{ marginBottom: "5px" }} /> User Login </div></button>   </Link>
          </div>

        </div>
        <div className='lib'>
          <img src="/images/lib.webp" alt="" />
        </div>


      </div>

      <div className='icons'>
        <img src="/images/f.webp" alt="" width={60} />
        <img src="/images/ins.webp" alt="" width={60} />
        <img src="/images/t.webp" alt="" width={60} />
        <img src="/images/yt.webp" alt="" width={60} />

      </div>


    </div>
  )
}

export default Home