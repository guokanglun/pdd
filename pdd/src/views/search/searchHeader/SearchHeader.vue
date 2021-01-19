<template>
    <div class="search-header">
        <div class="btn" @click="$router.push('/relative')">
            <div class="content">
                <span class="iconfont icon-fangdajing"></span>
                <span class="desc">小吊带</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SearchHeader"
    }
</script>

<style lang="less">
    @import '/src/common/less/common';
    .search-header{
        width: 100%;
        height: 51rem/@baseFont;
        display: flex;
        justify-content: center;
        align-items: center;
        .btn{
            background-color: #ededed;
            width: 90%;
            height: 80%;
            border-radius: 10rem/@baseFont;
            display: flex;
            justify-content: center;
            align-items: center;
            .content{
                font-size: 16rem/@baseFont;
                color:#9C9C9C;
                .icon-fangdajing{
                    font-size: 16rem/@baseFont;
                }
                .desc{
                    margin-left: 8rem/@baseFont;
                }
            }

        }
    }
</style>
