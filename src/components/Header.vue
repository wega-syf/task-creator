<template lang="">
<div id='head'>
    <h1>
        {{title}} 
    </h1>
    <Button @toggle-add-task='$emit("toggle-add-task")' 
            :title="showAddTask ? 'Close' : 'Add Task'"
            :color="showAddTask ? '#E84855': '#1B998B'"/>

</div>
    
<div id='sub'>
    <h2>{{subtitle}}</h2>
    
</div> 

   
</template>

<script>
import Button from './Button.vue'

export default {
    name: 'Header',
    props:{
        showAddTask:Boolean,
        title: {
            type: String,
            default: "Task Generator 20XX"
        },
        subtitle: {
            type: String,
            default: "hello nice"
        }
    },
    components:{
        Button
    },
    emits:['toggle-add-task']
    
}
</script>


<style scoped>
   #head{
        display: flex;
        justify-content: space-between;
        align-items:center;
        margin-bottom: 10px;
    }
    /* #sub{
        justify-content: center;
        align-items: center;
        display: flex;
    }
    #butter{
        justify-content: center;
        align-items: center;
        display: flex;
    } */
</style>