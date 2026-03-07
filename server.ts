import express from 'express';
import { createServer as createViteServer } from 'vite';
import Database from 'better-sqlite3';
import path from 'path';

const app = express();
const PORT = 3000;

app.use(express.json({ limit: '50mb' }));

// Setup SQLite Database
const db = new Database('articles.db');
db.exec(`
  CREATE TABLE IF NOT EXISTS articles (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    image_url TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

// API Routes
app.get('/api/articles', (req, res) => {
  const articles = db.prepare('SELECT id, title, image_url, created_at FROM articles ORDER BY created_at DESC').all();
  res.json(articles);
});

app.get('/api/articles/:id', (req, res) => {
  const article = db.prepare('SELECT * FROM articles WHERE id = ?').get(req.params.id);
  if (article) {
    res.json(article);
  } else {
    res.status(404).json({ error: 'Article not found' });
  }
});

app.post('/api/articles', (req, res) => {
  const { title, content, image_url } = req.body;
  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required' });
  }
  
  const stmt = db.prepare('INSERT INTO articles (title, content, image_url) VALUES (?, ?, ?)');
  const info = stmt.run(title, content, image_url || null);
  res.status(201).json({ id: info.lastInsertRowid });
});

app.delete('/api/articles/:id', (req, res) => {
  const stmt = db.prepare('DELETE FROM articles WHERE id = ?');
  stmt.run(req.params.id);
  res.status(204).send();
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static('dist'));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
