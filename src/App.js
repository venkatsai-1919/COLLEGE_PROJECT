import React from 'react';
import Navbar from './Navbar';
import './App.css';
import Cards from './cards';
import Footer from './Footer';
function App() {
  return (
    <div className="App">
       <Navbar /> 
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
