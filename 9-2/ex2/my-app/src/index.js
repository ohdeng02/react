import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
//import Library from "./chapter_03/Library"
//import Navbar from "./components/Navbar/Navbar.jsx";
//import Clock from "./chapter_04/Clock";
//import TimeSale from "./chapter_04/TimeSale";
//import CommentList from './chapter_05/CommentList';
//import Counter from './chapter_06/Counter';
//import GoodBad from './chapter_06/GoodBad';
//import RealtimeText from './chapter_06/RealtimeText';
//import NotificationList from './chapter_06/NotificationList';
//import YourCounter from './chapter_07/YourCounter';
//import Accommodate from './chapter_07/Accommodate';
//import ToggleTimer from './chapter_07/ToggleTimer';
//import MemoTest from './chapter_07/MemoTest';
//import MemoTest2 from './chapter_07/MemoTest2';
//import MyuseRef from './chapter_07/MyuseRef';
//import MyuseRef2 from './chapter_07/MyuseRef2';
//import LoginCont from './chapter_09/LoginCont';
//import MemoList from './chapter_09/MemoList';
//import NoRendering from './chapter_09/NoRendering';
//import LandingPage from './chapter_09/LandingPage';
//import LoginComponent from './components/Login/LoginComponent';
//import SignUp from './chapter_11/SignUp';
//import PasswordValid from './chapter_11/PasswordValid';
//import PassingCount from './chapter_12/PassingCount';
//import Calculator from './chapter_12/Calculator';
//import ProfileCard from './chapter_12/ProfileCard';
//import App from './client/App';
//import WelcomeDialog from './chapter_12/Specialization';
//import NoContextApp from './chapter_13/NoContextApp';
//import ContextApp from './chapter_13/ContextApp';
//import ContextHook from './chapter_13/ContextHook';
//import PageColor from './chapter_13/PageColor';
import User from './client/User';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <User />
  </React.StrictMode>
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
