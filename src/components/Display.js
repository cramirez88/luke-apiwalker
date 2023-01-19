import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'

export default function Display(props) {
 const [apiData, setApiData] = useState({})
 
  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/4/`)
    .then(res => setApiData(res.data))
  },[])
  return (
    <div>
      <h1>{apiData.name}</h1>
      <h2>Gender: {apiData.gender}</h2>
      <h3>Height: {apiData.height}</h3>
      <h4>Mass: {apiData.mass}</h4>
    </div>
  )
}
