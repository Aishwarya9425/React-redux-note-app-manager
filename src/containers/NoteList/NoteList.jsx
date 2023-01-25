import { TextCard } from "components/TextCard/TextCard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import s from "./style.module.css";

export function NoteList(props) {
  //useSelector -- A hook to access the redux store's state.
  const noteList = useSelector((store) => store.noteSlice.noteList);
  const navigate = useNavigate();
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
              onClickTrash={() => {
                alert("onClickTrash");
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
