const routes = [
  {
    path: '/',
    component: () => import('../layouts/Index.vue'),
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('../pages/Home.vue'),
      },
      {
        path: 'distributors',
        name: 'distributors',
        component: () => import('../pages/Distributors.vue'),
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../pages/Login.vue')
  }
];


export default routes;