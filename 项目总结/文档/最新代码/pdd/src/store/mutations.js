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

import Vue from 'vue'

export default {
  [HOME_CASUAL](state, {home_casual}) {
    state.homecasual = home_casual;
  },
  [HOME_NAV](state, {home_nav}) {
    state.homenav = home_nav;
  },
  [HOME_SHOP_LIST](state, {home_shop_list}) {
    state.homeshoplist = home_shop_list;
  },
  [REC_SHOP_LIST](state, {rec_shop_list}) {
    state.recshoplist = state.recshoplist.concat(rec_shop_list);
  },
  [SEARCH_GOODS](state, {search_goods}){
    state.searchgoods = search_goods;
  },
  [USER_INFO](state, {userInfo}){
    state.userInfo = userInfo;
  },
  [RESET_USER_INFO](state){
    state.userInfo = {};
  },

  // 购物车
  [ADD_GOODS_COUNT](state, {goods}){
    if(goods.buy_count){
      goods.buy_count++;
    }
  },
  [REDUCE_GOODS_COUNT](state, {goods}){
     if(goods.buy_count){
       goods.buy_count--;
       if(goods.buy_count === 0){
         const index = state.cartGoods.indexOf(goods);
         state.cartGoods.splice(index, 1);
       }
     }
  },
  [SELECTED_SINGER_GOODS](state, {goods}){
      if(goods.checked){ // 存在该属性
         goods.checked = !goods.checked;
      }else {
         Vue.set(goods, 'checked', true)
      }
  },
  [SELECTED_ALL_GOODS](state, {isSelected}){
     state.cartGoods.forEach((goods, index)=>{
       if(goods.checked){ // 存在该属性
         goods.checked = !isSelected;
       }else {
         Vue.set(goods, 'checked', !isSelected)
       }
     })
  },
  [DEL_SINGER_GOODS](state, {goods}){
    const index = state.cartGoods.indexOf(goods);
    state.cartGoods.splice(index, 1);
  }
}
