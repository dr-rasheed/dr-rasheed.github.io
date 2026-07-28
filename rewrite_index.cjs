const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// The original script starts around line 200. I will slice everything after 
// <script src="/js/my_data.js"></script> and rewrite it cleanly.

let baseSplit = html.split('<script src="/js/my_data.js"></script>');
if (baseSplit.length === 2) {
    let top = baseSplit[0] + '<script src="/js/my_data.js"></script>\n<script>\n';
    let newScript = `
        /* ---------------------------------
           1. Themes Engine
           --------------------------------- */
        const themes = [
            { id: '', name: 'الافتراضي المريح' },
            { id: 'zinc', name: 'الداكن المتقدم' },
            { id: 'sepia', name: 'الورق القديم (سيبيا)' },
            { id: 'ocean', name: 'أعماق المحيط' },
            { id: 'sage', name: 'أخضر مريمية' },
            { id: 'burgundy', name: 'عنابي مخملي' },
            { id: 'nordic', name: 'شمالي بارد' },
            { id: 'amethyst', name: 'جمشتي ليلي' },
            { id: 'sunset', name: 'غروب دافئ' },
            { id: 'forest', name: 'غابة استوائية' }
        ];

        const themeGrid = document.getElementById('theme-grid');
        const themeBtn = document.getElementById('theme-btn');
        const themeMenu = document.getElementById('theme-menu');
        let currentTheme = localStorage.getItem('academic_theme') || '';

        // Apply theme immediately to prevent flash
        if (currentTheme) document.body.classList.add('theme-' + currentTheme);

        themes.forEach(theme => {
            const btn = document.createElement('button');
            btn.className = \`flex items-center justify-between p-3 rounded-xl border transition-all \${currentTheme === theme.id ? 'border-academic-primary bg-academic-primary/5 text-academic-primary font-bold' : 'border-academic-border hover:bg-academic-hover'}\`;
            btn.innerHTML = \`
                <span>\${theme.name}</span>
                \${currentTheme === theme.id ? '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>' : ''}
            \`;
            btn.onclick = () => {
                document.body.className = document.body.className.replace(/theme-\\w+/g, '');
                if (theme.id) document.body.classList.add('theme-' + theme.id);
                localStorage.setItem('academic_theme', theme.id);
                window.location.reload();
            };
            themeGrid.appendChild(btn);
        });

        themeBtn.onclick = () => {
            themeMenu.classList.toggle('opacity-0');
            themeMenu.classList.toggle('invisible');
            themeMenu.classList.toggle('translate-y-2');
        };

        /* ---------------------------------
           2. Search Engine
           --------------------------------- */
        const searchInput = document.getElementById('search-input');
        const searchBtn = document.getElementById('search-btn');

        searchBtn.onclick = () => {
            const query = searchInput.value.trim();
            if (query) {
                alert('سيتم توجيهك إلى صفحة البحث الشامل قريباً: ' + query);
            }
        };

        /* ---------------------------------
           3. Reciters Engine
           --------------------------------- */
        const recitersGrid = document.getElementById('reciters-grid');
        
        if (window.recitersDatabase) {
            recitersDatabase.forEach((r, index) => {
                const card = document.createElement('div');
                card.className = "flex items-center gap-4 p-4 border border-academic-border rounded-xl hover:border-academic-primary transition-colors cursor-pointer bg-academic-bg";
                card.innerHTML = \`
                    <div class="w-12 h-12 bg-academic-card border-2 border-academic-primary rounded-full flex items-center justify-center font-bold text-academic-primary text-xl shadow-inner">
                        \${index + 1}
                    </div>
                    <div>
                        <div class="font-bold text-sm">\${r.name}</div>
                        <div class="text-xs opacity-60">ID: \${r.id} | جودة عالية</div>
                    </div>
                \`;
                recitersGrid.appendChild(card);
            });
        }

        /* ---------------------------------
           4. Articles & History Tracker
           --------------------------------- */
        const history = JSON.parse(localStorage.getItem('academic_reading_history') || '[]');
        const statsEl = document.getElementById('reading-stats');
        statsEl.innerHTML = \`<span class="text-academic-primary font-bold">\${history.length}</span> مقالات مقروءة\`;

        const articlesGrid = document.getElementById('articles-grid');
        const sampleArticles = [
            { id: 1, title: 'مقدمة في فلسفة العلوم المعاصرة', path: '/posts/template.html', category: 'فلسفة' },
            { id: 2, title: 'فقه المعاملات المالية الحديثة', path: '#', category: 'فقه' },
            { id: 3, title: 'الإعجاز البلاغي في القرآن الكريم', path: '#', category: 'قرآن' },
            { id: 4, title: 'تاريخ العلوم الإسلامية', path: '#', category: 'تاريخ' }
        ];

        sampleArticles.forEach(article => {
            const isCompleted = history.some(h => h.path.includes(article.path));
            const progress = localStorage.getItem(\`progress_\${article.path}\`) || (isCompleted ? '100' : '0');
            const progressNum = parseInt(progress);
            
            const card = document.createElement('a');
            card.href = article.path;
            card.className = "group block bg-academic-card border border-academic-border rounded-2xl overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 hover:border-academic-primary";
            
            card.innerHTML = \`
                <div class="p-6">
                    <div class="flex justify-between items-start mb-4">
                        <span class="text-xs font-bold px-3 py-1 bg-academic-bg border border-academic-border rounded-full text-academic-primary">
                            \${article.category}
                        </span>
                        \${isCompleted ? '<svg class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>' : ''}
                    </div>
                    <h3 class="font-bold text-lg mb-2 leading-tight group-hover:text-academic-primary transition-colors">\${article.title}</h3>
                    
                    <div class="mt-6">
                        <div class="flex justify-between text-xs font-bold mb-2 opacity-70">
                            <span>نسبة الإنجاز</span>
                            <span>\${progressNum}%</span>
                        </div>
                        <div class="w-full bg-academic-border rounded-full h-2 overflow-hidden">
                            <div class="h-2 rounded-full \${isCompleted ? 'bg-academic-primary' : 'bg-gray-400'} transition-all duration-1000" style="width: \${progressNum}%"></div>
                        </div>
                    </div>
                </div>
            \`;
            articlesGrid.appendChild(card);
        });

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
            if(booksCounter && booksCounter.textContent.includes('27')) {
                booksCounter.textContent = \`تصفح الـ \${academicBooks.length} كتاب \u2190\`;
            }
        }

        /* ---------------------------------
           6. Service Worker
           --------------------------------- */
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/service-worker.js').catch(console.error);
            });
        }
    </script>
</body>
</html>
`;
    fs.writeFileSync('index.html', top + newScript);
}
