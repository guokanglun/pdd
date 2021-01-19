import axios from 'axios'

export default function ajax(url = '', params = {}, type = 'GET') {
  let promise;
  // 1. 返回promise对象
  return new Promise((resolve, reject) => {
    // 1.1 判断请求的方式
    if ('GET' === type) {
      // 1.2 拼接字符串
      let paramsStr = '';
      Object.keys(params).forEach(key => {
        paramsStr += key + '=' + params[key] + '&'
      });
      // 1.3 过滤最后的&
      if (paramsStr !== '') {
        paramsStr = paramsStr.substr(0, paramsStr.lastIndexOf('&'));
      }
      // 1.4 拼接完整路径
      url += '?' + paramsStr;
      // 1.5 发起get请求
      promise = axios.get(url);
    } else if ('POST' === type) {
      // 1.6 发起post请求
      promise = axios.post(url, params);
    }
    // 1.7 返回结果
    promise.then((response) => {
      resolve(response.data);
    }).catch(error => {
      reject(error)
    })
  });
}

/**
  使用:
  import ajax from './ajax'

  // 1. 定义基础路径
  const BASE_URL = '/local_api'; 
  // 2. POST
  export const pwdLogin = (name, pwd, captcha)=> ajax(BASE_URL + '/api/login_pwd', {name, pwd, captcha}, 'POST');
  // 3. GET
  export const getPhoneCode = (phone) => ajax(BASE_URL + '/api/send_code', {phone});
*/
