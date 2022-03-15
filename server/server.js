// initializing
const express = require("express");
const Datastore = require('nedb');
const cors = require('cors'); // Sicherheit Ben! nachlesen
const isLogedIn = false;


// Express to function -> listen@all
const app = express();
app.listen(3000, ()=> console.log("listening at 3000"))
app.use(cors());
app.use(express.json({limit: "1mb"}))
app.use(express.static('public'))

// Routes
// const aprovements = require("./aprovements");
// app.use("/aprovements", aprovements);

// Create databases (login and boss)
const loginDB = new Datastore('login.db');
const bossDB = new Datastore('boss.db');
loginDB.loadDatabase();
bossDB.loadDatabase();

loginDB.insert.loginName = "Martin";
loginDB.insert.loginPW = "2222";

// insert formData to bossDB -> bossSpawned
app.post('/bossAPI', (request, response) => {
  console.log('bossSpawned')
  console.log(request.body)
  console.log(response)
  const bossData = request.body;
  bossDB.insert(bossData)
  console.log(bossDB)
  response.json({
    bossName: request.body.bossName,
    health: request.body.health,
    level: request.body.level,
    multiplier: request.body.multiplier,
    deathMSG: request.body.deathMSG,
    emoteDMG: request.body.emote,
    followDMG: request.body.follow,
    subDMG: request.body.sub,
    prefix: request.body.prefix,
  })
})

app.get("/", (request, response) => {
  console.log("success")
  response.send("Test")
})

// insert LoginData to LoginDB -> success Login route
app.post('/login', (request, response) => {
  console.log('login success')
  console.log(request.body)
  console.log(response)
  const loginNmAprove = request.body.loginName;
  const loginPWAprove = request.body.loginPW
  const loginObjInDB = loginDB.find(request.body.loginName)
  console.log(loginObjInDB)
  const isLogedIn = (loginNmAprove === loginObjInDB.loginName && loginPWAprove === loginObjInDB.loginPW) ? true : false;

  return response.json({
      isLogedIn,
      _id: loginObjInDB._id,
  });
})

// insert registerData to LoginDB -> successfull registrated register route
app.post('/register', (request, response) => {
  console.log('register success')
  console.log(request.body)
  console.log(response)
  const registerData = {
    loginName: request.body.registerName,
    loginPW: request.body.registerPW,
    userName: request.body.registerTwitch,
    twitchToken: request.body.registerToken,
  };
  (!loginDB.includes(registerData)) ? loginDB.insert(loginData) : document.querySelector("p").textContent = "Username is registrated!" // read and insert
  console.log(bossDB)
  response.json({
    loginName: request.body.loginName,
    password: request.body.password,
  })
})