import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './Button';
import './SearchBar.css'
import axios from 'axios';
import swal from 'sweetalert';

function SearchBar(props) {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    hid: "",
    category: props.userCat,
    })

    const handleChange = e =>{
      const {name, value} = e.target
      setUser({
        ...user,
        [name]: value 
      })   
    }

    var result = "";

    function handleClick(event) {

      event.preventDefault();

      console.log(user);
      axios.post('http://localhost:3001/searchClient', user)
     .then(res => {
      result = (res.data.message)
      

      if(result == "userExist"){
        let str = "Health ID : "+res.data.user.hid+"\n"+"Date Of Birth : "+res.data.user.dateofbirth+"\n"+"Gender : "+res.data.user.gender;
        swal({
          title: res.data.user.firstname+" "+res.data.user.lastname,
          text: str,
          icon: "success",
          buttons: {
            cancel: "Cancel",
            profile: "View Profile",
          },
        })
        .then((found) => {
          if (found) {
            navigate("/search_profile",{
              state:{
                user: res.data.user,
                userCat: props.userCat,
                userCatInfo: props.userCatInfo
              }
            });
          }
        });
       
      }
      else{
        swal({
          title: "User Not Found!",
          text: "Please, Check Health ID again",
          icon: "warning",
          button: "Okay",
        });
      }

    })
    
    }



  return (
    <>
       <form>
            <div>
                    <input className='searchinput' 
                      type="text"
                      name='hid'
                      placeholder="Search Health Id of patient"
                      onChange={handleChange}
                      value={user.hid}
                      required
                    />

                    <Button buttonStyle='btn--outline' onClick={handleClick} buttonSize='btn--medium'> <i class="fa fa-search" aria-hidden="true"/> </Button>
                  </div>

       </form>
                  
    </>
  );
}

export default SearchBar;