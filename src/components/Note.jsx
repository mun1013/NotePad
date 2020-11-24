import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

function Note(props) {

  function handleEdit() {
    props.onEdit(props.id, props.title, props.content);
  }

  function handleDelete() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleEdit}><EditIcon/></button>
      <button onClick={handleDelete}><DeleteIcon/></button>
    </div>
  )
}

export default Note; 