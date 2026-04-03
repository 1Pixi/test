import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Pixi",
  description: "Profesjonalna dokumentacja skryptów FiveM",
  
  // Kluczowe dla GitHub Pages: musi być zgodne z nazwą Twojego repozytorium
  base: '/pixi/', 

  // Dodanie faviconu (pamiętaj, aby plik był w folderze /public w głównym katalogu)
  head: [
    ['link', { rel: 'icon', href: '/pixi/favicon.png' }]
  ],

  themeConfig: {

    logo: '/favicon.png',
    // Pasek nawigacji na górze
    nav: [
      { 
        text: '🌐 Language',
        items: [
          { text: '🇺n English', link: '#en' }
        ]
      }
    ],

    // Pasek boczny w stylu profesjonalnych dokumentacji (jak Ox)
    sidebar: [
      {
        text: 'Wprowadzenie',
        collapsed: false,
        items: [
          { text: 'Informacje ogólne', link: '/' },
          { text: 'Guides', link: '/guides' }
        ]
      },
      {
        text: 'JobCenter', // Bez pixi_, bo to Twoja marka
        collapsed: true,
        items: [
          { text: 'Dokumentacja ogólna', link: '/jobcenter/main' },
          {
            text: 'Wersje skryptu', // Tu lądują Twoje _v1, _v2
            collapsed: true,
            items: [
              { text: 'Wersja V1', link: '/jobcenter/v1' },
              { text: 'Wersja V2', link: '/jobcenter/v2' }
            ]
          },
          { text: 'Konfiguracja (config.lua)', link: '/jobcenter/config' }
        ]
      },
      {
        text: 'Garages', // Kolejny przykład skryptu Pixi
        collapsed: true,
        items: [
          { text: 'Podstawy', link: '/garages/basics' },
          {
            text: 'Wersje',
            collapsed: true,
            items: [
              { text: 'Wersja V1', link: '/garages/v1' }
            ]
          }
        ]
      }
    ],

    // Link do Twojego repozytorium na GitHubie
    socialLinks: [
      { icon: 'github', link: 'https://github.com/playfulpixi/pixi' },
      { icon: 'discord', link: 'https://discord.gg/rrWMz6aJYP' },
      { icon: 'youtube', link: 'https://www.youtube.com/@x_pixi_s' }
    ],
    
    // Opcjonalnie: Konfiguracja wyszukiwarki (wbudowanej w VitePress)
    search: {
      provider: 'local',
      options: {
        detailedView: true // To sprawi, że wyniki będą miały opisy pod tytułami, co ułatwia nawigację
      }
    }
  }
})