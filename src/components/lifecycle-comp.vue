<template>
  <div>
    <h1>lifecycle</h1>
    <h1>{{ count }}</h1>
    <h1>x: {{ x }}, y: {{ y }}</h1>
    <button @click="onClick">点一下</button>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  onUpdated,
  onUnmounted,
  onRenderTracked,
  ref
} from 'vue'
import { useMousePosition } from '@/hooks/useMousePosition'
export default defineComponent({
  name: 'lifecycle-comp',
  setup () {
    const count = ref(0)
    const { x, y } = useMousePosition()
    // const x = ref(0)
    // const y = ref(0)
    const onClick = () => {
      count.value++
    }
    // const onMouseClick = (event: MouseEvent) => {
    //   x.value = event.clientX
    //   y.value = event.clientY
    // }
    onMounted(() => {
      console.log('onMounted')
      // 监听点击事件
      // document.addEventListener('click', onMouseClick)
    })
    onUpdated(() => {
      console.log('onUpdated')
    })
    onUnmounted(() => {
      console.log('onUnmounted')
      // 取消监听
      // document.removeEventListener('click', onMouseClick)
    })
    onRenderTracked((event) => {
      console.log(event)
    })
    return {
      count,
      x,
      y,
      onClick
    }
  }
})
</script>
