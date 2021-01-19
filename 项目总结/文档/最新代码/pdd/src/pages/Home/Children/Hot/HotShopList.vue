<template>
  <div class="shop-container">
    <ul class="shop-list">
      <li class="shop-list-item" v-for="(shop, index) in homeshoplist.goods_list" :key="index">
        <img v-lazy="shop.image_url" alt="" width="100%">
        <h4 class="list-item-title">{{shop.goods_name}}</h4>
        <div class="list-item-bottom">
          <div class="list-item-bottom-left">
            <span class="list-item-bottom-left-price">¥{{shop.normal_price / 100}}</span>
            <span class="">{{shop.sales_tip}}</span>
          </div>
          <div class="list-item-bottom-right">
             <span class="item-user">
                 <img v-lazy="user.avatar" alt="" v-for="(user, index) in shop.bubble" :key="index">
             </span>
            <button>去拼单</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: "HotShopList",
    computed: {
      ...mapState(['homeshoplist'])
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  @import "../../../../common/stylus/mixins.styl"
  .shop-container
    background $bg
    margin-bottom 6rem
    .shop-list
       .shop-list-item
          margin-top  1rem
          background-color #fff
          display flex
          flex-direction column
          h4
            font-size 1.6rem
            padding 1rem
            line-height 2rem
          .list-item-bottom
            padding 1rem
            display flex
            flex-direction row
            justify-content space-around
            align-items center
            .list-item-bottom-left
               display flex
               justify-content space-between
               align-items center
               .list-item-bottom-left-price
                  font-size 2rem
                  font-weight bolder
                  color red
                  margin-right 1rem
            .list-item-bottom-right
               display flex
               justify-content center
               align-items center
               .item-user
                  img
                    width 3rem
                    border-radius 50%
               button
                  width 8rem
                  height 3rem
                  background-color #e02e24
                  border-radius 1rem
                  margin-left 1rem
                  color #fff
                  font-size 1.6rem


</style>
