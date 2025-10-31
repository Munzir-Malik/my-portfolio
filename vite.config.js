import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/my-portfolio/', // <-- replace with your repo name (leading and trailing slash)
  plugins: [react()],
});
