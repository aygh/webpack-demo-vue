import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
const div = document.createElement('div')
div.id = 'app'
document.body.appendChild(div)

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')