const fs = require('fs');

const html = fs.readFileSync('books_page.html', 'utf8');

// The books are defined inside a books array in the script block.
// Let's find the exact array string.
const match = html.match(/const\s+books\s*=\s*(\[[\s\S]*?\]);/);
if (match) {
  // It's a JS object array, not strict JSON. We can use eval to parse it.
  try {
    let booksData = eval(match[1]);
    console.log(JSON.stringify(booksData, null, 2));
  } catch (e) {
    console.error("Eval failed", e);
  }
} else {
  console.log("No match for const books = [...]");
  // Try another regex if it failed
  const booksRegex = /title:\s*"([^"]+)"(?:[\s\S]*?)pdf:\s*"([^"]+)"/g;
  let bMatch;
  const books = [];
  while ((bMatch = booksRegex.exec(html)) !== null) {
     books.push({ title: bMatch[1], pdf: bMatch[2] });
  }
  console.log(JSON.stringify(books, null, 2));
}

