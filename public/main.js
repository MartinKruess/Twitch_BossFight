// API Key: btyrlvwdnygp86fa3ohjtxmar9pje9
// Client ID: btyrlvwdnygp86fa3ohjtxmar9pje9
// Twitch-API-Client-Secret: zbd1xfm9dmo1u412r5ybajv2nb6ame
// Key: cbj43s+X1FHjmj1VZomlWKULmbj++t2x5JS2CeCEBU0=  Token -> User Zuordnung
// RootTwitchHH1!
// TwitchHH1!

// WERTE
// Emote = 0.5 * Lv
// Follow = 2 * Lv
// Sub = 5 * Lv

// Rechnung: BaseHP * (Multiplier * Lv)
//                      |
// Beispiel: Lv 1 = 100 Health = 20 subs || 50 Follows || 200 Emotes
// Beispiel: je Lv = 100 * Multiplier

// JSON parshing JS
/*
    API verwenden
    LoginUser DB nach einloggen mit twitchtoken
    rules
*/

// AUS DB
// getBossData()
//   .then((response) => {
//     console.log("Boss load Done!");
//   })
//   .catch((error) => {
//     console.log("Boss load failed!");
//     console.error(error);
//   });

// async function getBossData() {
 // const response = await fetch("imgName");
 // const blob = await response.blob();
 // document.getElementById("bossList").src = imgName;
// }

// getPräfix()
//   .then((response) => {
//     console.log("Boss load Done!");
//   })
//   .catch((error) => {
//     console.log("Boss load failed!");
//     console.error(error);
//   });

// async function getPräfix() {
//   const response = await fetch("btyrlvwdnygp86fa3ohjtxmar9pje9");//erxperimental not important NOW
//   const blob = await response.prefix();
//   document.getElementById("bossList").src;
// }

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
    credentials:"include",
    headers: {
      'Content-Type': 'app/json',
      'Access-Control-Allow-Origin': 'http://127.0.0.1:5500',
    },
    body: JSON.stringify(bossData)
  }

  fetch('/bossAPI', options).then(response => {
    console.log(response);
  })
});