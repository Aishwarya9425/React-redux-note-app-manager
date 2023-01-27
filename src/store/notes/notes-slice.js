import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
  name: "noteSlice",
  initialState: {
    noteList: [],
  },
  reducers: {
    setNoteList: (state, action) => {
      state.noteList = action.payload.map(formatId);
    },
    addNote: (state, action) => {
      state.noteList.push(formatId(action.payload));
    },
  },
});

function formatId(note) {
  return {
    ...note,
    id: note.id.toString(),
  };
}
export const { setNoteList, addNote } = noteSlice.actions;
export const noteReducer = noteSlice.reducer;
