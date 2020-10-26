<template>
  <div class="home">
    <column-list :list="list" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ColumnProps } from '@/components/column/src/props'
import { ColumnList } from '@/components/column'
import { GlobalDataProp } from '@/store/types'
export default defineComponent({
  name: 'Home',
  components: {
    ColumnList
  },
  setup () {
    const store = useStore<GlobalDataProp>()
    const list: ColumnProps[] = store.state.columns
    return {
      list
    }
  }
})
</script>

<style></style>
