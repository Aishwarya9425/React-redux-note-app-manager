import { NoteForm } from "components/NoteForm/NoteForm";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { NoteAPI } from "api/note-api";
import { updateNote, deleteNote } from "store/notes/notes-slice";
import { useNavigate } from "react-router-dom";

export function Note(props) {
  const { noteId } = useParams();
  console.log("noteId", noteId);
  const note = useSelector((store) =>
    store.noteSlice.noteList.find((note) => note.id === noteId)
  );
  //console.log("note", note);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isEditable, setisEditable] = useState(false);

  const submit = async (formValues) => {
    const updatedNote = await NoteAPI.updateById(note.id, formValues);
    console.log("updatedNote", updatedNote);
    dispatch(updateNote(updatedNote));
    setisEditable(false); //after submitting switch to read only mode
  };

  async function deleteNote_() {
    if (window.confirm("Are you sure you want to delete this note?")) {
      NoteAPI.deleteById(note.id);
      dispatch(deleteNote(note));
      navigate("/");
    }
  }

  return (
    <>
      {note && (
        <NoteForm
          isEditable={isEditable}
          title={isEditable ? "You can now edit the note..." : note.title}
          note={note}
          onClickDelete={deleteNote_}
          onClickEdit={() => {
            setisEditable(!isEditable);
          }}
          onSubmit={isEditable && submit}
        />
      )}
    </>
  );
}
