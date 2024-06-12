import React from 'react'
import Navbar from './Navbar'
import banner from '../../public/banner3.avif'

export default function Banner() {
  return (
    <>
    {/* make 2 divs 
    
    want to give same space as given in full navbar class  left upar right neeche dikega 
    but flex use karne se dono dive ek sath dikhenge 
    */}




   {/* <div className='max-w-screen-2xl-container mx-auto md:px-20 px-4 flex'>
   <div >left </div>
   
    <div>right</div>
     </div>*/}





<div className='max-w-screen-2xl-container mx-auto md:px-20 px-4 flex my-12'>
   <div className='w-full md:w-1/2' >
    <div className='text-4xl font-bold'><h1>"A reader lives a thousand lives before he dies.{ " "}
    <br></br>
     <span className='text-pink-500'>The man who never reads lives only one !! "</span>
        </h1>
        <br></br>
        <div className='text-2xl font-semibold'>

        <p>Hello, welcomes here to learn something new everyday 
            </p> 
            </div>


        </div>
        {/* taking input button from daisy-ui*/ }
<div className='my-10'>
        <label className="input input-bordered flex items-center gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
  <input type="text" className="grow" placeholder="Email" />
</label></div>
{/* taking  button from daisy-ui*/ }
<button className="btn btn-secondary">Secondary</button>


        </div>











   
    <div className='w-full md:w-1/2 '>
        
        
        
        
        
        <img src ={banner} className=" h-66 w-55" alt=" "></img></div>
    </div>








    </>












  )
}
