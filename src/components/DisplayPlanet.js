import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../styles/Display.css'

export default function DisplayPlanet() {
  const { id } = useParams()
  const [planetApi, setPlanetApi] = useState({})
  // const [error, setError] = useState(false)
  useEffect(() => {
    axios.get(`https://swapi.dev/api/planets/${id}`)
    .then(res => setPlanetApi(res.data))
    .catch(err => {
      console.log(err)
    } )
  })
  return (
    <div>
     
        <div className='resultDiv'>
          <li>Name: {planetApi.name}</li>
          <li>Diameter: {planetApi.diameter}</li>
          <li>Climate: {planetApi.climate}</li>
          <li>Terrain: {planetApi.terrain}</li>
        </div>
      
    </div>
  )
}
