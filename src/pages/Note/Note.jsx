import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export function Note(props) {
  const { noteId } = useParams();
  console.log("noteId", noteId);
  const note = useSelector((store) =>
    store.noteSlice.noteList.find((note) => note.id === noteId)
  );
  console.log("note", note);
  return <>Note</>;
}
