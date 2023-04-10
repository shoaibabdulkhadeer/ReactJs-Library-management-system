
import { useEffect } from 'react';
import '../styles/Adminhome.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminHome = () => {

  useEffect(() => {
    toast.info('Welcome! Read New Books from Book-Lists Section ✅', {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "colored",
    });
  }, [])

  return (
    <div className='Adminhome'>
 
      {/* alert component */}
        <ToastContainer limit={1} style={{width:"350px"}} /> 
  
      <div className='firstSection'>


        <div className='smallCard'>
          <h1> NatGeo Photographer </h1>

          <div className='greenline'>
          </div>

          <p>On Thursday, April 20 at 7:00 pm, hear from award-winning photographer Pete McBride on the value of protecting our lands and waters.</p>

          <button className='register'>Register Here</button>

        </div>
      </div>

    

      <div className='second-section'>

          <img src="https://www.greenwichlibrary.org/wp-content/uploads/2023/03/Resume-Help-2048x800.jpg" alt="" />
          
           <div className='resumeCard'>
              <h1>Resume Writing Help</h1>
                <div className='redline'>
                    </div>

              <p>Do you find yourself back on the job market? Get help writing or tidying up your resume from Greenwich Library’s Business Librarian. They’ll help you format and include key points so that you’ll land the interview!</p>
              <button className='appoinmentBTN'>Book an Appoinment</button>
           </div>

        </div> 
     


     <div className='thirdsection'>

      <div className='eventsdetails'>
        <h1>April Events</h1>
        <p>Join us for a full slate of programming and events at the Greenwich Libraries! These printable one-page Library calendars are fridge-ready.</p>
       <button className='printBTN'>Printable Calenders</button>
      
      </div>

     </div>




     <div className='FourthSection'>
      <div className='cards4'>
        <h1>Tax Help</h1>
          <div className='greenline1'></div>
        <p>On Saturday, April 8 from 9:00 am – 2:00 pm, drop in for one of our last sessions of one-on-one tax prep assistance with AARP volunteers.</p> 
         <a href='/'>Mark Your Calendar</a>

      </div>

 <div className='cards4'>
        <h1>Interviewing</h1>
          <div className='greenline1'></div>
        <p>On Monday, April 10 at 1:00 pm, give yourself the edge over the other candidates during the interview process with career coach Noelle Gross.</p> 
         <a href='/'>Register Here</a>

      </div>
       <div className='cards4'>
        <h1>Senior Living</h1>
          <div className='greenline1'></div>
        <p>On Wednesday, April 12 at 6:00 pm, learn about different options, best practices, and resources available for the care of a senior loved one.</p> 
         <a href='/'>Register Here</a>

      </div>

       <div className='cards4'>
        <h1>Grow a Plant from Seed</h1>
        <div className='greenline1'></div>
        <p>On Thursday, April 13 at 7:00 pm at Byram Shubert Library, learn the steps from seed to garden with Ellen Zampino.</p> 
         <a href='/'>Mark Your Calendar</a>

      </div>

     </div>



  {/* Repeated Section */}
      <div className='second-section'>

          <img src="https://www.greenwichlibrary.org/wp-content/uploads/2023/03/Volunteer-2048x800.jpg" alt="" />
          
           <div className='resumeCard'>
              <h1>Become a Volunteer</h1>
                <div className='redline'>
                    </div>

              <p>Find Your Place! Become a part of the amazing Friends of Greenwich Library team to help bring exceptional programming and resources to your community.</p>
              <button className='appoinmentBTN'>Learn More</button>
           </div>

        </div> 





        <div className='FifthSection'>

          <div className='bigCard'> 
            
            <div>
              <h1>2023 Business Books To Read</h1>
              <div className='greenline'> </div>
            </div>
              
               <div className='bookrow'>
                 <img src="https://contentcafe2.btol.com/ContentCafe/Jacket.aspx?&userID=GWH11030&password=CC64392&Value=9781647823221&content=M&Return=1&Type=M" alt="" />
                 <img src="https://contentcafe2.btol.com/ContentCafe/Jacket.aspx?&userID=GWH11030&password=CC64392&Value=9781647824693&content=M&Return=1&Type=M" alt="" />
                 <img src="https://contentcafe2.btol.com/ContentCafe/Jacket.aspx?&userID=GWH11030&password=CC64392&Value=9781637741986&content=M&Return=1&Type=M" alt="" />

               </div>
                   
                   
          <button className='register'>Take A Look</button>

          </div>

        </div>
     

        <div className='sixthSection'>

          <h3 className=' authorname'> Michael Embry</h3>
          <h1 className='cursive'>I don’t have to look far to find treasures. I discover them every time I visit a library.</h1>
            
        </div>


      <div className='seventhSection'>

        <div className='signcard1'>
          <h2 className='signhead'>Sign Up for Our Newsletter</h2>
          <p className='signpara'>Stay up to date with library events, new books, or what's going on in our community.</p>
              <button className='printBTN1'>Signup</button>
        </div>


        <div className='signcard2'>
          <h2 className='signhead'>Support The Library</h2>
          <p className='signpara'>Donate today and help ensure that the Library continues to evolve to meet the needs of our community.</p>
              <button className='printBTN1'>Donate Now</button>
        </div>


      </div>

    </div>
  )
}

export default AdminHome