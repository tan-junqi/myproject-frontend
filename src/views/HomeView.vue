<template>
  <div class="home-wrapper">
    <div class="select-subject">
      <el-cascader v-model="value" :options="options" :props="props" @change="handleChange"/>
      <el-input v-model="input" placeholder="请输入学科名" clearable style="width: 20%"/>
    </div>
    <div class="subject-list">
      <el-space wrap :size="30">
        <el-card v-for="(item, id) in articleInfo" :key="id" class="box-card" style="width: 250px">
          <a class="item-top" @click="changeToArticle(id)">
            <h4>{{ item.articleTitle }}</h4>
          </a>
        </el-card>
      </el-space>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import router from '@/router'
import { getArticleTitleList } from '@/utils/request/api'

const value = ref([])
const input = ref('计算机科学与技术')
const articleInfo = reactive([]) as any[]

const props = {
  expandTrigger: 'hover' as const
}

const options = [
  {
    value: '工科',
    label: '工科',
    children: [
      {
        value: '计算机科学与技术',
        label: '计算机科学与技术',
        children: [
          {
            value: '计算机科学与技术',
            label: '计算机科学与技术'
          },
          {
            value: '软件工程',
            label: '软件工程'
          }
        ]
      }
    ]
  }
]

const handleChange = (value) => {
  console.log(value)
}

const changeToArticle = (id: number) => {
  router.push({ name: 'article', params: { id: id } })
}

onMounted(() => {
  console.log('数据加载')
  getArticleTitleList()
    .then((response) => {
      response.data.forEach((s: any) => {
        articleInfo.push(s)
      })
    })
    .catch((err) => {
      return false
    })
})

function getArticleList() {}
</script>

<style>
.home-wrapper {
  /*display: inline-block;*/
  /*width: 70%;*/
}

.select-subject {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.subject-list {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 300px;
  padding-right: 300px;
}
</style>
