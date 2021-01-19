<template>
    <div class="hot-nav-wrapper">
        <div class="hot-content">
            <div class="hot-item" v-for="(item, index) in navData" :key="index">
                <img :src="item.iconurl" alt="">
                <span>{{ item.icontitle }}</span>
            </div>

        </div>
    </div>
</template>

<script>
    import BetterScroll from 'better-scroll'
    import {mapState} from 'vuex'
    export default {
        name: "HotNav",
        data(){
          return{
              navData:[],
              hotContentW: 0
          }
        },
        computed:{
          ...mapState(['homeNav']),
        },
        mounted(){
            this.$store.dispatch('reqHomeNav', ()=>{
                this.$nextTick(()=>{
                    let bs = new BetterScroll('.hot-nav-wrapper', {
                        scrollX: true,
                        scrollY: true,
                    });
                    this.navData = [...this.homeNav.item1,...this.homeNav.item2];
                })
            })
        }

    }
</script>

<style lang="less" scoped>
    @import '../../../../../common/less/common.less';
    .hot-nav-wrapper{
        width: 10rem;
        height: 150rem / @baseFont;
        .hot-content{
            width: 600rem / @baseFont;
            display: flex;
            flex-wrap: wrap;
            .hot-item{
                width: 375rem / 5 / @baseFont;
                height: 75rem / @baseFont;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
                img{
                    width: 60%;
                }
                span{
                    color:#666;
                    font-size: 12rem/@baseFont;
                }

            }
        }
    }
</style>
