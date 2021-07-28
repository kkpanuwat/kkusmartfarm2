<template>
  <div id="app">
    <input type="checkbox" name="" id="sidebar-toggle" />
    <div class="slidebar">
      <div class="slidebar-brand">
        <div class="slidebar-flex">
          <!-- <img
            src="https://www.clipartkey.com/mpngs/m/78-780217_3d-farm-icon-farm-icon-3d-png-farm.png"
            width="30px"
            alt=""
          /> -->
        </div>

        <div class="slidebar-main">
          <!--<div class="slidebar-user">
            <img src="https://pbs.twimg.com/media/Eykaae3UcAIvofz.jpg" alt="" />
            <div>
              <h3>Panuwat Yeesunsorn</h3>
              <span>Panuwat_ys@kkumail.com</span>
            </div>
          </div>-->
          <div class="slidebar-menu">
            <ul>
              <li>
                <nuxt-link to="/me/dashboard"
                  ><i class="las la-home"></i> Farm Dashboard</nuxt-link
                >
              </li>
            </ul>
            <div class="menu-head">
              <span>Automate System</span>
            </div>
            <ul>
              <li>
                <nuxt-link to="/me/calendar"
                  ><i class="las la-calendar"></i> Calendar</nuxt-link
                >
              </li>
              <li>
                <nuxt-link to="/me/plant"
                  ><i class="las la-seedling"></i> Plant</nuxt-link
                >
              </li>
              <li>
                <nuxt-link to="/me/water"
                  ><i class="las la-tint"></i> Water System</nuxt-link
                >
              </li>
              <li>
                <nuxt-link to="/me/fertillzer"
                  ><i class="las la-vial"></i> Fertilizer</nuxt-link
                >
              </li>
              <li>
                <nuxt-link to="/me/bug"
                  ><i class="las la-bug"></i> Bug Detection</nuxt-link
                >
              </li>
              <li>
                <nuxt-link to="/me/growth"
                  ><i class="las la-sliders-h"></i> Greenhouse
                  Control</nuxt-link
                >
              </li>
              <li>
                <nuxt-link to="/me/sensor"
                  ><i class="las la-satellite-dish"></i> Sensor</nuxt-link
                >
              </li>
              <li>
                <nuxt-link to="/me/energy"
                  ><i class="las la-bolt"></i> Energy</nuxt-link
                >
              </li>
              <li>
                <nuxt-link to="/me/camera"
                  ><i class="las la-camera"></i> Camera</nuxt-link
                >
              </li>
              <li>
                <nuxt-link to="/me/security"
                  ><i class="las la-shield-alt"></i> Security System</nuxt-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="main-content">
      <Topbar />
    </div>

    <label for="sidebar-toggle" class="body-label"></label>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Prompt:wght@100;200;300;400&display=swap');

:root {
  --color-main: #1a202e;
  --color-softblack: rgb(75, 73, 73);
  --color-black: #58595a;
  --color-secondary: #8da2fb;
  --color-dark-violet: #546ddf;
  --color-menu: #283046;
  --color-soft-primary: #404860;
  --color-gray: #f3f3f3;
  --color-sky: #03a9f4;
  --color-green: #4ba369;
  --color-orange: #f8863f;
  --color-red: #bb2020;
  --color-success: #16b322;
  --color-background: #c2c9d9;
  --color-softbackground: #f5f6fb;
}

body {
  width: 100%;
  background-color: var(--color-background);
}

* {
  font-family: 'Prompt', sans-serif;
  box-sizing: border-box;
  text-decoration: none !important;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.slidebar {
  width: 280px;
  position: fixed;
  top: 0px;
  left: 0px;
  height: 100%;
  padding: 1rem;
  background-color: white;
  color: #8da2fb;
  transition: left 1000ms;
  z-index: 30;
  box-shadow: 5px 0px 8px rgba(0, 0, 0, 0.2);
}

.slidebar-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.slidebar-user img {
  margin: 1rem 0rem;
  border-radius: 100%;
  width: 100px;
  height: 100px;
  border-left: 2px solid transparent;
  border-right: 2px solid var(--color-secondary);
  border-bottom: 2px solid var(--color-secondary);
  border-top: 2px solid var(--color-secondary);
  object-fit: cover;
}

.slidebar-user h3 {
  font-size: 1rem;
}

.slidebar-user span {
  font-size: 0.85rem;
  font-weight: 200;
}

.slidebar-user {
  text-align: center;
  color: white;
}

.slidebar-menu {
  margin-top: 2rem;
}

.menu-head {
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 400;
  margin-bottom: 0.8rem;
}

.slidebar-menu li a {
  color: black;
  padding: 0.4rem;
}

.slidebar-menu li {
  margin: 0.4rem 0rem;
  font-weight: 200;
}

.slidebar-menu li i {
  color: var(--color-secondary);
}

.nuxt-link-active {
  display: block;
  background-color: var(--color-secondary);
  border-radius: 10px;
  box-shadow: 1px 1px 5px #718af8;
}

.nuxt-link-active i {
  color: white !important;
}

a.nuxt-link-exact-active.nuxt-link-active {
  color: white;
}

.main-content {
  margin-left: 280px;
  transition: 1000ms;
}

label {
  display: none;
}

header {
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 1rem 1.5rem;
  transition: right 3000ms;
}

header img {
  object-fit: cover;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  border-left: 2px solid transparent;
  border-right: 2px solid var(--color-secondary);
  border-bottom: 2px solid var(--color-secondary);
  border-top: 2px solid var(--color-secondary);
}

.menu-toggle {
  font-size: 1.5rem;
  color: #718af8;
  transition: 0.7s all;
}

.menu-toggle:hover {
  color: #4e6ae7;
  transition: 0.7s all;
}

#sidebar-toggle {
  display: none;
}

.body-label {
  position: fixed;
  height: 100%;
  width: calc(100% - 280px);
  z-index: 30;
  right: -100%;
  top: 0;
}

#sidebar-toggle:checked ~ .slidebar {
  left: 0px;
}

@media only screen and (max-width: 1124px) {
  label {
    display: inline;
  }

  .slidebar {
    left: -100%;
    transition: left 3000ms;
  }

  #sidebar-toggle:checked ~ .body-label {
    right: 0;
  }
}
</style>

<script>
import Topbar from '@/components/Topbar.vue'
export default {
  components: { Topbar },
}
</script>
