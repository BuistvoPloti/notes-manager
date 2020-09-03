import {ADD_NOTE, DELETE_NOTE, UPDATE_NOTE, CHANGE_LANGUAGE, SET_NOTES} from "./types"

export const addNote = (text, noteId) => {
  return {type: ADD_NOTE, text: text, noteId: noteId}
}

export const deleteNote = (noteId) => {
  return {type: DELETE_NOTE, noteId: noteId}
}

export const updateNote = (noteId, text) => {
  return {type: UPDATE_NOTE, noteId: noteId, text: text}
}

export const changeLocalLanguage = (language) => {
  return {type:CHANGE_LANGUAGE, language:language}
}

export const setNotes = (notes) => {
  return {type:SET_NOTES, notes:notes}
}
