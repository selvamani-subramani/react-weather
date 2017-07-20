import axios from 'axios';

const API_KEY = '22e96cd35596f9800cf39b98b0f1e3d2';
const BASE_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=' + API_KEY;

function getWeather(location) {
  const url = `${BASE_URL}&q=${location}`;
  return axios.get(url).then(response => response.data);
}

export {getWeather};
