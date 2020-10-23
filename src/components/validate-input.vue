<template>
  <div class="form-group">
    <label>{{label}}</label>
    <input
      :value="inputRef.value"
      :type="type"
      :placeholder="placeholder"
      @blur="validate"
      @input="onInput"
      class="form-control"
      :class="{'is-invalid': inputRef.error}"
    >
    <div v-show="inputRef.error" class="invalid-feedback">
      {{ inputRef.message }}
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, reactive } from 'vue'
import {
  EmailReg,
  NumberReg
} from '@/utils'
interface RuleProp {
  type: 'required' | 'email' | 'number',
  message: string
}
export type RuleProps = RuleProp[]
export default defineComponent({
  name: 'validate-input',
  props: {
    modelValue: String,
    label: {
      type: String
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    rules: {
      type: Array as PropType<RuleProps>
    }
  },
  setup (props, context) {
    const inputRef = reactive({
      value: props.modelValue || '',
      error: false,
      message: ''
    })
    const onInput = (e: KeyboardEvent) => {
      const value = (e.target as HTMLInputElement).value
      inputRef.value = value
      context.emit('update:modelValue', value)
    }
    const validate = () => {
      if (props.rules) {
        const valid = props.rules.every((rule: RuleProp) => {
          inputRef.message = rule.message
          let passed = false
          switch (rule.type) {
            case 'required':
              passed = inputRef.value.trim() !== ''
              break
            case 'email':
              passed = EmailReg.test(inputRef.value)
              break
            case 'number':
              passed = NumberReg.test(inputRef.value)
              break
            default:
              break
          }
          return passed
        })
        inputRef.error = !valid
        console.log(valid, inputRef.message, inputRef.error)
      }
    }
    return {
      inputRef,
      validate,
      onInput
    }
  }
})
</script>
