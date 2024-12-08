<template>
  <form class="todo-input-container" @submit.prevent="addTask">
    <input
        type="text"
        placeholder=""
        id="todo-input"
        v-model="inputValue"
    >
    <button id="add-btn">+</button>
  </form>
</template>

<script setup>
import {ref} from "vue";

const emit = defineEmits(['add-task'])
let inputValue = ref('')
const addTask = () => {
  emit('add-task', inputValue)
}

</script>

<style lang="scss" scoped>

</style>