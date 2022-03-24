// Data from Form -> Server

import { changeFunc } from "./content.js";

function clearLocalStorage() {
  localStorage.clear();
}

// Change content via Eventlistener not on onclick
const loginSide = document.querySelector('.loginSide');
  loginSide.addEventListener("click", (e) => {
    changeFunc('log');  
  })


const registerSide = document.querySelector('.registerSide');
if (registerSide !== null) {
  registerSide.addEventListener("click", (e) => {
    changeFunc('reg');
  })
}

const dashboard = document.querySelector('.dashboard');
if (dashboard !== null) {
    dashboard.addEventListener("click", (e) => {
      changeFunc('dash')
    })
}

const bossCreator = document.querySelector('.boss-creator');
if(bossCreator !== null) {
    bossCreator.addEventListener("click", (e) => {
      changeFunc('boss')
    })
}

const logout = document.querySelector('.logout');
if (logout !== null) {
    logout.addEventListener("click", (e) => {
      localStorage.clear("userData");
      changeFunc('out')
    })
}
// localStorage.clear() by logout
// JWT - Zeitbegrenztes Login
// socketIO backEnd to frontEnd