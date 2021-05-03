<template>
    <header>
        <nav>
            <img src="../assets/logo.png" class="nav-icon">
            <router-link to="Home" >Home</router-link>
            <router-link to="Profile" v-if="currentUser">{{currentUser.username}}</router-link>
            <router-link to="Blogs">Blog</router-link>
            <!--<router-link to="Todo">Todo</router-link>-->
            <router-link v-if="!currentUser" to="Login"  class="button shift">Login</router-link>
            <router-link v-if="!currentUser" to="Sign_up" class="button">Sign up</router-link>\
            <a v-if="currentUser" class="nav-link" href @click.prevent="logOut">
                LogOut
            </a>
        </nav>
    </header>
</template>

<script>


export default {
    name: 'Header',
    components: {
    },
    computed: {
        currentUser() {
            return this.$store.state.auth.user;
        },
    },
    methods: {
        logOut() {
            this.$store.dispatch('auth/logout');
            this.$router.push('/Login');
        }
    }
}
</script>

<style scoped>
</style>