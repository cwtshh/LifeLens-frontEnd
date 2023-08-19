import './App.css';


// pages
import Home from './pages/Home/Home';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';

// hooks
import { useAuth } from './hooks/useAuth';

// router
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

// components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const { auth, loading } = useAuth();

  if(loading) {
    return <p>Carregando...</p>
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <div className='container'>
          <Routes>
            <Route path="/" element={ auth ? <Home /> : <Navigate to='/login' />  } />
            <Route path='/login' element={!auth ? <Login /> : <Navigate to='/register' /> } />
            <Route path='/register' element={!auth ? <Register /> : <Navigate to='/' /> } />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
