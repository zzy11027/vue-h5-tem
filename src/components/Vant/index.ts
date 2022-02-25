import { App } from 'vue'
import {
  Dialog,
  Button,
  List,
  PullRefresh,
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  Image as VanImage,
  Form,
  Field,
  NavBar,
  Icon,
  Cell,
  CellGroup,
  Grid,
  GridItem
} from 'vant'

// https://vant-contrib.gitee.io/vant/v3/#/zh-CN
const plugins = [
  Dialog,
  Button,
  List,
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  VanImage,
  PullRefresh,
  Form,
  Field,
  NavBar,
  Icon,
  Cell,
  CellGroup,
  Grid,
  GridItem
]

export default {
  install: function(vm: App) {
    plugins.forEach(item => {
      vm.component(item.name, item)
    })
  }
}
