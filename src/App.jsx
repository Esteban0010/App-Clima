import React, { useEffect, useState } from 'react'
import { getCountries } from "./services/getCountries"
import { getCities } from "./services/getCities"
import { getCityWeather } from "./services/whater"
import "./App.css"


export default function App() {
  const [countries, setCountries] = useState([])
  const [cities, setCities] = useState([])
  const [weather, setWeather] = useState(null)


  useEffect(() => {
    (async () => {
      setCountries(await getCountries())
    })();

  }, [])

  const countryHandler = async e => {
    setWeather(null)
    e.currentTarget.value && setCities(await getCities(e.currentTarget.value))
    
  }
  const cityHandler = async e => {
    setWeather(null)
    e.currentTarget.value && setWeather(await getCityWeather(e.currentTarget.value))
   
    console.log(weather)
  }

  return (
    <div  className='App'>
      <h1 className='titulo'>App del clima</h1>
      <div className='Conteiner'>
      <div className='pais'>
        <label >Elige un pais </label>
        <select onChange={countryHandler} className="select">
          <option value="Selecciona">Selecciona</option>
          {countries.map(country => <option key={country.cca2} value={country.cca2}>{country.name.common}</option>)}
        </select>
      </div>
      {cities.length > 0 && (
        <div className='pais'>
          <label>Elige una Ciudad </label>
          <select onChange={cityHandler} className="select">
            {cities.map(city => <option key={city.id}>{city.name}</option>)}
          </select>
        </div>
      )}
      {weather && (
        <div className='datos'>
          <h2>Temperatura actual : {weather.main.temp.toFixed()}°</h2>
          <p>Min : {weather.main.temp_min.toFixed()}°</p>
          <p>Max : {weather.main.temp_max.toFixed()}°</p>{console.log(weather.weather[0].icon)}
          <div className='icon'>
          <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather icon"  />
        </div>
        </div>
      )}
      </div>
    </div>
  )
}

