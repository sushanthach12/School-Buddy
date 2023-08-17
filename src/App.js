
import './App.css';
import AllRoutes from './routes/AllRoutes';
import Navbar from './components/Navbar';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import LoginScreen from './Pages/LoginScreen';

function App() {

  const user = useSelector(state => state.user)
  const location = useLocation();
  const hideNav = !user.loggedIn && location.pathname === '/'

  return (
    <>

      <Navbar hideNav={hideNav} />
      <div>
        <AllRoutes />
      </div>
    </>
  );
}

export default App;
