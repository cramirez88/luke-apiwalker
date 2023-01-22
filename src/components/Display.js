import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../styles/Display.css";

export default function Display(props) {
  const [apiData, setApiData] = useState({});
  const [error, setError] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/${id}/`)
      .then((res) => setApiData(res.data))
      .catch((err) =>
        setError(`These aren't the droids you are looking for` + err)
      );
  }, [apiData]);
  return (
    <div>
      {error !== false ? (
        <div>
          <p>{error}</p>
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.TKF0_eBQoE-ZtpnflTE9QwHaHa%26pid%3DApi&f=1&ipt=5931228f5fac58e491680a8e1830a43472197703689b731e9c4a600cda5651f3&ipo=images"></img>
        </div>
      ) : (
        <div className="resultDiv">
          <li>Name: {apiData.name}</li>
          <li>Gender: {apiData.gender}</li>
          <li>Height: {apiData.height}</li>
          <li>Mass: {apiData.mass}</li>
        </div>
      )}
    </div>
  );
}
