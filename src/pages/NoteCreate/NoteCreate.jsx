import { NoteAPI } from "api/note-api";
import { NoteForm } from "components/NoteForm/NoteForm";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addNote } from "store/notes/notes-slice";

export function NoteCreate(props) {
  const dispatch = useDispatch(); //to use the actions functions from slice use dispatch
  //after creating a new note, navigate to /
  const navigate = useNavigate();
  //db.json gets updated when a note is created
  const submit = async (formValues) => {
    //alert(JSON.stringify(formValues));
    const createdNote = await NoteAPI.create({
      ...formValues,
      created_at: new Date().toLocaleDateString(),
    }); // + date of creation
    dispatch(addNote(createdNote));
    // alert(
    //   "You have successfully submitted a new note!!",
    //   JSON.stringify(formValues)
    // );
    navigate("/");
  };
  return (
    <>
      <NoteForm title="New note" onSubmit={submit} />
    </>
  );
}
