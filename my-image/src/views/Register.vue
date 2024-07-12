<template>
  <div>
    <h1>Register</h1>
    <form @submit.prevent="register">
      <div>
        <label for="email">Email:</label>
        <input type="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Register</button>
    </form>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Register',
  data() {
    return {
      email: '',
      password: '',
      error: ''
    };
  },
  methods: {
    async register() {
      try {
        await axios.post('http://localhost:5000/api/users/register', {
          email: this.email,
          password: this.password
        }, { withCredentials: true }); // 确保发送凭据（cookie）
        this.$router.push('/login');
      } catch (err) {
        this.error = 'Registration failed. Please try again.';
      }
    }
  }
};
</script>

<style>
/* Add your styles here */
</style>
