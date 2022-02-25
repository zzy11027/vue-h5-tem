import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'swiper',
  setup() {
    const banner = ref([
      require('@/assets/logo.png'),
      require('@/assets/logo.png')
    ])
    return () => (
      <van-swipe autoplay={3000} indicator-color="white" lazy-render>
        {banner.value.map((item: string, idx: number) => {
          return (
            <van-swipe-item key={idx}>
              <van-image width="100%" height="150" src={item} />
            </van-swipe-item>
          )
        })}
      </van-swipe>
    )
  }
})
