import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { imgLazyPlugin } from '@/directives/index.js'
import { componentPlugin } from '@/components/index.js'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'
import '@/styles/common.scss'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
// 图片懒加载指令全局注册
app.use(imgLazyPlugin)
// 公共组件全局化注册
componentPlugin(app)
// 注册持久化插件
pinia.use(piniaPluginPersistedstate)

app.mount('#app')
