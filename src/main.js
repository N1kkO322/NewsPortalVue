import './assets/main.css'
import { createRouter, createWebHistory } from 'vue-router'

import { createApp } from 'vue'
import App from './App.vue'

import FamousNews from './components/FamousNews.vue'
import LastNews from './components/LastNews.vue'
import NewsList from './components/NewsList.vue'
import AddNews from './components/AddNews.vue'
import EditNews from './components/EditNews.vue'
import GuideNews from  './components/GuideNews.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [{
    name: 'LastNews',
    path: '/',
    component: LastNews
  },{
    name: 'FamousNews',
    path: '/famous',
    component: FamousNews
  },{
    name: 'NewsList',
    path: '/list',
    component: NewsList
  },{
    name: 'AddNews',
    path: '/add',
    component: AddNews
  },{
    name: 'EditNews',
    path: '/edit',
    component: EditNews
  },{
    name: 'GuideNews',
    path: '/guide',
    component: GuideNews
  }
]
})

createApp(App).use(router).mount('#app')
