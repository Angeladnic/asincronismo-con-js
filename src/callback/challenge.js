const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const API_URI = 'https://rickandmortyapi.com/api/character/';

function fetchData(url_api, cb) {
    let http = new XMLHttpRequest;
    http.open('GET', url_api, true);
    http.onreadystatechange = (event) => {
        if (http.readyState === 4) {
            cb(null, JSON.parse(http.responseText))
        } else {
            const error = new Error('Error' + url_api)
            //return console.log("SHOW-ERROR =======>>>>>",error);
            return cb(error, null)
        }
    }
    http.send();
}

fetchData(API_URI, function (error1, data1) {
    if (error1) return console.log(error1)
    fetchData(API_URI + data1.results[0].id, function (error2, data2) {
        if (error2) return console.log(error2)
        fetchData(data2.origin.url, function (error3, data3) {
            if (error3) return console.log(error3)
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        });
    });
});