import { createStore } from 'redux';
import {notesReducer} from "../note-reducer"

export default createStore(
  notesReducer,
  undefined,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);