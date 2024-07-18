import React, { useContext } from 'react'
import { AuthContext } from '../contects/AuthProvider'
import { useLocation, useNavigate } from 'react-router-dom';

const Logout = () => {
    const {logOut} =useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";
    const handleLogout =()=>{
       logOut().then(()=>{
         alert('logged out');
         navigate(from, { replace: true });
       }).catch((error) =>{

       });
    }
  return (
    <div className='h-screen bg-teal-100 flex items-center justify-center'>
      <button className=" bg-red-700 px-8 py-2 text-white font-bold rounded-3xl" onClick={handleLogout}>Log out</button>
    </div>
  )
}

export default Logout
