const container = document.querySelector('.container');

fetch('https://api.github.com/users/romebell')
.then(response => {
    return response.json();
})
.then(githubData => {
    const romeObj = {
        bio: githubData.bio,
        username: githubData.login,
        name: githubData.name
    }
    console.log(romeObj);
    
    const newElement = document.createElement('p');
    newElement.textContent = romeObj.name;
    // append newElement to container
    container.appendChild(newElement);

})
.catch(error => {
    console.log(error);
});