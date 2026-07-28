const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// I will find the exact index of "/* 6. Service Worker */" and "for (let i = 1; i <= 27; i++) {" 
// Then I will manually rewrite the script section block for the grid

const scriptStart = html.indexOf("const booksGrid = document.getElementById('books-grid');");
const serviceWorkerStart = html.indexOf("/* ---------------------------------\n           6. Service Worker");

if (scriptStart !== -1 && serviceWorkerStart !== -1) {
    const head = html.substring(0, scriptStart);
    const tail = html.substring(serviceWorkerStart);
    
    const newGridScript = `const booksGrid = document.getElementById('books-grid');
        
        if (typeof academicBooks !== 'undefined' && academicBooks.length > 0) {
            academicBooks.forEach(book => {
                const card = document.createElement('a');
                card.href = book.pdf;
                card.target = "_blank";
                card.className = "group bg-academic-card border border-academic-border flex flex-col items-center p-6 rounded-2xl transition-all hover:-translate-y-1 hover:shadow-xl hover:border-academic-primary/50 text-center relative overflow-hidden";
                
                card.innerHTML = \`
                    <!-- Golden Highlight on Hover -->
                    <div class="absolute inset-0 bg-gradient-to-b from-yellow-500/0 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    
                    \${book.image ? \`
                        <div class="w-full h-32 mb-4 relative z-10 rounded-lg overflow-hidden border border-academic-border group-hover:border-yellow-600/30 transition-colors">
                            <img src="\${book.image}" alt="\${book.title}" class="w-full h-full object-cover">
                        </div>
                    \` : \`
                        <div class="w-16 h-20 bg-academic-bg border border-academic-border rounded shadow-sm mb-4 flex flex-col items-center justify-center relative group-hover:border-yellow-600/30 transition-colors z-10">
                            <svg class="w-8 h-8 text-yellow-600 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477-4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                            <span class="text-[10px] font-bold opacity-70 tracking-widest">PDF</span>
                        </div>
                    \`}
                    <h4 class="font-bold text-sm leading-tight mb-1 relative z-10">\${book.title}</h4>
                    <div class="text-xs opacity-60 relative z-10">\${book.category || 'تحميل مباشر'}</div>
                \`;
                booksGrid.appendChild(card);
            });
            
            // Update the counter in the UI
            const booksCounter = document.querySelector('a[href="#"]');
            if (booksCounter && booksCounter.textContent.includes('27')) {
                booksCounter.textContent = \`تصفح الـ \${academicBooks.length} كتاب \u2190\`;
            }
        }
        
        `;
        
    fs.writeFileSync('index.html', head + newGridScript + tail);
}

