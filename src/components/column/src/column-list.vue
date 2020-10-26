<template>
  <div class="row">
    <div v-for="column in columns" :key="column.id" class="col-4 mb-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body text-center">
          <img
            :src="column.avatar"
            :alt="column.title"
            class="rounded-circle border border-light w-25 my-3"
          />
          <h5 class="card-title">{{ column.title }}</h5>
          <p class="card-text text-left">{{ column.description }}</p>
          <router-link :to="`/column/${column.id}`" class="btn btn-outline-primary">进入专栏</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { ColumnProps } from './props'

const defaultAvatar = require('@/assets/column.jpg')

export default defineComponent({
  name: 'column-list',
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>,
      required: true
    }
  },
  setup (prop) {
    const columns = prop.list.map((column: ColumnProps) => {
      if (!column.avatar) {
        column.avatar = defaultAvatar
      }
      return column
    })
    return {
      columns
    }
  }
})
</script>
