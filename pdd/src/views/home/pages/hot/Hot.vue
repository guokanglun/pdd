<template>
    <div>
        <HotSwiper></HotSwiper>
        <HotNav></HotNav>
        <HotShopList></HotShopList>
    </div>
</template>

<script>
    import HotSwiper from "./hotSwiper/HotSwiper";
    import HotNav from "./hotNav/HotNav";
    import HotShopList from "./hotShopList/HotShopList";
    export default {
        components:{
            HotSwiper, HotNav, HotShopList
        }
    }
</script>

<style lang="stylus">
</style>
