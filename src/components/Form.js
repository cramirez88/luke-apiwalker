import React, {useState} from 'react'
import '../styles/Form.css'
import {useNavigate, useParams} from 'react-router-dom'

export default function Form(props) {
  const [category, setCategory] = useState('')
  const [id, setId] = useState()
  const {categoryArray, setCategoryArray, idArray, setIdArray} = props
 const navigate = useNavigate()
//  const { id } = useParams()

  const formHandler = (e) => {
    e.preventDefault()
    // setCategoryArray([...categoryArray, category])
    // setIdArray([...idArray, id])
    
    navigate(`/people/${id}/`)
    console.log(id)
  }
  return (
    <div>
      <form className='form' onSubmit={formHandler}>
        <div className='inputDivs'>
          <label>Search For: </label>
          <select onChange={(e) => setCategory(e.target.value)}>
            <option>People</option>
            <option>Planets</option>
          </select>
        </div>
        <div className='inputDivs'>
          <label>ID: </label>
          <input type='text' onChange={(e) => setId(e.target.value)}></input>
        </div>
        <button className='searchBtn'>Search</button>
      </form>
    </div>
  )
}
