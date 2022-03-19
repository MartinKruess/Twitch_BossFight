// initializing
const express = require("express");
const Datastore = require('nedb');
const cors = require('cors'); // Sicherheit Ben! nachlesen
const { table } = require("console");
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

// insert formData to bossDB -> bossSpawned
app.post('/bossAPI', (request, response) => {
  console.log('bossSpawned')
  // console.log(request.body)
  // console.log(response)
  const bossData = request.body;
  bossDB.insert(bossData)
  //console.log(bossDB)
  response.json({
    bossName: request.body.bossName,
    health: request.body.health,
    level: request.body.level,
    deathMSG: request.body.deathMSG,
    emoteDMG: request.body.emote,
    followDMG: request.body.follow,
    subDMG: request.body.sub,
    prefix: request.body.prefix,
  })
})

// insert LoginData to LoginDB -> success Login route
app.post('/login', (request, response) => {
  console.log('try to login...')
  //console.log(request.body)
  //console.log(response)

  const loginData = {
    loginName: request.body.loginName,
    loginPW: request.body.loginPW,
  }

  const isLogedIn = false

  loginDB.find({loginName : loginData.loginName }, function (err, docs) {

    if(loginData.loginName == docs[0].loginName && loginData.loginPW == docs[0].loginPW){
      response.json({
      loginName: request.body.loginName,
      _id: docs._id
      })
      console.log(`Msg: login success → ${docs.loginName}`)
    }else{
      console.log("Msg: Daten falsch oder nicht Registriert!")
    }
  })
})

// insert registerData to LoginDB -> successfull registrated register route
app.post('/register', (request, response) => {
  
  console.log('try to registrate...')
  const registerData = {
    loginName: request.body.registerName,
    loginPW: request.body.registerPW,
    previewName: request.body.previewName, 
  }

  const isRegistered = false

  loginDB.find({loginName : registerData.loginName }, function (err, docs) {

    if(docs.length == 0){
      loginDB.insert(registerData)
      response.json({
      loginName: request.body.loginName
      })
      console.log(`Msg: registration success → ${docs.loginName}`)
    }else{
      console.log("Msg: Username is already registrated!")
    }
  })
})