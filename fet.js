// const  url = 'https://jsonplaceholder.typicode.com/users';

// function sendRequest(method, url, body = null) {
//     return new Promise((resolve,reject) =>{
//         const xhr = new XMLHttpRequest();

//         xhr.open(method, url);
    
//         xhr.responseType = 'json'
//         xhr.setRequestHeader('Content-Type', 'application/json')
    
//         xhr.onload = () => {
//             if(xhr.status >= 400) {
//                 reject(xhr.response)
//             } else {
//                 resolve(xhr.response)
//             }
//         }
    
//         xhr.onerror = () => {
//             consol.log(xhr.response)
//         }
    
//         xhr.send(JSON.stringify(body));
//     })
// }

// const body = {
//     name: 'John',
//     age: 18,
//     city: 'London'
// }


// sendRequest('POST', url, body)
//     .then(data => console.log(data))
//     .catch(err => console.error(err))



    const  url = 'https://jsonplaceholder.typicode.com/users';

function sendRequest(method, url, body = null) {
    const headers = {
        'Content-Type': 'application/json'
    }
   return fetch(url, {
       method: method,
       body: JSON.stringify(body),
       headers: headers
   }).then(response => {
       return response.json()
   })
}

const body = {
    name: 'John',
    age: 18,
    city: 'London'
}


// sendRequest('GET', url, body)
//     .then(data => console.log(data))
//     .catch(err => console.error(err))


sendRequest('POST', url, body)
    .then(data => console.log(data))
    .catch(err => console.error(err))