import React from 'react'
import logo from '../image/download.svg'
const Navbar = () => {
  return (
   <>
   <section id='nav'>
   <nav className="navbar navbar-expand-sm bg-light">
    <img src={logo} alt="..." width={50}/>
  <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link" href="#">Home</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">All Products</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Become a Reseller</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Cost Calculator</a>
    </li>
  </ul>
<div id='insideNav'>
   <a className='text-danger' href="#">Sign In</a>
  <a href="#" className='text-dark'>Crean An Account</a>
</div>
 
</nav>
<br></br>

<div className="container-fluid">
  
</div>

   </section>
   
    
   </>
  )
}

export default Navbar