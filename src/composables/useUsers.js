import axios from 'axios';
import { ref } from 'vue';

export default () => {
        const isLoading     = ref(true);
        const currentPage   = ref(1);
        const users         = ref([]);
        const errorMessage  = ref(null);
        
        const getUsers = async (page = 1) => {
                if(page <= 0) page = 1;
                isLoading.value = true;
                const {data} = await axios.get('https://reqres.in/api/users',{
                    params: {
                        page
                    }
                });
                if(data.data.length > 0){
                    users.value         = data.data;
                    currentPage.value   = page;
                    errorMessage.value  = null;
                }else if( currentPage.value > 0){
                    errorMessage.value = 'No hay mas registros';
                }
                isLoading.value = false
            };
        getUsers();
        return {
            users,
            isLoading,
            errorMessage,
            currentPage,
            nextPage: () => getUsers( currentPage.value + 1 ),
            previusPage: () => getUsers( currentPage.value -1 )
        }
}