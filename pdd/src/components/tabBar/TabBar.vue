<template>
    <div class="tabbar">
        <div class="tabbar-item" @click="$router.replace('/home')">
            <img :src="$route.path.includes('/home') ? require('./img/icon_home_selected.png'): require('./img/icon_home.png')" alt="">
            <span :class="{on: $route.path.includes('/home')}">首页</span>
        </div>
        <div class="tabbar-item" @click="$router.replace('/recommend')">
            <img :src="$route.path === '/recommend'? require('./img/icon_intro_selected.png'): require('./img/icon_intro.png')" alt="">
            <span :class="{on: $route.path === '/recommend'}">推荐</span>
        </div>
        <div class="tabbar-item" @click="$router.replace('/search')">
            <img :src="$route.path === '/search'? require('./img/icon_search_selected.png'): require('./img/icon_search.png')" alt="">
            <span :class="{on: $route.path === '/search'}">分类</span>
        </div>
        <div class="tabbar-item" @click="$router.replace('/chat')">
            <img :src="$route.path === '/chat'? require('./img/icon_chat_selected.png'): require('./img/icon_chat.png')" alt="">
            <span :class="{on: $route.path === '/chat'}">聊天</span>
        </div>
        <div class="tabbar-item" @click="$router.replace('/me')">
            <img :src="$route.path === '/me'? require('./img/icon_mine_selected.png'): require('./img/icon_mine.png')" alt="">
            <span :class="{on: $route.path === '/me'}">个人中心</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TabBar"
    }
</script>

<style lang="less" ref="stylesheet/stylus" scoped>
    @import '../../common/less/common';
    .tabbar {
        position: fixed;
        bottom: 0;
        display: flex;
        justify-content: center;
        height: 50rem/@baseFont;
        width: 100%;
        max-width: 750px;
        background-color: white;
        .tabbar-item {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            img {
                width: 35%;
                margin-bottom: 5px
            }

            span {
                color: #666;
                font-size: 12rem/@baseFont;
            }

            .on {
                color: #e9232c;
            }
        }
    }

</style>
