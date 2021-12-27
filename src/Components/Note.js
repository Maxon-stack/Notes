import {MdDeleteForever} from 'react-icons/md';


const Note = ({id , text, date, handleDelete}) =>{
  return(
    <div className="note">
      <span>{text}</span>
      <div className="footer-note">
        <small>
          {date}</small>
          <MdDeleteForever 
          onClick = {() => handleDelete(id)} className='delete-icon' size = '1.3em'/>
        
      </div>
    </div>
  );

};
export default Note;