<template>
  <div class="form-group">
    <label>{{label}}</label>
    <input
      :value="inputRef.value"
      @blur="validate"
      @input="onInput"
      class="form-control"
      :class="{'is-invalid': inputRef.error}"
      v-bind="$attrs"
    >
    <div v-show="inputRef.error" class="invalid-feedback">
      {{ inputRef.message }}
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, reactive, onMounted } from 'vue'
import {
  EmailReg,
  NumberReg
} from '@/utils'
import { EmitterType, emitter } from './validate-form.vue'
interface RuleProp {
  type: 'required' | 'email' | 'number',
  message: string
}
export type RuleProps = RuleProp[]
export interface InputRef {
  value: string
  error: boolean
  message: string
}
export interface ValidateResult {
  valid: boolean,
  errors?: InputRef
}
export default defineComponent({
  name: 'validate-input',
  inheritAttrs: false,
  props: {
    modelValue: String,
    label: {
      type: String
    },
    rules: {
      type: Array as PropType<RuleProps>
    }
  },
  setup (props, context) {
    const inputRef: InputRef = reactive({
      value: props.modelValue || '',
      error: false,
      message: ''
    })
    const onInput = (e: KeyboardEvent) => {
      const value = (e.target as HTMLInputElement).value
      inputRef.value = value
      context.emit('update:modelValue', value)
    }
    // 验证
    const validate = (): Promise<ValidateResult> => {
      return new Promise<ValidateResult>((resolve, reject) => {
        const result: ValidateResult = {
          valid: false,
          errors: inputRef
        }
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
          result.valid = valid
          valid ? resolve(result) : reject(result)
        }
        resolve(result)
      })
    }
    onMounted(() => {
      emitter.emit(EmitterType, validate)
    })
    return {
      inputRef,
      validate,
      onInput
    }
  }
})
</script>
