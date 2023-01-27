import { NoteForm } from "components/NoteForm/NoteForm";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { NoteAPI } from "api/note-api";
import { updateNote } from "store/notes/notes-slice";

export function Note(props) {
  const { noteId } = useParams();
  console.log("noteId", noteId);
  const note = useSelector((store) =>
    store.noteSlice.noteList.find((note) => note.id === noteId)
  );
  //console.log("note", note);
  const dispatch = useDispatch();
  const [isEditable, setisEditable] = useState(false);

  const submit = async (formValues) => {
    const updatedNote = await NoteAPI.updateById(note.id, formValues);
    console.log("updatedNote", updatedNote);
    dispatch(updateNote(updatedNote));
    setisEditable(false); //after submitting switch to read only mode
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
