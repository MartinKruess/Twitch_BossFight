// Data from Form -> Server

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

// login Button + Fetch
loginEvent.addEventListener("submit", (e) => {
  e.preventDefault();


fetch('http://127.0.0.1:3000/loginAPI', options).then(response => {
    console.log(response);
  })
});

// register Button + Fetch
registerEvent.addEventListener("submit", (e) => {
  e.preventDefault();

fetch('http://127.0.0.1:3000/registerAPI', options).then(response => {
    console.log(response);
  })
});
// passwort Sicherheit bcrypt npm i



// socketIO backEnd to frontEnd