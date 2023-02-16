import { computed, ref } from 'vue';
import { useStore } from 'vuex';

const useTodo = () => {
    const store = useStore();
    const currentTab = ref('all');
    const text = ref('');

    return {
      currentTab,
      text,
      pending: computed(() => store.getters['pendingTodos']),
      completed: computed(() => store.getters['completedTodos']),
      allTodos: computed(() => store.getters['allTodos']),
      getTodosByTab: computed(() => store.getters['getTodosByTab'](currentTab.value)),
      toggleTodo: (id) => store.commit('toggleTodo', {id}),
      createTodo: () => store.commit('createTodo', { text: text.value })
    };
}

export default useTodo;