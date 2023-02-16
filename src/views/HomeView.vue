<template>
  <div class="home">
    <h1>Rective vs ref</h1>
    <h3>{{ironMan}}</h3>
    <h3>{{ hulk }}</h3>
    <button @click="changeIronMain">cambiar ironman</button>
    <button @click="changeHulk">cambiar hulk</button>

    <h3>Ironman: {{ironManIsAlive}}</h3>
    <h3>hulk: {{hulkIsAlive}}</h3>
    <button @click="changeStatus">cambiar</button>
  </div>
</template>

<script>
import { ref, reactive } from 'vue';
export default {
  name: 'HomeView',
  setup(){
    const ironMan = ref({
      name: 'Tony',
      age: 30
    });

    const ironManIsAlive = reactive(false);

    const hulk = reactive({
      name: 'Bruce',
      age: 50
    });

    const hulkIsAlive = ref(true);

    return {
      ironMan,
      hulk,
      ironManIsAlive,
      hulkIsAlive,
      changeIronMain: () => {
        ironMan.value.name = 'Tony Stark';
        ironMan.value.age = 100;
      },
      changeHulk: () => {
        hulk.name = 'Bruce Banner';
        hulk.age = 45;
      },
      changeStatus: () => {
        hulkIsAlive.value = false;
        ironManIsAlive = true;
      }
    }
  }
}
</script>
