<template>
    <div class="container">
        <div class="blog-container">
            <input type="text" v-model= "title" name="blog-title" id="blog-title" placeholder="Write title">
            <input type="text" v-model= "message" name="blog-message" id="blog-message" placeholder="Write your thoughts">
            <button @click="onSubmit(title,message)" class="submit-button">Send</button>
            <article class="blog" :key="newss.id" v-for="newss in news">
                <h2>{{newss.title}}</h2>
                <h3>{{newss.author}}</h3>
                <h4>{{newss.date}}</h4>
                <p>{{newss.message}}</p>
            </article>
        </div>
    </div>  
</template>

<script>
export default {
    name:'Blogs',
    props:{
        news:Array,
        user:Object,
    },
    methods:{
        onSubmit: function(ttl,msg){
            const d = new Date();
            const a = d.getDate().toString() + '.' + (d.getMonth()+1).toString() + '.' + d.getFullYear().toString();
            this.news.splice(0,0,{
                id:Math.floor(Math.random()*1000),
                title:ttl,
                author: this.user.name,
                date: a,
                message: msg,
            })
        }
    }
}
</script>

<style scoped>
</style>