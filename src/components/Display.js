import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Display(props) {
  const [apiData, setApiData] = useState({});
  const { id, category } = useParams();
  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/${category}/${id}/`)
      .then((res) => setApiData(res.data));
  }, [id, category]);
  return (
    <div>
      { category === 'people' ? 
         <div>
         <h1>Name: {apiData.name}</h1>
         <h2>Gender: {apiData.gender}</h2>
         <h3>Height: {apiData.height}</h3>
         <h4>Mass: {apiData.mass}</h4>
       </div>:
      category === 'planets'?
        <div>
        <h1>Name: {apiData.name}</h1>
        <h2>Diameter: {apiData.diameter}</h2>
        <h3>Climate: {apiData.climate}</h3>
        <h4>Terrain: {apiData.terrain}</h4>
      </div>:
      <h1>{' '}</h1>
}
       
    </div>
  );
}