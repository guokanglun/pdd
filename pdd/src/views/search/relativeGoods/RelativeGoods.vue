<template>
    <div>
        <div class="relative-goods">
            <div class="back" @click="$router.back()">
                <span class="iconfont icon-xiaoyu"></span>
            </div>
            <div class="search-input">
                <span class="iconfont icon-fangdajing"></span>
                <input type="text" placeholder="小吊带">
                <span class="iconfont icon-ziyuan93"></span>
            </div>
            <div class="search">搜索</div>
        </div>
        <div class="bottom"></div>
    </div>

</template>

<script>
    export default {
        name: "RelativeGoods"
    }
</script>

<style lang="less">
    @import "/src/common/less/common";
    .relative-goods{
        display: flex;
        align-items: center;
        padding: 10rem/@baseFont;
        .back{
            span{
                width: 20rem/@baseFont;
                height: 20rem/@baseFont;
                font-size: 20rem/@baseFont;
                color: grey;
            }
        }
        .search-input{
            flex: 1;
            background-color: #ededed;
            border-radius: 10rem/@baseFont;
            display: flex;
            align-items: center;
            padding: 0 10rem/@baseFont;
            margin: 0 10rem/@baseFont;
            height: 30rem/@baseFont;
            .icon-fangdajing{
                color:grey;
            }
            input{
                border:none;
                outline: none;
                height: 100%;
                background-color: #ededed;
                flex: 1;
                color:grey;
            }
            .icon-ziyuan93{
                color:grey;
            }

        }
        .search{
            font-size: 16rem/@baseFont;
            color:red;
        }
    }
    .bottom{
        position: fixed;
        bottom: 0;
        z-index: 9999;
        width: 100%;
        height: 50rem/@baseFont;
        background-color: white;
    }
</style>
