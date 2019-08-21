<template>
  <div id="app">
    <div>
      <ul class="intop after">
        <li v-for="(title,index) in tabTitle" @click="cur=index" :class="{active:cur==index}">{{title}}</li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      tabTitle: ['首页', '企业案例', '技术能力', '关于我们'],
      cur: 0
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.after::after{content: '';display: block;clear: both;}
body{padding: 0;margin: 0}
img {border: none;border: 0;max-width: 100%;vertical-align: middle;}
ul{padding: 0;margin: 0;}
ul li{list-style: none;padding: 0px;}
a{text-decoration:none;padding: 0px;}
.intop{
  max-width: 1000px;
  margin: 0 auto;
}
.intop li{
  height: 50px;
  line-height: 50px;
  float: left;
}
.intop li a{
  display: block;
  padding: 0 20px;
  font-size: 18px;
  color: black;
}
.intop li.active a{
  color: red;
}
</style>
