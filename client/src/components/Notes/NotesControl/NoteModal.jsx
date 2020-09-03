import React, {useEffect, useState} from "react"
import Modal from 'react-modal';
import '../../styles/modal.scss'
import i18n from "../../../i18n/i18n";
import {Trans} from "react-i18next";
import axios from "axios"

function NoteModal(props) {
  const [showModal, setShowModal] = useState(true)
  const [newText, setNewText] = useState(props.text)
  const [language, setLanguage] = useState(props.localLanguage)

  useEffect(()=>{
    setLanguage(props.language)
    i18n.changeLanguage(props.language);
    axios.get(`http://127.0.0.1:8000/notes/${props.id}`)
      .then(res => {
        const notes = res.data.notes;
        setNewText(notes.text)
      })
  },[])

  const handleChangeText = (e) => {
    setNewText(e.target.value);
  }

  function deactivateEditMode() {
    props.setEditMode(false)
  }

  function handleCloseSaveModal(save) {
    if (save) props.onNoteUpdate(props.id, newText)
    setShowModal(false);
    deactivateEditMode()
  }

  return (
    <div>
      <Modal
        isOpen={showModal}
        contentLabel="Minimal Modal Example"
      >
        <div className="modal">

          <Trans>
            <p className="modal-title">{i18n.t("editTitle")}</p>
          </Trans>

        <textarea
          onChange={handleChangeText}
          value={newText} autoFocus={true}
          className="note-editor__text-input"
          onFocus={function (e) {
            let val = e.target.value;
            e.target.value = '';
            e.target.value = val;
          }}/>
          <button className="cancel-button" onClick={() => handleCloseSaveModal(false)}>{i18n.t("cancelButton")}</button>
          <button disabled={!newText} className="save-button" onClick={() => handleCloseSaveModal(true)}>{i18n.t("saveNoteButton")}</button>
        </div>
      </Modal>
    </div>
  );
}

export {
  NoteModal
}
