<template>
  <Form @submit="handleRegister">
        <label for="username">Username:</label><br>
        <Field type="text" id="username" name="username" v-model="user.username" /><br>
        <ErrorMessage name="username" /><br>
        <label for="email">Email:</label><br>
        <Field type="text" id="email" name="email" v-model="user.email"/><br>
        <ErrorMessage name="email" /><br>
        <label for="password">Password:</label><br>
        <Field type="password" id="password" name="password" v-model="user.password"/><br>
        <ErrorMessage name="password" /><br>
        <div class="clearfix">
            <button type="submit" class="signupbtn">Sign Up</button>
        </div>
        <div v-if="message">
          <p>{{message}}</p>
        </div>
    </form>
</template>

<script>
import { Form, Field, ErrorMessage  } from 'vee-validate';
import User from '../models/user';

export default {
  name:'Sign_up',
  components: {
    Form,
    Field,
    ErrorMessage ,

  },
  data() {
    return {
      user: new User('', '', ''),
      message: ''
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push('/Profile');
    }
  },
  methods: {
    handleRegister(form) {
      this.message = '';
      this.$store.dispatch('auth/register', this.user).then(
        data => {
          this.message = data.message;
        },
        error => {
          this.message =
            (error.response && error.response.data) ||
            error.message ||
            error.toString();
          this.successful = false;
        }
      );
    }
  },
  /*validateEmail(value) {
    if (!value) {
      return 'This field is required';
    }
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(value)) {
      return 'This field must be a valid email';
    }
    return true;
  },
  validateUsername(value) {
    if (!value) {
      return 'This field is required';
    }
    if (!/^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/i.test(value)) {
      return 'This field must be a valid username';
    }
    return true;
  },
  validatePassword(value) {
    if (!value) {
      return 'This field is required';
    }
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i.test(value)) {
      return 'This field must be a valid password';
    }
    return true;
  },*/
}
</script>

<style scoped>
*{
    margin-left: 4vw;
    margin-right: 4vw;
    padding-top:2vh;
}
form{
    min-height: 88vh;

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