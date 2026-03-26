function getUserId(username) {
    fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
}

getUserId('Bret');

async 