<template>
  <div class="about">
    <h1>{{msg}}</h1>
    我对应的是关于我们的导航选中
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      msg: 'Welcome to Your about'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
