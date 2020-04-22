const fetchData = require('../utils/fetchData');

const API_URI = 'https://rickandmortyapi.com/api/character/';

fetchData(API_URI)
    .then( data => {
        console.log(data.info.count)
        return fetchData(`${API_URI}${data.results[0].id}`);
    })
    .then( data => {
        console.log(data.name);
        return fetchData(data.origin.url)
    })
    .then( data => console.log(data))
    .catch( err =>  console.log(err))