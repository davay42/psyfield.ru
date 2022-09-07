import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import WindiCSS from 'vite-plugin-windicss'
import AutoImport from 'unplugin-auto-import/vite'
import ViteYaml from '@modyfi/vite-plugin-yaml';

import Pages from "vite-plugin-pages";
import { extendRoutes } from "vitepress-pages";
import generateSitemap from 'vite-plugin-pages-sitemap'


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
    WindiCSS({
      scan: {
        dirs: ['.vitepress', 'components', 'cards'],
        include: ['index.md'],
        exclude: ['**/examples/**/*'],
        fileExtensions: ['vue', 'ts'],
      },
    }),
    Pages({
      dirs: [
        { dir: ".", baseRoute: "." },
      ],
      exclude: ['**/node_modules/**/*.*', '**/!(index).md'],
      extensions: ['md'],
      ...extendRoutes({
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
          motion: ['@vueuse/motion']
        }
      }
    }
  }
})
