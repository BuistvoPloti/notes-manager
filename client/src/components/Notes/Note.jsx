import React, {useState} from 'react';
import '../styles/styles.scss'
import {NoteModal} from "./NotesControl/NoteModal"

function Note({id, text, onNoteDelete, onNoteUpdate, language}) {
  const [editMode, setEditMode] = useState(false)

  function activateEditMode() {
    setEditMode(true)
  }

  return (
    <article className="note" onDoubleClick={activateEditMode}>
      {!editMode &&
      <div >
        <span className="noselect">{text}</span>
      </div>
      }
      {editMode &&
      <div>
        <NoteModal id={id} text={text} setEditMode={setEditMode} onNoteUpdate={onNoteUpdate} language={language}/>
      </div>
      }

      <button onClick={onNoteDelete} className="note__delete-button">x</button>
    </article>
  );
}

export {
  Note
}
