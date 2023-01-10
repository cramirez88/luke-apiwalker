import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

export default function Planets() {
  const {id} = useParams()
  const [planetApiData, setPlanetApiData] = useState({})
  useEffect(() => {
    axios.get(`https://swapi.dev/api/planets/${id}`)
    .then(res => {
      console.log(res.data)
      setPlanetApiData(res.data)
    })
  },[])
  return (
    <div>
      <p>{planetApiData.name}</p>
      <p>{planetApiData.climate}</p>
      <p>{planetApiData.population}</p>
      <p>{[planetApiData.gravity]}</p>
    </div>
  )
}
