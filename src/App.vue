<template>
  <div class="container">
    <global-header :user="currentUser" />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import 'bootstrap/dist/css/bootstrap.min.css'
import { UserProps } from '@/components/global-header/src/props'
import { GlobalHeader } from '@/components/global-header'
import { GlobalDataProp } from '@/store/types'
export default defineComponent({
  name: 'App',
  components: {
    GlobalHeader
  },
  setup() {
    const store = useStore<GlobalDataProp>()
    const currentUser: UserProps = store.state.user
    return {
      currentUser
    }
  }
})
</script>

<style></style>
