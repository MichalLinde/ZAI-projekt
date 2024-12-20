import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/ZAI-projekt/', // Ustaw bazową ścieżkę dla GitHub Pages
  plugins: [react()],
});