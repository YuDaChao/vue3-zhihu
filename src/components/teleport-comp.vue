<template>
  <teleport to="#modal">
    <div class="dialog" v-if="visible">
      this is dialog
      <div class="footer">
        <button @click="closeModal">关闭</button>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'teleport-comp',
  props: {
    visible: Boolean
  },
  emits: {
    close: null
  },
  setup (props, context) {
    // console.log(props.visible, context.emit('close', { type: 'close' }))
    const closeModal = () => {
      context.emit('close')
    }
    return {
      closeModal
    }
  }
})
</script>

<style>
  .dialog {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 200px;
    height: 200px;
    background-color: white;
    margin: -100px 0 0 -100px;
    box-shadow: 2px 2px 2px 2px #f1f1f1;
  }
</style>
