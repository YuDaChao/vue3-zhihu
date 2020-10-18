<template>
  <div class="reactive">
    <h1>{{ count }}</h1>
    <ul>
      <li v-for="number in numbers" :key="number">
        <h1>{{ number }}</h1>
      </li>
    </ul>
    <ul>
      <li v-for="number in doubleNumber" :key="number">
        <h1>{{ number }}</h1>
      </li>
    </ul>
    <h1>{{ person.name }}</h1>
    <button @click="onClick">点一下</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, toRefs } from 'vue'
interface DataProps {
  count: number;
  numbers: number[];
  person: { name?: string };
}
export default defineComponent({
  name: 'reactive-comp',
  setup () {
    const data: DataProps = reactive({
      count: 0,
      numbers: [1, 2, 3],
      person: {}
    })
    // 由于vue3使用proxy，所以修改数组的某一项或者给对象添加属性也是被监听的
    data.numbers[0] = 10
    data.person.name = 'viking'
    const doubleNumber = computed(() => data.numbers.map((number: number) => number * 2))
    const onClick = () => {
      data.count++
      data.person.name = 'happy'
      data.numbers.push(5)
    }
    // 这里的count使用解构 会丢失其响应式
    // const { count, numbers, person } = data
    // 使用 toRefs，解构就不会失去响应式
    const dataRefs = toRefs(data)
    return {
      // data
      // 可以使用解构 count会丢失其响应式 可以使用toRefs
      // ...data,
      ...dataRefs,
      // count,
      // numbers,
      // person,
      doubleNumber,
      onClick
    }
  }
})
</script>
