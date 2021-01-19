/*
    多个操作mutation的函数，从而间接更新state数据
 */
import {
    reqHomeSwiper,
    reqHomeNav,
    reqHomeShopList,
    reqRecommendList,
    reqSearchCategoryList,
    reqPhoneCodeLogin,
    reqNamePwdLogin,
    reqUserInfo
}  from '../api/index'

export default {
    // 首页轮播
    async reqHomeSwiper({commit}, callback){
        const result = await reqHomeSwiper();
        if(result.success_code === 200){
            commit('getHomeSwiper', result.message);
            callback()
        }
    },
    // 首页导航
    async reqHomeNav({commit}, callback){
        const result = await reqHomeNav();
        if(result.success_code === 200){
            commit('getHomeNav', result.message);
            callback()
        }
    },
    // 首页商品列表
    async reqHomeShopList({commit}){
        const result = await reqHomeShopList();
        if(result.success_code === 200){
            commit('getHomeShopList', result.message)
        }
    },

    // 推荐页商品列表
    async reqRecommendShopList({commit}){
        const result = await reqRecommendList();
        if(result.success_code === 200){
            commit('getRecommendShopList', result.message)
        }
    },

    // 搜索页商品列表
    async reqSearchShopList({commit}, callback){
        const result = await reqSearchCategoryList();
        if(result.success_code === 200){
            commit('getSearchShopList', result.message.data)
            callback()
        }
    },

    //  save userInfo 手机号登录
    async reqSaveUserInfo({commit}, {phone, code}){
        const result = await reqPhoneCodeLogin(phone,code);
        localStorage.setItem('userInfo', JSON.stringify(result.data));
        if(result.success_code === 200){
            commit('saveUserInfo', result.data)
        }else{
            commit('saveUserInfo', {})
        }

    },

    //  save userInfo  用户名密码
    async reqSaveUserInfo2({commit}, {name, pwd, captcha}){
        const result = await reqNamePwdLogin(name, pwd, captcha);
        localStorage.setItem('userInfo', JSON.stringify(result.data))
        // debugger
        if(result.success_code === 200){
            commit('saveUserInfo', result.data)
        }else{
            commit('saveUserInfo', {})
        }
    },

    // 刷新页面重新获取
    async reqSaveUserInfo3({commit}){
        // const result = await reqUserInfo();
        const result = JSON.parse(localStorage.getItem('userInfo'));
        // debugger
        // debugger
        commit('saveUserInfo', result || {})
    },

    // 退出登录
    logout({commit}){
        localStorage.setItem('userInfo', JSON.stringify({}))
        commit('saveUserInfo',  {})
    }
}
