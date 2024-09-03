import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { AddTask } from './components/AddTask/AddTask.jsx';
import { TaskList } from './components/TaskList/TaskList.jsx';


export const App = ()=>{
  return (
  <>
    <Header/>
    <Routes>
      <Route path='add' element={<AddTask/>}/>
      <Route path='/' element={<TaskList/>}/>
    </Routes>
  </>
  );
}

export default App;


