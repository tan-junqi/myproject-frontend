import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EditorView from '@/views/EditorView.vue'
import ArticleView from '@/views/ArticleView.vue'
import ArticleDetail from '@/components/ArticleDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/editPaper',
      name: 'editPaper',
      component: EditorView
    },
    {
      path: '/article',
      name: 'article',
      component: ArticleView
    }
  ]
})

export default router
