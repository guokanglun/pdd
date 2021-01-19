<template>
    <div class="me">
        <div class="header">
            <img src="https://avatar2.pddpic.com/avatar/default/3.png?imageView2/2/w/1300/q/80/format/webp" alt="">
            <span class="phone"> {{userInfo.phone || userInfo.name | handlePhone}} </span>
            <span class="iconfont icon-shouji"></span>
            <div class="logout" @click="$store.dispatch('logout')">退出登录</div>
        </div>
        <div class="order">
            <div class="title">
                <div class="left">我的订单</div>
                <div class="right">查看全部 > </div>
            </div>
            <div class="order-list">
                <div class="order-item">
                    <span class="iconfont icon-fukuan"></span>
                    <span class="desc"> 待付款 </span>
                </div>
                <div class="order-item">
                    <span class="iconfont icon-fukuan"></span>
                    <span class="desc"> 待分享 </span>
                </div>
                <div class="order-item">
                    <span class="iconfont icon-fukuan"></span>
                    <span class="desc"> 待发货 </span>
                </div>
                <div class="order-item">
                    <span class="iconfont icon-fukuan"></span>
                    <span class="desc"> 待收货 </span>
                </div>
                <div class="order-item">
                    <span class="iconfont icon-fukuan"></span>
                    <span class="desc"> 待评价 </span>
                </div>
                <div class="order-item">
                    <span class="iconfont icon-fukuan"></span>
                    <span class="desc"> 新人红包 </span>
                </div>
                <div class="order-item">
                    <span class="iconfont icon-fukuan"></span>
                    <span class="desc"> 多多果园 </span>
                </div>
                <div class="order-item">
                    <span class="iconfont icon-fukuan"></span>
                    <span class="desc"> 砍价免费拿 </span>
                </div>
                <div class="order-item">
                    <span class="iconfont icon-fukuan"></span>
                    <span class="desc"> 设置 </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    export default {
        name: "Main",
        computed:{
            ...mapState(['userInfo'])
        },
        filters: {
            handlePhone(value){
                //  183*****835
                return value.replace(value.substr(3, 5), '*****');
            }
        }
    }
</script>

<style lang="less">
    @import '/src/common/less/common';
    .me{
        .header{
            height: 64rem/@baseFont;
            margin: 20rem/@baseFont;
            display: flex;
            align-items: center;
            img{
                width: 61rem/@baseFont;
                height: 61rem/@baseFont;
                border-radius: 50%;
            }
            .phone{
                color: #151516;
                font-size: 19rem/@baseFont;
                margin: 0 10rem/@baseFont;
            }
            .icon-shouji{
                font-size: 19rem/@baseFont;
                color:greenyellow;
            }
            .logout{
                width: 100rem/@baseFont;
                height: 33rem/@baseFont;
                background-color: #FF5706;
                font-size: 16rem/@baseFont;
                border-radius: 10rem/@baseFont;
                text-align: center;
                line-height: 33rem/@baseFont;
                color:white;
                margin-left: 20rem/@baseFont;

            }
        }
        .order{
            .title{
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin: 0 10rem/@baseFont;
                .left{
                    font-size: 17rem/@baseFont;
                    color:#151516;
                }
                .right{
                    font-size: 13rem/@baseFont;
                    color:#999;
                }
            }
            .order-list{
                display: flex;
                flex-wrap: wrap;
                margin-top: 20rem/@baseFont;
                .order-item{
                    width: 20%;
                    height: 60rem/@baseFont;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    align-items: center;
                    .iconfont{
                        font-size: 24rem/@baseFont;
                        color:red;
                    }
                    .desc{
                        font-size: 13rem/@baseFont;
                        color: #58595b;
                    }
                }
            }
        }
    }

</style>
