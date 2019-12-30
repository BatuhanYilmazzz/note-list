import React, { createContext, useState } from 'react';
import uuid from 'uuid';

export const TaskListContext = createContext();

const TaskListContextProvider = props => {
  const [tasks, setTasks] = useState([
    { title: 'Read the Book', id: '1' },
    { title: 'Bring the dog', id: '2' },
    { title: 'Make it baby', id: '3' }
  ]);

  const addTask = title => {
    setTasks([...tasks, { title: title, id: uuid() }]);
  };

  const removeTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
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
