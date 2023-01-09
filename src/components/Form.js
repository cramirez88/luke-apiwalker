import React from "react";

export default function Form() {
  return (
    <div>
      <form>
        <div>
          <label>Search For:</label>
          <select>
            <option>----</option>
            <option value={"people"}>People</option>
            <option value={"planets"}>Planets</option>
          </select>
        </div>
        <div>
          <label>ID:</label>
          <input type={"text"}></input>
        </div>
        <input type="submit"></input>
      </form>
    </div>
  );
}
