import { Input, InputLabel } from "@material-ui/core";
import React, { useState } from "react";
import { useMutation } from "react-apollo";
import { addDirectorMutation } from "../mutation";
import { directorQuery } from "../queries";
import "./style.css";

const AddDirector = () => {
  const [directors, setDirectors] = useState([
    {
      name: "",
      age: "",
    },
  ]);
  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState("");

  const handleChangeName = (e) => {
    setInputName(e.target.value);
  };

  const handleChangeAge = (e) => {
    setInputAge(e.target.value);
  };

const addDirectorData = (e) => {
  setDirectors([{
    name: inputName,
    age: inputAge
  }])
}

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
      {directors.map((director) => {
        return (
          <div className="director-data-box">
            <div>Name:{director.name}</div>
            <div>Age:{director.age}</div>
            <div className="button">
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AddDirector;
