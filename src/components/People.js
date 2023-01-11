import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useParams, Link} from 'react-router-dom'

export default function People() {
  const {id} = useParams()
  const [error, setError] = useState('')
  const [apiData, setApiData] = useState({})
  const [homeworld, setHomeworld] = useState('')
  const [urlId, setUrlId] = useState()
  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/${id}`)
    .then(res => {
      console.log(res.data)
      setApiData(res.data)
      getIdFromURL(res.data.homeworld)
      axios.get(res.data.homeworld)
      .then(res => {
        
        setHomeworld(res.data.name)
      })
    })
   
    .catch(err => {
      console.log('this is the people\'s component error' + err)
      setError('This is the people\'s component error')
    })


    const getIdFromURL = (url) => {
      if(url.charAt(url.length -3) === '/'){
        const firstDigit = url.charAt(url.length - 2)
        setUrlId(firstDigit)
        console.log(firstDigit)
      }else {
        const firstDigit = url.charAt(url.length - 3)
        const secondDigit = url.charAt(url.length -2 )
        setUrlId(`${firstDigit}${secondDigit}`)
      }
    }
    
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
      <Link to={`/planets/${urlId}`}>Homeworld</Link>
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
