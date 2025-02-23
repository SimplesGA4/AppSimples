import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        // Add the file to externalize it
        '/src/assets/img/Perfil.png',
        '/src/assets/icons/github.svg',
        '/src/assets/icons/insta.svg',
        '/src/assets/icons/linkdin.svg',
        '/src/assets/icons/whatsapp.svg',
        '/src/assets/icons/gmail.svg',
        '/src/assets/gifs/curriculo.gif',
      ],
    },
  },
});