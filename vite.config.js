import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint';

import Components from 'unplugin-vue-components/vite'
import ViteComponents, {
  AntDesignVueResolver,
  ElementPlusResolver,
  VantResolver,
} from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(), 
    eslint(),
    Components({
      resolvers: [
        AntDesignVueResolver(),
        ElementPlusResolver(),
        VantResolver(),
      ]
    })
  ],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
})
