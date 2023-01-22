import React, {useState} from 'react'
import '../styles/Form.css'
import {useNavigate} from 'react-router-dom'

export default function Form(props) {
  const [category, setCategory] = useState('')
  const [id, setId] = useState()
 const navigate = useNavigate()

  const formHandler = (e) => {
    e.preventDefault()
    
    navigate(`/${category}/${id}/`)
    // setId('')
  }
  return (
    <div>
      <form className='form' onSubmit={formHandler}>
        <div className='inputDivs'>
          <label>Search For: </label>
          <select onChange={(e) => setCategory(e.target.value)}>
            <option value={'people'}>people</option>
            <option value={'planets'}>planets</option>
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
