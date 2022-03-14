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
  })
});


// register Button + Fetch
registerEvent.addEventListener("submit", (e) => {
  e.preventDefault();

fetch('http://127.0.0.1:3000/registerAPI', options).then(response => {
    console.log(response);

  promise.response(true)
    .then (
      document.querySelector("section").innerHTML = `
          <h1>Twitch Bossfight System</h1>
          <div id="bossList">
              <div id="bossCard">
                  <div class="container">
                      <div id="previewList"></div>
                  </div>
                  <div class="container">
                      <div class="bossData">Testragon</div>
                      <div class="bossData">Leben 100</div>
                      <div class="bossData">abc</div>
                  </div>
              </div>
          </div>
          <canvas>Drag and Drop Upload img</canvas>
          <form action="#" method="POST" id="form">
              <div id="userID">ID: 0123</div>
              <h2>Boss Settings</h2>
              <label for="name">Name</label>
              <input type="text" name="bossName" id="name">
              <label for="health">Health</label>
              <input type="number" name="health" id="health">
              <label for="lv">Level</label>
              <input type="number" name="level" id="lv">
              <label for="x">Multiplier</label>
              <input type="float" name="multiplier" id="x">
              <label for="msg">Text after Death</label>
              <input type="text" name="msg" id="msg">

              <h2>Trigger Settings</label></h2>
              <label for="emote">Emotes</label>
              <input type="checkbox" name="emote" id="emote" checked><br>
              <label for="follow">Follows</label>
              <input type="checkbox" name="follow" id="follow"><br>
              <label for="sub">Subs</label>
              <input type="checkbox" name="sub" id="sub"><br>
              <label for="präfix">Emote Präfix</label>
              <input type="text" name="prefix" id="präfix">
              <input type="submit" id="sendBTN" value="Save Boss">
          </form>
        `,
    )
    .catch(console.error("Ups das hat nicht funktioniert!"))
}


// passwort Sicherheit bcrypt npm i

async function loginCheck(){

  

// socketIO backEnd to frontEnd