import { Routes, Route } from 'react-router-dom';

import HomePage from "./components/pages/HomePage";
import NewPost from "./components/post/NewPost";
import Login from "./components/pages/Login";
import Registration from "./components/pages/Registration";
import NotFound from "./components/pages/NotFound";

import './App.css';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />          
        <Route path="/new-post" element={<NewPost />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
