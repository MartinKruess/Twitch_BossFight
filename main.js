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

getBossData()
  .then((response) => {
    console.log("Boss load Done!");
  })
  .catch((error) => {
    console.log("Boss load failed!");
    console.error(error);
  });

async function getBossData() {
  const response = await fetch("imgName");
  const blob = await response.blob();
  document.getElementById("bossList").src;
}

getPräfix()
  .then((response) => {
    console.log("Boss load Done!");
  })
  .catch((error) => {
    console.log("Boss load failed!");
    console.error(error);
  });

async function getBossData() {
  const response = await fetch(btyrlvwdnygp86fa3ohjtxmar9pje9);
  const blob = await response.blob();
  document.getElementById("bossList").src;
}

function bossData(
  name,
  level,
  health,
  damage,
  multiplier,
  emoteDmg,
  followDmg,
  subDmg
) {
  this.name = name;
  this.level = level;
  this.health = health;
  this.damage = damage;
  this.multiplier = multiplier;
  this.emoteDmg = emoteDmg;
  this.followDmg = followDmg;
  this.subDmg = subDmg;
}

const createBoss = () => {
  const newBoss = new bossData(
    bossName,
    bossLV,
    bossHealth,
    bossDMG,
    bossMulti,
    emoteDMG,
    followDmg,
    subDmg
  );
};

const form = document.getElementById("sendBTN");
const basicSettings = form.querySelectorAll(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log("Yes");
});

const bossCalc = () => {
  testragon.health += actuallBoss.health * actuallBoss.multiplier;
};
