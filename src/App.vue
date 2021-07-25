<template>
  <div class="container">
    <!-- <h1>Hello World</h1> -->
    <Header @toggle-add-task="toggleAddTask" subtitle="Manage your task now"
    :showAddTask="showAddTask"/>
    <br>
    <div v-if="showAddTask">

    <AddTask @add-task='addTask'/>
    </div>
    <Tasks
    @toggle-reminder='toggleReminder' 
    @task-delete="deleteTask" :tasks="tasks"/>
    
  </div>

  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import Tasks from './components/Tasks.vue'
import AddTask from './components/AddTask.vue'


export default {
  name: 'App',
  components: {
    // HelloWorld
    Header,
    Tasks,
    AddTask
  },
  data(){
    return{
      tasks: [],
      showAddTask: false
      // TODO: Still needs a backend, because it's not saved sadge 
    }
  },
  methods:{ 

  /**
   * Async methods to fetch from db.json fake rest-api backend
   */
  async fetchTasks(){
    const res = await fetch("http://localhost:5000/tasks")
    const data = await res.json()
    return data
  },

  async fetchTask(id){
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    return data
  },
  /**
   * Sync methodds
   */
    toggleAddTask(){
      this.showAddTask = !this.showAddTask
    },
    // Create a new task and add it to the tasks array
    addTask(newTask){
      this.tasks.push(newTask)
    },
    /*
    a method that deletes a selected task
    Reassigns the tasks attribute to the tasks which doesn't have the same id 
    as the one deleted (returns everything but the deleted one). 
    Uses filter function to delete elements
    */
    deleteTask(id){
      if (confirm('Are you sure to delete this task?')){
        this.tasks = this.tasks.filter(
          (task)=>{
            return task.id !== id }
        )

      }
    },
    /* 
    Method to toggle the reminder attribute of a task
    if its id matches with the parameter, otherwise 
    return the task unchanged.
    Uses map function to re-map the tasks array
    */

    toggleReminder(id){
      this.tasks = this.tasks.map(
        task => task.id === id ? {
          ...task, reminder: !task.reminder} : task  // Returns the task itself, but changes the reminder attr
      )
    },
    
  },
  async created(){
    this.tasks = await this.fetchTasks()
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Poppins', sans-serif;
}

.container {
  max-width: 800px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}

.btn {
  display: flex;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
 
}

.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.98);
}

.btn-block {
  display: block;
  width: 100%;
}

</style>
