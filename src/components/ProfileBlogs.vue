<template>
    <article class="blog" :key="newss.id" v-for="newss in news">
        <h2>{{newss.title}}</h2>
        <h3>{{newss.author}}</h3>
        <h4>{{news.date}}</h4>
        <p>{{newss.message}}</p>
    </article>
</template>

<script>
export default {
    name:"ProfileBlogs",
    props:{
         news:Array,
    }
}
</script>