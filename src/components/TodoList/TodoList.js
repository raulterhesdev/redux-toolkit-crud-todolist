import { nanoid } from '@reduxjs/toolkit';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { restoreTodo, clearTodos, todoSelectors } from '../../store/todoSlice';
import Todo from './Todo/Todo.js';

const TodoList = () => {
  const dispatch = useDispatch();
  const allTodos = useSelector(todoSelectors.selectEntities);
  const todoCount = useSelector(todoSelectors.selectTotal);
  const deletedTodos = useSelector((state) => state.todos.deletedTodos);

  const todoList = [];
  for (const id in allTodos) {
    if (Object.hasOwnProperty.call(allTodos, id)) {
      const todoItem = allTodos[id];
      todoList.push(
        <Todo
          key={todoItem.id}
          id={todoItem.id}
          text={todoItem.todo}
          completed={todoItem.completed}
        />
      );
    }
  }

  const restore = (todo) => {
    dispatch(restoreTodo(todo));
  };

  const deletedList = deletedTodos.map((todo) => (
    <div className='deleted-todo' key={todo.id}>
      <span>{todo.todo}</span>
      <button onClick={() => restore(todo)}>Restore</button>
    </div>
  ));

  const clearList = () => {
    dispatch(clearTodos());
  };

  return (
    <div className='todo-list'>
      <h3>Your Todos:</h3>
      <h4>Count: {todoCount}</h4>
      <button className='delete-btn' onClick={clearList}>
        Clear All Todos
      </button>
      <div>{todoList}</div>
      <h3>Deleted:</h3>
      <div>{deletedList}</div>
    </div>
  );
};

export default TodoList;
