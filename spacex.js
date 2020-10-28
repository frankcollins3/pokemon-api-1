fetch('https://api.spacexdata.com/v3/capsules')
.then(response => {
    return response.json();
})
.then(spacexData => {
    console.log(spacexData);
})
.catch(error => {
    console.log(error);
});

fetch('https://api.spacexdata.com/v3/rockets/falcon9')
.then(response => {
    return response.json();
})
.then(data => {
    console.log(data)
})
.catch(err => {
    console.log(err);
})

fetch('https://api.spacexdata.com/v3/ships')
.then(response => {
    return response.json();
})
.then(shipData => {
    // shipData is response.json() that is being returned
    console.log(shipData);
})
.catch(error => {
    console.log(error);
})