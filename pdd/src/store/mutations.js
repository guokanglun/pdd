/*
    多个直接更新state的方法
 */

export default {
    // 首页轮播
    getHomeSwiper(state, swiperData){
        state.homeSwiper = swiperData
    },
    // 首页导航
    getHomeNav(state, navData){
        state.homeNav = navData
    },
    // 首页商品列表
    getHomeShopList(state, shopData){
        state.homeShopList = shopData
    },
    // 推荐页商品列表
    getRecommendShopList(state, shopData){
        state.recommendShopList = shopData
    },
    // 搜索页商品列表
    getSearchShopList(state, shopData){
        state.searchShops = shopData
    },
    // save userInfo
    saveUserInfo(state, userInfo){
        state.userInfo = userInfo
    }
}
