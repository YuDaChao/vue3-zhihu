import {
  Ref,
  reactive,
  toRefs,
  onMounted,
  onUnmounted,
  onUpdated
} from 'vue'
interface UseMousePositionProp {
  x: Ref<number>;
  y: Ref<number>;
}
export const useMousePosition = (): UseMousePositionProp => {
  // const x = ref(0)
  // const y = ref(0)
  const position = reactive({
    x: 0,
    y: 0
  })
  const onMouseClick = (event: MouseEvent) => {
    position.x = event.clientX
    position.y = event.clientY
  }
  onMounted(() => {
    console.log('hooks onMounted')
    document.addEventListener('click', onMouseClick)
  })
  onUpdated(() => {
    console.log('hooks onUpdated')
  })
  onUnmounted(() => {
    console.log('hooks onUnmounted')
    document.removeEventListener('click', onMouseClick)
  })
  return toRefs(position)
}
