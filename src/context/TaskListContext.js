import React, { createContext, useState } from 'react';

export const TaskListContext = createContext();

const TaskListContextProvider = props => {
  const [tasks, setTasks] = useState([
    { name: 'Read the Book', id: '1' },
    { name: 'Bring the dog', id: '2' },
    { name: 'Make it baby', id: '3' }
  ]);
  return (
    <TaskListContext.Provider value={{ tasks }}>
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
