// initializing
const express = require("express");
const Datastore = require('nedb');
//const cors = require('cors'); // Sicherheit Ben! nachlesen

// Express to function -> listen@all
const app = express();
app.listen(3000, ()=> console.log("listening at 3000"))
app.use(express.static('public'))
app.use(express.json({limit: "1mb"}))

// app.use( // Sicherheit Ben! nachlesen
//   cors({
//     origin: "http://127.0.0.1:5500",
//     methods:["POST"]
//   })
// )

// Create databases (login and boss)
const loginDB = new Datastore('login.db');
const bossDB = new Datastore('boss.db');
loginDB.loadDatabase();
bossDB.loadDatabase();

// insert Data to database and answer client
app.post('/bossAPI', (request, response) => {
  console.log('request!')
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