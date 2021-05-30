const apiKey = '';
const baseUrl = 'https://api.weatherapi.com/v1/current.json';

const weatherAPI = {
    search(location) {
        const url = `${baseUrl}?key=${apiKey}&q=${location}`;
        return fetch(url)
        .then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.location) {
               return {
                    name: jsonResponse.location.name,
                    country: jsonResponse.location.country
               }
            } else {
                // placeholder for error message
                return {
                    name: 'fail',
                    country: 'fail'
                }
            }
        });
    }
}

export default weatherAPI;