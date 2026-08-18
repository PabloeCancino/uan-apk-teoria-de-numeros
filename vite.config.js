import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => ({
  plugins: [react()],
  server: {
    port: 5173,
    host: true
  },
  // En GitHub Pages se necesita la ruta del repo; en APK/local se usa './'
  base: mode === 'github-pages' ? '/uan-apk-teoria-de-numeros/' : './'
}))
