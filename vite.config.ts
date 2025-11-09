import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If building on GitHub Actions, infer repo name for `base` automatically.
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? ''

export default defineConfig({
  base: repoName ? `/${repoName}/` : '/',
  plugins: [react()],
})
