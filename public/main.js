// Data from Form -> Server

import { changeFunc } from "./content.js";

let isLogedIn = false
async function login(isLogedIn, _id) {

  if (isLogedIn === true) {
    document.querySelector('body').innerHTML = `<nav>
    <ul>
        <li><img src="../images/logo_white_large.png" alt="StreamCol Logo"></li>
        <li><span class="dashboard">Dashboard</span></li>
        <li><span class="boss-creater" >Boss Creator</span></li>
    </ul>
  </nav>`
  }
}

// Change content via Eventlistener not on onclick
const loginSide = document.querySelector('.loginSide');
loginSide.addEventListener("click", (e) => {
  changeFunc('log');
})

const registerSide = document.querySelector('.registerSide');
registerSide.addEventListener("click", (e) => {
  changeFunc('reg');
})


// JWT - Zeitbegrenztes Login
// socketIO backEnd to frontEnd