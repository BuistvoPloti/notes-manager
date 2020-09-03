import React from 'react';
import './App.css';
import {NotesContainer} from "./components/Notes/NotesContainer"
import {connect} from "react-redux"

function App(props) {
  return (
    <div className="App">
      <NotesContainer {...props}/>
    </div>
);
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    localLanguage: state.localLanguage
  }
}

export default connect(mapStateToProps)(App);

