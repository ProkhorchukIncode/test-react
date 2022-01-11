// import logo from './logo.svg';
// import './App.css';

import { Route, Routes, Navigate} from 'react-router-dom';

import HomeView from './views/HomeView';
import UserView from './views/UserView';

function App() {
  return (
    <Routes>
      <Route path='/users' element ={<HomeView/>}/>
      <Route path='/users/:id' element ={<UserView/>}/>
      <Route path='/' element ={<Navigate replace to='/users'/>}/>
    </Routes>
  );
}

export default App;
