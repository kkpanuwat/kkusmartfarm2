<template>
  <div class="login">
    <div class="login-card">
      <div class="card-blog">
        <div class="card-header">
          <i class="las la-leaf"></i>
          <h3>Login to KKU Smart Farm</h3>
          <h6>Welcome to KKu Smart Farm</h6>
        </div>
        <div class="card-body">
          <input
            v-model="username"
            class="input input-username"
            type="text"
            placeholder="Username"
          />
          <input
            v-model="password"
            class="input input-password"
            type="password"
            placeholder="Password"
          />
          <div class="remem-forget">
            <div class="remem"></div>
            <div class="forget">Forget Password</div>
          </div>
          <button class="btn btn-signUp" @click="test()">Login</button>
          <div class="register-label">
            Not registerd?
            <nuxt-link to="/register" class="btn-register"
              >Create Account</nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      username: '',
      password: '',
      data: {},
    }
  },
  methods: {
    test() {
      const url = 'http://localhost:5000/login'
      const dataTest = { username: this.username, password: this.password }
      try {
        axios.post(url, dataTest).then((res) => {
          if (res.data.message === 'success') {
            this.$router.replace('/me/dashboard')
            this.data = res.data.results
          } else {
            alert(res.data.message)
          }
        })
      } catch (error) {}
    },
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Prompt:wght@100;200;300;400&display=swap');
:root {
  --color-main: #1a202e;
  --color-secondary: #8da2fb;
  --color-dark-violet: #546ddf;
  --color-menu: #283046;
  --color-green: #4ba369;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Prompt', sans-serif;
}

body {
  background-color: var(--color-secondary);
  width: 100%;
  height: 100vh;
}

h3 {
  color: rgb(41, 41, 41);
  text-align: center;
}

h6 {
  padding: 10px;
  color: gray;
  text-align: center;
}

.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 80px;
}

.login-card {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 80vh;
  background-color: whitesmoke;
  border-radius: 10px;
  box-shadow: 5px 0px 8px rgba(0, 0, 0, 0.2);
}

.card-blog {
  width: 30%;
  height: 90%;
  border-radius: 10px;
  background-color: white;
}

.las.la-leaf {
  width: 100%;
  display: inline-block;
  color: rgb(46, 134, 61);
  text-align: center;
  font-size: 2rem;
  padding: 30px;
  margin-top: 20px;
}

.input {
  display: block;
  margin: auto;
  margin-top: 30px;
  width: 90%;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid var(--color-secondary);
}

.input::placeholder {
  color: var(--color-secondary);
}

.btn {
  background-color: transparent;
  border: 0px solid transparent;
}

.btn-signUp {
  display: block;
  width: 90%;
  margin: auto;
  margin-top: 30px;
  background-color: #546ddf;
  padding: 10px;
  border: 1px solid transparent;
  border-radius: 10px;
  color: white;
  font-size: 1rem;
  font-weight: 200;
  transition: 0.7s all;
}

.btn-signUp:hover {
  background-color: transparent;
  border: 1px solid #546ddf;
  color: #546ddf;
  transition: 0.7s all;
}

.remem-forget {
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  font-size: 0.8rem;
  color: var(--color-secondary);
}

.register-label {
  margin-top: 30px;
  text-align: center;
  font-size: 0.8rem;
}

.btn-register {
  text-decoration: none;
  color: var(--color-secondary);
  transition: 0.7s all;
}

.btn-register:hover {
  color: var(--color-dark-violet);
  font-size: 1rem;
  transition: 0.7s all;
}

@media only screen and (max-width: 1124px) {
  .login-card {
    width: 100%;
    height: 90vh;
  }
  .login {
    padding: 20px;
  }
  .card-blog {
    width: 80%;
  }
}
</style>
