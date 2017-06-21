const API_KEY = '8c3cb0da3549430e9f17b8cbf7d7c0fe';
const BASE_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`; // template strings

import axios from 'axios';

//ajax request yapcaz 'axios' ajax çağrılarına imkan veriyor
// mw kullanımı da var

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(cityName){
  const url = `${BASE_URL}&q=${cityName},us`;
  const request = axios.get(url);

  return{
    type: FETCH_WEATHER,
    payload: request
  };
}
