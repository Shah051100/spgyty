import { build } from 'vite';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function buildStatic() {
  console.log('Building static version for GitHub Pages...');
  
  // Get repository name from command line args or use default
  const repoName = process.argv[2] || '';
  const basePath = repoName ? `/${repoName}/` : '/';
  
  console.log(`Using base path: ${basePath}`);
  
  try {
    // Create a temporary main.tsx for static build
    const staticMainContent = `
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App-static.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
`;

    // Write the temporary static main file
    fs.writeFileSync(
      resolve(__dirname, 'client/src/main-static.tsx'),
      staticMainContent
    );

    // Update the HTML file to use the static entry point
    const htmlPath = resolve(__dirname, 'client/index.html');
    let htmlContent = fs.readFileSync(htmlPath, 'utf-8');
    htmlContent = htmlContent.replace(
      '/src/main.tsx',
      '/src/main-static.tsx'
    );
    fs.writeFileSync(htmlPath, htmlContent);

    // Build the project
    await build({
      root: resolve(__dirname, 'client'),
      build: {
        outDir: resolve(__dirname, 'dist'),
        emptyOutDir: true,
        rollupOptions: {
          output: {
            manualChunks: undefined,
          },
        },
      },
      base: basePath,
      resolve: {
        alias: {
          '@': resolve(__dirname, 'client/src'),
          '@shared': resolve(__dirname, 'shared'),
          '@assets': resolve(__dirname, 'attached_assets'),
        },
      },
    });

    // Restore the original HTML file
    htmlContent = htmlContent.replace(
      '/src/main-static.tsx',
      '/src/main.tsx'
    );
    fs.writeFileSync(htmlPath, htmlContent);

    // Clean up temporary file
    fs.unlinkSync(resolve(__dirname, 'client/src/main-static.tsx'));

    console.log('✅ Static build completed successfully!');
    console.log('📁 Files are in the ./dist directory');
    console.log('🚀 Ready for GitHub Pages deployment');
    
  } catch (error) {
    console.error('❌ Build failed:', error);
    process.exit(1);
  }
}

buildStatic();