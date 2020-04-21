const somethingWillHappen = () =>{
    return new Promise((resolve, reject) => {
        if(!true)
            resolve('resolve')
        else
            reject('HO HO ALGO SALIO MAL')
    })
}

somethingWillHappen()
    .then(res => console.log(res))
    .catch(e => console.log(e))

    somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));


const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('2 segundos despues...')
            }, 2000);
        } else {
            const error = new Error('whooop!!');
            reject(error);
        }
    });
}

somethingWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err));


Promise.all([somethingWillHappen(), somethingWillHappen2()])
.then(response => console.log(`Array results ${response}`))
.catch(err => console.log(`Array error ${err}`))
/*
Promise.race([somethingWillHappen(), somethingWillHappen2()])
.then(response => console.log(`Array  results ${response}`))
.catch(err => console.log(`Array error ${err}`))
*/