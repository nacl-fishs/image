<template>
  <div class="container">
    <h1>My Image Hosting</h1>
    <div v-if="!isAuthenticated" class="auth-links">
      <router-link to="/login">Login</router-link> |
      <router-link to="/register">Register</router-link>
    </div>
    <div v-else class="upload-form">
      <input type="text" v-model="imageUrl" placeholder="Enter image URL" />
      <button @click="uploadImage">Upload</button>
      <button @click="logout">Logout</button>
    </div>
    <ImageGrid :images="images" />
  </div>
</template>

<script>
import axios from 'axios';
import ImageGrid from '../components/ImageGrid.vue';

export default {
  name: 'Home',
  components: { ImageGrid },
  data() {
    return {
      imageUrl: '',
      images: [],
      isAuthenticated: false
    };
  },
  methods: {
    async uploadImage() {
      try {
        const token = localStorage.getItem('token');
        await axios.post('http://localhost:5000/api/images/upload', { url: this.imageUrl }, {
          headers: { Authorization: `Bearer ${token}` }
        });
        this.fetchImages();
        this.imageUrl = '';
      } catch (err) {
        console.error(err);
      }
    },
    async fetchImages() {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/images', {
          headers: { Authorization: `Bearer ${token}` }
        });
        this.images = response.data;
      } catch (err) {
        console.error(err);
      }
    },
    checkAuth() {
      const token = localStorage.getItem('token');
      this.isAuthenticated = !!token;
    },
    logout() {
      localStorage.removeItem('token');
      this.isAuthenticated = false;
    }
  },
  created() {
    this.fetchImages();
    this.checkAuth();
  }
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center; /* 水平居中 */
  justify-content: center; /* 垂直居中 */
  min-height: 100vh; /* 确保内容占满屏幕 */
  text-align: center;
}

.auth-links {
  margin-bottom: 20px;
}

.upload-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.upload-form input {
  margin-bottom: 10px;
}

.upload-form button {
  margin: 5px;
}
</style>
