<template>
    <div class="search-content">
        <div class="menu-wrapper">
            <ul>
                <li :class="{current: index === currentIndex}" v-for="(item, index) in searchShops" :key="index"
                    @click="handleMenuItem(index)"
                >
                    {{item.name}}
                </li>

            </ul>
        </div>
        <div class="content-wrapper">
            <ul class="shop-list" ref="goodUl">
                <li class="shop-item" v-for="(item, index) in searchShops" :key="index">
                    <div class="title">{{item.name}}</div>
                    <ul class="goods-list">
                        <li class="goods-item" v-for="(good, index) in item.items">
                            <img :src="good.icon" alt="">
                            <span>{{good.title}}</span>
                        </li>
                    </ul>
                </li>
                <li style="height: 250px"></li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import BetterScroll from 'better-scroll'
    export default {
        name: "SearchContent",
        data(){
          return{
              scrollY: 0, //右侧滑动的y轴坐标
              tops:[0]  // 右侧所有商品的top值
          }
        },
        computed:{
          ...mapState(['searchShops']),
            currentIndex(){
              const {scrollY, tops} = this;
              const index = tops.findIndex((top, index)=>{
                  return scrollY >= top && scrollY < tops[index + 1]
              });

                return index;

            }
        },
        mounted() {
            this.$store.dispatch('reqSearchShopList', ()=>{
                this.$nextTick(()=>{
                    let bs1 = new BetterScroll('.menu-wrapper', {});
                    this.bs2 = new BetterScroll('.content-wrapper', {
                        probeType: 3
                    });
                    // 监听右侧滚动事件，并给当前top赋值
                    this.bs2.on('scroll', ({x, y})=>{
                        this.scrollY = Math.abs(y)
                    });

                    // 收集所有li的top值
                    let allLi = this.$refs.goodUl.children;
                    let top = 0;
                    [...allLi].forEach(v=>{
                        top += v.clientHeight;
                        this.tops.push(top)
                    });
                })
            })
        },
        methods:{
            // 点击左侧menu触发
            handleMenuItem(index){
                // 目标位置的scrollY
                const scrollY = this.tops[index];
                // 滑动右侧列表
                this.bs2.scrollTo(0, -scrollY, 300)
            }
        }
    }
</script>

<style lang="less">
    @import '/src/common/less/common';
    .search-content{
        /*background-color: red;*/
        width: 100%;
        height: 566rem/@baseFont;
        border-top: 1px solid #ccc;
        display: flex;
        overflow: hidden;
        .menu-wrapper{
            width: 90rem/@baseFont;
            height: 100%;
            background-color: #fafafa;
            ul{
                li{
                    font-size: 15rem/@baseFont;
                    color:#666;
                    width: 100%;
                    height: 52rem/@baseFont;
                    text-align: center;
                    line-height: 52rem/@baseFont;
                    position: relative;
                    &.current{
                        color:red;
                    }
                    &.current::before{
                        content: '';
                        position: absolute;
                        width: 5px;
                        height: 30rem/@baseFont;
                        top: 11rem/@baseFont;
                        left:0;
                        background-color:red;
                    }
                }
            }
        }
        .content-wrapper{
            width: 285rem/@baseFont;
            height: 100%;
            .shop-list{
                .shop-item{
                    .title{
                        width: 100%;
                        height: 37rem/@baseFont;
                        font-size: 15rem/@baseFont;
                        line-height: 37rem/@baseFont;
                        color: #151516;
                        padding: 10rem/@baseFont 18rem/@baseFont;
                    }
                    .goods-list{
                        display: flex;
                        flex-wrap: wrap;
                        .goods-item{
                            width: 33%;
                            height: 80rem/@baseFont;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;
                            align-items: center;
                            margin-bottom: 10rem/@baseFont;
                            img{
                                width: 56rem/@baseFont;
                                height: 56rem/@baseFont;
                            }
                            span{
                                font-size: 13rem/@baseFont;
                                color: #58595b;
                            }
                        }
                    }
                }
            }
        }
    }

</style>
