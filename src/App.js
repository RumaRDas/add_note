import React from 'react';
import Header from "./component/Header";
import Navbar from './component/Navbar';
import Note from './component/Note';
import Footer from './component/Footer';
import AboutUs from './component/AboutUs';
import './App.css';


function App() {
  return (
    <div className="container">
    <Navbar />
  <Header />
  <Note />
  <Footer />
    </div>
  );
}

export default App;