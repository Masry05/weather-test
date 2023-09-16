/*const apiKey = 'e4ada062aaec4d408b1f7d904e363deb';
let lat, lon;
async function getCurrentWeather() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      lat = position.coords.latitude;
      lon = position.coords.longitude;
      const apiUrl = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${apiKey}`;
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          document.querySelector(".temp").innerHTML=`${data.data[0].app_temp}`;
          document.querySelector(".location").innerHTML=`${data.data[0].timezone}`;
          
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    });
  } else {
    console.error('Geolocation is not supported by this browser.');
  }
}*/
const apiKey = 'a7a038d2d8894643a57204848231609'; // Replace with your WeatherAPI key
let lat, lon;

async function getCurrentWeather() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      lat = position.coords.latitude;
      lon = position.coords.longitude;
      const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${lon}`;
      
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          document.querySelector(".temp").innerHTML = `${data.current.temp_c}°C`;
          document.querySelector(".location").innerHTML = `${data.location.name}, ${data.location.country}`;
          console.log(data)
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    });
  } else {
    console.error('Geolocation is not supported by this browser.');
  }
}



 
