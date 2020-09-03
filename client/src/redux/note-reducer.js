import {ADD_NOTE, CHANGE_LANGUAGE,
  DELETE_NOTE, UPDATE_NOTE, SET_NOTES} from "./actions/types"

const initialState = {
  notes: [],
  localLanguage: 'en'
}

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NOTES:
      return {...state, notes: action.notes}
    case ADD_NOTE:
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            id: action.noteId,
            text: action.text
          }
        ]
      }
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter(n => n.id !== action.noteId)
      }
    case UPDATE_NOTE:
      return {
        ...state,
        notes: state.notes.map((note) => {
          if (note.id === action.noteId) {
            return {id: note.id, text: action.text}
          } else {
            return note
          }
        })
      }
    case CHANGE_LANGUAGE:
      return {
        ...state,
        localLanguage: action.language
      }
    default:
      return state
  }
}

export {
  notesReducer
}

