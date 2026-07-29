const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const targetContent = `        card.innerHTML = \`
                <div class="p-6">
                    <div class="flex justify-between items-start mb-4">
                        <span class="text-xs font-bold px-3 py-1 bg-academic-bg border border-academic-border rounded-full text-academic-primary">
                            \${article.category}
                        </span>
                        \${isCompleted ? '<svg class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>' : ""}
                    </div>
                    <h3 class="font-bold text-lg mb-2 leading-tight group-hover:text-academic-primary transition-colors">\${article.title}</h3>
                    
                    <div class="mt-6">
                        <div class="flex justify-between text-xs font-bold mb-2 opacity-70">
                            <span>نسبة الإنجاز</span>
                            <span>\${progressNum}%</span>
                        </div>
                        <div class="w-full bg-academic-border rounded-full h-2 overflow-hidden">
                            <div class="h-2 rounded-full \${isCompleted ? "bg-academic-primary" : "bg-gray-400"} transition-all duration-1000" style="width: \${progressNum}%"></div>
                        </div>
                    </div>
                </div>
            \`;`;

const newContent = `        let mediaHTML = "";
        if (article.icon) {
            mediaHTML = \`<div class="w-full h-40 bg-academic-bg border-b border-academic-border overflow-hidden">\${article.icon}</div>\`;
        } else if (article.image) {
            mediaHTML = \`<div class="w-full h-40 border-b border-academic-border overflow-hidden"><img src="\${article.image}" alt="\${article.title}" class="w-full h-full object-cover"/></div>\`;
        }

        card.innerHTML = \`
                \${mediaHTML}
                <div class="p-6">
                    <div class="flex justify-between items-start mb-4">
                        <span class="text-xs font-bold px-3 py-1 bg-academic-bg border border-academic-border rounded-full text-academic-primary">
                            \${article.category || 'عام'}
                        </span>
                        \${isCompleted ? '<svg class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>' : ""}
                    </div>
                    <h3 class="font-bold text-lg mb-2 leading-tight group-hover:text-academic-primary transition-colors">\${article.title}</h3>
                    
                    <div class="mt-6">
                        <div class="flex justify-between text-xs font-bold mb-2 opacity-70">
                            <span>نسبة الإنجاز</span>
                            <span>\${progressNum}%</span>
                        </div>
                        <div class="w-full bg-academic-border rounded-full h-2 overflow-hidden">
                            <div class="h-2 rounded-full \${isCompleted ? "bg-academic-primary" : "bg-gray-400"} transition-all duration-1000" style="width: \${progressNum}%"></div>
                        </div>
                    </div>
                </div>
            \`;`;

html = html.replace(targetContent, newContent);
fs.writeFileSync('index.html', html);
console.log('Card updated successfully');
