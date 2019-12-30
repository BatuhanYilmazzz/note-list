import React, { createContext, useState } from 'react';

export const TaskListContext = createContext();

const TaskListContextProvider = () => {
  const [tasks, setTasks] = useState([
    { task: 'Read the Book', id: '1' },
    { task: 'Bring the dog', id: '2' },
    { task: 'Make it baby', id: '3' }
  ]);
  return <div>Task List Context</div>;
};

export default TaskListContextProvider;
