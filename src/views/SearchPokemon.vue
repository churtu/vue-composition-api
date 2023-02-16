<template>
  <h1>Buscar Pokemon: {{pokemonId}}</h1>
  <form @submit.prevent="onSubmit">
    <input v-model="pokemonId" type="number" placeholder="Numero de pokemon" ref="txtSearch"/>
  </form>
  <br>
  <span>Presione enter para buscar</span>
</template>

<script>
import { ref, onActivated } from 'vue';
import { useRouter } from 'vue-router';
export default {
  setup(){
    const txtSearch = ref();
    const pokemonId = ref(1);
    const router = useRouter();

    onActivated(() => txtSearch.value.select());
    
    return {
      pokemonId,
      txtSearch,
      onSubmit: () => {
        router.push({ name:'pokemon', params: { id: pokemonId.value }})
      }
    }
  }
}
</script>

<style>

</style>