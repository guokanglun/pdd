<template>
  <div class="search">
    <!--搜索导航-->
    <search-nav :showSearchPanel="showSearchPanel"/>
    <div class="shop">
      <!--左边-->
      <div class="menu-wrapper">
        <ul>
          <li
            class="menu-item"
            v-for="(goods, index) in searchgoods"
            :key="index"
            :class="{current: currentIndex === index}"
            @click="clickLeftLi(index)"
            ref="menuList"
          >
            <span>{{goods.name}}</span>
          </li>
        </ul>
      </div>
      <!--右边-->
      <div class="shop-wrapper">
        <ul>
          <li class="shops-li" v-for="(goods, index) in searchgoods" :key="index">
            <!--头部-->
            <div class="shops-title">
              <h4>{{goods.name}}</h4>
              <a href="">查看更多 ></a>
            </div>
            <!--身体-->
            <ul class="shops-items">
              <li v-for="(item, index) in goods.items" :key="index">
                <img v-lazy="item.icon" alt="">
                <span>{{item.title}}</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <!--显示面板-->
    <search-panel v-if="isShow" :showSearchPanel="showSearchPanel"/>
  </div>
</template>

<script>
  // 0. 引入数据
  import {mapState} from 'vuex'

  // 1. 引入组件
  import SearchNav from './children/SearchNav'
  import SearchPanel from './children/SearchPanel'

  // 2. 引入betterScroll
  import BScroll from 'better-scroll'

  export default {
    name: "Search",
    mounted() {
      this.$store.dispatch('reqSearchGoods');
    },
    data() {
      return {
        scrollY: 0, // 右侧列表滑动的Y轴坐标(实时更新)
        rightLiTops: [], // 所有分类的头部位置
        isShow: false,
      }
    },
    computed: {
      ...mapState(['searchgoods']),
      // 1. 用于动态决定左侧哪个选项被选中
      currentIndex() {
        // 1.1 获取数据
        const {scrollY, rightLiTops} = this;
        // 1.2 取出索引
        return rightLiTops.findIndex((liTop, index) => {
          this._leftScroll(index);
          return scrollY >= liTop && scrollY < rightLiTops[index + 1];
        });
      }
    },
    components: {
      SearchNav,
      SearchPanel
    },
    watch: {
      searchgoods() {
        this.$nextTick(() => {
          // 1.1 初始化
          this._initBScroll();
          // 1.2 求出右边所有版块的头部高度
          this._initRightLiTops();
        });
      }
    },
    methods: {
      // 1.1 是否显示搜索的面板
      showSearchPanel(flag) {
        this.isShow = flag;
      },
      // 1.2 初始化滚动的视图
      _initBScroll() {
        // 1.2.1 左边的视图
        this.leftScroll = new BScroll('.menu-wrapper', {

        });
        // 1.2.2 右边的视图
        this.rightScroll = new BScroll('.shop-wrapper', {
          probeType: 3
        });
        // 1.2.3 监听右边的滚动
        this.rightScroll.on('scroll', (pos) => {
          this.scrollY = Math.abs(Math.round(pos.y));
        });
      },
      // 1.3 求出右边所有版块的头部高度
      _initRightLiTops() {
        // 1. 临时数组
        let tempArr = [];
        // 2. 定义变量计算高度
        let top = 0;
        tempArr.push(top);
        // 3. 取出所有的li
        let allLis = this.$el.getElementsByClassName('shops-li');
        Array.prototype.slice.call(allLis).forEach((li, index) => {
          // 判断
          if(index === allLis.length - 1){
             li.style.paddingBottom =`${window.innerHeight - li.clientHeight - 100}px`;
          }
          top += li.clientHeight;
          tempArr.push(top);
        });
        // 4. 更新数据
        this.rightLiTops = tempArr;
      },
      // 1.4 点击左边
      clickLeftLi(index){
          this.scrollY = this.rightLiTops[index];
          this.rightScroll.scrollTo(0, -this.scrollY, 300);
      },
      // 1.5 左边联动
      _leftScroll(index){
          console.log(index);
          // 1. 取出左边所有的li标签
          let menuLists = this.$refs.menuList;
          let el = menuLists[index];
          // console.log(menuLists);
          // 2. 滚动到对应的元素上去
          this.leftScroll.scrollToElement(el, 0, 0, -100);
      }
    }
  }
</script>
<style scoped lang="stylus" ref="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .search
    background #F5F5F5
    width 100%
    height 100%
    overflow hidden

    .shop
      display flex
      position absolute
      top 60px
      bottom 50px
      width 100%
      overflow hidden

      .menu-wrapper
        background-color #e0e0e0
        width 80px
        flex 0 0 80px

        .menu-item
          width 100%
          height 60px
          background-color: #fafafa
          display flex
          justify-content center
          align-items center
          font-weight lighter
          color #666666
          position relative

        .current
          color #e02e24

        .current::before
          content: ''
          background-color #e02e24
          width 4px
          height 30px
          position absolute
          left 0

      .shop-wrapper
        flex 1
        background-color #fff

        .shops-title
          display flex
          flex-direction row
          padding 0 10px
          height 44px
          align-items center
          justify-content space-between
          color #999

          a
            color #999
            text-decoration none
            font-weight lighter

        .shops-items
          display flex
          flex-wrap wrap

          li
            display flex
            flex-direction column
            width 33.3%
            height 90px
            justify-content center
            align-items center
            color #666
            font-weight lighter
            font-size 14px

            img
              width 60%
              height 60%
              margin-bottom 5px

        .phone-type
          width 100%
          display flex
          flex-direction row
          flex-wrap wrap
          border-bottom-1px(#ccc)

          li
            width 33.3%
            display flex
            justify-content center
            align-items center
            margin 5px 0

            img
              width 70%
</style>
