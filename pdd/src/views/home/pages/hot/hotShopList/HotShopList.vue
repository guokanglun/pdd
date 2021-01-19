<template>
    <div class="hot-shop-list">
        <div class="shop-item" v-for="(item, index) in homeShopList.goods_list" :key="index">
            <div class="img">
                <img :src="item.thumb_url" alt="">
            </div>
            <div class="info">
                <div class="title">
                    <img src="https://commimg.pddpic.com/oms_img_ng/2021-01-14/d2bce65e-9350-4589-98bd-1be73aef32b5.png?imageView2/2/w/1300/q/80" alt="">
                    <span>{{item.goods_name}}</span>
                </div>
                <div class="desc-list">
                    <div class="desc">旗舰店</div>
                    <div class="price-item">
                        <div class="price-area">
                            <div class="price"> ￥{{item.normal_price}} </div>
                            <div class="count">{{item.sales_tip}}</div>
                        </div>

                        <div class="pic" v-for="(pic, index) in item.bubble" :key="index">
                            <img :src="pic.avatar" alt="">
                        </div>
                    </div>
                    <div class="order">畅销榜第2名</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "HotShopList",
        computed:{
            ...mapState(['homeShopList'])
        },
        mounted(){
            this.$store.dispatch('reqHomeShopList')
        }
    }
</script>

<style lang="less">
    @import '../../../../../common/less/common';
    .hot-shop-list{
        border-top: 10px solid #eee;
        padding-bottom: 50px;
        .shop-item{
            width: 100%;
            height: 168rem/@baseFont;
            display: flex;
            justify-content: space-around;
            align-items: center;
            border-bottom: 1px solid #ddd;
            .img{
                width: 156rem/@baseFont;
                height: 156rem/@baseFont;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .info{
                width: 187rem/@baseFont;
                height: 156rem/@baseFont;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .title{
                    position: relative;
                    line-height: 1.5;
                    img{
                        position: absolute;
                        left:0;
                        top:4rem/@baseFont;
                        width: 37rem/@baseFont;
                        height: 14rem/@baseFont;
                    }
                    .blank{
                        width: 37rem/@baseFont;
                        height: 14rem/@baseFont;
                    }
                    span{
                        font-size: 14rem/@baseFont;
                        overflow: hidden;
                        text-indent: 40rem/@baseFont;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                    }
                }
                .desc-list{
                    display: flex;
                    flex-direction: column;
                    height: 60rem/@baseFont;
                    justify-content: space-between;
                    .desc{
                        font-size: 12rem/@baseFont;
                        color: #FF5706
                    }
                    .price-item{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        .price-area{
                            display: flex;

                            .price{
                                font-size: 17rem/@baseFont;
                                color: #e02e24
                            }
                            .count{
                                font-size: 13rem/@baseFont;
                                color: #9c9c9c
                            }
                        }
                        .pic{
                            img{
                                width: 20rem/@baseFont;
                                height: 20rem/@baseFont;
                                border-radius: 50%;
                            }
                        }
                    }
                    .order{
                        font-size: 13rem/@baseFont;
                        color:#58595b;
                    }
                }
            }
        }
    }
</style>
