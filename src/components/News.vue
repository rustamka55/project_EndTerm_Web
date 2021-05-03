<template>
    <div class="news-container">
                <h1>News</h1>
                <article class="news" :key="newss.id" v-for="newss in sorted">
                    <h2>{{newss.title}}</h2>
                    <h3>{{newss.author}}</h3>
                    <h4>{{newss.date}}</h4>
                    <p>{{newss.message}}</p>
                </article>
            </div>
</template>

<script>
import axios from 'axios';

export default {
    name:'News',
    props:{
    },
    data(){
        return {
            news: []
        };
    },
    computed: {
        loggedIn() {
            return this.$store.state.auth.status.loggedIn;
        },
        sorted() {
            let sorted = this.news;
            sorted = sorted.sort((a,b) => {return b.id - a.id})
            return sorted;
        }
    },
    created() {
        axios.get('http://localhost/api/blog/readNews.php').then((response) => {
            this.news = response.data.records;
        }, (error) => {
            console.log(error);
        });;
    },
}
</script>

<style scoped>

</style>