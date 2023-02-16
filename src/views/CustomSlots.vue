<template>
  <h1>Slots</h1>
  <button @click="openModal">Abrir modal</button>
  <Modal v-if="isModalOpen" @on:close="closeModal" title="Esa es la gatita">
    <template v-slot:header>
        <h1>Hola potin</h1>
    </template>
    <template v-slot:content>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit sed tempora consectetur magnam eligendi labore doloremque ipsam veritatis tempore non minus veniam, rerum neque animi aliquam inventore modi. Vel, cum.</p>
    </template>
    <template v-slot:footer>
        <button @click="closeModal">Salir</button>
    </template>
    <template v-slot:exposed="{title}">
        <span>{{title}}</span>
    </template>
  </Modal>
</template>

<script>
import Modal from '../components/Modal.vue';
import useModal from '../composables/useModal';
export default {
    components:{
        Modal
    },
    setup(){
        const {
            isModalOpen,
            openModal,
            closeModal
        } = useModal();

        return {
            isModalOpen,
            openModal,
            closeModal
        }
    }
}
</script>

<style>

</style>