import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import(/* webpackChunkName: "indexPage" */ './views/Index.vue'),
  },
  {
    path: '/assessment',
    component: () => import(/* webpackChunkName: "assessmentPage" */ './views/assessment/Index.vue'),
    children: [
      {
        path: '',
        name: 'assessments-list',
        component: () => import(/* webpackChunkName: "assessmentPage" */ './views/assessment/List.vue'),
      },
      {
        path: 'room',
        name: 'assessments-room',
        component: () => import(/* webpackChunkName: "assessmentPage" */ './views/assessment/Room.vue'),
      },
    ],
  },
];

const router = new Router({
  routes,
  mode: 'history',
});

export default router;
