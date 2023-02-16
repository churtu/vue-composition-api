<template>
  <h2 v-if="isLoading">Espere por favor...</h2>
  <h2 v-else>Usuarios</h2>
  <h5 v-if="errorMessage">{{errorMessage}}</h5>
  <div v-if="users.length > 0">
    <UserList :users="users" v-slot="{user}">
        <h5>{{user.first_name}} {{user.last_name}}</h5>
        <span>{{user.email}}</span>

    </UserList>
  </div>
  <button @click="previusPage">Atrás</button>
  <button @click="nextPage">Siguiente</button>
  <span>Pagina: {{currentPage}}</span>
</template>

<script>
import useUsers from '../composables/useUsers';
import UserList from '../components/UserList.vue';
export default {
    components:{
        UserList
    },
    setup(){
        const {
            users,
            isLoading,
            errorMessage,
            currentPage,
            nextPage,
            previusPage
        } = useUsers();
        
        return {
            users,
            isLoading,
            errorMessage,
            currentPage,
            nextPage,
            previusPage
        }
    }
}
</script>

<style scoped>
h2{
    text-align: center;
    width: 100%;
}
div{
    display: flex;
    justify-content: center;
    text-align: center;
}
ul{
    width: 250px;
}
</style>