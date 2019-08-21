<template>
  <div id="app">
    <div>
      <ul>
        <li>
          <router-link to="/">首页</router-link>
        </li>
        <li>
          <router-link to="/head">企业案例</router-link>
        </li>
        <li>
          <router-link to="/head">技术能力</router-link>
        </li>
        <li>
          <router-link to="/head">关于我们</router-link>
        </li>
      </ul>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
ul {
  padding: 0;
}
ul li {
  list-style: none;
  padding: 0px;
}
a {
  text-decoration: none;
  padding: 0px;
}
</style>
