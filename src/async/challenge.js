const fetchData = require('../utils/fetchData');

const API_URI = 'https://rickandmortyapi.com/api/character/';

const functionLoad = async (url_api) =>{
    console.time();
    try {
        const data = await fetchData(url_api);
        const character = await fetchData(`${url_api}${data.results[0].id}`);
        const origin = await fetchData(character.origin.url);
        const result = {count:data.info.count, name:character.name, dimension:origin.dimension}
        console.table(result);
    } catch {
        console.log(error)
    }
    console.timeEnd()
}
console.log('Inicia')
functionLoad(API_URI);
console.log('Termina')
