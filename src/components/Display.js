import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../styles/Display.css";

export default function Display(props) {
  const [apiData, setApiData] = useState({});
  // const [error, setError] = useState(false);
  // const [homeworld, setHomeworld] = useState('')
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/${id}/`)
      .then((res) => 
      {
        setApiData(res.data)
        // setHomeworld(res.data.homeworld)
      })
      .catch((err) => {
        console.log(err)
      }
      );
     
  }, [id]);
  return (

        <div className="resultDiv">
          <h3>Name: {apiData.name}</h3>
          <p>Gender: {apiData.gender}</p>
          <p>Height: {apiData.height}</p>
          <p>Mass: {apiData.mass}</p>
        </div>

  );
}
