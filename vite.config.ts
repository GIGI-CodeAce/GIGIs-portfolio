import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      // Proxy API requests to Supabase
      '/rest/v1': {
        target: 'https://wznunkyfdlhzksogfzpa.supabase.co', // Your Supabase URL
        changeOrigin: true, // Change the origin of the request to the target
        rewrite: (path) => path.replace(/^\/rest\/v1/, '/rest/v1'), // Rewriting the URL to match Supabase's endpoint
      },
    },
  },
});
