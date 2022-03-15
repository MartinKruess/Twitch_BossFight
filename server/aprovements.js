

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