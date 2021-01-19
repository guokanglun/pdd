<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item, index) in homeSwiper" :key="index">
                <img :src="item.imgurl" alt="">
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
    import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.min.css'
    import {mapState} from 'vuex'
    export default {
        name: "HotSwiper",
        computed:{
          ...mapState(['homeSwiper'])
        },
        mounted() {
            // 2. 创建swiper实例
            this.$store.dispatch('reqHomeSwiper', ()=>{
                this.$nextTick(()=>{
                    new Swiper ('.swiper-container', {
                        loop: true,
                        // 如果需要分页器
                        pagination: {
                            el: '.swiper-pagination',
                        },
                        autoplay:{
                            delay: 1500
                        }
                    });
                })
            })
        },
    }
</script>

<style lang="stylus">
    .swiper-container
        height: 100px
    .swiper-slide
        img
            width: 100%
</style>
