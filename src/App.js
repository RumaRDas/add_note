import React from 'react';
import {Header} from './components/Header';
import {Balance} from './components/Balance';
import {IncomeExpenses} from './components/IncomeExpenses';
import {TranscationList} from './components/TranscationList';
import {AddTrans} from './components/AddTrans';
import {GlobalProvider} from './context/GlobalStatus';
import './App.css';

function App() {
  return (
    <GlobalProvider>
    <Header />
    <div className="container">
    <Balance/>
    <IncomeExpenses />
   <TranscationList/>
   <AddTrans />
  </div>
  </GlobalProvider>
  
  );
}

export default App;