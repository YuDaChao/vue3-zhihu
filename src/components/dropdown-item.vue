<template>
  <li class="dropdown-item" :class="{ 'is-disabled': disabled }">
    <slot />
  </li>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'dropdown-item',
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
})
</script>
<style lang="less" scoped>
.dropdown-item {
  &.is-disabled {
    color: #6c757d;
    pointer-events: none;
    background-color: transparent;
  }
}
</style>
