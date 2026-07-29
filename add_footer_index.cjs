const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const footerHTML = `
    <!-- Footer -->
    <footer class="bg-academic-card border-t border-academic-border mt-20 pt-16 pb-8 font-readex relative z-10">
      <div class="max-w-6xl mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <!-- About -->
          <div>
            <h3 class="font-amiri text-2xl font-bold text-academic-primary mb-6">د. رشيد الجراح</h3>
            <p class="text-sm opacity-80 leading-relaxed mb-6">
              مكتبة رقمية وموسوعة معرفية تضم أبحاث ودراسات ومقالات الأستاذ الدكتور رشيد الجراح في مختلف مجالات الفكر والفلسفة والعلوم الإنسانية.
            </p>
            <div class="flex gap-4 items-center">
              <!-- Facebook -->
              <a href="#" target="_blank" class="text-academic-primary hover:text-academic-text transition-colors">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
              </a>
              <!-- YouTube -->
              <a href="#" target="_blank" class="text-academic-primary hover:text-academic-text transition-colors">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M21.582 6.186a2.66 2.66 0 0 0-1.875-1.884C18.053 3.864 12 3.864 12 3.864s-6.053 0-7.707.438a2.66 2.66 0 0 0-1.875 1.884C2 7.848 2 12 2 12s0 4.152.418 5.814a2.66 2.66 0 0 0 1.875 1.884C5.947 20.136 12 20.136 12 20.136s6.053 0 7.707-.438a2.66 2.66 0 0 0 1.875-1.884C22 16.152 22 12 22 12s0-4.152-.418-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <!-- Telegram -->
              <a href="#" target="_blank" class="text-academic-primary hover:text-academic-text transition-colors">
                 <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.892-.664 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
              </a>
              <!-- WhatsApp -->
              <a href="#" target="_blank" class="text-academic-primary hover:text-academic-text transition-colors">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
              </a>
              <!-- ORCID -->
              <a href="#" target="_blank" class="text-academic-primary hover:text-academic-text transition-colors font-bold text-sm">
                ORCID
              </a>
            </div>
          </div>
          
          <!-- Links -->
          <div>
            <h4 class="font-bold text-lg mb-6 text-academic-text">روابط هامة</h4>
            <ul class="space-y-3 text-sm opacity-80">
              <li><a href="/about.html" class="hover:text-academic-primary transition-colors">عن الموقع</a></li>
              <li><a href="/help.html" class="hover:text-academic-primary transition-colors">المساعدة</a></li>
              <li><a href="/sync.html" class="hover:text-academic-primary transition-colors">المزامنة</a></li>
              <li><a href="https://qran.top/" target="_blank" class="hover:text-academic-primary transition-colors">القرآن الكريم</a></li>
            </ul>
          </div>
          
          <!-- Pages -->
          <div>
            <h4 class="font-bold text-lg mb-6 text-academic-text">الصفحات</h4>
            <ul class="space-y-3 text-sm opacity-80">
              <li><a href="/privacy-policy.html" class="hover:text-academic-primary transition-colors">سياسة الخصوصية</a></li>
              <li><a href="/terms.html" class="hover:text-academic-primary transition-colors">شروط الاستخدام</a></li>
            </ul>
          </div>
          
        </div>
        
        <div class="border-t border-academic-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-70">
          <p>© 2026 أ.د. رشيد الجراح. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
`;

html = html.replace('    </main>', '    </main>\n' + footerHTML);
fs.writeFileSync('index.html', html);
console.log('Footer added to index.html');
