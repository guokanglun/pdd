<template>
    <div class="loginWay">
        <div class="content">
            <p>选择登录方式</p>
            <div @click="$router.push('/login')">手机登录</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SelectLoginWay"
    }
</script>

<style lang="less">
    @import "/src/common/less/common";
    .loginWay{
        width: 100%;
        height: 550rem/@baseFont;
        display: flex;
        justify-content: center;
        align-items: center;
        .content{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            p{
                font-size: 14rem/@baseFont;
                letter-spacing: 2px;
                margin-bottom: 20px;
            }
            div{
                width: 80%;
                border-radius: 10rem/@baseFont;
                height: 44rem/@baseFont;
                background-color: #e02e24;
                text-align: center;
                line-height: 44rem/@baseFont;
                font-size: 18rem/@baseFont;
                color:white;
            }
        }
    }
</style>
