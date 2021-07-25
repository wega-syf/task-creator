<template>
    <footer>
        <p> Copyright &copy; 2021 Wega Syafitra Winarso</p>
        <router-link to="/about">About</router-link> 
    </footer>
</template>
<script>
export default {
    name: 'Footer'
}
</script>
<style scoped>
    a{
        color: rgb(64, 196, 37);
    }
    footer{
        margin-top: 50px;
        text-align: center;
        align-content: center;
        color: white;
        background-color: rgb(58, 56, 56);
        padding: 1rem;
        /* width: 60%; */

    }
</style>