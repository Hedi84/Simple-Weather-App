const readline = require('readline-sync');
const importParse = require('./Parser.js');


function askPostcode () {
  var postcode = readline.prompt();
  return postcode
}


function createPostcodeUrl () {
  var postcode = askPostcode()
  var url = `api.postcodes.io/postcodes/${postcode}`;
  return url
}

function getPostcodeData (data) {
 var url =  createPostcodeUrl()
 importParse.parseURL(getLatLong, url)
}

function getLatLong(data) {
  var latLong = [];
  var lat = data.result.latitude;
  var long = data.result.longitude;
  latLong.push(lat);
  latLong.push(long);
  getWeatherData(latLong)
}

function createWeatherUrl (array){
  var url = `https://fcc-weather-api.glitch.me/api/current?lat=${array[0]}&lon=${array[1]}`
  return url
}

function getWeatherData (array) {
 var url =  createWeatherUrl(array)
 importParse.parseURL(displayWeatherInfo, url)
}

function displayWeatherInfo (data) {
  // console.log(data.main)
  console.log(`today in ${data.name}, the temperature is ${data.main.temp}°C, with ${data.weather[0].description}`)
}
  getPostcodeData()
