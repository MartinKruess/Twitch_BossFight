import { eventFuncLog, eventFuncReg, eventFuncBosses } from "./modules.js";

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
            changer.innerHTML = `Work in progress...`
            break;

        case "boss":
            changer.innerHTML = `<h1>Twitch Bossfight System</h1>
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
                <div id="userID">ID: 0123</div>
                <h2>Boss Settings</h2>
                <label for="name">Name</label>
                <input type="text" name="bossName" id="name">
                <label for="health">Health</label>
                <input type="number" name="health" id="health">
                <label for="lv">Level</label>
                <input type="number" name="level" id="lv">
                <label for="x">Multiplier</label>
                <input type="float" name="multiplier" id="x">
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
            eventFuncBosses()
            break;

        default:
            break;
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
}