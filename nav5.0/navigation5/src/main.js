import Vue from 'vue' // 引用vue时直接写vue，不用写后缀名和node_modules文件夹路径名，默认就是这个文件夹
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),// 箭头函数的简写
}).$mount('#app')// 挂载到app上
