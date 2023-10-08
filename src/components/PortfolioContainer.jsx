// Import necessary dependencies and components
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

// Import Materialize CSS styles and your custom styles
import 'materialize-css';
import "./style/App.css";

// Define the main App component
function App() {
  return (
    <div className="App">
      <Router>
        {/* Include the Header component */}
        <Header />
        <div className="container mt-5">
          {/* Define routes using the Routes and Route components */}
          <Routes>
            {/* Use relative paths for routes */}
            <Route path="/Meriam-Portfolio/" element={<About />} />
            <Route path="/Meriam-Portfolio/about" element={<About />} />
            <Route path="/Meriam-Portfolio/portfolio" element={<Portfolio />} />
            <Route path="/Meriam-Portfolio/contact" element={<Contact />} />
            <Route path="/Meriam-Portfolio/resume" element={<Resume />} />
          </Routes>
        </div>
        {/* Include the Footer component */}
        <Footer />
      </Router>
    </div>
  );
}

export default App; // Export the App component
