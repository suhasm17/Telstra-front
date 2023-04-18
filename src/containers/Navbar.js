import React from 'react'
import Search from './Search'

const Navbar = () => {
  return (
    
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  <a className="navbar-brand fw-bold fs-4" href="navbar">Telstronics</a>
  <form className="d-flex ms-1">
<Search></Search>
    

  </form>
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
   
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-3 mb-lg-0">
      
        <li className="nav-item">
        
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/shop">Shop</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contact">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/aboutus">About Us</a>
        </li>

      
      </ul>
     
      <div className='buttons'>
        <a href="/signup" >
        <i style={{fontSize:'25px',color:'black',paddingRight:'10px'}} className="fa fa-user-plus me-1"></i></a> 
        <a href="/cart"  >
        <i style={{fontSize:'25px',color:'black',paddingRight:'10px'}} className="fa fa-shopping-cart me-1"></i> </a>
        
      </div>
    </div>
  </div>
</nav>
  );
};
export default Navbar;