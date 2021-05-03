<template>
<div>
  <form @submit.prevent="handleLogin">
        <label for="username">Username:</label><br>
        <input type="text" id="username" name="username" v-model="user.username"><br>
        <label for="password">Password:</label><br>
        <input type="password" id="password" name="password" v-model="user.password"><br>
        <div class="clearfix">
            <button type="submit" class="signupbtn">Sign Up</button>
        </div>
        <div v-if="message">
          <p>{{message}}</p>
        </div>
    </form>
</div>
</template>

<script>
import User from '../models/user'

export default {
  name:'Login',
  data(){
    return {
      user: new User('', ''),
      message: ''
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  created() {
    if (this.loggedIn) {
      this.$router.push('/Profile');
    }
  },
  methods: {
    handleLogin() {
      if (this.user.username && this.user.password) {
        this.$store.dispatch('auth/login', this.user).then(
          () => {
            this.$router.push('/Profile');
          },
          error => {
            this.message =
              (error.response && error.response.data) ||
              error.message ||
              error.toString();
          }
        );
      };
    }
  }
};

</script>

<style scoped>
*{
    padding-top:2vh;
    margin-left: 4vw;
    margin-right: 4vw;
}
div{
    min-height: calc(100vh - 13vh - 13vw);
}

input[type=text], input[type=password],input[type=date] {
    width: 90%;
    padding: 2vh 2vw;
    margin-top:2vh;
    margin-bottom:2vh;
    display: inline-block;
    border: none;
    background: #f1f1f1;
  }
  
  
  input[type=text]:focus, input[type=password]:focus {
    background-color: #ddd;
    outline: none;
  } 

  button {
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
    opacity: 0.9;
  }
  
  button:hover {
    opacity:1;
  }

  .cancelbtn {
    background-color: #f44336;
  }

  .cancelbtn, .signupbtn {
    float: left;
    width: 50%;
  }

  label {
      font-weight: 700;
  }
</style>