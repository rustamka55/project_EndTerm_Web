<template>
<Header></Header>
<router-view  :todo_list = "todo_list" :rankings = "rankings"  :latest_releases = "latest_releases"></router-view>
<Footer></Footer>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  data(){
    return{
      rankings: [],
      latest_releases:[],
      todo_list:[],
      user:{},
    } 
  },
  created(){
    axios.get('http://localhost/api/blog/readRankings.php').then((response) => {
            this.rankings = response.data.records;
        }, (error) => {
            console.log(error);
        });;
    axios.get('http://localhost/api/blog/readLatestReleases.php').then((response) => {
            this.latest_releases = response.data.records;
        }, (error) => {
            console.log(error);
        });;
    
    /*this.todo_list = [
      {
        id:0,
        text:"Do final project",
        checked:false,
      },
      {
        id:1,
        text:"Do desire project",
        checked:false,
      },
      {
        id:2,
        text:"sleep",
        checked:true,
      },
      {
        id:3,
        text:"Da",
        checked:false,
      },
    ]*/
  }
}
</script>

<style>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html,body {
    background-color: darkgray;
    height: 100%;
    margin:0;
}

nav {
    position: -webkit-sticky;
    position: sticky;
    top:0;
    z-index: 1;
    padding: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    background: rgba(56, 56, 56, 1);
    height: 4vw;
}

nav a {
    margin:0;
    display: block;
    padding: 1vw 0.7rem;
    font:2vw sans-serif;
    text-decoration: none;
    color: rgba(220, 170, 190, 1);
    line-height: 2vw;
}

nav a:hover {
    background:  rgba(20, 20, 20, 1);
    color: rgba(220, 170, 190, 0.7);
}

.nav-icon {
    height: 3vw;
    width: auto;
    margin:1rem;
}

.shift {
    margin-left: auto;
}

.button {
    font-weight: 800;
    padding: 1vw;
    color: rgba(220, 170, 190, 1);
}

.active {
    border-bottom: 0.2vw solid red;
    padding: 0.9vw;
}

.ranking,.new-releases {
    padding: 2vw 1vw;
    width: 25vw;
}

.ranking a {
    display: block;
    text-decoration: none;
    margin:0;
    padding: 2vh 1vw;
    font:2vw sans-serif;
    color: rgba(102, 0, 255, 1);
    line-height: 1.5vw;
}

.ranking ol{
    list-style: decimal;
    margin-left: 2vw;
    counter-reset: li;
}

.new-releases ul{
    margin-left: 2vw;
    counter-reset: li;
}

.ranking ol li{
    font: 1.2vw sans-serif;
    font-weight: 700;
    line-height: 8vh;
}

.new-releases ul li {
    font: 1.2vw sans-serif;
    font-weight: 700;
    line-height: 8vh;
}

.ranking ol dt {
    font: 1.2vw sans-serif;
    font-weight: 700;
}

.new-releases ul dt{
    font: 1.2vw sans-serif;
    font-weight: 700;
}

.ranking ol dd{
    list-style: decimal;
    margin-left: 2vw;
    font: 1.2vw sans-serif;
    font-weight: 600;
}

.new-releases ul dd{
    list-style: decimal;
    margin-left: 2vw;
    font: 1.2vw sans-serif;
    font-weight: 600;
}

h1 {
    font-size: 1.8vw;
    color:rgba(0, 102, 255, 1);
    margin: 1vh 1vw;
    position: relative;
    text-align: center;
    padding-bottom: 2vh;
}

.container {
    display: flex;
    flex-direction: row;
    min-height: calc(100vh - 2vw - 4vw);
}

.news-container {
    min-height: 100vh;
    border-left:1px solid rgba(20, 20, 20, 1);
    border-right:1px solid rgba(20, 20, 20, 1);
    border-radius: 1vh 1vw;
    padding: 2vw 1vw;
    width:50vw;
}

.blog-container {
    padding: 2vw 1vw;
    width:75vw;
    min-height: 100vh;
    margin: auto;
}

.news,.blog {
    border: 1px solid rgba(50,50,50,0.5);
    margin: 3vh 1vw;
    padding: 1vh 1vw;
    border-radius:1vw;
    text-align: justify;
    text-indent: 1vw;
}

.blog h2 {
    font-size: 2vw;
}

.blog h3,h4 {
    font-size: 1vw;
    text-align: right;
}

.news h2 {
    font-size: 2vw;
}

.news h3,h4 {
    font-size: 1vw;
    text-align: right;
}

.new-releases {
    width: 25vw;
    padding: 2vw;
}

#blog-message {
    min-height: 15vh;
    width:100%;
    padding: 1vh 1vw;
    border-radius: 1vw;
}

#blog-title {
    min-height: 5vh;
    width:100%;
    padding: 1vh 1vw;
    border-radius: 1vw;
}

.submit-button {
    background: rgba(204, 0, 153, 1);
    margin:2vh 2vw;
    width: 10vw;
    height: 5vh;
    color: white;
    font: 1.2vw sans-serif;
    font-weight: 700;
    display: block;
    position: relative;
    left: calc(100% - 15vw);
    border-radius: 1vw;
}
</style>
