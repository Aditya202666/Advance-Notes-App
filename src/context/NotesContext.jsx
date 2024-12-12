import { createContext, useEffect, useState } from "react";
import { v4 } from "uuid";

export const NotesContext = createContext({});

const NotesContextProvider = ({ children }) => {
  const initialState = {
    id: v4(),
    heading: "Aditya ",
    tags: "",
    tagsArray: [],
    para: "",
  };

  const [notesArray, setNotesArray] = useState([]);
  const [note, setNote] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

  // console.log(note)

  const addNewNote = (note) => {
    console.log("new");
    const updatedNotesArray = [...notesArray, note];
    setNotesArray(updatedNotesArray);
    addToStorage(updatedNotesArray);
    setNote(initialState);
  };

  const removeNote = (noteId) => {
    const updatedNotesArray = notesArray.filter((note) => note.id !== noteId);
    setNotesArray(updatedNotesArray);
    addToStorage(updatedNotesArray);
  };

  const updateNote = (updatedNote) => {
    console.log("update");
    const updatedNotesArray = notesArray.map((note) =>
      note.id === updatedNote.id ? updatedNote : note
    );
    setNotesArray(updatedNotesArray);
    addToStorage(updatedNotesArray);
  };

  const deleteTag = (noteId, tagIndex) => {
    const noteToChange = getNote(noteId);
    const filteredTagArray = noteToChange.tagsArray.filter((_,index)=> index !==tagIndex);
    const updatedNote = {
        ...noteToChange,
        tags: filteredTagArray.join(', '),
        tagsArray: filteredTagArray,
      };
      const updatedNotesArray = notesArray.map((note) =>
        note.id === updatedNote.id ? updatedNote : note
      );
      setNotesArray(updatedNotesArray);
      addToStorage(updatedNotesArray);
    //   console.log(noteToChange)
    //   console.log(updatedNote)

    }

  

  const getNote = (noteId) => {
    // setIsLoading(true)
    const note = notesArray.find((note) => note.id === noteId);
    if (note) {
      setNote(note);
    } else {
      setNote(initialState);
    }
    return note;
  };

  const addToStorage = (updatedNotesArray) => {
    localStorage.setItem("notes", JSON.stringify(updatedNotesArray));
  };

  useEffect(() => {
    setIsLoading(true);
    const notesFromStorage = JSON.parse(localStorage.getItem("notes"));
    if (notesFromStorage) {
      setNotesArray(notesFromStorage);
      setIsLoading(false);
      // console.log(notesFromStorage)
    } else {
      setIsLoading(false);
      setNotesArray([]);
    }
  }, []);

  return (
    <NotesContext.Provider
      value={{
        addNewNote,
        removeNote,
        getNote,
        updateNote,
        notesArray,
        note,
        setNote,
        isLoading,
        deleteTag,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export default NotesContextProvider;
