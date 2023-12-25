<template>
  <div class="home-wrapper">
    <el-row>
      <el-col :span="24">
        <el-button type="primary" siz>Primary</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-button type="primary">Primary</el-button>
      </el-col>
      <el-col :span="12">
        <el-button type="primary">Primary</el-button>
      </el-col>
    </el-row>
  </div>

</template>

<script setup>

</script>

<style>
.home-wrapper {
  /*display: inline-block;*/
  /*width: 70%;*/
}
</style>