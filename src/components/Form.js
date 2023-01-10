import React, {useState} from "react";
import {
  useNavigate
} from 'react-router-dom'

export default function Form() {
  const [category, setCategory] = useState('')
  const [id, setId] = useState('')
  const navigate = useNavigate()
  
  const handleForm = (e) =>{
    e.preventDefault()
    navigate(`/${category}/${id}`)
  }
  return (
    <div>
      <form onSubmit={handleForm} >
        <div>
          <label>Search For:</label>
          <select onChange={(e) => setCategory(e.target.value)} >
            <option>----</option>
            <option value={"people"} >People</option>
            <option value={"planets"} >Planets</option>
          </select>
        </div>
        <div>
          <label>ID:</label>
          <input type={"text"} onChange={(e) => setId(e.target.value)}></input>
        </div>
        <input type="submit"></input>
      </form>
     
    </div>
  );
}
