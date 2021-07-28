<template>
  <div class="register">
    <div class="register-card">
      <div class="register-left">
        <br />
        <div>
          <img class="img-cover-left" src="./cover.png" alt="" />
          <div class="topic">Create Account</div>
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae,
            nesciunt! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Ipsam dolore aliquam exercitationem, deserunt tempora sapiente
            aperiam temporibus quos nisi illum.
          </div>
        </div>
      </div>

      <div class="register-right">
        <p>Create Account</p>
        <h2>Let's Get Started</h2>
        <div class="inputBlog">
          <div class="firstName">
            <div class="lbl-topic label-firstname">FirstName</div>
            <input
              v-model="firstname"
              class="ip ip-fname"
              type="text"
              placeholder="Panuwat"
              required
            />
          </div>
          <div class="lastName">
            <div class="lbl-topic label-lastname">LastName</div>
            <input
              v-model="lastname"
              class="ip ip-fname"
              type="text"
              placeholder="Yeesunsorn"
              required
            />
          </div>
          <div class="lastName">
            <div class="lbl-topic label-lastname">Email</div>
            <input
              v-model="email"
              class="ip ip-fname"
              type="email"
              placeholder="admin@kkusmartfarm.com"
              required
            />
          </div>
          <div class="password">
            <div class="lbl-topic label-lastname">Password</div>
            <input
              v-model="password"
              class="ip ip-passowrd"
              type="password"
              placeholder="*******"
              required
            />
          </div>
          <div class="repassword">
            <div class="lbl-topic label-repassword">Re-Password</div>
            <input
              v-model="rePassword"
              class="ip ip-repassowrd"
              type="password"
              placeholder="*******"
              required
            />
          </div>
          <button @click="checkSubmit()" class="btn btn-signUp">SignUP</button>
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
      firstname: '',
      lastname: '',
      password: '',
      rePassword: '',
      email: '',
      playload: {},
    }
  },
  methods: {
    checkSubmit() {
      let status = 0
      if (
        this.password === '' ||
        this.rePassword === '' ||
        this.firstname === '' ||
        this.lastname === '' ||
        this.email === ''
      ) {
        status = 1
        if (this.password !== this.rePassword) {
          alert('Password is in correct')
          this.password = ''
          this.rePassword = ''
        }
        alert('Please Enter Form')
      }
      if (status === 0) {
        const playload = {
          firstname: this.firstname,
          lastname: this.lastname,
          password: this.password,
          email: this.email,
        }
        this.playload = playload
        const url = 'http://localhost:5000/register'
        axios.post(url, this.playload).then((res) => {
          if (res.data.message === 'success') {
            this.$router.push('/login')
          } else {
            alert('Register Fail')
          }
        })
      }
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

.img-cover-left {
  width: 300px;
  height: 300px;
  object-fit: cover;
}

.register {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}

.register-card {
  display: flex;
  justify-content: space-between;
  width: 80%;
  height: 90vh;
  background-color: white;
  border-radius: 10px;
}

.register-left {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 50px;
  width: 50%;
  height: 100%;
  background-color: var(--color-main);
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  color: white;
}

.topic {
  display: block;
  font-size: 1.25rem;
  color: var(--color-secondary);
}

.register-right {
  width: 50%;
  padding: 30px 50px;
  display: block;
}

.register-right h2 {
  color: var(--color-dark-violet);
}

.inputBlog {
  margin-top: 30px;
}

.lbl-topic {
  color: gray;
  font-size: 1rem;
  margin-bottom: 10px;
}

.ip {
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid var(--color-secondary);
  margin-bottom: 10px;
}

.ip::placeholder {
  color: var(--color-secondary);
}

.btn {
  background-color: transparent;
  border: 1px solid transparent;
  width: 100%;
}

.btn-signUp {
  background-color: var(--color-secondary);
  color: white;
  padding: 10px;
  border-radius: 10px;
  transition: 0.7s all;
}

.btn-signUp:hover {
  background-color: transparent;
  color: var(--color-dark-violet);
  border: 1px solid var(--color-dark-violet);
  transition: 0.7s all;
}

@media only screen and (max-width: 1124px) {
  .register-card {
    display: block;
    width: 90%;
  }
  .register-left {
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }
  .register-right {
    width: 100%;
    background-color: white;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
}
</style>
