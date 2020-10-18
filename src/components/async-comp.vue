<template>
  <div>
    <img :src="dog.message">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'
interface Result {
  message: string;
  status: string;
}
export default defineComponent({
  name: 'async-comp',
  async setup () {
    const result = await axios.get<Result>('https://dog.ceo/api/breeds/image/random')
    return {
      dog: result.data
    }
  }
})
</script>
