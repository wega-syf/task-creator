<template lang="">
    <div v-for="task in tasks" :key="task.id">
        <Task 
        @toggle-reminder="$emit('toggle-reminder',task.id)"
        @task-delete="$emit('task-delete', task.id)" 
        :task="task"/>
    </div>
</template>
<script>
import Task from './Task.vue'

export default {
    name: 'Tasks',
    props:{
        tasks:Array
    },
    components:{
        Task
    },
    emits:['task-delete','toggle-reminder']
}
</script>
<style lang="">
    
</style>