const apiKey = 'e4ada062aaec4d408b1f7d904e363deb';
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
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    });
  } else {
    console.error('Geolocation is not supported by this browser.');
  }
}
 
