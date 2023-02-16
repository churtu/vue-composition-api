<template>
    <h1 v-if="!pokemon && !errorMessage">Buscando...</h1>
    <h1 v-else-if="errorMessage">{{errorMessage}}</h1>
    <template v-else>
        <h3>{{pokemon.name}}</h3>
        <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
        <router-link :to="{name: 'pokemon-search'}">Regresar</router-link>
    </template>
</template>

<script>
import { useRoute, onBeforeRouteLeave } from 'vue-router';
import usePokemon from '../composables/usePokemon';
import { watch } from 'vue';
export default {
    setup(){
        const route = useRoute();
        const {
            isLoading, 
            errorMessage, 
            pokemon,
            searchPokemon
        } = usePokemon(route.params.id);

        onBeforeRouteLeave((guard) => {
            const answer = window.confirm('Esta seguro que desea irse a la mierda?');
            return answer;
        });

        watch(
            () => route.params.id,
            ( value, oldValue ) => searchPokemon(value)
        );

        return {
            isLoading,
            errorMessage,
            pokemon
        }
    }
}
</script>