<template>
  <h1>Thanos todo list</h1>
  <h4>Tareas: {{ pending.length }}</h4>
  <hr>
  <button
  @click="currentTab = 'all'"
  :class="{'active': currentTab === 'all'}">Todos</button>
  <button
  @click="currentTab = 'pending'"
  :class="{'active': currentTab === 'pending'}">Pendientes</button>
  <button
  @click="currentTab = 'completed'"
  :class="{'active': currentTab === 'completed'}">Completados</button>
  <div>
    <ul>
      <li 
        @dblclick="toggleTodo(todo.id)" 
        :class="{'completed': todo.completed }" 
        v-for="todo in getTodosByTab" 
        :key="todo.id">
        {{todo.text}}
      </li>
    </ul>
  </div>
  <button @click="openModal">Crear Todo</button>

  <Modal v-if="isModalOpen" @on:close="closeModal">
    <template v-slot:header>
      <h3>Crear Todo</h3>
    </template>
    <template v-slot:content>
      <form @submit.prevent="createTodo">
        <input type="text" v-model="text">
      </form>
    </template>
    <template v-slot:footer>
      <button @click="createTodo(); closeModal()">Crear Todo</button>
      <button @click="closeModal">Salir</button>
    </template>
  </Modal>
</template>

<script>
import useTodo from '../composables/useTodo';
import Modal from '../components/Modal.vue';
import useModal from '../composables/useModal';
export default {
  components:{
    Modal,
  },
  setup(){
    const {
      currentTab,
      pending,
      completed, 
      allTodos,
      getTodosByTab,
      toggleTodo,
      createTodo,
      text
    } = useTodo();
    
    const {
      isModalOpen,
      openModal,
      closeModal
    } = useModal();

    return {
      currentTab,
      pending,
      completed, 
      allTodos,
      getTodosByTab,
      toggleTodo,
      createTodo,
      text,
      isModalOpen,
      openModal,
      closeModal
    }
  }
}
</script>

<style scoped>
div{
  display: flex;
  justify-content: center;
  align-content: center;
  text-align: center;
}
ul{
  width: 300;
  text-align: left;
}
li{
  cursor: pointer;
}

.active{
  background-color: #2c3e50;
  color:white
}

.completed{
  text-decoration: line-through;
}

</style>