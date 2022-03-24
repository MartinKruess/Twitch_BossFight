import { eventFuncLog, eventFuncReg, eventFuncBosses } from "./modules.js";
const uData = JSON.parse(localStorage.getItem("userData"))

export const changeFunc = (onclickInput) => {
    const changer = document.querySelector('.mainContainer')

    switch (onclickInput) {
        case "log":
            changer.innerHTML = `
                <form action="#" id="loginForm" method="POST">
                <h2>Login</h2>
                <label for="logName">Login</label>
                <input type="text" name="loginName" placeholder="Loginname" id="logName">
                <label for="logPW">Passwort</label>
                <input type="password" name="loginPW" placeholder="Password" id="logPW">
                <input type="submit" id="loginBTN" value="Login">
                <p id="textPanel">Noch keinen Account? <span onclick="changeFunc('reg')">zur Registrierung</span></p>
                </form>
            `;
            
            eventFuncLog()
            break;
        case "reg":
            changer.innerHTML = `
                <form action="#" id="registerForm" method="post">
                <h2>Registrieren</h2>
                <label for="regName">Loginname</label>
                <input type="text" name="registerName" placeholder="RegName" id="regName">
                <label for="preName">Anzeigename</label>
                <input type="text" name="previewName" placeholder="prevName" id="preName">
                <label for="regPW">Passwort</label>
                <input type="text" name="registerPW" placeholder="regPW" id="regPW">
                <label for="controllPW">Kontroll Passwort</label>
                <input type="text"  placeholder="controllPW" id="controllPW">
                
                <input type="submit" id="registerBTN" value="Register">
                <p id="textPanel">Hast du bereits einen Account? <span onclick="changeFunc('log')">zum Login</span></p>
                </form>
            `;
            eventFuncReg()
            break;
        case "dash":
            document.querySelector('.navContainer').innerHTML = `
                <nav>
                <ul>
                    <li><img src="../images/logo_white_large.png" alt="StreamCol Logo"></li>
                    <li>StreamInfos</li>
                    <li><span class="dashboard">Dashboard</span></li>
                    <li><span class="analyse" >Analyze</span></li>
                    <li>Ressourcen</li>
                    <li><span class="overlay" >Overlays</span></li>
                    <li><span class="alert" >Alerts</span></li>
                    <li><span class="boss-creator" >Boss Creator</span></li>
                </ul>
                </nav>
            `
            document.querySelector('header').innerHTML = `
            <section>
      
            </section>
            <section class="personal">
                <div class="profilContainer">
                    <div id="inBoxContainer">
                        <div id="userName">Fieserkillerkeks</div>
                        <label type="text" id="profilBtn"></label>
                    </div>
                    <ul id="profilDropdown">
                        <li>Profil</li>
                        <li>Settings</li>
                        <li class="logoutSide">Logout</li>
                    </ul>
                </div>
            </section>
          `
          document.querySelector('#userName').textContent = uData.previewName

            changer.innerHTML = `
            <h1 id="landH1">Dashboard</h1>
                <div class="gridContainer">
                    <div>
                        <div>
                            <h2>Statistik</h2>

                        </div>
                    </div>
                    <div>
                        <div>
                            <h2>Follower</h2>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h2>Subscriber</h2>

                        </div>
                    </div>
                    <div>
                        <div>
                            <h2>Affiliate</h2>
                        </div>
                    </div>
                    <div class="lastStream">
                        <div>
                            <h2>Last Stream</h2>
                        </div>
                    </div>
                    <div class="gridOverview">
                        <div>
                            <h2>Overview</h2>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h2>News</h2>
                        </div>
                    </div>
                </div>
            `
            break;

        case "boss":
            changer.innerHTML = `
            <h1>Twitch Bossfight System</h1>
                <div id="bossList">
                    <div id="bossCard">
                        <div class="container">
                            <div id="previewList"></div>
                        </div>
                        <div class="container">
                            <div class="bossData">Testragon</div>
                            <div class="bossData">Leben 100</div>
                            <div class="bossData">abc</div>
                        </div>
                    </div>
                </div>
                <div class="preview"><strong>Drag&Drop</strong></div>
                <form action="#" method="POST" id="form">
                    <input name="uID" id="userID" value="ID: 0123">
                    <h2>Boss Settings</h2>
                    <label for="name">Name</label>
                    <input type="text" name="bossName" id="name">
                    <label for="health">Health</label>
                    <input type="number" name="health" id="health">
                    <label for="lv">Level</label>
                    <input type="number" name="level" id="lv">
                    <label for="msg">Text after Death</label>
                    <input type="text" name="msg" id="msg">

                    <h2>Trigger Settings</label></h2>
                    <label for="emote">Emotes</label>
                    <input type="checkbox" name="emote" id="emote" checked><br>
                    <label for="follow">Follows</label>
                    <input type="checkbox" name="follow" id="follow"><br>
                    <label for="sub">Subs</label>
                    <input type="checkbox" name="sub" id="sub"><br>
                    <label for="präfix">Emote Präfix</label>
                    <input type="text" name="prefix" id="präfix">
                    <input type="submit" id="sendBTN" value="Save Boss">
                </form>
            `;
            document.querySelector('#userID').value = uData.id
            eventFuncBosses(uData.id)
            break;

        default:
            changer.innerHTML = `
                <h1 id="landH1"><strong>StreamCol -</strong> Pimp It Up!</h1>
                <div id="slogan">
                    <ul>
                        <li>Better Handling</li>
                        <li>Better Performence</li>
                        <li>Better Flow</li>
                        <li>Better Content</li>
                    </ul>
                    <input type="submit" value="Jetzt Durchstarten">
                </div>
                <div class="video"></div>
                <div class="imgLine">
                    <img src="../images/twitch.svg" alt="">
                    <img src="../images/youtube.svg" alt="">
                    <img src="../images/fbGaming.svg" alt="">
                </div>
                `
            break;
    }  
}