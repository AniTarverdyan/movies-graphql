import { useMutation, useQuery } from '@apollo/client';
import { Input, InputLabel } from '@material-ui/core';
import React, { useState } from 'react';
import {
  addDirectorMutation,
  deleteDirectorMutation,
  updateDirectorMutation,
} from './mutation';
import { directorQuery } from './queries';
import './style.css';

const DirectorsTable = () => {
  const { loading, error, data } = useQuery(directorQuery);
  const [inputName, setInputName] = useState('');
  const [inputAge, setInputAge] = useState('');
  const [editingData, setEditingData] = useState({
    id: '',
    name: '',
    age: '',
  });

  const [addDirector] = useMutation(addDirectorMutation);
  const [deleteDirector] = useMutation(deleteDirectorMutation);
  const [updateDirector] = useMutation(updateDirectorMutation);

  if (loading) return <p>Loading...</p>;

  const handleChangeName = (e) => {
    setInputName(e.target.value);
  };

  const handleChangeAge = (e) => {
    setInputAge(e.target.value);
  };

  const onAddDirector = () => {
    addDirector({
      variables: { name: inputName, age: +inputAge },
      refetchQueries: [directorQuery],
    });

    setInputName('');
    setInputAge('');
  };

  const onRemoveDirector = (id) => () => {
    deleteDirector({ variables: { id }, refetchQueries: [directorQuery] });
  };

  const onEditDirector = (id, name, age) => () => {
    setEditingData({
      id,
      name,
      age,
    });
  };

  const onCancelDirector = () => {
    setEditingData({
      id: '',
      name: '',
      age: '',
    });
  };

  const onEditingDirectorNameChange = (e) => {
    setEditingData({
      ...editingData,
      name: e.target.value,
    });
  };

  const onEditingDirectorAgeChange = (e) => {
    setEditingData({
      ...editingData,
      age: e.target.value,
    });
  };

  const onSaveDirector = () => {
    updateDirector({
      variables: {
        id: editingData.id,
        name: editingData.name,
        age: editingData.age,
      },
      refetchQueries: [directorQuery],
    });

    onCancelDirector();
  };

  return (
    <div className='director'>
      <div>
        <InputLabel htmlFor='component-helper'>Director's Name</InputLabel>
        <Input onChange={handleChangeName} value={inputName} />
      </div>
      <div>
        <InputLabel htmlFor='component-helper'>Director's Age</InputLabel>
        <Input type='number' onChange={handleChangeAge} value={inputAge} />
      </div>
      <div>
        <button onClick={onAddDirector}>Add</button>
      </div>
      {data.directors.map((item) => {
        return editingData.id === item.id ? (
          <div className='director-data-box'>
            <div>
              Name:{' '}
              <input
                value={editingData.name}
                onChange={onEditingDirectorNameChange}
              />
            </div>
            <div>
              Age:{' '}
              <input
                value={editingData.age}
                onChange={onEditingDirectorAgeChange}
              />
            </div>
            <button onClick={onSaveDirector}>save</button>
            <button onClick={onCancelDirector}>cancel</button>
          </div>
        ) : (
          <div className='director-data-box'>
            <div>Name: {item.name}</div>
            <div>Age: {item.age}</div>
            <button onClick={onRemoveDirector(item.id)}>delete</button>
            <button onClick={onEditDirector(item.id, item.name, item.age)}>
              edit
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default DirectorsTable;
