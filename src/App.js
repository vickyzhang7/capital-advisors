import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/Home/Landing'; // Capitalize the component name
import Teampage from './pages/Team/Teampage';
import Ourstory from './pages/Ourstory/Ourstory';
import Contactpage from './pages/Contact/Contactpage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='page-content'>
        <Routes>
          {/* Use 'element' instead of 'component' */}
          <Route path="/" element={<Homepage />} />
          <Route path="/our-team" element={<Teampage />} />
          <Route path="/our-story" element={<Ourstory />} />
          <Route path="/contact-us" element={<Contactpage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
