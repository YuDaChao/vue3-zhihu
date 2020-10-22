<template>
  <div class="dropdown" ref="dropdownRef">
    <a href="#" class="btn btn-outline-light dropdown-toggle" @click.prevent="toggle">
      {{ title }}
    </a>
    <ul class="dropdown-menu" style="display: block;" v-show="visible">
      <dropdown-item>新建文章</dropdown-item>
      <dropdown-item>编辑资料</dropdown-item>
      <dropdown-item disabled>退出登陆</dropdown-item>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import DropdownItem from './dropdown-item.vue'
import { useClickOutside } from '@/hooks/useClickOutside'
export default defineComponent({
  name: 'dropdown',
  components: {
    DropdownItem
  },
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup () {
    const visible = ref(false)
    const dropdownRef = ref<null | HTMLElement>(null)
    const toggle = () => {
      visible.value = !visible.value
    }
    const isClickOutside = useClickOutside(dropdownRef)
    watch(isClickOutside, () => {
      if (visible.value && isClickOutside.value) {
        visible.value = false
      }
    })
    return {
      visible,
      dropdownRef,
      toggle
    }
  }
})
</script>
