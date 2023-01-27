import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
  name: "noteSlice",
  initialState: {
    noteList: [],
  },
  reducers: {
    setNoteList: (currentSlice, action) => {
      currentSlice.noteList = action.payload;
    },
    addNote: (currentSlice, action) => {
      currentSlice.noteList.push(action.payload);
    },
    updateNote: (currentSlice, action) => {
      const indexToUpdate = currentSlice.noteList.findIndex(
        (note) => note.id === action.payload.id
      );
      console.log("indexToUpdate .. ", indexToUpdate);
      currentSlice.noteList[indexToUpdate] = action.payload;
    },
  },
});

export const { setNoteList, addNote, updateNote } = noteSlice.actions;
export const noteReducer = noteSlice.reducer;
