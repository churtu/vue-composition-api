
import { ref } from 'vue';

const useCounter = ( initialValue = 0 ) => {
    const counter = ref(initialValue);
    
    return {
        counter,
        increase: () => counter.value++,        
        decrease: () => counter.value--,

    }
}

export default useCounter;