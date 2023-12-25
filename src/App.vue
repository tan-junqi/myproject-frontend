<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
</script>

<template>
  <div id="app">
    <el-container>
      <el-header class="header">
        <global-menu></global-menu>
      </el-header>
      <el-main class="main">
        <router-view/>
      </el-main>
      <el-footer class="footer">
        Footer
      </el-footer>
    </el-container>

  </div>

</template>

<style scoped>
.header {
}

.main {

}

.footer {
}
</style>
