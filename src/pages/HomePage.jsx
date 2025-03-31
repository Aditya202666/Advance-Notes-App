import React, { useContext } from "react";
import AddIcon from "../assets/ESSENTIAL ICONS/edit-1.png";
import NoteCard from "../components/NoteCard";
import { useNavigate } from "react-router-dom";
import { NotesContext } from "../context/NotesContext";

const HomePage = () => {
  const navigate = useNavigate();
  const { notesArray,isLoading } = useContext(NotesContext);


  if(isLoading) return <div>Loading..</div>
  return (
    <div className="h-[calc(100vh-2.5rem)] bg-gradient-to-b from-pink-50 to-sky-50 flex py-12 px-4 columns-xs gap-6">
      {notesArray && notesArray.length > 0 ? (
        notesArray.map((note) => <NoteCard key={note.id} noteData={note} />)
      ) : (
        <div className="flex flex-col items-center gap-2">
        <h1
          className="flex text-2xl underline cursor-pointer hover:scale-105 transition-all text-color_warning_500"
          onClick={() => navigate("/create")}
          >
          Create A Note! 
          <img className="h-8 pl-2" src={AddIcon} alt="" />
        </h1>
          </div>
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
