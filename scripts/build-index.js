import fs from 'fs';
import path from 'path';
import fm from 'front-matter';

const articlesDir = path.join(process.cwd(), 'public', 'articles');
const outputFile = path.join(articlesDir, 'index.json');

if (!fs.existsSync(articlesDir)) {
  fs.mkdirSync(articlesDir, { recursive: true });
}

const files = fs.readdirSync(articlesDir).filter(f => f.endsWith('.md'));
const index = [];

for (const file of files) {
  const content = fs.readFileSync(path.join(articlesDir, file), 'utf-8');
  const parsed = fm(content);
  index.push({
    filename: file,
    ...parsed.attributes
  });
}

// Sort by created_at descending
index.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

fs.writeFileSync(outputFile, JSON.stringify(index, null, 2));
console.log(`Indexed ${index.length} articles.`);
