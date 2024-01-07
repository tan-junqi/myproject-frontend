<template>
  <div id="vditor"></div>
</template>

<script setup>
import {defineProps, ref, onMounted} from "vue";
import Vditor from "vditor";
import "vditor/dist/index.css";

const contentEditor = ref("## 分屏预览（SV）\n传统的分屏预览模式适合大屏下的 Markdown 编辑。");

onMounted(() => {
  contentEditor.value = new Vditor('vditor', {
    "height": 360,
    "cache": {
      "enable": false
    },
    "value": "## 分屏预览（SV）\n传统的分屏预览模式适合大屏下的 Markdown 编辑。",
    "mode": "sv",
    "preview": {
      "mode": "both"
    }
  });
});
</script>

<style scoped>

</style>