<template>
  <div class="header-wrapper">
    <el-menu
      router
      :default-active="this.$route.path"
      class="menu-wrapper"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item @click="handleChange('home')">学习</el-menu-item>
      <el-menu-item>考研</el-menu-item>
      <el-menu-item>工作</el-menu-item>
      <el-menu-item>讨论</el-menu-item>
      <el-menu-item @click="handleChange('editPaper')">创作</el-menu-item>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import router from '@/router'

const activeIndex = ref('1')
const activeIndex2 = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key)
}

const handleChange = (name: string) => {
  router.push({ name: name })
}
</script>

<style scoped>
.header-wrapper {
}

.menu-wrapper {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  height: 100%; /* 保证高度充满父容器，以便垂直居中 */
}
</style>
