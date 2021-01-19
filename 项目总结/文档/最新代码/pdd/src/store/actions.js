import {
  getHomeCasual,
  getHomeNav,
  getHomeShopList,
  getRecShopList,
  getSearchgoods,
  getUserInfo,
  getLogOut
} from '../api'

import {
  HOME_CASUAL,
  HOME_NAV,
  HOME_SHOP_LIST,
  REC_SHOP_LIST,
  SEARCH_GOODS,
  USER_INFO,
  RESET_USER_INFO,
  ADD_GOODS_COUNT,
  REDUCE_GOODS_COUNT,
  SELECTED_SINGER_GOODS,
  SELECTED_ALL_GOODS,
  DEL_SINGER_GOODS
} from './mutation-types'


export default {
  // 1. 获取首页轮播图
  async reqHomeCasual({commit}, callBack) {
    getHomeCasual().then((response)=>{
       console.log(response);
    });
    console.log(await getHomeCasual());
    const result = await getHomeCasual();
    if (200 === result.success_code) {
      commit(HOME_CASUAL, {home_casual: result.message});
      callBack && callBack();
    }
  },

  // 2. 获取首页轮播图
  async reqHomeNav({commit}) {
    const result = await getHomeNav();
    if (200 === result.success_code) {
      commit(HOME_NAV, {home_nav: result.message});
    }
  },

  // 3. 获取首页商品列表
  async reqHomeShopList({commit}) {
    const result = await getHomeShopList();
    if (200 === result.success_code) {
      commit(HOME_SHOP_LIST, {home_shop_list: result.message});
    }
  },

  // 4. 请求推荐的列表数据
  async reqRecShopList({commit}, params) {
    const result = await getRecShopList(params);
    setTimeout(()=>{
      let scb = params.scb;
      let ecb = params.ecb;
      if (true === result.success) { // 成功
        commit(REC_SHOP_LIST, {rec_shop_list: result.data});
        // 执行回调
        scb && scb(result.data);
      }else { // 失败
        ecb && ecb('请求数据失败!');
      }
    }, 2000);
  },

  // 5. 请求搜索的列表数据
  async reqSearchGoods({commit}) {
    const result = await getSearchgoods();
    if (200 === result.success_code) {
      commit(SEARCH_GOODS, {search_goods: result.message.data});
    }
  },

  // 6. 同步用户的信息
  syncUserInfo({commit}, userInfo) {
     commit(USER_INFO, {userInfo});
  },

  // 7. 获取用户信息
  async reqUserInfo({commit}) {
    const result = await getUserInfo();
    if (200 === result.success_code) {
      commit(USER_INFO, {userInfo: result.data});
    }
  },

  // 8. 退出登录
  async logOut({commit}) {
    const result = await getLogOut();
    if (200 === result.success_code) {
      commit(RESET_USER_INFO);
    }
  },

  // 9. 购物车单个商品的增加和减少
  updateGoodsCount({commit}, {goods, isAdd}) {
      if(isAdd){ // 增加
          commit(ADD_GOODS_COUNT, {goods});
      }else { // 减少
         commit(REDUCE_GOODS_COUNT, {goods});
      }
  },

  // 10. 单个商品的选中和取消
  singerGoodsSelected({commit}, {goods}){
    commit(SELECTED_SINGER_GOODS, {goods});
  },

  // 11. 全选和取消全选
  selectedAll({commit}, {isSelected}){
    commit(SELECTED_ALL_GOODS, {isSelected});
  },

  // 12. 删除单个商品
  delGoodsSinger({commit}, {goods}){
     commit(DEL_SINGER_GOODS, {goods});
  }
}
