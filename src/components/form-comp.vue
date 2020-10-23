<template>
  <form>
    <validate-input
      v-model="email"
      :rules="emailRule"
      placeholder="请输入Email"
    />
    {{ email }}
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import ValidateInput, { RuleProps } from './validate-input.vue'
export default defineComponent({
  name: 'form-comp',
  components: {
    ValidateInput
  },
  setup () {
    const email = ref('viking@qq.com')
    const emailRule: RuleProps = reactive([
      { type: 'required', message: '邮箱不能为空' },
      { type: 'email', message: '请输入合法的邮箱' }
    ])
    return {
      emailRule,
      email
    }
  }
})
</script>
