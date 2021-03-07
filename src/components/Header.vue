<template>
    <header>
        <nav>
            <img src="../assets/logo.png" class="nav-icon">
            <router-link to="Home" >Home</router-link>
            <router-link to="Profile">Profile</router-link>
            <router-link to="Blogs">Blog</router-link>
            <router-link to="Todo">Todo</router-link>
            <router-link to="Login"  class="button shift">Login</router-link>
            <router-link to="Sign_up" class="button">Sign up</router-link>
        </nav>
    </header>
</template>

<script>


export default {
    name: 'Header',
components: {

    },
}
</script>

<style scoped>
</style>