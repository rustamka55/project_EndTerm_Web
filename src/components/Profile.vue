<template>
    <div class="grid">
        <div class="grid-item">
            <img src="../assets/prof_photo.jpg" class="profile-photo">
        </div>
        <div class="grid-item">
            <h2>{{user.name}}</h2>
            <p>Birthday: {{user.birthday}}</p>
            <p>Favourite genres: <span :key="genre" v-for="genre in user.genres">
                <span  v-if="genre.id!=0">, </span>
                {{genre.name}}</span></p>
            <p>Gender: {{user.gender}}</p>
            <p>Country: {{user.country}}</p>
        </div>
        <div class="grid-item">
            <ToDo :todo_list = "todo_list"></ToDo>
        </div>
        <div class="grid-item">
            <ProfileBlogs :news = "news"></ProfileBlogs>
        </div>
    </div>
</template>

<script>
import ToDo from './ToDo'
import ProfileBlogs from './ProfileBlogs'

export default {
    name:'Profile',
    components:{
        ToDo,
        ProfileBlogs,

    },
    props:{
        user: Object,
        todo_list:Array,
        news: Array,

    }

}
</script>

<style scoped>
ul {
    margin: 0;
    padding: 0;
  }

ul li {
    cursor: pointer;
    position: relative;
    padding: 2vh 2vw;
    list-style-type: none;
    font-size: 2vw;
    transition: 0.4s;
    -webkit-user-select: none;
    user-select: none;
}
  
ul li:nth-child(odd) {
    background: rgba(0, 0, 0, 0.2);
}
  
ul li:hover {
    background: #ddd;
}
  

.checked {
    background: rgba(56, 56, 56, 1);
    color: #fff;
    text-decoration: line-through;
}

.checked::before {
    content: '';
    position: absolute;
    border-color: #fff;
    border-style: solid;
    border-width: 0 2px 2px 0;
    top: 0.1vh;
    left: 1vw;
    transform: rotate(45deg);
    height: 1vw;
    width: 1vh;
}

.close {
    position: absolute;
    right: 0;
    top: 0;
    padding: 2vh 2vw;
    height: 100%;
    background-color: rgba(187, 187, 187, 0);
    border: none;
}

.close:hover {
    background-color: rgba(231, 82, 45, 1);
    color: white;
}

.close:active {
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}

.header {
    padding: 5vh 5vw;
    color: white;
    text-align: center;
}

.header:after {
    content: "";
    display: block;
    clear: both;
}

input {
    margin: 0;
    border: none;
    border-radius: 0;
    width: 75%;
    padding: 2vw;
    float: left;
    font-size: 2vw;
}

.addBtn {
    padding: 2vw;
    width: 25%;
    background: rgba(217, 217, 217, 1);
    color:rgba(85, 85, 85, 1);
    float: left;
    text-align: center;
    font-size: 2vw;
    cursor: pointer;
    transition: 0.3s;
    border-radius: 0;
}

.addBtn:hover {
    background-color: rgba(187, 187, 187, 1);
}

.todo-container{
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
}
.grid{
    display: grid;
    grid-template-columns: 45% 55%;
    padding: 5vh 5vw;
}

.grid-item {
    padding: 2vh 2vw ;
}

.profile-photo {
    height: 50vh;
    width: auto;
    border-radius: 5vw;
}

h2 {
    font-size: 3vw;
    color:rgb(32, 35, 39);
    margin: 1vh 1vw;
    position: relative;
    padding-bottom: 2vh;
}

p {
    font-size: 1.5vw;
    color:rgb(32, 35, 39);
    margin: 1vh 1vw;
    position: relative;
    padding-bottom: 2vh;
}
</style>