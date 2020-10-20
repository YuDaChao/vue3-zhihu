<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark bg-primary mb-4 justify-content-between"
  >
    <a class="navbar-brand" href="#">Vue3 知乎</a>
    <ul v-if="!user.isLogin" class="list-inline mb-0">
      <li class="list-inline-item">
        <a href="#" class="btn btn-outline-light">登陆</a>
      </li>
      <li class="list-inline-item">
        <a href="#" class="btn btn-outline-light">注册</a>
      </li>
    </ul>
    <ul v-else class="list-inline mb-0">
      <li class="list-inline-item">
        <a href="#" class="btn btn-outline-light">你好，{{ user.name }}</a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
export interface UserProps {
  isLogin: boolean
  name?: string
  id?: string
}
export default defineComponent({
  name: 'global-header',
  props: {
    user: {
      type: Object as PropType<UserProps>,
      required: true
    }
  }
})
</script>
