import { NoteList } from "containers/NoteList/NoteList";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export function NoteBrowse(props) {
  const noteList = useSelector((store) => store.noteSlice.noteList);

  return (
    <>
      {noteList?.length === 0 && (
        <div className="d-flex justify-content-center">
          <span>
            You don't have any note, do you want to
            <Link to="/note/new"> create one ?</Link>
          </span>
        </div>
      )}
      <NoteList />
    </>
  );
}
