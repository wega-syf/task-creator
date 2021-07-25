<template>
  <div class="container">
    <!-- <h1>Hello World</h1> -->
    <Header @toggle-add-task="toggleAddTask" subtitle="Manage your task now"
    :showAddTask="showAddTask"/>
    <br>
    
    <router-view :showAddTask="showAddTask"></router-view>

    <Footer />

  </div>
  
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'


export default {
  name: 'App',
  components: {
    // HelloWorld
    Header,
    Footer
  },
  data() {
    return {
      showAddTask: false
    }
  },
  
  methods:{
    toggleAddTask(){
        this.showAddTask = !this.showAddTask
        },
    
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
