import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'
import ViteYaml from '@modyfi/vite-plugin-yaml';

import Pages from "vite-plugin-pages";
import { extendRoutes } from "vitepress-pages";
import generateSitemap from 'vite-plugin-pages-sitemap'

import Unocss from 'unocss/vite'
import { transformerDirectives, presetIcons, presetUno, extractorSplit } from 'unocss'
import extractorPug from '@unocss/extractor-pug'

import path from "node:path";
import { fileURLToPath } from "node:url";


export default defineConfig({
  base: './',
  plugins: [
    ViteYaml(),
    AutoImport({
      // targets to transform
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue\??/, // .vue
      ],
      imports: [
        'vue',
      ],
    }),
    Components({
      dirs: [
        '.vitepress/theme/components',
        'cards',
        '.vitepress/components'
      ],
      extensions: ['vue', 'ts'],
      directoryAsNamespace: true,
      globalNamespaces: ['global'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      exclude: [/node_modules/, /\.git/],
      resolvers: [
        IconsResolver({
          componentPrefix: '',
        }),
      ],
    }),
    Icons({
      defaultStyle: 'vertical-align: middle;',
    }),
    Unocss({
      theme: {
        breakpoints: {
          'xs': '240px',
          'md': '320px',
          'lg': '960px'
        }
      },
      transformers: [
        transformerDirectives(),
      ],
      presets: [
        presetIcons({
          scale: 1.2,
          extraProperties: {
            'vertical-align': 'middle'
          }
        }),
        presetUno(),
      ],
      extractors: [
        extractorSplit,
        extractorPug()
      ]
    }),
    Pages({
      dirs: [
        { dir: ".", baseRoute: "." },
      ],
      exclude: ['**/node_modules/**/*.*', '**/!(index).md'],
      extensions: ['md'],
      ...extendRoutes({
        root: path.dirname(fileURLToPath(import.meta.url)),
        mediaTypes: {}
      }),
      onRoutesGenerated: routes => (generateSitemap({ routes, hostname: 'https://psyfield.ru/' })),
    }),
  ],

  optimizeDeps: {
    include: [
      'vue',
      '@vueuse/core',
    ],
  },
  build: {
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        manualChunks: {

        }
      }
    }
  }
})
