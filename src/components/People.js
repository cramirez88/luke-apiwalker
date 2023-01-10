import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'

export default function People() {
  const {id} = useParams()
  const [apiData, setApiData] = useState({})
  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/${id}`)
    .then(res => {
      console.log(res.data)
      setApiData(res.data)
    })
  },[])

  return (
    <div>
     <p>{apiData.name}</p>
     <p>{apiData.eye_color}</p>
     <p>{apiData.skin_color}</p>
     <p>{apiData.birth_year}</p>
    </div>
  )
}
