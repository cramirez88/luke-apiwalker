import React from 'react'
import '../styles/Form.css'

export default function Form() {
  return (
    <div>
      <form className='form'>
        <div className='inputDivs'>
          <label>Search For: </label>
          <select>
            <option>People</option>
            <option>Planets</option>
          </select>
        </div>
        <div className='inputDivs'>
          <label>ID: </label>
          <input type='text'></input>
        </div>
        <button className='searchBtn'>Search</button>
      </form>
    </div>
  )
}
