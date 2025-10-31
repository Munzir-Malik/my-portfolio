import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

const BASE = '/my-portfolio/'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
