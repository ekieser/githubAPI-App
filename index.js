'use strict';

function retrieveData(user) {
    const api = 'https://api.github.com/users' + user + '/repos?type=all&sort=full_name'
    fetch(api)
        .then(reponse => Response.json())
        .then(responseJson => displayData(responseJson))
        .catch(error => alert('There was an error. Try again later'));
}

function displayData(responseJson) {
    console.log(responseJson);
    $('all-results').append(`<ul id="all-repos"></ul>`);
    for(let i = 0; i < responseJson.length; i++) {
        $('all-repos').append(`<li><a href="${responseJson[i].clone_url}" target="_blank">${responseJson[i].name}</a></li>`
    )};
    $('all-results').append('<h3>Repo results for that username</h3>') 
}

function startSearch() {
    $('form').submit(event => {
        event.preventDefault();
        let inputValue = document.getElementById('username').value;
        let userValue = inputValue.toLowerCase();
        retrieveData(userValue);
    });
}

$(startSearch);