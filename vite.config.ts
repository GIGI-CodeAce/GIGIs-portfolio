import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/rest/v1': {
        target: 'https://wznunkyfdlhzksogfzpa.supabase.co',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/rest\/v1/, '/rest/v1'),
      },
    },
  },
});
