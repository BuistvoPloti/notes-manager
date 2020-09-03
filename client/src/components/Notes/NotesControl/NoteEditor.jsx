import React, {useEffect, useRef, useState} from 'react';
import '../../styles/styles.scss'
import i18n from "../../../i18n/i18n";
import {Trans} from "react-i18next";
import {changeLocalLanguage} from "../../../redux/actions"

function NoteEditor({onNoteAdd,...props}) {
  const [text, setText] = useState('')
  const textInput = useRef();
  const [language, setLanguage] = useState(props.localLanguage)

  const handleChangeText = (e) => {
    setText(e.target.value);
  }

  const changeLanguage = (language) => {
    setLanguage(language)
    i18n.changeLanguage(language);
    props.dispatch(changeLocalLanguage(language)) //TODO wtf 3x props?fixed!
  }

  return (
    <div className="note-editor">
      <button className="btn-en" onClick={() => changeLanguage("en")}>Eng</button>
      <button className="btn-ru" onClick={() => changeLanguage("ru")}>Рус</button>
      <Trans>
        <p className="app-name">{i18n.t("appTitle")}</p>
      </Trans>
      <textarea
        ref={textInput}
        className="note-editor__text-input"
        placeholder={i18n.t("textareaPlaceholder")}
        onChange={handleChangeText}>
          {text}
        </textarea>
      <button
        disabled={!text}
        className="note-editor__add-button"
        type="button"
        onClick={() => {
          onNoteAdd(text)
          textInput.current.value = ""
          setText('')
        }}>
        {i18n.t("addNoteButton")}
      </button>
    </div>
  );
}

export {
  NoteEditor
}
