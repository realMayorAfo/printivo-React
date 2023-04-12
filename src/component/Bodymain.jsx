import React from 'react'
import firstImage from '../image/printivo 1.webp'
const Body = () => {
  return (
    <>
    <section id='mainbody'className='container-fluid'>
      <div className='row'>
        <div className='col-lg-5'>
           <div ><h2>Quality Prints</h2>
        <p>Shipped to your doorstep</p></div>
        <div>What would you like to print today?</div>
        <div>
          <input type="button" value="" placeholder='Search for Business Cards,T-Shirts,Mugs etc' className='form-control mr-sm-2'/>
        </div>
        </div>
        <div className='col-lg-2'>
        <img src={firstImage} alt="" width={390} />
        </div>
      </div>
      
      </section >
   
    </>
  )
}

export default Body