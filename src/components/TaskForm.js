import React from 'react';

const TaskForm = () => {
  return (
    <form className='form'>
      <input
        type='text'
        className='task-input'
        placeholder='Please Enter Your Task...'
        required
      />
      <div className='buttons'>
        <button className='btn add-task-btn' type='submit'>
          Add Task
        </button>
        <button className='btn clear-btn'>Clear</button>
      </div>
    </form>
  );
};

export default TaskForm;
