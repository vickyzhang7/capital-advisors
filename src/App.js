import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/Home/Landing'; // Capitalize the component name

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='page-content'>
        <Routes>
          {/* Use 'element' instead of 'component' */}
          <Route path="/" element={<Homepage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
