import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Settings, Volume2, Copy } from 'lucide-react';
import { articlesDatabase } from '../data/my_data';
import confetti from 'canvas-confetti';

export default function Article() {
  const { id } = useParams<{ id: string }>();
  const article = articlesDatabase.find(a => a.id === id || a.link.includes(id as string));
  const [content, setContent] = useState<string>('<div class="text-center py-20">جاري تحميل المقالة...</div>');
  const [fontSize, setFontSize] = useState<number>(20);
  const [fontFamily, setFontFamily] = useState<string>('Readex Pro');
  const [tashkeelVisible, setTashkeelVisible] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (article) {
      fetch(article.link)
        .then(res => {
          if (!res.ok) throw new Error('Not found');
          return res.text();
        })
        .then(html => {
          // Extract the content inside <article id="paper-content">
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, 'text/html');
          const articleContent = doc.getElementById('paper-content');
          if (articleContent) {
            setContent(articleContent.innerHTML);
          } else {
            // Fallback if not found
            setContent(html);
          }
        })
        .catch(err => {
          setContent('<div class="text-center py-20 text-red-500 font-bold">عذراً، لم يتم العثور على محتوى المقالة.</div>');
        });
    }
  }, [article, id]);

  useEffect(() => {
    // Setup reading progress tracker and confetti
    let completionTriggered = false;
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? Math.min(100, Math.max(0, (window.scrollY / docHeight) * 100)) : 100;
      if (scrollPercent > 90 && !completionTriggered) {
        completionTriggered = true;
        confetti({ particleCount: 200, spread: 90, origin: { y: 0.6 }, colors: ['#0c4128', '#10b981', '#f59e0b'] });
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [id]);

  if (!article) return <div className="text-center py-20 font-bold text-2xl">المقالة غير موجودة.</div>;

  return (
    <div className="max-w-4xl mx-auto">
      <Link to="/" className="inline-flex items-center gap-2 text-academic-primary hover:underline mb-8 font-bold">
        <ChevronRight className="w-5 h-5" />
        العودة للرئيسية
      </Link>

      <div className="bg-academic-card p-6 md:p-12 rounded-3xl shadow-xl border border-academic-border relative overflow-hidden">
        <header className="mb-12 text-center relative z-10">
          <div className="inline-flex items-center justify-center gap-2 mb-6 glass-pill px-4 py-1.5 rounded-full text-academic-primary text-sm font-bold shadow-sm">
            <div dangerouslySetInnerHTML={{ __html: article.icon }} className="w-4 h-4" />
            {article.category}
          </div>
          <h1 className="text-4xl md:text-5xl font-amiri font-bold text-academic-primary mb-6 leading-normal">
            {article.title}
          </h1>
          <div className="flex items-center justify-center gap-4 text-sm opacity-70 font-medium">
            <span>الكاتب: أ.د. رشيد الجراح</span>
            <span>•</span>
            <time>{article.date}</time>
          </div>
        </header>

        {/* Toolbar */}
        <div className="sticky top-24 z-40 bg-academic-bg/95 backdrop-blur-md border border-academic-border rounded-xl p-3 flex flex-wrap items-center justify-between gap-4 mb-12 shadow-sm transition-all duration-300">
           <div className="flex items-center gap-3">
             <button onClick={() => setFontSize(f => Math.min(f + 2, 32))} className="p-2 hover:bg-academic-hover rounded-lg transition-colors font-bold text-lg" title="تكبير الخط">A+</button>
             <button onClick={() => setFontSize(f => Math.max(f - 2, 14))} className="p-2 hover:bg-academic-hover rounded-lg transition-colors font-bold text-sm" title="تصغير الخط">A-</button>
             <select 
                className="bg-transparent border-none text-sm font-bold outline-none cursor-pointer"
                value={fontFamily}
                onChange={(e) => setFontFamily(e.target.value)}
             >
               <option value="Readex Pro">الخط الأساسي (Readex)</option>
               <option value="Amiri Quran">الخط القرآني (Amiri)</option>
               <option value="Tajawal">الخط الكلاسيكي (Tajawal)</option>
             </select>
           </div>
           
           <div className="flex items-center gap-3 border-r border-academic-border pr-4">
             <button onClick={() => setTashkeelVisible(!tashkeelVisible)} className={`px-3 py-1.5 rounded-lg text-sm font-bold transition-colors ${tashkeelVisible ? 'bg-academic-primary text-white' : 'bg-academic-hover text-academic-text'}`}>
                {tashkeelVisible ? 'إخفاء التشكيل' : 'إظهار التشكيل'}
             </button>
           </div>
        </div>

        {/* Content */}
        <article 
          ref={contentRef}
          className="prose prose-lg max-w-none prose-p:leading-loose prose-h2:text-academic-primary prose-a:text-academic-primary hover:prose-a:text-academic-hover transition-all duration-500"
          style={{ fontSize: `${fontSize}px`, fontFamily: `"${fontFamily}", sans-serif` }}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
}
