import React, { useContext } from "react";
import CrossIcon from "../assets/ESSENTIAL ICONS/close-1.png";
import EditIcon from "../assets/ESSENTIAL ICONS/edit-1.png";
import { NotesContext } from "../context/NotesContext";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";

const NoteCard = ({noteData}) => {
  const { removeNote, getNote, deleteTag } = useContext(NotesContext);

  const navigate = useNavigate();

  // const noteData = {
  //   id: v4(),
  //   heading: "Aditya ",
  //   tags: '',
  //   tagsArray:[]
  // };

  // console.log(noteData);

  const handleDeleteNote = () => {
    removeNote(noteData.id);
  };

  const handleEditNote = () => {
    navigate(`/edit/${noteData.id}`);
  };

  return (
    <div className="w-[320px] h-fit shadow shadow-[#ff4ea4] rounded-lg _100  p-2 mb-2  relative overflow-hidden  ">
      <h1 className="font-semibold line-clamp-1">{noteData.heading}</h1>
      <img
        className="w-5 absolute right-7 top-1 hover:scale-125 transition-all duration-200 cursor-pointer "
        onClick={handleEditNote}
        src={EditIcon}
        alt="edit icon"
      />
      <img
        className="w-5 absolute right-1 top-1 hover:scale-125 transition-all duration-200 cursor-pointer"
        onClick={handleDeleteNote}
        src={CrossIcon}
        alt=""
      />{" "}
      <details>
        <summary className="cursor-pointer  mb-1">Tags</summary>
        <div className="flex gap-2 flex-wrap" >
        {noteData.tagsArray.length > 0 ? (
          noteData.tagsArray.map((tag, index) => (
              <div className="flex items-center shadow rounded-xl hover:scale-110 transition-all px-2 " key={index}>
                <span className=" text-color_danger_500  pb-1">{tag}</span>
                <img
                  className="self-start h-3 ml-2 mt-1 cursor-pointer"
                  src={CrossIcon}
                  onClick={() =>{deleteTag(noteData.id, index)}}
                  alt=""
                />{" "}
              </div>
          ))
        ) : (
          <button
          className=" shadow rounded-lg px-2 py-0.5 font-semibold hover:bg-color_primary_400 hover:text-white text-color_primary_500 ml-2"
          onClick={handleEditNote}
          type="button"
          >
            Add tags
          </button>
        )}
        </div>
      </details>
    </div>
  );
};

export default NoteCard;
