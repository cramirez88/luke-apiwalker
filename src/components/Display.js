import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import '../styles/Display.css'

export default function Display(props) {
  const [apiData, setApiData] = useState({});
  const [error, setError] = useState(false)
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/${id}/`)
      .then((res) => setApiData(res.data))
      .catch((err) => setError(`These aren't the droids you are looking for` + err))
  }, [id]);
  return (
    <div>
      {
        error !== false? 
        <p>{error}</p>: 
        <div className="resultDiv"> 
        <li>Name: {apiData.name}</li>
        <li>Gender: {apiData.gender}</li>
        <li>Height: {apiData.height}</li>
        <li>Mass: {apiData.mass}</li>
      </div>
      
     
}
       
    </div>
  );
}