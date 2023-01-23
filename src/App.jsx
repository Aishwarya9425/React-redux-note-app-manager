import { Outlet } from "react-router-dom";
import { Header } from "components/Header/Header";
import { useEffect } from "react";
import { NoteAPI } from "api/note-api";
import { useDispatch } from "react-redux";
import { setNoteList } from "store/notes/notes-slice";

export function App() {
  const dispatch = useDispatch();

  async function fetchAllNotes() {
    const noteList = await NoteAPI.fetchAll();
    dispatch(setNoteList(noteList));
  }
  useEffect(() => {
    fetchAllNotes();
  }, []);
  
  return (
    <div>
      App Component!
      <Header />
      <Outlet />
    </div>
  );
}
