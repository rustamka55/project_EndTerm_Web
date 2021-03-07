<template>
    <div class="news-container">
                <h1>News</h1>
                <article class="news" :key="newss.id" v-for="newss in news">
                    <h2>{{newss.title}}</h2>
                    <h3>{{newss.author}}</h3>
                    <h4>{{newss.date}}</h4>
                    <p>{{newss.message}}</p>
                </article>
            </div>
</template>

<script>
export default {
    name:'News',
    props:{
        news:Array,
    }
}
</script>

<style scoped>

</style>