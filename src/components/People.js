import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'

export default function People() {
  const {id} = useParams()
  const [error, setError] = useState('')
  const [apiData, setApiData] = useState({})
  const [homeworld, setHomeworld] = useState([])
  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/${id}`)
    .then(res => {
      console.log(res.data)
      setApiData(res.data)
      
    })
    axios.get(`https://swapi.dev/api/planets/${id}`)
    .then(res => {
      console.log(res)
      setHomeworld(res.data.name)
    })
    .catch(err => {
      console.log('this is the people\'s component error' + err)
      setError('This is the people\'s component error')
    })
    
  },[id])
  if(!error){
    return (
      <>
      <div>
       <p>{apiData.name}</p>
       <p>{apiData.eye_color}</p>
       <p>{apiData.skin_color}</p>
       <p>{apiData.birth_year}</p>
      <p>{homeworld}</p>
      </div>

      </>
    )
  }else {
    return (
      <>
        <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgetwallpapers.com%2Fwallpaper%2Ffull%2F8%2F2%2Fb%2F312588.jpg&f=1&nofb=1&ipt=4e08c4472b99abcc3979f1e9361222003cb9c73d5121b6bb79e9ab848ab87c8c&ipo=images' style={{width: '200px'}}></img>
      <h3>These aren't the droids you are looking for!</h3>
      </>
      
    ) 
  }


 
}
