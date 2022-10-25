import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


// import cor from 'cors'



import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// import 'dayjs/locale/zh-cn'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'



import '@/assets/css/global.css'





//
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'



// import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//
// const app = createApp(App)
// for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//     app.component(key, component)
// }


// App.use(async (ctx, next)=> {
//     ctx.set('Access-Control-Allow-Origin', '*');
//     ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
//     ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
//     if (ctx.method == 'OPTIONS') {
//         ctx.body = 200;
//     } else {
//         await next();
//     }
// })

createApp(App)
    .use(store)
    .use(router)
    .use(ElementPlus,{locale : zhCn,})//设置中文
    .mount('#app')


