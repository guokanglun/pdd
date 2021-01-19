import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './static/css/reset.css'
import '/src/common/css/iconfont.css'
import './common/js/fleible'
import './common/less/common.less'


import LyTab from 'ly-tab'
Vue.use(LyTab);

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
