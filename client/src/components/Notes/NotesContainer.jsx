import React, {useEffect} from 'react';
import {Notes} from './Notes'
import {addNote, deleteNote, setNotes, updateNote} from "../../redux/actions"
import '../styles/styles.scss'
import {NoteEditor} from "./NotesControl/NoteEditor"
import axios from 'axios';
import generateUUID from "../../helpers"

function NotesContainer(props) {
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/notes`)
      .then(res => {
        const notes = res.data.notes;
        props.dispatch(setNotes(notes))
      })
  },[]);

  const onNoteAdd = (noteText) => {
    let noteId = generateUUID()
    props.dispatch(addNote(noteText, noteId))
    axios({
      method: 'POST',
      url: 'http://127.0.0.1:8000/notes',
      data: JSON.stringify({id:noteId,text:noteText})
    });
  }

  const onNoteDelete = (noteId) => {
    props.dispatch(deleteNote(noteId))
    axios({
      method: 'DELETE',
      url: `http://127.0.0.1:8000/notes/${noteId}`
    });
  }

  const onNoteUpdate = (noteId, noteText) => {
    props.dispatch(updateNote(noteId, noteText))
    axios({
      method: 'PUT',
      url: `http://127.0.0.1:8000/notes/${noteId}`,
      data: JSON.stringify({id:noteId,text:noteText}),
    });
  }

  return (
    <div className="App">
      <NoteEditor onNoteAdd={onNoteAdd} {...props}/>
      <Notes notes={props.notes} onNoteDelete={onNoteDelete} onNoteUpdate={onNoteUpdate} {...props}/>
    </div>
  );
}

export {
  NotesContainer
}


