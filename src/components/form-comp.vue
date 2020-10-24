<template>
  <validate-form @submit="submit">
    <validate-input
      v-model="email"
      type="text"
      :rules="emailRule"
      placeholder="请输入Email"
    />
    <validate-input
      v-model="password"
      type="password"
      :rules="passwordRule"
      placeholder="请输入密码"
    />
  </validate-form>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import ValidateForm from './validate-form.vue'
import ValidateInput, { RuleProps } from './validate-input.vue'
export default defineComponent({
  name: 'form-comp',
  components: {
    ValidateInput,
    ValidateForm
  },
  setup () {
    const email = ref('')
    const password = ref('')
    const emailRule: RuleProps = reactive([
      { type: 'required', message: '邮箱不能为空' },
      { type: 'email', message: '请输入合法的邮箱' }
    ])
    const passwordRule: RuleProps = reactive([
      { type: 'required', message: '密码不能为空' }
    ])
    const submit = (valid: boolean) => {
      console.log(valid)
    }
    return {
      emailRule,
      passwordRule,
      email,
      password,
      submit
    }
  }
})
</script>
