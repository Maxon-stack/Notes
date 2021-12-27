import Note  from "./Note";
import AddNote from "./AddNote";

const NotesList = ({notes, handleAdd, handleDelete}) =>{
  return(

    <div className="list">
      <AddNote handleAdd = {handleAdd}/>
      {notes.map((note) =>  (
      <Note key = {note.key} id = {note.key}  text = {note.text} date = {note.date} handleDelete = {handleDelete} />
      ))}
      
    </div>
  );
};
export default NotesList;