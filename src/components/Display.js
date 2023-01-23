import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import "../styles/Display.css";

export default function Display(props) {
  const [apiData, setApiData] = useState({});
  const [error, setError] = useState(false);
  const [homeworld, setHomeworld] = useState("");
  const [homeworldId, setHomeworldId] = useState()
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/${id}/`)
      .then((res) => {
        setApiData(res.data);
        setError(false)
        extractId(res.data.homeworld)
        
        //  set character's homeworld
        axios
          .get(res.data.homeworld)
          .then((res) => {
            console.log(res.data);
            setHomeworld(res.data.name);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  }, [id]);

  const extractId = (url) => {
    if(url.length - 3 === '/'){
      const singleId = url.charAt(url.length - 2)
      setHomeworldId(singleId)
    } else {
      const singleDigitId = url.charAt(url.length - 2 )
      const doubleDigitId = url.charAt(url.length - 3)
      const hwId = `${doubleDigitId}${singleDigitId}`
      setHomeworldId(hwId)
    }

  }
    return (
      <div>
             {
        error === false?
        <div className="resultDiv">
        <h3>Name: {apiData.name}</h3>
        <p>Gender: {apiData.gender}</p>
        <p>Height: {apiData.height}</p>
        <p>Mass: {apiData.mass}</p>
        <p>Homeworld: {homeworld}</p>
        <Link to={`/planets/${homeworldId}`}>Go here to explore homeworld {homeworldId}</Link>
      </div>:
      <div>
              <h3>These aren't the droids you are looking for. </h3>
              <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.TKF0_eBQoE-ZtpnflTE9QwHaHa%26pid%3DApi&f=1&ipt=5931228f5fac58e491680a8e1830a43472197703689b731e9c4a600cda5651f3&ipo=images" alt="obi-wan kenobi"></img>
      </div>
      }
      </div>
 
   
    )

  };

const l =   "https://swapi.dev/api/planets/10/"
