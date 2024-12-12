import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import NewNote from "./pages/NewNote";
import EditNote from "./pages/EditNote";
import { useContext } from "react";
import { NotesContext } from "./context/NotesContext";


function App() {

  const {addNewNote, updateNote} =useContext(NotesContext)
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>
        <Route index element={<HomePage />} />
        <Route path="create" element={<NewNote method={addNewNote} buttonText={'Add'}/>} />
        <Route path="edit/:id" element={<NewNote method={updateNote} buttonText={'Save'}/>} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
