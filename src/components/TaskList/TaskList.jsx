import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTask, removeTask } from '../../store/TaskSlice';
import { Link } from 'react-router-dom';

export const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Список задач</h1>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <input 
              type="checkbox" 
              checked={task.completed} 
              onChange={() => dispatch(toggleTask(task.id))} 
            />
            {task.text}
            <button onClick={() => dispatch(removeTask(task.id))}>Удалить</button>
          </li>
        ))}
      </ul>
      <Link to="/add">Добавить задачу</Link>
    </div>
  );
};

export default TaskList;
