import Vue from 'vue';
import VueRouter from 'vue-router';
// components
import AboutPage from '../components/AboutPage.vue';
import HomePage from '../components/HomePage.vue';
import NotFoundPage from '../components/NotFoundPage.vue';
import DynamicRoutePage from '../components/DynamicRoutePage.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/about', component: AboutPage },
  { path: '/', component: HomePage },
  { name: 'DynamicRoutePage', path: `/dynamic/:todosCounter`, component: DynamicRoutePage },
  { path: '*/:value', component: NotFoundPage },
];

const router = new VueRouter({
  routes,
  mode: 'history' // remove hash /#/ just use /
});

export default router;
