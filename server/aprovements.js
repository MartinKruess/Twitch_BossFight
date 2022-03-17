
export const bossLoadHTML = () => {
  document.querySelector("section").innerHTML = `
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
    <canvas>Drag and Drop Upload img</canvas>
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
  `
}
  
// app.get("/", (request, response) => {
//   console.log("success")
//   response.send("Test")
// })



// insert registerData to LoginDB -> successfull registrated register route
app.post('/register', (request, response) => {
    console.log('success')
    console.log(request.body)
    console.log(response)
    const loginData = request.body;
    loginDB.insert(loginData) // read and insert
    console.log(bossDB)
    response.json({
      loginName: request.body.loginName,
      password: request.body.password,
    })
  })