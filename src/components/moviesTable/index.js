import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { moviesQuery } from "./queries";
import { Input, InputLabel } from "@material-ui/core";
import "./style.css";
import {
  addMovieMutation,
  deleteMovieMutation,
  updateMovieMutation,
} from "./mutation";

const MoviesTable = () => {
  const { loading, error, data } = useQuery(moviesQuery);
  const [editingMoviesData, setEditingMoviesData] = useState({
    id: "",
    name: "",
    genre: "",
  });
  const [inputName, setInputName] = useState("");
  const [inputGenre, setInputGenre] = useState("");

  const [addMovie] = useMutation(addMovieMutation);
  const [deleteMovie] = useMutation(deleteMovieMutation);
  const [updateMovie] = useMutation(updateMovieMutation);

  if (loading) return <p>Loading...</p>;

  const onChangeInputName = (e) => {
    setInputName(e.target.value);
  };
  const onChangeInputGenre = (e) => {
    setInputGenre(e.target.value);
  };

  const onAddMovie = () => {
    addMovie({
      variables: { name: inputName, genre: inputGenre },
      refetchQueries: [moviesQuery],
    });
    setInputName("");
    setInputGenre("");
  };

  const onDeleteMovie = (id) => () => {
    deleteMovie({ variables: { id }, refetchQueries: [moviesQuery] });
  };

  const onEditMovie = (id, name, genre) => () => {
    setEditingMoviesData({
      id,
      name,
      genre,
    });
  };

  const onChangeMovieName = (e) => {
    setEditingMoviesData({
      ...editingMoviesData,
      name: e.target.value,
    });
  };

  const onChangeMovieGenre = (e) => {
    setEditingMoviesData({
      ...editingMoviesData,
      genre: e.target.value,
    });
  };

  const onCancelMovie = () => {
    setEditingMoviesData({
      id: "",
      name: "",
      genre: "",
    });
  };

  const onSaveMovie = () => {
    updateMovie({
      variables: {
        id: editingMoviesData.id,
        name: editingMoviesData.name,
        genre: editingMoviesData.genre,
      },
      refetchQueries: [moviesQuery],
    });
    onCancelMovie();
  };

  return (
    <div className="movie">
      <div className="movie-input">
        <div>
          <InputLabel>Name</InputLabel>
          <Input value={inputName} onChange={onChangeInputName} />
        </div>
        <div>
          <InputLabel>Genre</InputLabel>
          <Input value={inputGenre} onChange={onChangeInputGenre} />
        </div>
        <div>
          <button onClick={onAddMovie}>Add</button>
        </div>
      </div>

      {data &&
        data.movies.map((item) => {
          return editingMoviesData.id === item.id ? (
            <div className="movie-data-box" key={item.id}>
              <div>
                Name:{" "}
                <input
                  onChange={onChangeMovieName}
                  value={editingMoviesData.name}
                />
              </div>
              <div>
                Genre:{" "}
                <input
                  onChange={onChangeMovieGenre}
                  value={editingMoviesData.genre}
                />
              </div>
              <div>
                <button onClick={onSaveMovie}>save</button>
                <button onClick={onCancelMovie}>cancel</button>
              </div>
            </div>
          ) : (
            <div className="movie-data-box" key={item.id}>
              <div>Name: {item.name}</div>
              <div>Genre: {item.genre}</div>
              <div>
                <button onClick={onDeleteMovie(item.id)}>delete</button>
                <button onClick={onEditMovie(item.id, item.name, item.genre)}>
                  edit
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default MoviesTable;
