import React from 'react'
import '../styles/Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='Home'>

      {/* <div className='image'>
      <img src="/images/bg1.avif" alt="" />
     </div> */}


      <div className='Main'>


        <div className='Items'>
          <h1 className='title'>Library Management System</h1>
          
          <button class="button-92">Signin As ..?</button>
          
          <div className='links'>
            <Link to="/admin"> <button className="button-85"> Admin Login </button></Link>
            <Link to="/userlogin"> <button className="button-85" > User Login </button>    </Link>
          </div>

        </div>


        <div className='lib'>
          <img src="/images/lib.webp" alt="" />
        </div>

      </div>

      {/* <div className='overlay'></div> */}
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