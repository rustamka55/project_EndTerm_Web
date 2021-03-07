<template>
    <div class="container">
        <div class="todo-container">
            <div id="todo-head" class="header">
                <h1>My To Do List</h1>
                <input v-model="task" type="text" id="list-input" placeholder="Title...">
                <span v-on:click="newElement(task)" class="addBtn">Add</span>
            </div>
                <ul id="list">
                    <li v-on:click="checkElement(todo)" :key="todo.id" v-for="todo in todo_list" class="list_item">
                        <span  :class="(todo.checked)?'checked':''"> {{todo.text}}</span>
                        <button v-on:click="deleteElement(todo.index)" class="close">X</button>    
                    </li>
                </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ToDo',
    props:{
        todo_list: Array,
    },
    methods:{
        newElement: function(task){
            this.todo_list.push({id:Math.floor(Math.random()*1000),text:task,checked:false})
            let item = document.getElementById("list-input")
            this.task = ''
        },
        checkElement: function(todo){
            todo.checked = !todo.checked
            console.log(todo.checked)
        },
        deleteElement:function(index){
            this.todo_list.splice(index,1)
        }
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

.todo-container {
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
}
</style>

