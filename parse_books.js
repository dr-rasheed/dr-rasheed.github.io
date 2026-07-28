const fs = require('fs');

const html = fs.readFileSync('books_page.html', 'utf8');
const booksRegex = /title:\s*"([^"]+)"[\s\S]*?pdf:\s*"([^"]+)"/g;
let match;
const books = [];

while ((match = booksRegex.exec(html)) !== null) {
  // Ignore the ranks (titles that don't belong to books)
  if (['زائر جديد', 'قارئ مبتدئ', 'قارئ نهم', 'مستطلع', 'دارس', 'مستنبط', 'ناقد', 'معتكف', 'ناسك', 'راسخ', 'مُدّكر'].includes(match[1])) continue;
  
  books.push({
    title: match[1].trim(),
    pdf: match[2].trim()
  });
}

console.log(JSON.stringify(books, null, 2));
