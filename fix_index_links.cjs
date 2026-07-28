const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const oldScript = `
        /* ---------------------------------
           5. Books Archive Grid
           --------------------------------- */
        const booksGrid = document.getElementById('books-grid');
        
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
            if(booksCounter && booksCounter.textContent.includes('تصفح')) {
                booksCounter.textContent = \`تصفح الـ \${academicBooks.length} كتاب \\u2190\`;
            }
        }`;

const newScript = `
        /* ---------------------------------
           5. Books Archive Grid
           --------------------------------- */
        const booksGrid = document.getElementById('books-grid');
        
        if (typeof academicBooks !== 'undefined' && academicBooks.length > 0) {
            academicBooks.forEach(book => {
                const card = document.createElement('div');
                card.className = "group bg-academic-card border border-academic-border flex flex-col items-center p-6 rounded-2xl transition-all hover:-translate-y-1 hover:shadow-xl hover:border-academic-primary/50 text-center relative overflow-hidden";
                
                // Helper to render link buttons safely
                const renderLink = (url, label, iconSvg) => {
                    if(!url) return '';
                    return \`
                        <a href="\${url}" target="_blank" rel="noopener noreferrer" title="\${label}" class="w-8 h-8 rounded-full bg-academic-bg border border-academic-border flex items-center justify-center text-academic-text hover:bg-academic-primary hover:text-white transition-colors z-20 relative">
                            \${iconSvg}
                        </a>
                    \`;
                };

                const links = book.links || {};
                
                card.innerHTML = \`
                    <!-- Golden Highlight on Hover -->
                    <div class="absolute inset-0 bg-gradient-to-b from-yellow-500/0 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                    
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
                    <div class="text-xs opacity-60 relative z-10 mb-4">\${book.category || 'تحميل مباشر'}</div>
                    
                    <div class="flex items-center justify-center gap-2 mt-auto relative z-20 flex-wrap">
                        \${renderLink(links.pdf || book.pdf, 'تحميل PDF (Archive)', '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>')}
                        \${renderLink(links.tele, 'قناة التلغرام', '<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.85 5.18-4.686c.223-.204-.054-.31-.35-.11l-6.4 4.02-2.76-.89c-.6-.188-.612-.6.126-.89l10.814-4.17c.5-.188.95.113.82.721z"/></svg>')}
                        \${renderLink(links.noor, 'مكتبة نور', '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477-4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>')}
                        \${renderLink(links.fs, '4Shared', '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>')}
                        \${renderLink(links.doi, 'DOI / Zenodo', '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>')}
                    </div>
                \`;
                booksGrid.appendChild(card);
            });
            // Update the counter in the UI
            const booksCounter = document.querySelector('a[href="#"]');
            if(booksCounter && booksCounter.textContent.includes('تصفح')) {
                booksCounter.textContent = \`تصفح الـ \${academicBooks.length} كتاب \\u2190\`;
            }
        }`;

if (html.includes(oldScript.trim().substring(0, 50))) {
    // try exact match or slice
    let startIdx = html.indexOf("/* ---------------------------------\n           5. Books Archive Grid");
    let endIdx = html.indexOf("/* ---------------------------------\n           6. Service Worker");
    
    if (startIdx !== -1 && endIdx !== -1) {
        html = html.substring(0, startIdx) + newScript + "\n\n        " + html.substring(endIdx);
        fs.writeFileSync('index.html', html);
        console.log("Updated books grid successfully.");
    } else {
        console.log("Could not find boundaries.");
    }
} else {
    console.log("Could not find oldScript.");
}
