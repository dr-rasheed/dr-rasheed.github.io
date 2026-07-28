const fs = require('fs');

const html = fs.readFileSync('books_page.html', 'utf8');

// The books are inside a variable called `books` which looks like an array of objects
// Let's grab everything inside `const books = [` until the matching `];`
let booksText = html.match(/const\s+books\s*=\s*\[([\s\S]*?)\];/);

if (booksText) {
  let inner = booksText[1];
  // extract each object { ... }
  let objects = inner.match(/\{[\s\S]*?\}/g);
  let result = [];
  if (objects) {
    objects.forEach(obj => {
      let titleMatch = obj.match(/title:\s*"([^"]+)"/);
      let pdfMatch = obj.match(/pdf:\s*"([^"]+)"/);
      let coverMatch = obj.match(/cover:\s*"([^"]+)"/); // some might have covers
      
      if (titleMatch && pdfMatch) {
         result.push({
           title: titleMatch[1],
           link: pdfMatch[1],
           cover: coverMatch ? coverMatch[1] : ""
         });
      }
    });
  }
  console.log(JSON.stringify(result, null, 2));
} else {
  console.log("Not found array");
}
