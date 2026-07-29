const fs = require('fs');
let data = fs.readFileSync('js/my_data.js', 'utf8');

const newArticle = `,
  {
     id: Date.now() + 1,
     title: "من هو داوود؟ الجزء الثاني",
     link: "/posts/story_of_david_2.html",
     category: "قصص الأنبياء",
     date: "11 نيسان 2023",
     icon: \`<svg xmlns="http://www.w3.org/2005/svg" class="w-full h-full text-academic-primary" viewBox="0 0 100 100" fill="none"><rect width="100" height="100" fill="#fdfbf7"/><path d="M20 50 Q 50 10 80 50 T 20 50" stroke="#0c4128" stroke-width="2" fill="#eaddcf"/><circle cx="50" cy="50" r="12" stroke="#0c4128" stroke-width="2" fill="#fbbf24"/><path d="M50 20 L50 38" stroke="#0c4128" stroke-width="2"/><circle cx="50" cy="80" r="5" fill="#0c4128"/></svg>\`
   }`;

data = data.replace(/}\s*\];\s*window\.categoriesDatabase\s*=\s*\[/, '}' + newArticle + '];\nwindow.categoriesDatabase = [');
fs.writeFileSync('js/my_data.js', data);
console.log('Database updated');
