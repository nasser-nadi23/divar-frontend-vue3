import { createRouter, createWebHistory } from 'vue-router';
import AllAdvertisings from '@/components/AllAdvertisings';
import TheCategories from '@/components/TheCategories';




const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/all-advertisings', component: AllAdvertisings },
    {path:'/all-categories',component:TheCategories},
  ]
});

export default router;