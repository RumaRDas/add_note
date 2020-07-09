import React from 'react';
import Header from "./component/Header";
import Navbar from './component/Navbar';
import Note from './component/Note';
import Footer from './component/Footer';
import './App.css';

function App() {
  return (
    <div className="App">

  <Header />
  <Navbar />
  <Note />
  <Footer />
    </div>
  );
}

export default App;