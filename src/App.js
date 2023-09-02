
import './App.css';
import AllRoutes from './routes/AllRoutes';
import Navbar from './components/Navbar';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

function App() {

  const location = useLocation();
  const user = useSelector((state) => state.users)
  const hideNav = user !== undefined && !user.loggedIn && location.pathname === '/'

  return (
    <>
      <Navbar hideNav={hideNav} />
      <Toaster />
      <div>
        <AllRoutes />
      </div>
    </>
  );
}

export default App;
