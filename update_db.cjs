const fs = require('fs');

let content = fs.readFileSync('js/my_data.js', 'utf8');

// SVG Icon generated
const svgIcon = `<svg xmlns="http://www.w3.org/2005/svg" class="w-full h-full text-academic-primary" viewBox="0 0 100 100" fill="none"><rect width="100" height="100" fill="#fdfbf7"/><path d="M50 20 L80 40 L80 80 L20 80 L20 40 Z" stroke="#0c4128" stroke-width="2" fill="#eaddcf"/><circle cx="50" cy="55" r="10" stroke="#0c4128" stroke-width="2" fill="#fbbf24"/><path d="M50 20 L50 45" stroke="#0c4128" stroke-width="2"/></svg>`;

const newArticle = `  { 
    id: Date.now(), 
    title: "قصة داوود: الجزء الأول", 
    link: "/posts/story_of_david_1.html", 
    category: "قصص الأنبياء", 
    date: "10 نيسان 2023", 
    icon: \`${svgIcon}\` 
  }`;

// Inject into window.articlesDatabase array
const startTag = 'window.articlesDatabase = [';
const idx = content.indexOf(startTag);
if (idx !== -1) {
    const insertIdx = idx + startTag.length;
    content = content.substring(0, insertIdx) + '\n' + newArticle + ',' + content.substring(insertIdx);
    fs.writeFileSync('js/my_data.js', content);
    console.log('Added to articlesDatabase');
} else {
    // maybe it's window.MY_DATA
    const startTag2 = 'window.MY_DATA = [';
    const idx2 = content.indexOf(startTag2);
    if (idx2 !== -1) {
        const insertIdx2 = idx2 + startTag2.length;
        const newMyDataArticle = `\n  { t: "قصة داوود: الجزء الأول", l: "/posts/story_of_david_1.html", c: "مقالات", date: "10 نيسان 2023", icon: \`${svgIcon}\` },`;
        content = content.substring(0, insertIdx2) + newMyDataArticle + content.substring(insertIdx2);
        fs.writeFileSync('js/my_data.js', content);
        console.log('Added to MY_DATA');
    } else {
        console.log('Could not find articles array');
    }
}
