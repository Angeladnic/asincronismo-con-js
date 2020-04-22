const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

function fetchData(url_api) {
    return new Promise((resolve, reject) => {
        const http = new XMLHttpRequest;
        http.open('GET', url_api, true);
        http.onreadystatechange = ((event) => {
            if (http.readyState === 4) {
                (http.status === 200)
                    ? resolve(JSON.parse(http.responseText))
                    : reject(new Error('Error => ', url_api))
            }
        });
        http.send();
    })

}

module.exports = fetchData;