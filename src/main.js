import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { imgLazyPlugin } from '@/directives/index.js'

import App from './App.vue'
import router from './router'
import '@/styles/common.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)
// 图片懒加载指令全局注册
app.use(imgLazyPlugin)

app.mount('#app')
