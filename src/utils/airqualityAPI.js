const apiKey = '';
const baseUrl = 'air-quality.p.rapidapi.com';

const airqualityAPI = {
  currentAirQuality(coords) {
    console.log(coords);
    // const lat = coords.split(',')(0);
    // const lon = coords.split(',')(1);
    const url = `https://${baseUrl}/current/airquality?lon=-73.00597&lat=40.71427`;
    console.log('API call is: ' + url);

    return fetch(url, {
      method: 'GET',
      headers: {
        'x-rapidapi-key': apiKey,
        'x-rapidapi-host': baseUrl,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        return {
          aqi: jsonResponse.data[0].aqi,
          o3: jsonResponse.data[0].o3,
          so2: jsonResponse.data[0].so2,
          no2: jsonResponse.data[0].no2,
          co: jsonResponse.data[0].co,
          pm: jsonResponse.data[0].pm10,
        };
      })
      .catch((err) => {
        console.error(err);
      });
  },
};

export default airqualityAPI;
