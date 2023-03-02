import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  dynamicImport: {},
  routes: [
    // {
    //   exact: false,
    //   path: '/',
    //   component: '@/layouts/index',
    //   routes: [
    //     { path: '/', component: '@/pages/index' },
    //     { path: '/about', component: '@/pages/About' },
    //   ],
    // },
    { path: '/', component: '@/pages/index' },
    { path: '/about', component: '@/pages/About' },
    { path: '/useFetch', component: '@/pages/useFetch' },
  ],
  alias: {
    '@/': './src',
  },
  ignoreMomentLocale: true,
  fastRefresh: {},
});
