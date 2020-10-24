<template>
  <form class="validate-form-container">
    <slot />
    <div class="validate-form__footer">
      <slot name="submit">
        <button type="submit" class="btn btn-primary" @click.prevent="submit">提交</button>
      </slot>
    </div>
  </form>
</template>
<script lang="ts">
import { defineComponent, onUnmounted, reactive } from 'vue'
import mitt from 'mitt'
// import { InputRef } from './validate-input.vue'
export const emitter = mitt()
export const EmitterType = 'FORM_ITEM_CREATED'
type ValidationFunType = () => Promise<boolean>
export default defineComponent({
  name: 'validate-form',
  emits: ['submit'],
  setup (props, context) {
    let validationFun = reactive<ValidationFunType[]>([])
    const submit = () => {
      Promise.all(validationFun.map((fun: ValidationFunType) => fun()))
        .then(result => {
          context.emit('submit', result)
        })
        .catch(error => {
          context.emit('submit', error)
        })
    }
    const callback = (fun?: ValidationFunType) => {
      if (fun) {
        validationFun.push(fun)
      }
    }
    emitter.on<ValidationFunType>(EmitterType, callback)

    onUnmounted(() => {
      validationFun = []
      // 移除监听器
      emitter.off<ValidationFunType>(EmitterType, callback)
    })
    return {
      submit
    }
  }
})
</script>
<style lang="less" scoped>
.validate-form-container {
  .validate-form__footer {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
