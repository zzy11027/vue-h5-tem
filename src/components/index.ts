import { App } from 'vue'

import imageText from '@/components/imageText'
import swiper from '@/components/swiper'
import LuckyWheel from '@/components/LuckyWheel'
import LuckyGrid from '@/components/LuckyGrid'
// import canvasPoster from '@/components/canvasPoster/index.vue'

const components: object[] = [
  imageText,
  swiper,
  LuckyWheel,
  LuckyGrid
  // canvasPoster
]

export default {
  install: function(vm: App) {
    components.forEach(item => {
      vm.component((item as any).name, item)
    })
  }
}
