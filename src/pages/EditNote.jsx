import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { NotesContext } from "../context/NotesContext";

const EditNote = () => {
  const navigate = useNavigate();
  const {id} = useParams()
  const {getNote, note,setNote, isLoading} =useContext(NotesContext)

  // useEffect(()=>{
  //   getNote(id)
  // },[])
  // console.log(note)
  return (
    <div className="shadow   rounded-lg m-4 p-4 space-y-3">
      <form
        className="space-y-3 "
        onSubmit={(e) => {
          e.preventDefault();
          console.log("submitted");
        }}
      >
        <div className="">
          <input
            className="w-full  font-semibold text-2xl shadow-sm shadow-[#ff4ea4] outline-none p-2  rounded-lg "
            type="text"
            value={note.heading}
            onChange={(e)=>{
              setNote(
               {
                 ...note,
                 [name]:e.target.value
               }
              )
             }}
            placeholder="Heading..."
            maxLength={60}
          />
        </div>
        <div className="flex flex-wrap gap-4 ">
          <input
            className="w-5/6 shadow-sm shadow-[#ff4ea4] outline-none p-2 rounded-lg "
            value={note.tags}
            onChange={(e)=>{
              setNote(
               {
                 ...note,
                 [name]:e.target.value
               }
              )
             }}
            type="text"
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
            value={note.para}
            name="para"
            onChange={(e)=>{
             setNote(
              {
                ...note,
                [name]:e.target.value
              }
             )
            }}
            type="textarea"
            placeholder="Paragraph..."
          />
        </div>
        <div className="space-x-4 flex justify-end">
          <button
            className="border border-color_success_900 rounded-lg px-4 py-2 bg-color_success_500 text-white hover:scale-105 transition-all "
            type="submit"
          >
            Save
          </button>
          <button
            className="border border-color_danger_900 rounded-lg px-4 py-2 bg-color_danger_500 text-white  hover:scale-105 transition-all"
            type="button"
            onClick={() => navigate("/")}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditNote;
