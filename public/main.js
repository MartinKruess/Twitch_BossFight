// Data from Form -> Server

import { changeFunc } from "./content.js";

const userData = JSON.parse(localStorage.getItem("userData"))
const login = (userData) => {

  if (userData) {
    document.querySelector('.navContainer').innerHTML = `
    <nav>
      <ul>
          <li><img src="../images/logo_white_large.png" alt="StreamCol Logo"></li>
          <li><span class="dashboard">Dashboard</span></li>
          <li><span class="boss-creater" >Boss Creator</span></li>
      </ul>
    </nav>
    `

    document.querySelector('header').innerHTML = `
      <section>

      </section>
      <section class="personal">
          <div class="profilContainer">
              <div id="inBoxContainer">
                  <label for="UserName">Fieserkillerkeks</label>
                  <label type="text" id="profilBtn"></label>
              </div>
              <ul id="profilDropdown">
                  <li>Profil</li>
                  <li>Settings</li>
                  <li>Logout</li>
              </ul>
          </div>
      </section>
    `
  }
}

login(userData)

// Change content via Eventlistener not on onclick
const loginSide = document.querySelector('.loginSide');
if (loginSide !== null) {
  loginSide.addEventListener("click", (e) => {
    changeFunc('log');
  })
}

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

const bossCreater = document.querySelector('.boss-creater');
if (bossCreater !== null) {
    bossCreater.addEventListener("click", (e) => {
        changeFunc('boss')
    })
}
// localStorage.clear() by logout
// JWT - Zeitbegrenztes Login
// socketIO backEnd to frontEnd