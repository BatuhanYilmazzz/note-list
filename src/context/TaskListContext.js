import React, { createContext, useState, useEffect } from 'react';
import uuid from 'uuid';

export const TaskListContext = createContext();

const TaskListContextProvider = props => {
  const initialState = JSON.parse(localStorage.getItem('tasks'));
  const [tasks, setTasks] = useState(initialState);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = title => {
    setTasks([...tasks, { title: title, id: uuid() }]);
  };

  const removeTask = index => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const clearList = () => {
    setTasks([]);
  };

  return (
    <TaskListContext.Provider value={{ tasks, addTask, removeTask, clearList }}>
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
