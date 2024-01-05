<template>
  <MdPreview :editorId="id" :modelValue="text" />
  <MdCatalog :editorId="id" :scrollElement="scrollElement" />
</template>

<script setup>
import { ref, defineProps } from 'vue'
import { MdPreview, MdCatalog } from 'md-editor-v3'
// preview.css相比style.css少了编辑器那部分样式
import 'md-editor-v3/lib/preview.css'

const id = defineProps({ id: { type: Number } })
const text = ref('# Hello Editor')
</script>

<style scoped></style>
