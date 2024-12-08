<template>
  <div class="" v-if="taskStore.tasks">
    <h1>{{inputValue}}</h1>
    <ul class="todo-list">
      <li v-for="task in taskStore.tasks" :key="task.id">
        {{task.title}}
      </li>
    </ul>
  </div>
  <div v-else>

    <h5>Введите свою первую задачу.</h5>
  </div>

</template>

<script setup>
import {useTaskStore} from "../store/TaskStore.js";
const props = defineProps({
  tasks:{
    type: Object,
    required: false
  },
  inputValue: String,
})

const taskStore = useTaskStore()
</script>

<style lang="scss" scoped>

</style>