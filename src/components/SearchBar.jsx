import style from './Search.module.css';
import title from '../img/title.png';
import React, { useState } from "react";

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  
  const accept = (city) => {
    onSearch(city);
    setCity("");
    document.querySelector('#input').focus();
  } 

  return (
    <div>
      <div className={`${style.container} row justify-content-center align-items-center`}>
        <div className="col-6">
          <img className={`${style.image}`} src={title} />
        </div>
        <div className="col-6">
          <input id="input" type="text" placeholder="Type a city..." value={city} onChange={e => setCity(e.target.value)}/>
          <button onClick={()=> accept(city) }>Search</button>
        </div>
      </div>
    </div>
  )
};