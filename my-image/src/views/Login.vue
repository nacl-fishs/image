<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <div>
        <label for="email" class="youxiang">Email:</label>
        <input type="email"  v-model="email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" class="mima" v-model="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      error: ''
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('http://localhost:5000/api/users/login', {
          email: this.email,
          password: this.password
        });
        localStorage.setItem('token', response.data.token);
        this.$router.push('/');
      } catch (err) {
        this.error = 'Login failed. Please check your credentials.';
      }
    }
  }
};
</script>

<style>
/* Add your styles here */
</style>
