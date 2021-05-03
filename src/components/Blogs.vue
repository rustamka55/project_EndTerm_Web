<template>
    <div class="container">
        <div class="blog-container">
            <input v-if="loggedIn" type="text" v-model= "title" name="blog-title" id="blog-title" placeholder="Write title">
            <input v-if="loggedIn" type="text" v-model= "message" name="blog-message" id="blog-message" placeholder="Write your thoughts">
            <button v-if="loggedIn" @click="onSubmit(title,message)" class="submit-button">Send</button>
            <article class="blog" :key="blog.id" v-for="blog in sorted">
                <h2>{{blog.title}}</h2>
                <h3>{{blog.author}}</h3>
                <h4>{{blog.date}}</h4>
                <p>{{blog.message}}</p>
            </article>
        </div>
    </div>  
</template>

<script>
import axios from 'axios';

export default {
    name:'Blogs',
    props:{
        
    },
    data(){
        return {
            blogs: []
        };
    },
    computed: {
        currentUser() {
            return this.$store.state.auth.user;
        },
        loggedIn() {
            return this.$store.state.auth.status.loggedIn;
        },
        sorted() {
            let sorted = this.blogs;
            sorted = sorted.sort((a,b) => {return b.id - a.id})
            return sorted;
        }
    },
    created() {
        axios.get('http://localhost/api/blog/read.php').then((response) => {
            this.blogs = response.data.records;
        }, (error) => {
            console.log(error);
        });;
    },
    methods:{
        onSubmit: function(ttl,msg){
            const d = new Date();
            const a = d.getDate().toString() + '.' + (d.getMonth()+1).toString() + '.' + d.getFullYear().toString();
             const headers = {
                'Content-Type': 'text/plain'
            };
            axios.post('http://localhost/api/blog/create.php',{
                    "title": ttl,
                    "author": this.currentUser.username,
                    "date": a,
                    "message":msg,
                },
                {headers}
            ).then((response) => {
                window.location.reload()
            }, (error) => {
                console.log(error);
            });;
        }
    }
}
</script>

<style scoped>
</style>