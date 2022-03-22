// login Button + Fetch
export const eventFuncLog = () => {
    const loginEvent = document.getElementById('loginForm');
    let userData = {}
    
    if (loginEvent !== null) {
        loginEvent.addEventListener("submit", (e) => {
        e.preventDefault();
  
        let loginName = document.querySelector("input[name='loginName']").value
        let loginPW = document.querySelector("input[name='loginPW']").value
        const loginData = { loginName, loginPW };
        
        const options = {
          method: 'POST',
          headers: {
            'content-Type': 'application/json',
          },
          body: JSON.stringify(loginData)
        }
  
        fetch('http://127.0.0.1:3000/login', options)
        .then(response => response.json())
        .then(data => {
          userData = data
          localStorage.setItem("userData", JSON.stringify(userData)) // stringify = übersetze in str
        })
        })
    }
  }

  const userData = JSON.parse(localStorage.getItem("userData")) // parse = übersetze zu json
  
  // register Button + Fetch
  export const eventFuncReg = () => {
    const registerEvent = document.getElementById('registerForm');
    const users = [];
  
    if (registerEvent !== null) {
      registerEvent.addEventListener("submit", (e) => {
        e.preventDefault();
  
        const formData = new FormData(registerEvent);
        console.log(formData.entries());
  
        const objUser = {}
  
        for (let key of formData.keys()) {
          console.log(formData.get(key))
          objUser[key] = formData.get(key)
        }
        users.push(objUser)
        const userData = objUser;
  
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData)
        }
  
        fetch('http://127.0.0.1:3000/register', options).then(response => {
          console.log(response);

        });
      })
    }
  }
  
  // Upload Bosses to DB
  export const eventFuncBosses = () => {
    const basicSettings = document.getElementById('form');
    if (basicSettings) {
      const bosses = [];
      basicSettings.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(basicSettings);
        console.log(formData.entries());
  
        const objBoss = {}
  
        for (let key of formData.keys()) {
          console.log(formData.get(key))
          objBoss[key] = formData.get(key)
        }
        bosses.push(objBoss)
  
        const bossData = objBoss;
  
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(bossData)
        }
  
        fetch('http://127.0.0.1:3000/bossAPI', options).then(response => {
          console.log(response);
        })
      });
    }
  }