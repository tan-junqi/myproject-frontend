<template>
  <article-detail :id="id"></article-detail>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ArticleDetail from '../components/ArticleDetail.vue'

const id = ref()

onMounted(() => {
  id.value = this.$route.params.id
  console.log(id)
})
</script>

<style scoped></style>
