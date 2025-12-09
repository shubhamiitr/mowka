import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { SITE_CONTENT } from './src/constants/content'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'html-transform',
      transformIndexHtml(html) {
        return html.replace(
          /<title>(.*?)<\/title>/,
          `<title>${SITE_CONTENT.appName} | ${SITE_CONTENT.tagline}</title>`
        ).replace(
          `<meta name="title" content="${SITE_CONTENT.appName} | ${SITE_CONTENT.tagline}" />`
        ).replace(
          /meta property="og:title"\s*content="(.*?)"/,
          `meta property="og:title" content="${SITE_CONTENT.appName} | ${SITE_CONTENT.tagline}"`
        ).replace(
          /meta name="twitter:title"\s*content="(.*?)"/,
          `meta name="twitter:title" content="${SITE_CONTENT.appName} | ${SITE_CONTENT.tagline}"`
        ).replace(
          /meta name="description"\s*content="(.*?)"/,
          `meta name="description"\n    content="${SITE_CONTENT.description}"`
        ).replace(
          /meta property="og:description"\s*content="(.*?)"/,
          `meta property="og:description"\n    content="${SITE_CONTENT.description}"`
        ).replace(
          /meta name="twitter:description"\s*content="(.*?)"/,
          `meta name="twitter:description"\n    content="${SITE_CONTENT.description}"`
        ).replace(
          /"description":\s*"(.*?)"/,
          `"description": "${SITE_CONTENT.description}"`
        )
      }
    }
  ],
})

