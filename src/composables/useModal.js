import { ref } from 'vue';

const useModal = () => {
    const isModalOpen = ref(false);
    return {
        isModalOpen,
        openModal: () => isModalOpen.value = true,
        closeModal: () => isModalOpen.value = false
    }
}
export default useModal;