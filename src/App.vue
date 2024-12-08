<template>

<!--  Не получилось сделать фокус, сбарсывается
        при вводе задачи 66 строчка -->
<!--  Не работает add по энтеру 14 и 52 строчка-->
git
  <div class="todo-container">
    <h1>{{ inputValue }}</h1>
    <h3 class="todo-title">You tasks</h3>
    <div class="todo-input-container">
      <form>
        <input
            autofocus
            type="text"
            id="todo-input"
            v-model="inputValue"
            @keydown.enter.prevent="add"
        >
      </form>
      <button
          id="add-btn"
          @click.prevent="add(inputValue)"
          :disabled="inputValue.length < 4"
      >+</button>
    </div>
    <div>
      <ul class="todo-list">
        <li v-for="task in taskStore.tasks" :key="task.id">
          {{ task.id }}. {{ task.title }}
          <button
              v-if="task.isComplete"
              class="task-btn delete"
              @click="remove(task.id)"
          >Delete</button>

          <button
              v-else
              class="task-btn complete"
              @click="complete(task.id)"
          >Complete</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import {useTaskStore} from "./store/TaskStore.js";
import {onMounted, ref} from "vue";

const taskStore = useTaskStore()
const inputValue = ref('')
const todoInput = ref(null)

const add = (id) => {
  if (id.length > 3){
    taskStore.addTask(id)
    inputValue.value = ''
  }
}
const complete = (id) => {
  taskStore.completeTask(id)
}
const remove = (id)=>{
  taskStore.removeTask(id)
}

onMounted(()=>{
  if (todoInput){
    todoInput.focus()
  }
})


</script>

<style lang="scss" scoped>

</style>