import React from 'react';
import Note from './Note'
const NoteList = (props) => {
    console.log( props)
    return (
        <div className="card">
        <div className="card-body">
        <h3 className="card-title">{props.title}</h3>
        <p className="card-text">{props.des}</p>
        </div>    
        </div>
    )
}

export default NoteList;
