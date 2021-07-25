<template lang="">
<div id='head'>
    <h1>
        {{title}} 
    </h1>
    <Button @toggle-add-task='$emit("toggle-add-task")'
            v-show="homepage" 
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
    emits:['toggle-add-task'],
    // Add a computed property to limit the button
    // from showing at the about page
    computed:{
        homepage(){
            if(this.$route.path ==='/') return true
            else return false
        }
    }
    
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