<template>
  <div id="app">
    <div>
      <ul class="intop after">
        <li v-for="(item,index) in nav" :key="index" @click="cur=index" :class="{active:cur==index}">
          <router-link :to="item.link">{{item.title}}</router-link>
        </li>
      </ul>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      nav: [
        { title: "首页", link: "/" },
        { title: "企业案例", link: "/Case" },
        { title: "技术要点", link: "/skills" },
        { title: "关于我们", link: "/about" }
      ],
      cur: 0
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.after::after {
  content: "";
  display: block;
  clear: both;
}
body {
  padding: 0;
  margin: 0;
}
img {
  border: none;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
}
ul {
  padding: 0;
  margin: 0;
}
ul li {
  list-style: none;
  padding: 0px;
}
a {
  text-decoration: none;
  padding: 0px;
}
.intop {
  max-width: 1000px;
  margin: 0 auto;
}
.intop li {
  height: 50px;
  line-height: 50px;
  float: left;
}
.intop li a {
  display: block;
  padding: 0 20px;
  font-size: 18px;
  color: black;
}
.intop li.active a {
  color: red;
}
</style>
