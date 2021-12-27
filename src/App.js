import { useEffect, useState } from "react";
import NotesList from "./Components/NotesList";
import {nanoid} from 'nanoid';
import Search from './Components/Search'
import Header from "./Components/Header";


const App = () => {
  const [notes, setNotes] = useState(
    [{
    key : nanoid(),
    text: 'First Note Text',
    date: '12/01/2021'
  },     
  {
    key : nanoid(),
    text: 'Second Note Text',
    date: '12/02/2021'
  },     
  {
    key : nanoid(),
    text: 'Third Note Text',
    date: '12/03/2021'
  }, 
]);

const [searchText, setSearchText] = useState('')


const [darkMode, setDarkMode] = useState(true)

useEffect(() => {
  const savedNotes = JSON.parse(localStorage.getItem('notes-data')
  );

  if(savedNotes){
    setNotes(savedNotes);
  }
}, []);

useEffect(() => {
  localStorage.setItem('notes-data', JSON.stringify(notes)
  );

}, [notes])


const addNote = (text) =>{
  //console.log(text);
  const date = new Date();
  const newNote = {
    key: nanoid(),
    text: text, 
    date: date.toLocaleDateString()
  }
  const newNotes = [newNote, ...notes];
  setNotes(newNotes);
};

const deleteNote = (key) => {
  const newNotes = notes.filter((note) => note.key !== key);
  setNotes(newNotes);
}
  return(
  <div className={`${darkMode && 'dark-mode'}`}>
    <div className= 'container'>
      <Header handleDarkMode = {setDarkMode}/>
      <Search handleSearch = {setSearchText}/>
      <NotesList 
      notes = {notes.filter((note)=> 
        note.text.toLowerCase().includes(searchText))} 
      handleAdd = {addNote} 
      handleDelete = {deleteNote}
      />
    </div>
  </div>


  );
}
export default App;