import logo from './logo.svg';
import './App.css';
import{ApiDemo} from './component/ApiDemo';
import { ApiDemo2 } from './component/ApiDemo2';
// import { RoleApi } from './component/RoleApi';
// import {UserApi} from './component/UserApi';
// import { CategoryApi } from './component/CategoryApi';
// import { Daily_scheduleApi } from './component/Daily_schedule';
// import {ReminderApi} from './component/ReminderApi';
// import { Schedule_masterApi } from './component/Schedule_masterApi';
// import { Schedule_typeApi } from './component/Schedule_typeApi';

function App() {
  return (
    <div className="App">
      <ApiDemo2/>
{/* <ApiDemo/> */}
      {/* <RoleApi/> */}
      {/* <UserApi/>
      <CategoryApi/>
      <Daily_scheduleApi/>
      <ReminderApi/>
      <Schedule_masterApi/>
      <Schedule_typeApi/> */}
      
    </div>
  );
}

export default App;
