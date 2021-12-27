import { useState } from "react";

const AddNote = ({handleAdd}) =>{
  const [noteText, SetNoteText] = useState('');
  const character_Limit = 250;
  const save_Text = (event) =>{
    //console.log(event.target.value)
    if(character_Limit -event.target.value.length >= 0){
      SetNoteText(event.target.value)
    }
    
  }
  const save_Click = () =>{
    //console.log("clicked");
    if(noteText.trim().length > 0){
      handleAdd(noteText);
      SetNoteText('');
    }


  }
  return(
    <div className="new note">
      <textarea cols="10" rows="8" placeholder="Type to add a note..." 
      value = {noteText}
      onChange={save_Text}></textarea>
      <div className="footer-note">
        <small>{character_Limit - noteText.length} Character Remainding</small>
        <button className="save" onClick={save_Click}>Save</button>
      </div>
    </div>
  );
};
export default AddNote;