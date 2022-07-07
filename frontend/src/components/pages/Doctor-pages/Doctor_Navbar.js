import React, { useState, useEffect } from 'react';
import { Button } from '../../Button';
import { Link} from 'react-router-dom';
import '../../Navbar.css';

function Doctor_Navbar(props) {

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  function logoutClick(event) {
    sessionStorage.setItem("Myuser", null)
    window.location.reload(false);
  }

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/doctor_home' className='navbar-logo' onClick={closeMobileMenu}>

          <i class="fa fa-id-card" aria-hidden="true"></i>
            Medical History Card 
            
          </Link>
          
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
         
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <div className='doctor-panel'>
              Doctor Panel
          </div>
          <li>
              <Link
                to='/doctor_home'
                className='nav-links'
                onClick={closeMobileMenu}
              > 
               <i class="fa fa-search" aria-hidden="true"/>
               Search
              </Link>
            </li>

            <li>
              <Link
                to='/doctor_profile'
                className='nav-links'
                onClick={closeMobileMenu}
              > 
               <i class="fa fa-user" aria-hidden="true"></i>
               Profile
              </Link>
            </li>

            <li>
        
               <Button onClick={logoutClick} buttonStyle='btn--outline'>Logout</Button>
            
            </li>
            
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Doctor_Navbar;