<template >
    <AddTask v-show="showAddTask" @add-task='addTaskAsync'/>
    <Tasks
    @toggle-reminder='toggleReminderAsync' 
    @task-delete="deleteTaskAsync" :tasks="tasks"/>
</template>

<script>
import Tasks from '../components/Tasks.vue'
import AddTask from '../components/AddTask.vue'

export default {
    name:'Home',
    props:{
        showAddTask:Boolean
    },
    components:{
        Tasks,
        AddTask
    },
    
    data(){
        return{
        tasks: [],
        
        // TODO: Still needs a backend, because it's not saved sadge 
        // update : well now it works :D
        }
    },
    // Created component lifecycle 
    
    methods:{ 

    /**
     * Async methods to fetch from db.json fake rest-api backend
     */
    async fetchTasks(){
        const res = await fetch("api/tasks")
        const data = await res.json()
        return data
    },

    async fetchTask(id){
        const res = await fetch(`api/tasks/${id}`)
        const data = await res.json()
        return data
    },

    async addTaskAsync(task){ 
        // Add the task parameter into db.json
        // Use the post method, because we need to post stuff
        const res = await fetch('api/tasks',
        {method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(task)})

        // Return the new set of data to be shown
        const data = await res.json()
        this.tasks = [...this.tasks,data]
    },

    async deleteTaskAsync(id){
        if (confirm('Are you sure to delete this task?')){
        // Create request to delete the task with the id
        const res = await fetch(`api/tasks/${id}`,
        {
            method:'DELETE'
        })

        // Take the response status, if its '200', meaning no error or OK
        // then delete the task from this.tasks
        res.status === 200 ? (this.tasks = this.tasks.filter(
            (task)=>{return task.id !== id }
        )) : alert('Some error occured when deleting task')
        }

    },
    async toggleReminderAsync(id){
        const taskToToggle = await this.fetchTask(id)
        const updated = {...taskToToggle,
        reminder: !taskToToggle.reminder
        }
        // Create a PUT request, because we want to UPDATE stuff in there
        // Also needs headers + body parser
        const res = await fetch(`api/tasks/${id}`,
        {method: 'PUT',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(updated)})

        // const data = res.json()

        this.tasks = this.tasks.map(
            (task) => task.id === id ? {
            // Returns the task itself, but changes the reminder attr
            ...task, reminder: !task.reminder} : task)

    }, 

    
    /**
     * Sync methods for front-end
     */
        
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
    },
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
  padding-bottom: 20px;
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
