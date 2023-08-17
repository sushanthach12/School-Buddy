
import './App.css';
import AllRoutes from './routes/AllRoutes';
import Navbar from './components/Navbar';

function App() {

  return (
    <>
      <Navbar />
      <div>
        <AllRoutes />
      </div>
    </>
  );
}

export default App;
