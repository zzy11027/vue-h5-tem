<template>
  <imageText />
  <!-- <LuckyWheel />
  <LuckyGrid /> -->
  <swiper />
  <canvasPoster />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home',
  components: {}
})
</script>

<style lang="scss" scoped>
.home {
  background: #f5f5f5;
  background: #f5f5f5;
  background: #f5f5f5;
  background: #f5f5f5;
  background: #f5f5f5;
  min-height: 100vh;

  .goods-list {
    display: flex;

    flex-wrap: wrap;
    justify-content: space-around;
    background: #fff;
  }
}
</style>
