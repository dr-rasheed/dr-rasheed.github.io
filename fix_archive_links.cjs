const fs = require('fs');

const originalData = JSON.parse(fs.readFileSync('books_final_all_links.json', 'utf8'));
const fileContent = fs.readFileSync('js/my_data.js', 'utf8');

const match = fileContent.match(/const academicBooks = (\[[\s\S]*?\]);/);
if (match) {
    let currentBooks = JSON.parse(match[1]);
    currentBooks = currentBooks.map(book => {
        // Find the book in originalData
        const originalBook = originalData.find(b => b.title.includes(book.title) || book.title.includes(b.title));
        if (originalBook && originalBook.links && originalBook.links.pdf && originalBook.links.pdf.includes('archive.org')) {
            book.links.archive = originalBook.links.pdf;
        } else if (originalBook && originalBook.pdf && originalBook.pdf.includes('archive.org')) {
             book.links.archive = originalBook.pdf;
        } else {
            console.log("Archive link not found for:", book.title);
        }
        return book;
    });
    const newContent = fileContent.replace(match[1], JSON.stringify(currentBooks, null, 4));
    fs.writeFileSync('js/my_data.js', newContent, 'utf8');
    console.log("Updated js/my_data.js with archive links");
}
