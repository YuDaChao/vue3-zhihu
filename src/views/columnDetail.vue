<template>
  <div class="detail">
    <column-item :column="column" :posts="posts" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { ColumnItem } from '@/components/column'
import { ColumnProps } from '@/components/column/src/props'
import { PostProps } from '@/components/post/src/props'
import { GlobalDataProp } from '@/store/types'
export default defineComponent({
  name: 'detail',
  components: {
    ColumnItem
  },
  setup () {
    const store = useStore<GlobalDataProp>()
    const route = useRoute()
    const id = route.params.id
    const columnId = Number(id)
    const column = store.state.columns.find(
      (col: ColumnProps) => col.id === columnId
    )
    const posts = store.state.posts.filter(
      (post: PostProps) => post.columnId === columnId
    )
    return {
      column,
      posts
    }
  }
})
</script>
