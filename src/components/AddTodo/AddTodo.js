import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, addTodos } from '../../store/todoSlice';
import { nanoid } from '@reduxjs/toolkit';

const AddTodo = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const submit = () => {
    const items = text.split(',');
    // first method - dispatch separate actions for each item
    // items.forEach((item) =>
    //   dispatch(addTodo({ id: nanoid(), todo: text, completed: false }))
    // );
    // second method - dispatch one action for all items - better
    dispatch(
      addTodos(
        items.map((item) => ({ id: nanoid(), todo: item, completed: false }))
      )
    );
  };
  return (
    <div className='add-todo'>
      <p>To add multiple items write them comma separated</p>
      <p>
        <i>eg: Eggs, Bread, Ham, Cheese</i>
      </p>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={submit}>Add</button>
    </div>
  );
};

export default AddTodo;
