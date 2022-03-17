// Data from Form -> Server

//const { response } = require("express");

const bosses = [];
const basicSettings = document.getElementById('form');

basicSettings.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(basicSettings);
    console.log(formData.entries());

    const objBoss = {}

    for(let key of formData.keys()) {
      console.log(formData.get(key))
      objBoss[key] = formData.get(key)
    }
    bosses.push(objBoss)

    const bossData = objBoss;
    
    const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bossData)
  }

  fetch('http://127.0.0.1:3000/bossAPI', options).then(response => {
    console.log(response);
  })
});


const loginEvent = document.getElementById('loginForm');
// login Button + Fetch
loginEvent.addEventListener("submit", (e) => {
  e.preventDefault();

  let loginName = document.getElementById("loginName").value
  let loginPW = document.getElementById("loginPW").value
  const loginData = {loginName, loginPW};

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginData)
  }

  fetch('http://127.0.0.1:3000/login', options).then(response => {
      console.log(response);

      try {
        if(response._id)
          bossLoadHTML()
      } catch (error) {
        
      }
  });
})


// register Button + Fetch
const users = [];
const registerEvent = document.getElementById('registerForm');
registerEvent.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(registerEvent);
    console.log(formData.entries());

    const objUser = {}

    for(let key of formData.keys()) {
      console.log(formData.get(key))
      objUser[key] = formData.get(key)
    }
    users.push(objUser)

    const userData = objUser;
    
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData)
  }

  fetch('http://127.0.0.1:3000/register', options).then(response => {
      console.log(response);

  });
})


// passwort Sicherheit bcrypt npm i
// socketIO backEnd to frontEnd