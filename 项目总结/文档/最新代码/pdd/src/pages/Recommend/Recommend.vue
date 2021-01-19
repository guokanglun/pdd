<template>
  <scroll class="scroller" :upCallback="upCallback" ref="mescroll" warpId="index_scroll"
          id="index_scroll"  v-if="userInfo._id">
      <div class="recommend">
        <shop-list
          v-for="(item, index) in recshoplist"
          :item=item
          :key="index"
          :clickCellBtn="dealWithCellBtnClick"
        />
      </div>
  </scroll>
  <select-login v-else />
</template>

<script>
  import {mapState} from 'vuex';
  import ShopList from './../../components/ShopList/ShopList';
  import SelectLogin from './../../pages/Login/SelectLogin';
  import Scroll from './../../components/mescroll/Scroll';
  export default {
    name: "Recommend",
    computed: {
      ...mapState(['recshoplist', 'userInfo'])
    },
    components:{
      ShopList,
      SelectLogin,
      Scroll
    },
    methods: {
      dealWithCellBtnClick(goods_id){
        console.log(goods_id);
      },
      upCallback(page){
        const SIZE = 10;
        this.$store.dispatch('reqRecShopList', {
          'app_name': 'rectab_sim_gyl',
          'offset': (page.num - 1) * SIZE,
          'count': SIZE,
          'scb': (result)=>{
              console.log('成功');
              this.$refs.mescroll.endSuccess(result.length);
          },
          'ecb': (err)=>{
              console.log('失败');
              this.$refs.mescroll.endErr();
          }
        });
      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .scroller
    padding-bottom 5rem
    .recommend
      display flex
      flex-direction row
      flex-wrap wrap
      background-color: #f5f5f5;
</style>
