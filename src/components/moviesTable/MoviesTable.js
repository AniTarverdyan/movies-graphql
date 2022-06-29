import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { moviesQuery } from "./queries";


const MoviesTable = () => {
  const [movies, setMovies] = useState([]);
  const { loading, error, data } = useQuery(moviesQuery);

//   const addMovies = () => {
// setMovies(data?.movies)
//   }

// const filtered = data.movies.filter((movie) => movie.name !== null)
 console.log(data)
    return (
      <div>
      <table>
         <thead>
             <tr>
                 {/* <td>Name</td>
                 <td>Age</td> */}
             </tr>
         </thead>
         {/* <tbody>
             {data.movies.map((item) => {
               return  <tr>
                     <td>{item.name}</td>
                     <td>{item.genre}</td>
                 </tr>
             })}
         </tbody> */}
      </table>
     </div>
    )
};

export default MoviesTable;
