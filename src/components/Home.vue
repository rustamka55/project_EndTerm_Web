<template>
    <div class="container" style="">
        <Ranking :rankings = "rankings"></Ranking>
        <News :news = "news"></News>
        <Latest :latest_releases = "latest_releases"></Latest>
    </div>
</template>

<style scoped>

</style>

<script>
import Ranking from './Ranking'
import News from './News'
import Latest from './Latest_releases'
export default {
    name:"Home",
    components: {
        Ranking,
        News,
        Latest,
    },
    props:{
        news:Array,
        rankings:Array,
        latest_releases:Array,
        
    }
}
</script>