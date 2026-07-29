const fs = require('fs');
let content = fs.readFileSync('js/my_data.js', 'utf8');

const regex = /\{ id: [12345], title:.*?\},/g;
content = content.replace(regex, '');
// Also fix any trailing commas or empty spaces before the array end if needed.
// One of the entries has no trailing comma (the last one: id 5).
content = content.replace(/\{ id: 5, title:.*?\}/, '');

fs.writeFileSync('js/my_data.js', content);
console.log('Database updated');
