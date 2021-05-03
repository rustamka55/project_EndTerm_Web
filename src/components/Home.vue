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
import UserService from '../services/user.service';

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
        
    },
    data(){
        return{
            content:''
        };
    },
    mounted() {
    UserService.getPublicContent().then(
      response => {
        this.content = response.data;
      },
      error => {
        this.content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    );
  }
}
</script>