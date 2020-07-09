import React from 'react';

export const Transaction = ({tracsaction}) => {
    const sign = tracsaction.amount < 0 ? '-' :'+';
    return (
        <li className={tracsaction.amount < 0 ? 'minus' : 'plus'}>
  
        {tracsaction.text}<span>{sign}${Math.abs(tracsaction.amount)}</span>
        <button className="delete-btn">x</button>
           </li>
    )
}

export default Transaction;
// Math.abs (tracn.amount is used for make it sabsolute number no negative number)
// Tarnery operator here its means if its less then - mins less then 0 then vclass '"ninus"' or alse class "plus"  
//tracsaction.amount < 0 ? 'minus' : 'plus'}