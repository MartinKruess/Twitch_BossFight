// initializing
const express = require("express");
const Datastore = require('nedb');
const bcrypt = require('bcrypt')
const cors = require('cors'); // Sicherheit Ben! nachlesen
const { table } = require("console");
const isLogedIn = false;


// Express to function -> listen@all
const app = express();
app.listen(3000, () => console.log("listening at 3000"))
app.use(cors());
app.use(express.json({ limit: "1mb" }))
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('BackEnd is running...')
})


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

  const loginData = {
    loginName: request.body.loginName,
    loginPW: request.body.loginPW,
  }

  loginDB.find({ loginName: loginData.loginName }, function (err, docs) {
    equalHashedPW(loginData)
    async function equalHashedPW(data) {
      try {
        // console.log("Docs", docs[0].loginPW)
        // console.log("Data body", data.loginPW)
        const hashedPW = await bcrypt.compare(data.loginPW, docs[0].loginPW)
        console.log(hashedPW)
        if (hashedPW) {
          response.json({
            previewName: docs[0].previewName,
            id: docs[0]._id
          })
        } else {
          console.log("Msg: Login success → false")
        }
      } catch (error) {
        console.log(`------------Failed to hash!------------
      
            ${error}`)
      }
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

  loginDB.find({ loginName: registerData.loginName }, function (err, docs) {

    if (docs.length == 0) {
      getHashedPW(registerData)
      async function getHashedPW(obj) {
        try {
          const hashedPW = await bcrypt.hash(obj.loginPW, 10)
          obj.loginPW = hashedPW
          loginDB.insert(obj)
          response.json({
            MSG: obj.loginName
          })
        } catch (error) {
          console.log(`------------Failed to hash!------------

          ${error}`)
        }
      }
      console.log(`Msg: Registration success → true`)
    } else {
      console.log("Msg: Registration success → false")
    }
  })
})

