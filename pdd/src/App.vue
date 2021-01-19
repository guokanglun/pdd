<template>
  <div id="app">
    <router-view></router-view>
    <TabBar></TabBar>
  </div>
</template>

<script>
  import TabBar from "./components/tabBar/TabBar";
  export default {
    components:{
      TabBar
    },
    mounted() {
      this.$store.dispatch('reqSaveUserInfo3')
    }
  }
</script>

<style lang="stylus">
  #app
    overflow hidden
    max-width 750px
    height: 100%
    margin auto
</style>
