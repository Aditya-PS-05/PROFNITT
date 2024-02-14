import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Home page/Register';
import MembersPage from './components/Members/MembersPage';
import EventsPage from './components/Events/EventsPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // const spinner = document.getElementById('spinner');

    // if (spinner) {
    //   setTimeout(() => {
    //     spinner.style.opacity = '0'; // Add opacity animation
    //     setTimeout(() => {
    //       spinner.style.display = 'none';
    //       setLoading(false);
    //     }, 500); // Adjust the timeout as needed
    //   }, 5000);
    // }
  }, []);

  return (
    <div>
      {loading ? (
        <div className="container" id="spinner">
          <div className="loading"></div>
          <img src="/images/logo.gif" alt="Loading..." style={{  objectFit: 'cover' }}
/>
        </div>
      ) : (
        <BrowserRouter>
          <div className="main-content">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/register" element={<Register />} />
              <Route exact path="/members" element={<MembersPage />} />
              <Route exact path="/events" element={<EventsPage />} />
            </Routes>
          </div>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
