import React, {useContext} from 'react';
import {Transaction} from './Transaction';
import { GlobalContext} from '../context/GlobalStatus';


export const TranscationList = () => {
  const { tracsactions} = useContext(GlobalContext);

    return (
        <>
      <h3>History</h3>
      <ul className="list">
      {tracsactions.map(tracsaction => (
      <Transaction key={tracsaction.id} tracsaction= {tracsaction}/>
      ))}
 
      </ul>
    </>
    )
}

export default TranscationList
