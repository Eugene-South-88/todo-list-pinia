import {defineStore} from 'pinia'

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [
      {
        id: 1,
        title: "Утренняя тренировка",
        isComplete: false
      },
      {
        id: 2,
        title: "Работа над проектом",
        isComplete: false
      },
      {
        id: 3,
        title: "Урок английского",
        isComplete: true
      }
    ]
  }),
  getters: {
    completedTask(){
      return this.tasks.isComplete === true
    }
  },
  actions: {
    addTask(text) {
      const counter = this.tasks.length + 1
      this.tasks.push({id: counter, title: text, isComplete: false})
    },
    completeTask(id) {
      console.log(id)
      const idx = this.tasks.findIndex((el) => el.id === id)
      this.tasks[idx].isComplete = true
    },
    removeTask(id) {
      const idx = this.tasks.findIndex(e => e.id === id)
      this.tasks.splice(idx, 1)
    }
  }
})