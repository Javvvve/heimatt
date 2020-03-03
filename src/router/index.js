import Vue from 'vue';
import VueRouter from 'vue-router';
import login from '@/views/login/login.vue';
import index from '@/views/home/index.vue';
import home from '@/views/home/main/home.vue';
import comment from '@/views/home/main/comment.vue';
import video from '@/views/home/main/video.vue';
import my from '@/views/home/main/my.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    component: login,
  },
  {
    path: '/index',
    component: index,
    redirect: '/index/home',
    children: [
      {
        path: 'home',
        component: home,
      },
      {
        path: 'comment',
        component: comment,
      },
      {
        path: 'video',
        component: video,
      },
      {
        path: 'my',
        component: my,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
