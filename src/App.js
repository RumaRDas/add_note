import React from 'react';
import {Header} from './components/Header';
import {Balance} from './components/Balance';
import {IncomeExpenses} from './components/IncomeExpenses';
import {TranscationList} from './components/TranscationList';
import {AddTrans} from './components/AddTrans';
import './App.css';

function App() {
  return (
    <div>
    <Header />
    <div className="container">
    <Balance/>
    <IncomeExpenses />
   <TranscationList/>
   <AddTrans />
  </div>
    </div>
  
  );
}

export default App;