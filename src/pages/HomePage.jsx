import React, { useContext } from "react";

import AddIcon from "../assets/ESSENTIAL ICONS/add-1.png";
import NoteCard from "../components/NoteCard";
import { useNavigate } from "react-router-dom";
import { NotesContext } from "../context/NotesContext";

const HomePage = () => {
  const navigate = useNavigate();
  const { notesArray,isLoading } = useContext(NotesContext);


  if(isLoading) return <div>Loading..</div>
  return (
    <div className="px-4 my-8 columns-xs gap-6">
      {notesArray && notesArray.length > 0 ? (
        notesArray.map((note) => <NoteCard key={note.id} noteData={note} />)
      ) : (
        <h1
          className="text-2xl underline cursor-pointer text-color_warning_500"
          onClick={() => navigate("/create")}
        >
          No Notes Found
        </h1>
      )}
      <div className="absolute bottom-2 right-2 ">
        <img
          className="h-10 hover:scale-125 transition-all"
          onClick={() => navigate("/create")}
          src={AddIcon}
          alt="New Note"
        />
      </div>
    </div>
  );
};

export default HomePage;
