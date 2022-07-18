import React, { useState, useEffect } from 'react';
import { Button } from '../../Button';
import { Link ,useNavigate} from 'react-router-dom';
import '../../Navbar.css';

function Report_Staff_Navbar( props ) {
  
  const navigate = useNavigate();
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
    navigate("/");
    window.location.reload(false);
  }


  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/report_staff_home'  className='navbar-logo' onClick={closeMobileMenu}>

          <i class="fa fa-id-card" aria-hidden="true"></i>
            Medical History Card 
            
          </Link>
          
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
         
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <div className='doctor-panel'>
             Report Staff's Panel
          </div>
          <li>
              <Link
                to='/report_staff_home'
                className='nav-links'
                onClick={closeMobileMenu}
                
              > 
               <i class="fa fa-search" aria-hidden="true"/>
               Search
              </Link>
            </li>

            <li>
              <Link
                to='/report_staff_profile'
                className='nav-links'
                
                onClick={closeMobileMenu}
              > 
               <i class="fa fa-user" aria-hidden="true"></i>
               Profile
              </Link>
            </li>

            <li>
               <button class="login" onClick={logoutClick}>Log out</button>
            </li>
            
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Report_Staff_Navbar;