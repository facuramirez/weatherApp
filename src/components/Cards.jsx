import React from 'react';
import Card from './Card.jsx';
import style from './Cards.module.css';

export default function Cards({cities, onClose}) {
  // acá va tu código
  // tip, podés usar un map
  if(cities.length === 0) {
    return (
      <div>
        <h1>Enter a city in the search bar!</h1>
      </div>
    )
  }

  return (
    <div id={`${style.container}`}>
      {
        cities && cities.map(ciudad => 
        <Card
          key={ciudad.id}
          name = {ciudad.name}
          min = {ciudad.min}
          max = {ciudad.max}
          img = {ciudad.img}
          onClose = {()=> onClose(ciudad.id)}    
        />
      )}
    </div>
  )
};
