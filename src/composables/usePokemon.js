import axios from 'axios';
import { ref } from 'vue';

export default (id = 1) => {
    const isLoading = ref(false);
    const errorMessage = ref(null);
    const pokemon = ref();

    const searchPokemon = async ( id ) => {
        if(!id) return;
        isLoading.value = true;
        pokemon.value = null;
        try {
            const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            pokemon.value = data;
            errorMessage.value = null;
            console.log(data);
        } catch (error) {
            errorMessage.value = 'No se pudo cargar el Pokemon.';
        }
        isLoading.value = false;
    }

    searchPokemon(id);

    return {
        errorMessage,
        pokemon,
        isLoading,
        searchPokemon
    }
}