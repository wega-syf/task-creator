<template lang="">
        <button v-on:click="update()" id='butt' class='btn' 
            :style='{background: color}'>
            {{title}}
        </button>
</template>
<script>
export default {
    name:'Button',
    props:{
        title:String,
        color:String
    },
    methods:{
        update(){
            this.$emit('toggle-add-task')
        }
    }
}
</script>
