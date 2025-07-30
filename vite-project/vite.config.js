import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// Vite configuration file - Defines build tools and project settings
// https://vite.dev/config/
export default defineConfig({
  // Plugins for React and Tailwind CSS support
  plugins: [react(), tailwindcss()],
  
  // Path resolution configuration
  resolve: {
    // Alias for cleaner imports - '@' points to src directory
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
