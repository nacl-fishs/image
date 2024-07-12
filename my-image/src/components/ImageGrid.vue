<template>
  <div class="image-grid">
    <div v-for="image in images" :key="image._id" class="image-box">
      <img :src="image.url" alt="Image" class="image" />
      <p class="image-url">{{ image.url }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageGrid',
  props: {
    images: Array
  }
};
</script>

<style>
.image-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px; /* 控制图片之间的间距 */
}

.image-box {
  width: 200px; /* 控制每个图片盒子的宽度 */
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 增加阴影效果 */
  border-radius: 8px; /* 增加圆角 */
  overflow: hidden; /* 防止溢出 */
}

.image-box .image {
  width: 100%;
  height: auto;
  display: block;
}

.image-url {
  padding: 10px;
  font-size: 14px;
  color: #333;
  word-wrap: break-word;
}
</style>
