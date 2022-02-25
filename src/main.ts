/*
 * @Author: your name
 * @Date: 2022-02-20 21:07:31
 * @LastEditTime: 2022-02-20 21:08:04
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \config-h5-template\src\main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './icons/index'
import './styles/index.scss'

import './utils/auth'
import './utils/permission'

import vant from '@/components/Vant'
import vconsole from '@/plugins/vconsole'
import components from '@/components'

createApp(App)
  .use(store)
  .use(router)
  .use(vant)
  .use(components)
  .use(vconsole)
  .mount('#app')
