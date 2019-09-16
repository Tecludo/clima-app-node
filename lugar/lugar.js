const axios = require('axios');

const getLugarLatLon = async(dir) => {

    const encodedUlr = encodeURI(dir);
    //console.log(encodedUlr);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodedUlr }`,
        headers: { "x-rapidapi-key": "e39b953041msh6a88e78ee2091c1p167c60jsn8506af19d7bc" }
    });

    const resp = await instance.get();

    if (resp.data.Results.lenght === 0) {
        throw new Error(`No hay resultados para ${ dir }`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lon = data.lon;

    return {
        direccion,
        lat,
        lon
    }
}


module.exports = {
    getLugarLatLon
}