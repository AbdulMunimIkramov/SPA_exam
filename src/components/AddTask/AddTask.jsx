import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../store/TaskSlice';
import { useNavigate } from 'react-router-dom';

export const AddTask = () => {
  const [taskText, setTaskText] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      dispatch(addTask(taskText));
      navigate('/');
    }
  };

  return (
    <div>
      <h1>Добавить задачу</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={taskText} 
          onChange={(e) => setTaskText(e.target.value)} 
        />
        <button type="submit">Добавить</button>
      </form>
    </div>
  );
};

export default AddTask;
