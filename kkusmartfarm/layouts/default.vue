<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Prompt:wght@100;200;300;400&display=swap');

:root {
  --color-main: #1a202e;
  --color-secondary: #8da2fb;
  --color-body: #171e31;
  --color-menu: #283046;
}

body {
  width: 100%;
  background-color: var(--color-body);
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
  background-color: var(--color-menu);
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
  color: white;
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
  background-color: var(--color-menu);
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
  color: white;
  transition: 0.7s all;
}

.menu-toggle:hover {
  color: #718af8;
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

.content {
  margin: 1rem;
}

@media only screen and (max-width: 1124px) {
  label {
    display: inline;
  }

  .slidebar {
    left: -100%;
    transition: left 3000ms;
  }
  .main-content {
    margin-left: 0px;
    transition: 0.7s all;
  }

  #sidebar-toggle:checked ~ .body-label {
    right: 0;
  }
}
</style>
<script>
export default {
  data() {
    return {
      menu: false,
    }
  },
}
</script>
