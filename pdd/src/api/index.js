/*
包含n个接口请求函数的模块
函数的返回值: promise对象
 */
import ajax from './ajax'
const BASE_URL = 'http://localhost:1688/api';
// const BASE_URL = '/api';

// 请求首页轮播
export const reqHomeSwiper = () => ajax(BASE_URL +'/homecasual');

// 请求首页导航
export const reqHomeNav = () => ajax(BASE_URL +'/homenav');

// 请求首页商品列表
export const reqHomeShopList = () => ajax(BASE_URL +'/homeshoplist');

// 搜索分类列表
export const reqSearchCategoryList = () => ajax(BASE_URL +'/searchgoods');

// 获取短信验证码
export const reqSmsCode = (phone) => ajax(BASE_URL +'/send_code', {phone});

// 推荐页数据列表
export const reqRecommendList = () => ajax(BASE_URL +'/recommendshoplist');

// 手机验证码登录
export const reqPhoneCodeLogin = (phone,code) =>ajax(BASE_URL + '/login_code', {phone, code}, 'POST');

// 用户名密码登录
export const reqNamePwdLogin = (name, pwd, captcha) => ajax(BASE_URL + '/login_pwd', {name, pwd, captcha}, 'POST');

// 获取用户信息
export const reqUserInfo = () => ajax(BASE_URL + '/userinfo');
