import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import './App.css'; 
import Register from './components/Home page/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import MembersPage from './components/Members/MembersPage';
import EventsPage from './components/Events/EventsPage';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const spinner = document.getElementById('spinner');

    if (spinner) {
      setTimeout(() => {
        spinner.style.opacity = '0'; // Add opacity animation
        setTimeout(() => {
          spinner.style.display = 'none';
          setLoading(false);
        }, 500); // Adjust the timeout as needed
      }, 3000);
    }
  }, []);

  return (
    <div>
      {loading ? (
        <div className="container" id="spinner">
          <div className="loading"></div>
          <img src="/images/logo.gif" alt="Loading..." />
        </div>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/members" element={<MembersPage />} />
            <Route exact path="/events" element={<EventsPage />} />
          </Routes>
        </BrowserRouter>
       )}
    </div>
  );
}

export default App;
