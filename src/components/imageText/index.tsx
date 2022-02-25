import { defineComponent } from 'vue'

export default defineComponent({
  name: 'imageText',
  setup() {
    return () => (
      <div
        class="imageText"
        style="color:red;font-size:20px;text-align:center;"
      >
        JAY
      </div>
    )
  }
})
