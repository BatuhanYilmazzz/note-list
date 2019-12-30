import React, { useContext, useState } from 'react';
import { TaskListContext } from '../context/TaskListContext';

const TaskForm = () => {
  const { addTask, clearList } = useContext(TaskListContext);
  const [title, setTitle] = useState('');

  const handleChange = e => {
    setTitle(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    addTask(title);
    setTitle('');
  };
  return (
    <form onSubmit={handleSubmit} className='form'>
      <input
        type='text'
        className='task-input'
        placeholder='Please Enter Your Task...'
        onChange={handleChange}
        value={title}
        required
      />
      <div className='buttons'>
        <button className='btn add-task-btn' type='submit'>
          Add Task
        </button>
        <button onClick={clearList} className='btn clear-btn'>
          Clear
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
