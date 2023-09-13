
import './App.css';
import AllRoutes from './routes/AllRoutes';
import Navbar from './components/Navbar';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';

function App() {

  const location = useLocation();
  const navigate = useNavigate();
  const user = useSelector((state) => state.users)
  const hideNav = user !== undefined && !user.loggedIn && location.pathname === '/'
  
	const profileMatch = /dashboard\/link\/profile/.test(window.location.href);

  useEffect(()=>{
    if(!user) {
      navigate('/login');
    }
  }, [user, navigate])

  return (
    <>
      <Navbar hideNav={profileMatch || hideNav} />
      <Toaster />
      <div>
        <AllRoutes />
      </div>
    </>
  );
}

export default App;
