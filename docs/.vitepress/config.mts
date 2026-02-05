import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  title: "Khaos Guide docs",
  description: "Khaos Modpack Guide.",
  base: '/khaos-mc/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'ホーム',
        link: '/index.md'
      },
      {
        text: 'はじめに',
        link: '/introduction.md'
      },
      {
        text: 'Mod',
        collapsible: true,
        items: [
          // { text: 'Mods Index', link: '/mods/index.md' },
          { text: 'Modsリスト', link: '/mods/list.md' },
          { text: '特殊ストレージ', link: '/mods/s-storage.md' },
          { text: '生存と環境', link: '/mods/hydro.md' },
          { text: '季節', link: '/mods/seasons.md' },
          { text: '魔法', link: '/mods/sortilege.md' },
          // { text: 'Things', link: '/mods/things.md' },
          { text: '容姿変化', link: '/mods/transmog.md' }
        ]
      },
      {
        text: 'Create Mod 解説',
        collapsible: true,
        items: [
          { text: '概要', link: '/create/index.md' },
          { text: 'エンジンについて', link: '/create/engine.md' },
          { text: '動力の仕組み', link: '/create/power.md' },
          { text: '回転システム', link: '/create/rotation.md' },
          { text: '注意事項', link: '/create/caution.md' }
        ]
      },
      {
        text: 'Enchanting 解説',
        collapsible: true,
        items: [
          { text: '概要', link: '/enchanting/overview.md' },
          { text: 'パラメータ', link: '/enchanting/parameters.md' },
          { text: '使用例', link: '/enchanting/example.md' }
        ]
      }
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
