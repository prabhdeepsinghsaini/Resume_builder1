import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
<<<<<<< HEAD
=======
  base: '/Resume_builder1/', // Set base to repo name for GitHub Pages
>>>>>>> a36c4b3afb22ec33d55f98c1f135cb4b4bbfb571
  plugins: [react(), tailwindcss()],
})
