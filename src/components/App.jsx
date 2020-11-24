import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateNote from "./CreateNote";
import FormDialog from "../utils/FormDialog"
import Alerts from "../utils/Alerts";
import _ from "lodash";

function App() {
  const [notes, setNotes] = useState([]);
  const [editNotes, setEditNotes] = useState({
    id: "",
    title: "",
    content:"",
  });
  const [isEditDialog, setEditDialog] = useState(false);
  const [isDeleteDialog, setDeleteDialog] = useState(false);
  const [isEmptyDialog, setEmptyDialog] = useState(false);
  const [noteId, setNoteId] = useState();
  const textFieldprops = [{
    name: "title",
    placeholder: "Title",
    defaultValue: editNotes.title,
    label: "Title"
  }, {
    name: "content",
    placeholder: "Content",
    defaultValue: editNotes.content,
    label: "Content"
  }];

  function showEditDialog(id, title, content) {
    setEditDialog(true);
    setEditNotes(() => {
      return {
        id: id,
        title: title,
        content: content
    }});
    setNoteId(id);
  }

  function showDeleteDialog(id) {
    setDeleteDialog(true);
    setNoteId(id);
  }

  function addNote(inputNote) {
    if (_.isEmpty(inputNote.title) && _.isEmpty(inputNote.title)) {
      setEmptyDialog(true);
      return;
    }
    setNotes((prevNotes) => {
      return [...prevNotes, inputNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id
      })
    })
  }

  function editNote() {
    setNotes((prevNotes) => {
      return prevNotes.map((noteItem, index) => {
        return (index === noteId) ? editNotes : noteItem;
        
      })
    })
  }

  /**
   * Edit Form Dialog 
   * handle onChange event in the textfield
  */
  function onSubmitChange(event) {
    const {name, value} = event.target;
    setEditNotes((prevInput) => {
      return {
        ...prevInput, 
        [name]: value
      };
    });
  }

  /**
   * Edit Form Dialog 
   * callback function on OK click
   */
  function onClickEditOk(bool) {
    setEditDialog(bool);
    editNote();
  }

  /**
   * Edit Form Dialog 
   * callback function on CANCEL click
  */
  function onClickEditCancel(bool) {
    setEditDialog(bool);
  }

  /**
   * Delete alert Dialog 
   * callback function on OK click
   */
  function onClickDeleteOk(bool) {
    setDeleteDialog(bool);
    deleteNote(noteId);
  }

  /**
   * Delete alert Dialog 
   * callback function on CANCEL click
   */
  function onClickDeleteCancel(bool) {
    setDeleteDialog(bool);
  }

  /**
   * Empty Note alert Dialog 
   * callback function on OK click
   */
  function onClickEmptyOk(bool) {
    setEmptyDialog(bool);
  }

  return (
    <div>
      <Header/>
      <CreateNote onAddNote={addNote}/>
      {notes.map((noteItem, index) => {
        return <Note
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          onEdit={showEditDialog}
          onDelete={showDeleteDialog}
        />
      })}
      <Alerts
        dialogOpen={isEmptyDialog}
        dialogTitle="Empty Note"
        dialogContentText="Please write some note."
        onClickOk={onClickEmptyOk}
      />
      <Alerts
        dialogOpen={isDeleteDialog}
        dialogTitle="Delete Note"
        dialogContentText="Are you sure to delete this note?"
        onClickCancel={onClickDeleteCancel}
        onClickOk={onClickDeleteOk}
        isCancelButton={true}
      />
      <FormDialog
        dialogOpen={isEditDialog}
        dialogTitle="Edit Note"
        textField={textFieldprops}
        onClickCancel={onClickEditCancel}
        onClickOk={onClickEditOk}
        submitChange={onSubmitChange}
      />
      <Footer/>
    </div>
  )
}

export default App;