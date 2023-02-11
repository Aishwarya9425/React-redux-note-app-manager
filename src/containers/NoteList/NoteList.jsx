import { NoteAPI } from "api/note-api";
import { TextCard } from "components/TextCard/TextCard";
import { useNavigate } from "react-router-dom";
import s from "./style.module.css";
import { useDispatch } from "react-redux";
import { deleteNote } from "store/notes/notes-slice";

export function NoteList({ noteList }) {
  //useSelector -- A hook to access the redux store's state.
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function deleteNote_(note) {
    if (window.confirm("Are you sure you want to delete this note?")) {
      NoteAPI.deleteById(note.id);
      dispatch(deleteNote(note));
      navigate("/");
    }
  }
  return (
    <div className={`row justify-content-center`}>
      {noteList.map((note) => {
        return (
          <div key={note.id} className={s.card_container}>
            <TextCard
              title={note.title}
              content={note.content}
              subtitle={note.created_at}
              onClick={() => {
                navigate("note/" + note.id);
              }}
              onClickTrash={() => deleteNote_(note)}
            />
          </div>
        );
      })}
    </div>
  );
}
