const fs = require('fs');
let content = fs.readFileSync('js/my_data.js', 'utf8');

// fix the empty space and commas before the array end
content = content.replace(/},\s*\];/g, '}];');

fs.writeFileSync('js/my_data.js', content);
console.log('Fixed trailing comma');
