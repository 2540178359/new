<template>
  <div id="heads">
    <h1>{{ msg }}</h1>
    我对应的是首页的导航选中
  </div>
</template>

<script>
export default {
  name: 'heads',
  data () {
    return {
      msg: 'Welcome'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
