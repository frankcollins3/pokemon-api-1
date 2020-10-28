fetch('delta url endpoint')
.then(response => {
    console.log(response);
    return response.json();
})
.then(deltaData => {
 // business logic
 const button = document.createElement('button');
 button.setArribute('href', deltaData.flight);

})
.catch(error => {
    console.log(error);
});

fetch('spirit url endpoint')
.then(response => {
    return response.json();
})
.then(deltaData => {
 // business logic
 const button = document.createElement('button');
 button.setArribute('href', deltaData.flight);

})
.catch(error => {
    console.log(error);
});
fetch('delta url endpoint')
.then(response => {
    return response.json();
})
.then(deltaData => {
 // business logic
 const button = document.createElement('button');
 button.setArribute('href', deltaData.flight);

})
.catch(error => {
    console.log(error);
});
fetch('american airlines url endpoint')
.then(response => {
    return response.json();
})
.then(deltaData => {
 // business logic
 const button = document.createElement('button');
 button.setArribute('href', deltaData.flight);

})
.catch(error => {
    console.log(error);
});
fetch('delta url endpoint')
.then(response => {
    return response.json();
})
.then(deltaData => {
 // business logic
 const button = document.createElement('button');
 button.setArribute('href', deltaData.flight);

})
.catch(error => {
    console.log(error);
});