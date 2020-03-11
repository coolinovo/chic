import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuescroll from 'vuescroll'
import './plugins/iview.js'
import './assets/styles/normalize.css'
import './assets/styles/common.css'

Vue.config.productionTip = false

Vue.use(vuescroll, {
  ops: {
    vuescroll: {
      mode: 'native',
      sizeStrategy: 'number',
      detectResize: true,
      wheelScrollDuration: 0.8
    },
    scrollPanel: {
      scrollingX: false,
      scrollingY: true,
      easing: 'easeInCubic',
    },
    bar: {
      showDelay: 500,
      onlyShowBarOnScroll: true,
      keepShow: false,
      background: '#c1c1c1',
      opacity: 1,
      hoverStyle: false,
      specifyBorderRadius: false,
      minSize: false,
      size: '6px',
      disable: false,
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')