import React, { useContext } from 'react';
import { TaskListContext } from '../context/TaskListContext';
import './App.css';
import Task from './Task';

const TaskList = () => {
  const { tasks } = useContext(TaskListContext);
  return (
    <div>
      <ul className='list'>
        {tasks.map(task => {
          return <Task task={task} key={task.id} />;
        })}
      </ul>
    </div>
  );
};

export default TaskList;
