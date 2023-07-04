import {defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react-swc'
import {createHtmlPlugin} from "vite-plugin-html";
// https://vitejs.dev/config/
export default ({mode}) => {
  const env = loadEnv(mode, '.')
  return defineConfig({
    plugins: [react(), createHtmlPlugin({
      minify : true,
      inject : {
        data : {
          kakaoMap : env.VITE_MAP_KEY
        }
      }
    })],
  })
}
