import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Pixi Docs",
  description: "Dokumentacja skryptów FiveM",

  head: [
      ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
  
  // TO JEST KLUCZOWE DLA GITHUB PAGES:
  base: '/pixi/', 
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/playfulpixi/pixi' } // Podlinkowałem tutaj Twoje repo
    ]
  }
})
