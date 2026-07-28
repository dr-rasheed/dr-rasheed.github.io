const fs = require('fs');

const html = fs.readFileSync('books_page.html', 'utf8');
const match = html.match(/const\s+libraryData\s*=\s*(\[[\s\S]*?\]\s*);/);

if (match) {
  let inner = match[1];
  try {
    // using eval because it's a JS object definition, not strict JSON
    let data = eval(inner);
    
    // Convert to our format
    let result = data.map(b => ({
       title: b.title,
       category: b.tag,
       image: b.img,
       pdf: b.links && b.links.pdf ? b.links.pdf : ""
    }));
    
    console.log(JSON.stringify(result, null, 2));
    fs.writeFileSync('books_final.json', JSON.stringify(result, null, 2));
  } catch(e) {
    console.error(e);
  }
} else {
  console.log("No libraryData found");
}
