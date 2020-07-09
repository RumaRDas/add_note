import React from 'react';
import NoteList from './NoteList';

const Note = (props) =>{
const {notes} = props;
    return (
        <div>
        {notes.map(note => 
          <NoteList key={note.id} title={note.title} des={note.des}/>
        )
      }
        
        </div>
    )
}

export default Note;
