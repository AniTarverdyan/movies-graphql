import { useQuery } from "@apollo/client";
import { Input, InputLabel } from "@material-ui/core";
import React, { useState } from "react";
import { directorQuery } from "../queries";
import "./style.css";

const AddDirector = () => {
  // const { loading, error, data } = useQuery(directorQuery);
  // console.log(data);

  // const [directors, setDirectors] = useState([
  //   {
  //     name: "",
  //     age: "",
  //   },
  // ]);
  // const [inputName, setInputName] = useState("");
  // const [inputAge, setInputAge] = useState("");

  // const handleChangeName = (e) => {
  //   setInputName(e.target.value);
  // };

  // const handleChangeAge = (e) => {
  //   setInputAge(e.target.value);
  // };

  // const addDirectorData = (e) => {
  //   setDirectors([
  //     {
  //       name: inputName,
  //       age: inputAge,
  //     },
  //   ]);
  // };

  return (
    <div className="director">
      {/* <div>
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
            <div>Name:{item.name}</div>
            <div>Age:{item.age}</div>
            <div className="button">
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </div>
        );
      })} */} 
    </div>
  );
};

export default AddDirector;
