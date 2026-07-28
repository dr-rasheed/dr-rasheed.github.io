const fs = require('fs');

const extracted = JSON.parse(fs.readFileSync('books_final.json', 'utf8'));

// Now append this to js/my_data.js
let myData = fs.readFileSync('js/my_data.js', 'utf8');

// We need to inject these books into the academicBooks array in my_data.js
// If academicBooks array is empty in my_data.js:
// const academicBooks = [];
// we can replace it with the new JSON.

let booksJson = JSON.stringify(extracted, null, 4);

// Replace `const academicBooks = [];` or similar with our data
if (myData.includes("const academicBooks = [")) {
    // If it's already there but empty or has something
    // Let's just find the whole academicBooks array and replace it
    myData = myData.replace(/const\s+academicBooks\s*=\s*\[[\s\S]*?\];/g, `const academicBooks = ${booksJson};`);
} else {
    // append it
    myData += `\n\nconst academicBooks = ${booksJson};\n`;
}

fs.writeFileSync('js/my_data.js', myData);
console.log("Updated js/my_data.js successfully");
