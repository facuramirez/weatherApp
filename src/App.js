import React, { useState } from 'react';
import SearchBar from './components/SearchBar.jsx';
import Cards from './components/Cards.jsx';
import './App.css';
import swal from 'sweetalert';

export default function App() {
  const [cities, setCities] = useState([]);
  const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

  function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        let findId = cities.find( (e) => e.id === recurso.id );
        if(findId !== undefined){ 
          return swal({
            title: 'Ciudad ya agregada!',
            text: 'La ciudad que deseas agregar ya se encuentra en pantalla',
            icon: 'warning',
            buttons: {
              confirm: {
                text: 'OK'
                // value: null,
                // visible: true,
                // className: 'btn btn-confirm',
                // closeModal: true
                // },
                // cancel: {
                //   text: 'Cancelar'
                // }
              }
            }
          })
        }
  
        if(recurso.main !== undefined){          
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          swal({
            title: 'Ciudad no encontrada!',
            text: 'La ciudad que deseas agregar no se encuentra en la lista',
            icon: 'warning',
            buttons: {
              confirm: {
                text: 'OK'
                // value: null,
                // visible: true,
                // className: 'btn btn-confirm',
                // closeModal: true
                // },
                // cancel: {
                //   text: 'Cancelar'
                // }
              }
            }
          })
        }
      });
  }

  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }

  return (
    <div className="App container-fluid">
      <div className="Home row">
        <div className="SearchBar col-12">
          <SearchBar onSearch={onSearch}
          />
        </div>

        <div className="Cards col-12">
          <Cards cities={cities} onClose={onClose} />
        </div>

        <div className="Footer col-12 align-self-end">          
          Developed by Facundo Ramírez &copy;          
        </div>
      </div>
    </div>
  );
}

