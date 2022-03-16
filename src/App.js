// import logo from './logo.svg';
import './App.css';
import {Login} from './component/Login'
import {Navbar} from './component/Navbar'
import {Profile} from "./component/Profile"
import {Logout} from './component/Logout'
// import {Demo} from './component/Demo'
// import{ApiDemo} from './component/ApiDemo';
import { ApiDemo2 } from './component/ApiDemo2';
// import { RoleApi } from './component/RoleApi';
  // import {UserApi} from './component/UserApi';
// import { FileUpload } from './component/FileUpload';
// import { SelectDemo } from './component/SelectDemo';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import { ApiDemo } from './component/ApiDemo';
// import { CategoryApi } from './component/CategoryApi';
// import { Daily_scheduleApi } from './component/Daily_schedule';
// import {ReminderApi} from './component/ReminderApi';
// import { Schedule_masterApi } from './component/Schedule_masterApi';
// import { Schedule_typeApi } from './component/Schedule_typeApi';

function App() {
  return (
    <React.Fragment>
      <Navbar/>


      {/* <Login/> */}
      <Profile/>
      <Logout/>
    {/* <SelectDemo/> */}
      {/* <FileUpload/> */}
      {/* <Demo/> */}
       <ApiDemo2/>
{/* <ApiDemo/>  */}
      {/* <RoleApi/> */}
        {/* <UserApi/>  */}
      {/* <CategoryApi/>
      <Daily_scheduleApi/>
      <ReminderApi/>
      <Schedule_masterApi/>
      <Schedule_typeApi/> */}
      {/* <ApiDemo/> */}

<Routes>
  <Route path='/login' element={<Login/>}/>
  <Route path='/profile' element={<Profile/>}/>
  <Route path='/logout' element={<Logout/>}/>
</Routes>
</React.Fragment>
  );
    } 

export default App;

