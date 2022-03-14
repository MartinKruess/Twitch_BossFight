// insert LoginData to LoginDB -> success Login route

app.post('/login', (request, response) => {
    console.log('success')
    console.log(request.body)
    console.log(response)
    const loginNameAprove = request.body.loginName;
    const loginPWAprove = request.body.loginPW
    const loginObjInDB = loginDB.find(request.body.loginName)
    const isLogedIn = (loginNameAprove === loginObjInDB.loginName
    && loginPWAprove === loginObjInDB.loginPW) ? true : false;
  
    return response.json({
        isLogedIn,
        _id: loginObjInDB._id,
        // nutzename: loginObjInDB.nutzename,
    });
  })

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