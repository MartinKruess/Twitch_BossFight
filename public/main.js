// Data from Form -> Server
//const { response } = require("express");

const changeFunc = (onclickInput) => {
  const changer = document.querySelector('.mainContainer')

  switch (onclickInput) {
    case "log":
      changer.innerHTML =  `
        <form action="#" id="loginForm" method="POST">
          <h2>Login</h2>
          <label for="logName">Login</label>
          <input type="text" name="loginName" placeholder="Loginname" id="logName">
          <label for="logPW">Passwort</label>
          <input type="password" name="loginPW" placeholder="Password" id="logPW">
          <input type="submit" id="loginBTN" value="Login">
          <p id="textPanel">Noch keinen Account? <span onclick="changeFunc('reg')">zur Registrierung</span></p>
        </form>
      `
      break;
    case "reg":
      changer.innerHTML =  `
        <form action="#" id="registerForm" method="post">
          <h2>Registrieren</h2>
          <label for="regName">Loginname</label>
          <input type="text" name="registerName" placeholder="RegName" id="regName">
          <label for="preName">Anzeigename</label>
          <input type="text" name="previewName" placeholder="prevName" id="preName">
          <label for="regPW">Passwort</label>
          <input type="text" name="registerPW" placeholder="regPW" id="regPW">
          <label for="controllPW">Kontroll Passwort</label>
          <input type="text"  placeholder="controllPW" id="controllPW">
          
          <input type="submit" id="registerBTN" value="Register">
          <p id="textPanel">Hast du bereits einen Account? <span onclick="changeFunc('log')">zum Login</span></p>
        </form>
      `
      break;
    case "dash":
      
      break;
    case "boss":
      changer.innerHTML =  `<h1>Twitch Bossfight System</h1>
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
      <div class="preview"><strong>Drag&Drop</strong></div>
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
      </form>`
      break;                  

    default:
      break;
  }
}


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

  let loginName = document.querySelector("input[name='loginName']").value
  let loginPW = document.querySelector("input[name='loginPW']").value
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