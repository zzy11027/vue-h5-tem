import { App } from 'vue'
import Vconsole from 'vconsole'

const vconsole = {
  install() {
    console.log('process.env.NODE_ENV :>> ', process.env.NODE_ENV)
    if (process.env.NODE_ENV === 'development') {
      const vConsole = new Vconsole()
    }
  }
}

// vconsole.install()
export default vconsole
