import React from 'react';
import NoteList from './NoteList';

const Note = () =>{

    return (
        <div>
          <NoteList title="Note 1" des="Note 1 Description"/>
          <NoteList title="Note 2" des="Note 1 Description"/>
          <NoteList title="Note 3" des="Note 1 Description"/>
        </div>
    )
}

export default Note;
