<template>
  <div class="app container">
    <global-header :user="currentUser" />
    <column-list :list="list" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList, { ColumnProps } from '@/components/column-list.vue'
import GlobalHeader, { UserProps } from '@/components/global-header.vue'
export default defineComponent({
  name: 'App',
  components: {
    ColumnList,
    GlobalHeader
  },
  setup () {
    const list: ColumnProps[] = [
      {
        id: 1,
        title: '测试数据',
        avatar: 'https://cdn4.buysellads.net/uu/1/63492/1592582861-Custom_Vendors_260x200_V2.png',
        description: '这是一段测试数据'
      },
      {
        id: 2,
        title: '测试数据',
        avatar: 'https://cdn4.buysellads.net/uu/1/63492/1592582861-Custom_Vendors_260x200_V2.png',
        description: '这是一段测试数据'
      },
      {
        id: 3,
        title: '测试数据',
        avatar: 'https://cdn4.buysellads.net/uu/1/63492/1592582861-Custom_Vendors_260x200_V2.png',
        description: '这是一段测试数据'
      },
      {
        id: 4,
        title: '测试数据',
        description: '这是一段测试数据'
      }
    ]
    const currentUser: UserProps = {
      isLogin: true,
      name: 'Viking'
    }
    return {
      list,
      currentUser
    }
  }
})
</script>

<style>
</style>
