// rollup.config.js
export default {
    input: 'src/App.jsx', // Caminho para seu arquivo de entrada
    output: {
      file: 'dist/bundle.js',
      format: 'es',
    },
    build: {
      rollupOptions: {
        external: [
          'src/assets/img/Perfil.png',
          'src/assets/icons/github.svg',
          'src/assets/icons/insta.svg',
          'src/assets/icons/linkdin.svg',
          'src/assets/icons/whatsapp.svg',
          'src/assets/icons/gmail.svg',
          'src/assets/gifs/curriculo.gif'
        ]
      }
    }
  };
  