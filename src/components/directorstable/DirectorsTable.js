import React, { useState } from "react";
import { useQuery } from "@apollo/client";

import { directorQuery } from "./queries";
import { deleteDirectorMutation } from "./mutation";

const DirectorsTable = () => {
  const { loading, error, data } = useQuery(directorQuery);

  if (loading) return <p>Loading...</p>;



// let a;

//   const addDirector = () => {

//   }
//   console.log(data.directors);

//   const deleteDirector = () => () => {
//    const deleteMutation = useQuery(deleteDirectorMutation, {variables: {id: 1}})
//   }
  

  return (
    <div>
      {/* <input onChange={handleChange} value={inputValue} />
      <button onClick={addDirector}>Add Director</button>
      <button>Return</button> */}
      {/* {directors} */}
      {/* <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Age</td>
          </tr>
        </thead>
        <tbody>
          {data.directors.map((item) => {
            return (
              <tr >
                <td>{item.name}</td>
                <td>{item.age}</td>
              </tr>
            );
          })}
        </tbody>
      </table> */}
    </div>
  );
};

export default DirectorsTable;
