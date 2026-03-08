import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig} from 'vite';

export default defineConfig({
  base: '/',
  plugins: [
    react(), 
    tailwindcss(),
    {
      name: 'save-articles-api',
      configureServer(server) {
        server.middlewares.use('/api/save-articles', (req, res) => {
          if (req.method === 'POST') {
            let body = '';
            req.on('data', chunk => { 
              body += chunk.toString(); 
            });
            req.on('end', () => {
              try {
                const articles = JSON.parse(body);
                const articlesDir = path.join(process.cwd(), 'public', 'articles');
                
                if (!fs.existsSync(articlesDir)) {
                  fs.mkdirSync(articlesDir, { recursive: true });
                }
                
                const indexPath = path.join(articlesDir, 'index.json');
                let index: any[] = [];
                if (fs.existsSync(indexPath)) {
                  index = JSON.parse(fs.readFileSync(indexPath, 'utf-8'));
                }
                
                for (const article of articles) {
                  fs.writeFileSync(path.join(articlesDir, article.filename), article.content);
                  
                  const existingIdx = index.findIndex((item: any) => item.id === article.metadata.id);
                  if (existingIdx >= 0) {
                    index[existingIdx] = article.metadata;
                  } else {
                    index.push(article.metadata);
                  }
                }
                
                index.sort((a: any, b: any) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
                fs.writeFileSync(indexPath, JSON.stringify(index, null, 2));
                
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ success: true }));
              } catch (e: any) {
                console.error('Error saving articles:', e);
                res.statusCode = 500;
                res.end(JSON.stringify({ error: e.message }));
              }
            });
          } else {
            res.statusCode = 405;
            res.end();
          }
        });
      }
    }
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  server: {
    hmr: process.env.DISABLE_HMR !== 'true',
    watch: {
      ignored: ['**/public/articles/**']
    }
  },
});
