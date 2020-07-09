import React from 'react';
import Header from "./component/Header";
import Navbar from './component/Navbar';
import Note from './component/Note';
import Footer from './component/Footer';
import AboutUs from './component/AboutUs';
import AddNote from './component/AddNote';
import './App.css';


 class App extends React.Component {
   state = {
     notes: [
       {
         id: 1,
         title: "Notes 1",
         des: " Note 1 DEscription"
       },
       {
        id: 2,
        title: "Notes 2",
        des: " Note 2 DEscription"
      },
      {
        id: 3,
        title: "Notes 3",
        des: " Note 3 DEscription"
      }
     ]
   }
   render(){
    return (
      <div className="container">
        <Navbar />
        <Header />
        <Note notes={this.state.notes}/>
        <Footer />

      </div>
    );
   }

}

export default App;