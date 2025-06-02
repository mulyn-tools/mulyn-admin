import type { Menu } from '#/global'

const menus: Menu.recordRaw = {
  meta: {
    title: '歌单修改',
    icon: 'heroicons-solid:menu-alt-3',
  },
  children: [
    {
      path: '/multilevel_menu_example/page',
      meta: {
        title: '歌单修改',
      },
    },
  ],
}

export default menus
