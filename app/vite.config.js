import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    assetsDir: 'assets',
    rollupOptions: {
      external: [
        'src/assets/img/Perfil.png',
        'src/assets/icons/github.svg',
        'src/assets/icons/insta.svg',
        'src/assets/icons/linkdin.svg',
        'src/assets/icons/whatsapp.svg',
        'src/assets/icons/gmail.svg',
        'src/assets/gifs/curriculo.gif'
      ],
    }
}})
