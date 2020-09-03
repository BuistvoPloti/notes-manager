import React from 'react';
import {Note} from './Note'
import '../styles/styles.scss'

function Notes({notes, ...props}) {
  return (
    <div className="notes-grid">
      {!notes.length ? <p>Your notes list is empty</p> : null}
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          onNoteDelete={() => props.onNoteDelete(note.id)}
          onNoteUpdate={props.onNoteUpdate}
          text={note.text}
          language={props.localLanguage}
        />

      ))}
    </div>
  );
}

export {
  Notes
}
