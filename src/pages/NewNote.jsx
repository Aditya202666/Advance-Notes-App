import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { NotesContext } from "../context/NotesContext";

const NewNote = ({method, buttonText}) => {
  const navigate = useNavigate();
  const {note, setNote,addNewNote, getNote} = useContext(NotesContext)
  const {id} = useParams()

  const handleTags=()=>{

    const tags = note.tags.split(",").map(tag=>tag.trim())
    const filteredTags = tags.filter((t) => t!== '')
    const updatedNote = {...note,tagsArray:filteredTags}
    method(updatedNote)
    console.log(updatedNote)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleTags()
    navigate("/")
  };

  useEffect(()=>{
    getNote(id)
  },[])

  // if(!note) return <div>Loading...</div>
  return (
    <div className="shadow   rounded-lg m-4 p-4 space-y-3">
      {note &&
        <form
        className="space-y-3 "
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="">
          <input
            className="w-full  font-semibold text-2xl shadow-sm shadow-[#ff4ea4] outline-none p-2  rounded-lg "
            type="text"
            placeholder="Heading..."
            name="heading"
            value={note.heading}
            onChange={(e)=>{
              setNote(
               {
                 ...note,
                 [e.target.name]:e.target.value
               }
              )
             }}
            maxLength={60}
          />
        </div>
        <div className="flex flex-wrap gap-4 ">
          <input
            className="w-5/6 shadow-sm shadow-[#ff4ea4] outline-none p-2 rounded-lg "
            type="text"
            name="tags"
            value={note.tags}
            onChange={(e)=>{
              setNote(
               {
                 ...note,
                 [e.target.name]:e.target.value
               }
              )
             }}
            placeholder='Tags (" , " separated)...'
          />
          {/* <button
            className="border font-medium border-color_primary_400  rounded-lg px-4 bg-color_primary_400 text-white text-color_primary_500 hover:scale-105 transition-all"
            type="button"
          >
            Check
          </button> */}
        </div>
        <div className=" ">
          <textarea
            className="w-full shadow-sm shadow-[#ff4ea4] outline-none p-2 rounded-lg "
            rows={16}
            type="textarea"
            name="para"
            value={note.para}
            onChange={(e)=>{
              setNote(
               {
                 ...note,
                 [e.target.name]:e.target.value
               }
              )
             }}
            placeholder="Paragraph..."
          />
        </div>
        <div className="space-x-4 flex justify-end">
          <button
            className="border border-color_success_900 rounded-lg px-4 py-2 bg-color_success_500 text-white hover:scale-105 transition-all "
            type="submit"
          >
            {buttonText}
          </button>
          <button
            className="border border-color_danger_900 rounded-lg px-4 py-2 bg-color_danger_500 text-white  hover:scale-105 transition-all"
            type="button"
            onClick={() => navigate("/")}
          >
            Cancel
          </button>
        </div>
      </form>}
    </div>
  );
};

export default NewNote;
