import type { RouteRecordRaw } from 'vue-router'

function Layout() {
  return import('@/layouts/index.vue')
}

const routes: RouteRecordRaw = {
  path: '/multilevel_menu_example',
  component: Layout,
  name: 'multilevelMenuExample',
  meta: {
    title: '歌单修改',
    icon: 'i-heroicons-solid:menu-alt-3',
  },
  children: [
    {
      path: 'page',
      name: 'multilevelMenuExample1',
      component: () => import('@/views/multilevel_menu_example/page.vue'),
      meta: {
        title: '导航1',
      },
    },
  ],
}

export default routes
