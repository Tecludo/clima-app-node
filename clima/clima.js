const axios = require('axios');



const getClima = async(lat, lon) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lon }&appid=d03c4da1a4b8fca1885e64d927ff1a0c&units=metric`);

    return resp.data.main.temp;
}


module.exports = {
    getClima
}