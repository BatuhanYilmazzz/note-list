import React, { useContext } from 'react';
import { TaskListContext } from '../context/TaskListContext';
import './App.css';
import Task from './Task';

const TaskList = () => {
  const { tasks } = useContext(TaskListContext);
  return (
    <div>
      {tasks.length ? (
        <ul className='list'>
          {tasks.map((task, index) => {
            return <Task task={task} key={index} index={index} />;
          })}
        </ul>
      ) : (
        <div className='no-tasks'>No tasks</div>
      )}
    </div>
  );
};

export default TaskList;
