const fs = require('fs');

const html = fs.readFileSync('books_page.html', 'utf8');
const match = html.match(/const\s+libraryData\s*=\s*(\[[\s\S]*?\]\s*);/);

if (match) {
  let inner = match[1];
  try {
    let data = eval(inner);
    
    // Preserve all links
    let result = data.map(b => ({
       title: b.title,
       category: b.tag,
       image: b.img,
       links: b.links || {},
       pdf: b.links && b.links.pdf ? b.links.pdf : ""
    }));
    
    fs.writeFileSync('books_final_all_links.json', JSON.stringify(result, null, 4));
    console.log("Successfully parsed all links for " + result.length + " books.");
  } catch(e) {
    console.error("Eval error", e);
  }
} else {
  console.log("No libraryData found");
}
