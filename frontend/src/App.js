import './App.css';
import axios from 'axios';
import React from 'react';
import NavBar from './components/navbar';
import { Footer } from './components/footer';

function App() {

  return (
    <div className="App">
      <NavBar />
      <Footer />
    </div>
    
  );
}
export default App;