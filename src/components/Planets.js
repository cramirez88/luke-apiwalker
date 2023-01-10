import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

export default function Planets() {
  const {id} = useParams()
  const [planetApiData, setPlanetApiData] = useState({})
  const [error, setError] = useState('')
  useEffect(() => {
    axios.get(`https://swapi.dev/api/planets/${id}`)
    .then(res => {
      console.log(res.data)
      setPlanetApiData(res.data)
    })
    .catch(err => {
      console.log('you are receiving an error' + err)
      setError('this is your error')
    })
  },[])

  
  return (
    <div>
      <p>Name: {planetApiData.name}</p>
      <p>Climate: {planetApiData.climate}</p>
      <p>Population: {planetApiData.population}</p>
      <p>Gravity: {[planetApiData.gravity]}</p>

      {
        error? 
        <h1>{error}</h1>:
        <p>{''}</p>
      }
    </div>
  )
}
