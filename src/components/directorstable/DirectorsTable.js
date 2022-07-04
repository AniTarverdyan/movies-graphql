import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import "./style.css";

import { directorQuery } from "./queries";
import { deleteDirectorMutation } from "./mutation";
import { Input, InputLabel } from "@material-ui/core";

const DirectorsTable = () => {
  const { loading, error, data } = useQuery(directorQuery);
  const [director, setDirectors] = useState([]);
  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState("");
  
  useEffect(() => {
    if(data) {
      setDirectors([
        ...data,
        {
          name: data.directors.name,
          age: data.directors.age,
        },
      ]);
      console.log(director)
    }

  },[])
  console.log(data);
  if (loading) return <p>Loading...</p>;

  const handleChangeName = (e) => {
    setInputName(e.target.value);
  };

  const handleChangeAge = (e) => {
    setInputAge(e.target.value);
  };


  const addDirectorData = () => {
  };

  return (
    <div className="director">
      <div>
        <InputLabel htmlFor="component-helper">Director's Name</InputLabel>
        <Input onChange={handleChangeName} value={inputName} />
      </div>
      <div>
        <InputLabel htmlFor="component-helper">Director's Age</InputLabel>
        <Input type="number" onChange={handleChangeAge} value={inputAge} />
      </div>
      <div>
        <button onClick={addDirectorData}>Add</button>
      </div>
      {/* {data.directors.map((item) => {
        return (
          <div className="director-data-box">
            <div>Name: {item.name}</div>
            <div>Age: {item.age}</div>
          </div>
        );
      })} */}
      {director}
    </div>
  );
};

export default DirectorsTable;
