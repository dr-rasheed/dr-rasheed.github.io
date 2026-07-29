const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const targetContent = `      const sampleArticles = [
        {
          id: 1,
          title: "مقدمة في فلسفة العلوم المعاصرة",
          path: "/posts/template.html",
          category: "فلسفة",
        },
      ];

      sampleArticles.forEach((article) => {
        const isCompleted = history.some((h) => h.path.includes(article.path));
        const progress =
          localStorage.getItem(\`progress_\${article.path}\`) ||
          (isCompleted ? "100" : "0");
        const progressNum = parseInt(progress);

        const card = document.createElement("a");
        card.href = article.path;`;

const newContent = `      const myArticles = window.articlesDatabase || [];

      myArticles.forEach((article) => {
        const path = article.link || article.path;
        const isCompleted = history.some((h) => h.path && h.path.includes(path));
        const progress =
          localStorage.getItem(\`progress_\${path}\`) ||
          (isCompleted ? "100" : "0");
        const progressNum = parseInt(progress);

        const card = document.createElement("a");
        card.href = path;`;

html = html.replace(targetContent, newContent);
fs.writeFileSync('index.html', html);
console.log('index.html updated successfully.');
