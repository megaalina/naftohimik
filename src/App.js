import Palac from "./Components/Palac/Palac";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import './app.css'
import Concerts from "./Components/Concerts/Concerts";
import Musicals from "./Components/Musicals/Musicals";
import Show from "./Components/Show/Show";
import Show2 from "./Components/Show2/Show2";
import { Context } from "./Content";
import { arr } from "./arr";
import OneItem from "./Components/OneItem/OneItem";
import { useState } from "react";


let concerts = arr.filter(elem => elem.category === 'Концерти');


function App() {

  const [count, setCount] = useState([]);
  const [addEl, setAddEl] = useState([])

  return (
    <Context.Provider value={[concerts, count, setCount, addEl, setAddEl]}>
      <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Palac/>}/>
        <Route path='/concerts' element={<Concerts />}/>
        <Route path='/concerts/concerts' element={<OneItem/>}/>
        <Route path='/musicals' element={<Musicals/>}/>
        <Route path='/show' element={<Show/>}/>
        <Route path='/musical_performances' element={<Show2/>}/>
        </Route>
      </Routes>
    </Context.Provider>
  );
}

export default App;
