<template>
  <div id="app">
    <header>
      <span>Code Splitting Examples with Vue.js</span>
      <nav>
        <router-link to="/Home">Home</router-link>
        <router-link to="/ExampleOne">Example One</router-link>
        <router-link to="/ExampleTwo">Example Two</router-link>
        <router-link to="/ExampleThree">ExampleThree</router-link>
      </nav>
    </header>
    <main>
      <img src="./assets/logo.png" alt="Code Splitting w/ Vue.js">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #4fc08d;
  color: #ffffff;
}

header {
  display: flex;
}

router-link {
  flex: 1;
}

header span, nav {
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
  padding-right: 10px;
  padding-left: 10px;
}
</style>
