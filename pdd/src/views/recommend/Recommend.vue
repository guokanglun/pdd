<template>
    <div class="recommend">
        <div class="recommend-item" v-for="(item, index) in recommendShopList.data" :key="index">
            <div class="pic-area">
                <img :src="item.thumb_url" alt="">
                <span class="title">{{item.short_name}}</span>
            </div>
            <div class="price-area">
                <div class="price">
                    <span class="p">￥{{item.price}}</span>
                    <span class="c">{{item.sales_tip}}</span>
                </div>
                <div class="desc">
                    找相关
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "Recommend",
        computed:{
          ...mapState(['recommendShopList'])
        },
        mounted() {
            this.$store.dispatch('reqRecommendShopList')
        }
    }
</script>

<style lang="less">
    @import '../../common/less/common';
    .recommend{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .recommend-item{
            width: 49%;
            height: 258rem/@baseFont;
            margin-bottom: 10rem/@baseFont;
            .pic-area{
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                height: 210rem/@baseFont;
                img{
                    width: 100%;
                }
                span{
                    font-size: 14rem/@baseFont;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                }
            }
            .price-area{
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 10rem/@baseFont;
                .price{
                    .p{
                        font-size: 14rem/@baseFont;
                        color:red;
                    }
                    .c{
                        font-size: 12rem/@baseFont;
                        color: #ccc;
                        margin-right: 10rem/@baseFont;
                    }
                }
                .desc{
                    font-size: 12rem/@baseFont;
                    color: red;
                    padding-right: 10rem/@baseFont;
                }
            }
        }
    }
</style>
