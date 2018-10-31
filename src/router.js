import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

import Manage from './views/Manage.vue';
import ManageHome from './views/manage/Home.vue';
import ManageOauth from './views/manage/Oauth.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },

    {
      path: '/manage',
      name: 'manage',
      component: Manage,
      children: [
        {
          path: '/',
          name: 'manage-home',
          component: ManageHome,
        },
        {
          path: 'oauth',
          name: 'manage-oauth',
          component: ManageOauth,
        },
      ],
    },
  ],
});
