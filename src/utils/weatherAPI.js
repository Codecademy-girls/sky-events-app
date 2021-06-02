const apiKey = "aa184e88f5b64834a2a95148211305";
const baseUrl = "https://api.weatherapi.com/v1/";

const weatherAPI = {
  search(location) {
    const url = `${baseUrl}current.json?key=${apiKey}&q=${location}`;
    return fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        if (jsonResponse.location) {
          return {
            name: jsonResponse.location.name,
            country: jsonResponse.location.country,
            dateTime: jsonResponse.location.localtime,
          };
        } else {
          // placeholder for error message
          return {
            name: "search_fail",
            country: "search_fail",
            dateTime: "search_fail",
          };
        }
      });
  },

  currentAstronomy(location, dateTime) {
    const url = `${baseUrl}astronomy.json?key=${apiKey}&q=${location}&dt=${dateTime}`;
    return fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        if (jsonResponse.astronomy) {
          return {
            sunrise: jsonResponse.astronomy.astro.sunrise,
            sunset: jsonResponse.astronomy.astro.sunset,
            moonrise: jsonResponse.astronomy.astro.moonrise,
            moonset: jsonResponse.astronomy.astro.moonset,
            moon_phase: jsonResponse.astronomy.astro.moon_phase,
            moon_illumination: jsonResponse.astronomy.astro.moon_illumination,
          };
        } else {
          // placeholder for error message
          return {
            sunrise: "currentAstronomy_fail",
            sunset: "currentAstronomy_fail",
            moonrise: "currentAstronomy_fail",
            moonset: "currentAstronomy_fail",
            moon_phase: "currentAstronomy_fail",
            moon_illumination: "currentAstronomy_fail",
          };
        }
      });
  },

  currentWeather(location) {
    const url = `${baseUrl}forecast.json?key=${apiKey}&q=${location}&days=2&aqi=no&alerts=no`;
    return fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        if (jsonResponse.forecast) {
          console.log(
            "https:" +
              jsonResponse.forecast.forecastday[0].hour[0].condition.icon
          );
          return {
            current_00: {
              icon:
                "https:" +
                jsonResponse.forecast.forecastday[0].hour[0].condition.icon,
              text: jsonResponse.forecast.forecastday[0].hour[0].condition.text,
              temperature: jsonResponse.forecast.forecastday[0].hour[0].temp_c
            },
            current_03: {
              icon:
                "https:" +
                jsonResponse.forecast.forecastday[0].hour[3].condition.icon,
              text: jsonResponse.forecast.forecastday[0].hour[3].condition.text,
              temperature: jsonResponse.forecast.forecastday[0].hour[3].temp_c
            },
            current_06: {
              icon:
                "https:" +
                jsonResponse.forecast.forecastday[0].hour[6].condition.icon,
              text: jsonResponse.forecast.forecastday[0].hour[6].condition.text,
              temperature: jsonResponse.forecast.forecastday[0].hour[6].temp_c
            },
            current_09: {
              icon:
                "https:" +
                jsonResponse.forecast.forecastday[0].hour[9].condition.icon,
              text: jsonResponse.forecast.forecastday[0].hour[9].condition.text,
              temperature: jsonResponse.forecast.forecastday[0].hour[9].temp_c
            },
            current_12: {
              icon:
                "https:" +
                jsonResponse.forecast.forecastday[0].hour[12].condition.icon,
              text: jsonResponse.forecast.forecastday[0].hour[12].condition.text,
              temperature: jsonResponse.forecast.forecastday[0].hour[12].temp_c
            },
            current_15: {
              icon:
                "https:" +
                jsonResponse.forecast.forecastday[0].hour[15].condition.icon,
              text: jsonResponse.forecast.forecastday[0].hour[15].condition.text,
              temperature: jsonResponse.forecast.forecastday[0].hour[15].temp_c
            },
            current_18: {
              icon:
                "https:" +
                jsonResponse.forecast.forecastday[0].hour[18].condition.icon,
              text: jsonResponse.forecast.forecastday[0].hour[18].condition.text,
              temperature: jsonResponse.forecast.forecastday[0].hour[18].temp_c
            },
            current_21: {
              icon:
                "https:" +
                jsonResponse.forecast.forecastday[0].hour[21].condition.icon,
              text: jsonResponse.forecast.forecastday[0].hour[21].condition.text,
              temperature: jsonResponse.forecast.forecastday[0].hour[21].temp_c
            },
          };
        } else {
          // placeholder for error message
          return {
            icon: "currentWeather_fail",
          };
        }
      });
  },
};

export default weatherAPI;
