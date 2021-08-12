import React from 'react';
import style from './Card.module.css';

export default function Card(props) {
  // acá va tu código
  
  return (
    <div id={`${style.borde}`}>
      <div className={`row align-items-center`}>
        <div className={` col-md-12 col-lg-12`}>
          <section className={`${style.first} row justify-content-around`}>
            <h4 className="col-sm-8 col-md-8 col-lg-5">{props.name}</h4>
            <button className={`${style.close} col-sm-2 col-md-2 col-lg-3 justify-self-end`} onClick={props.onClose}>X</button>
          </section>
        </div>
        
        <div id={`${style.second}`} className={`${style.secondMin} col-sm-6 col-md-4 col-lg-12 mt-sm-3 mt-md-3 mt-lg-3`}>
          <section className="row justify-content-center align-items-center">
            <span className={`${style.temperature} col-4`}>Min:</span>
            <span className={`${style.temp} col-4`}>{props.min}</span>
          </section>
        </div>

        <div id={`${style.second}`} className="col-sm-6 col-md-4 col-lg-12 mt-sm-3 mt-md-3 mt-lg-2">
          <section className="row justify-content-center">
            <span className={`${style.temperature} col-4`}>Max:</span>
            <span className = {`${style.temp} col-4`}>{props.max}</span>
          </section>
        </div>
        
        <img className="col-sm-2 col-md-2 col-lg-9" id={`${style.imagen}`} src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt='Imagen no encontrada'/>
      </div>
    </div>
  );
};