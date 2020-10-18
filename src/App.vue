<template>
  <div class="app">
    <reactive-comp />
    <lifecycle-comp />
    <teleport-comp :visible="visible" @close="onModalClose" />
    <button @click="openModal">打开</button>
    <Suspense>
      <template #default>
        <async-comp />
      </template>
      <template #fallback>
        <h1>loading...</h1>
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ReactiveComp from '@/components/reactive-comp.vue'
import LifecycleComp from '@/components/lifecycle-comp.vue'
import TeleportComp from '@/components/teleport-comp.vue'
import AsyncComp from '@/components/async-comp.vue'
export default defineComponent({
  name: 'App',
  components: {
    ReactiveComp,
    LifecycleComp,
    TeleportComp,
    AsyncComp
  },
  setup () {
    const visible = ref(false)
    const onModalClose = () => {
      console.log('modal close')
      visible.value = false
    }
    const openModal = () => {
      visible.value = true
    }
    return {
      onModalClose,
      openModal,
      visible
    }
  }
})
</script>

<style>
</style>
