// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    if (typeof window !== 'undefined') {
      // Słuchacz zmiany hasztaga (#pl / #en)
      window.addEventListener('hashchange', () => {
        const hash = window.location.hash;
        if (hash === '#en') {
          document.documentElement.classList.add('lang-en');
        } else if (hash === '#pl') {
          document.documentElement.classList.remove('lang-en');
        }
      });

      // Sprawdzenie przy starcie strony (np. po odświeżeniu)
      if (window.location.hash === '#en') {
        document.documentElement.classList.add('lang-en');
      }
    }
  }
} satisfies Theme
