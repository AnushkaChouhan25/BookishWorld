import React, { use } from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast';

function Logout() {
  const [authUser, setAuthUser] = useAuth();

  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null, 
      })
      localStorage.removeItem('Users');
      toast.success('Logged out successfully'); 

      setTimeout(() => {
        window.location.reload();
      }, 1000); 

    } catch (error) {
      toast.error("Error:" , error.message);
      setTimeout(() => {}, 2000);
      console.error(error);
    }
  }


  return (
    <div>
      <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer'
      onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout
