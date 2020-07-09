import React, {useState} from 'react';

 export const AddTrans = () => {
     const [text, setText] = useState ('');
     const[amount, setAmount] = useState(0);

    return (
        <>
        <h3>Add new transaction</h3>
        <form >
          <div className="form-group">
            <label htmlFor="text">Text</label>

            <input type="text" className="form-control" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
          </div>
          <div className="form-group">
            <label htmlFor="amount"
              >Amount <br />
              (negative - expense, positive - income)</label
            >
            <input type="number" className="form-control" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
          </div>
          <button className="btn">Add transaction</button>
        </form>
      </>
    )
}

export default AddTrans;
