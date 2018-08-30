import Vue from 'vue'
import App from './App'
import './css/app.css'
import store from './store';
Vue.config.productionTip = false;
App.mpType = 'app';
Vue.prototype.$store = store;
import Fly from 'flyio/dist/npm/wx';
var fly = new Fly();
//         //添加全局配置、拦截器等
Vue.prototype.$http = fly // 将fly实例挂在vue原型上  使用的时候直接this.$http.get()就可以了
import '../static/weui/weui.css';

const app = new Vue({

})
app.$mount();

export default {
  // 这个字段走 app.json
  config: {
    pages: [
      '^pages/index/index',
      'pages/home/home',
      'pages/me/me',
      'pages/button/button',
      'pages/list/list',
      'pages/input/input',
      'pages/slider/slider',
      'pages/uploader/uploader',

      'pages/article/article',
      'pages/badge/badge',
      'pages/flex/flex',
      'pages/footer/footer',
      'pages/gallery/gallery',
      'pages/grid/grid',
      'pages/icons/icons',
      'pages/loadmore/loadmore',
      'pages/panel/panel',
      'pages/preview/preview',
      'pages/progress/progress',
      'pages/swiper/swiper',

      'pages/actionsheet/actionsheet',
      'pages/dialog/dialog',
      'pages/msg/msg',
      'pages/msg-fail/msg-fail',
      'pages/msg-success/msg-success',
      'pages/picker/picker',
      'pages/mulLinkagePicker/mulLinkagePicker',
      'pages/toast/toast',
      'pages/navbar/navbar',
      'pages/tabbar/tabbar',

      'pages/searchbar/searchbar',

      'pages/request/request',
      'pages/vuex/vuex',
      'pages/vuexPage/vuexPage',
      'pages/rate/rate',

      'pages/test/test',
      'pages/componentsTest/componentsTest'

    ], // Will be filled in webpack
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '小程序组件库',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#999999',
      selectedColor: '#1AAD16',
      backgroundColor: '#ffffff',
      borderStyle: 'white',
      list: [
        {
          pagePath: 'pages/index/index',
          text: '首页',
          iconPath: 'static/images/icon_nav_button.png',
          selectedIconPath: 'static/images/icon_nav_button.png'
        },
        {
          pagePath: 'pages/home/home',
          text: '分类',
          iconPath: 'static/images/icon_nav_cell.png',
          selectedIconPath: 'static/images/icon_nav_cell.png'
        },
        {
          pagePath: 'pages/me/me',
          text: '我的',
          iconPath: 'static/images/icon_nav_toast.png',
          selectedIconPath: 'static/images/icon_nav_toast.png'
        }
      ]
    }
  }
}
