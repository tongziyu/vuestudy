// 这句话等同于引入了vue.js文件
import { createApp } from 'vue'
import App from './App.vue'

// 全局注册组件  Vue3 语法方式的注册全局组件
import HmButton from './components/HmButton.vue'
import LibHead from "@/01_工程化开发/LibHead.vue";

// 全局注册组件
const app = createApp(App)
app.component("HmButton",HmButton)

app.mount("#app")

// 在main.js中注册全局组件

app.component("LibHead",LibHead)




