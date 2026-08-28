// @ts-ignore
import { defineConfig, loadEnv } from 'vite'
// @ts-ignore
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    plugins: [react()],
    define: {
      // Provide an explicit app-level constant derived from an env var
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },

    // Public URL base
    // https://<USER>.github.io/<REPO>/
    // https://vite.dev/guide/static-deploy
    base: '/youtube-player',

    // Server dev port
    // https://vite.dev/config/server-options
    server: { 
      port: env.VITE_PORT ? Number(env.VITE_PORT) : 3000,
      strictPort: true,
      //host: '',
      //open: true || './index.html',
      proxy: {},
    },

    resolve: {
      alias: {
        // Add absolute paths here (e.g.)
        //'pathname': path.resolve(import.meta.dirname, './path/to/folder'),
        // import { function, ... } from 'pathname/path/to/file'
        'components': path.resolve(import.meta.dirname, './src/components'),
        'hook': path.resolve(import.meta.dirname, './src/hook'),
        'json': path.resolve(import.meta.dirname, './src/json'),
        'js': path.resolve(import.meta.dirname, './src/js'),
        'pages': path.resolve(import.meta.dirname, './src/pages'),
      },
    },
  }
})
