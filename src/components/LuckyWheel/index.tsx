import { defineComponent, ref } from 'vue'
import { LuckyWheel, LuckyGrid } from 'vue-luck-draw/vue3'

export default defineComponent({
  name: 'LuckyWheel',
  components: { LuckyWheel, LuckyGrid },
  props: {},
  setup() {
    const blocks = [
      { padding: '20px' },
      {
        padding: '20px',
        imgs: [
          {
            src: require('@/assets/images/luckDraw.png'),
            width: '100%',
            rotate: true
          }
        ]
      }
    ]
    const prizes: object[] = [
      { name: '0' },
      { name: '1' },
      { name: '2' },
      { name: '3' },
      { name: '4' },
      { name: '5' },
      { name: '6' },
      { name: '7' }
    ]
    const buttons = [
      {
        fonts: [{ text: 'Go', top: -12 }],
        radius: '22%',
        background: '#2da3e0',
        pointer: true
      }
    ]

    let refs: any
    const luckDom = (el: HTMLElement) => {
      refs = el
    }

    const startCallBack = () => {
      refs.play()
      setTimeout(() => {
        refs.stop((Math.random() * 8) >> 0)
      }, 1000)
    }

    return () => (
      <LuckyWheel
        ref={luckDom}
        width="240px"
        height="240px"
        blocks={blocks}
        prizes={prizes}
        buttons={buttons}
        onStart={startCallBack}
      />
    )
  }
})
