<template>
  <div class="column-detail-page w-75 mx-auto">
    <div class="column-info row mb-4 border-bottom pb-4 align-items-center" v-if="column">
      <div class="col-3 text-center">
        <img :src="column.avatar && column.avatar" :alt="column.title" class="rounded-circle border w-100">
      </div>
      <div class="col-9">
        <h4>{{column.title}}</h4>
        <p class="text-muted">{{column.description}}</p>
      </div>
    </div>
    <post-list :posts="posts"></post-list>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { ColumnProps } from './props'
import PostList from '@/components/post/src/post-list.vue'
import { PostProps } from '@/components/post/src/props'
export default defineComponent({
  name: 'column-item',
  props: {
    column: {
      type: Object as PropType<ColumnProps>,
      required: true
    },
    posts: {
      type: Array as PropType<PostProps[]>,
      required: true
    }
  },
  components: {
    PostList
  }
})
</script>
