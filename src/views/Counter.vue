<template>
  <h1>Counter</h1>
  <h3>{{ counter }}</h3>
  <button @click="decrease">-</button>
  <button @click="increase">+</button>
</template>

<script>
import useCounter from '@/composables/useCounter';
export default {
  name:'Counter',
  setup(){
    const { counter, increase, decrease } = useCounter();

    return {
      counter,
      increase,
      decrease
    }
  }
}
</script>