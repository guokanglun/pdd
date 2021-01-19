<template>
  <div id="hot">
    <!--轮播图-->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(casual, index) in homecasual" :key="index">
          <img :src="casual.imgurl" alt="" width="100%">
        </div>
      </div>
      <!--分页-->
      <div class="swiper-pagination"></div>
    </div>
    <!--导航-->
    <hot-nav/>
    <!--商品列表-->
    <hot-shop-list />
  </div>
</template>

<script>
  // 1. 引入swiper相关
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  // 2. 引入子组件
  import HotNav from './HotNav'
  import HotShopList from './HotShopList'

  // 3. 引入数据
  import {mapState} from 'vuex'

  export default {
    name: "Hot",
    components: {
      HotNav,
      HotShopList
    },
    computed: {
      ...mapState(['homecasual'])
    },
    mounted() {
      // 1. 请求轮播图数据
      this.$store.dispatch('reqHomeCasual');
      // 2. 请求导航数据
      this.$store.dispatch('reqHomeNav');
      // 3. 请求商品列表数据
      this.$store.dispatch('reqHomeShopList');
    },
    methods: {},
    watch: {
      homecasual() {
        this.$nextTick(() => {
          // 2. 初始化轮播图
          new Swiper('.swiper-container', {
            autoplay: true,//可选选项，自动滑动
            loop: true,
            pagination: {
              el: '.swiper-pagination',
            },
          })
        })
      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  @import "../../../../common/stylus/mixins.styl"
  #hot
    overflow-x hidden !important
    width 100%
    height 100%
    padding-top 4rem
    background $bg
</style>
