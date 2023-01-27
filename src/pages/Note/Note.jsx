import { NoteForm } from "components/NoteForm/NoteForm";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useState } from "react";

export function Note(props) {
  const { noteId } = useParams();
  console.log("noteId", noteId);
  const note = useSelector((store) =>
    store.noteSlice.noteList.find((note) => note.id === noteId)
  );
  console.log("note", note);

  const [isEditable, setisEditable] = useState(false);

  const submit = (formValues) => {
    alert("submit");
  };
  return (
    <>
      {note && (
        <NoteForm
          isEditable={isEditable}
          title={isEditable ? "You can now edit the note..." : note.title}
          note={note}
          onClickDelete={() => {
            alert("delete");
          }}
          onClickEdit={() => {
            setisEditable(!isEditable);
          }}
          onSubmit={isEditable && submit}
        />
      )}
    </>
  );
}
