import Vue from 'vue'
import VueRouter from 'vue-router'
import Chat from "../views/chat/Chat";
import Home from "../views/home/Home";
import Login from "../views/login/Login";
import Me from "../views/me/Me";
import Recommend from "../views/recommend/Recommend";
import Register from "../views/register/Register";
import Search from "../views/search/Search";

// 首页二级路由
import Box from "../views/home/pages/box/Box";
import Dress from "../views/home/pages/dress/Dress";
import Ele from "../views/home/pages/ele/Ele";
import Food from "../views/home/pages/food/Food";
import General from "../views/home/pages/general/General";
import Hot from "../views/home/pages/hot/Hot";
import Man from "../views/home/pages/man/Man";
import MBaby from "../views/home/pages/mbaby/MBaby";
import Shirt from "../views/home/pages/shirt/Shirt";
import RelativeGoods from "../views/search/relativeGoods/RelativeGoods";
Vue.use(VueRouter);

const originalPush = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/home',
    component: Home,
    children:[
      {
        path: 'box',
        component: Box
      },
      {
        path: 'dress',
        component: Dress
      },
      {
        path: 'ele',
        component: Ele
      },
      {
        path: 'food',
        component: Food
      },
      {
        path: 'general',
        component: General
      },
      {
        path: 'hot',
        component: Hot
      },
      {
        path: 'man',
        component: Man
      },
      {
        path: 'mbaby',
        component: MBaby
      },
      {
        path: 'shirt',
        component: Shirt
      },
      {
        path: '/home',
        redirect: 'hot'
      },
    ]
  },
  {
    path: '/chat',
    component: Chat
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/me',
    component: Me
  },
  {
    path: '/recommend',
    component: Recommend
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/relative',
    component: RelativeGoods
  },
  {
    path:'/',
    redirect: '/home'
  }
];

const router = new VueRouter({
  routes
});

export default router
