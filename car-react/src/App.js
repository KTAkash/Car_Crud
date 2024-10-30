import Header from "./pages/header/Header";
import './App.css';
import { Routes, Route } from'react-router-dom';
import Dashboard from "./pages/dashboard/Dashboard";
import NoMatch from "./pages/noMatch/NoMatch";
import PostCar from "./pages/Car/PostCar";
import UpdateCar from "./pages/Car/UpdateCar";

function App() {
  return (
    <>
       <Header/>
       <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/car' element={<PostCar/>} />
        <Route path='/car/:id' element={<UpdateCar/>} />

        <Route path='*' element={<NoMatch/>} />
       </Routes>


    </>
  );
}

export default App;
