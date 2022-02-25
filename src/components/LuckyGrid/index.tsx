import { defineComponent, ref, onMounted } from 'vue'
import { LuckyWheel, LuckyGrid } from 'vue-luck-draw/vue3'

export default defineComponent({
  name: 'LuckyGrid',
  components: { LuckyWheel, LuckyGrid },
  setup() {
    let luckyNum = 0
    const blocks = [{ padding: '5px', background: '#ff4a4c', borderRadius: 10 }]
    const prizes: any = ref<Array<any>>([])
    const buttons = [
      {
        x: 1,
        y: 1,
        borderRadius: 10,
        imgs: [
          {
            src: require('@/assets/images/button.png'),
            width: '75%',
            top: '20%'
          }
        ]
      }
    ]
    const defaultConfig = {
      gutter: 5
    }
    const defaultStyle = {
      borderRadius: 15,
      fontColor: '#DF424B',
      fontSize: '14px',
      textAlign: 'center',
      background: '#fff',
      shadow: '0 5 1 #ebf1f4'
    }
    const activeStyle = {
      background: 'linear-gradient(270deg, #FFDCB8, #FDC689)',
      shadow: ''
    }
    let refs: any
    const luckDom = (el: HTMLElement) => {
      refs = el
    }
    const getPrizeList = () => {
      console.log('钩子函数 :>> ')
      // 模拟接口请求奖品列表
      setTimeout(() => {
        const data = [
          { name: '1元红包', img: require('@/assets/images/0.png') },
          { name: '100元红包', img: require('@/assets/images/1.png') },
          { name: '0.5元红包', img: require('@/assets/images/2.png') },
          { name: '2元红包', img: require('@/assets/images/3.png') },
          { name: '10元红包', img: require('@/assets/images/4.png') },
          { name: '50元红包', img: require('@/assets/images/5.png') },
          { name: '0.3元红包', img: require('@/assets/images/6.png') },
          { name: '5元红包', img: require('@/assets/images/7.png') }
        ]
        const prizesArr = []
        luckyNum = 1
        let axis = [
          [0, 0],
          [1, 0],
          [2, 0],
          [2, 1],
          [2, 2],
          [1, 2],
          [0, 2],
          [0, 1]
        ]
        for (let i = 0; i < 8; i++) {
          let item = data[i]
          prizesArr.push({
            index: i,
            x: axis[i][0],
            y: axis[i][1],
            fonts: [{ text: item.name, top: '70%' }],
            imgs: [{ src: item.img, width: '55%', top: '8%' }]
          })
        }
        prizes.value = prizesArr
      }, 0)
    }
    const startCallBack = () => {
      if (!luckyNum) return alert('还剩0次抽奖机会')
      refs.play()
      setTimeout(() => {
        refs.stop((Math.random() * 7) >> 0)
      }, 2000)
    }

    onMounted(() => {
      getPrizeList()
    })
    return () => (
      <LuckyGrid
        ref={luckDom}
        width="300px"
        height="300px"
        blocks={blocks}
        prizes={prizes.value}
        buttons={buttons}
        defaultConfig={defaultConfig}
        default-style={defaultStyle}
        active-style={activeStyle}
        onStart={startCallBack}
      />
    )
  }
})
