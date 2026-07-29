import React from 'react';
import { Link } from 'react-router-dom';
import { articlesDatabase } from '../data/my_data';

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <section>
        <div className="flex justify-between items-end mb-8 border-b border-academic-border pb-4">
          <div>
            <h2 className="text-3xl font-bold text-academic-primary mb-2">
              أحدث المقالات والدراسات
            </h2>
            <p className="text-sm opacity-70">
              يتم تتبع تقدمك في القراءة محلياً لضمان الخصوصية.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {articlesDatabase.map((article) => {
            const articleId = article.id || article.link.split('/').pop().replace('.html', '');
            return (
              <Link
                key={article.id}
                to={`/article/${articleId}`}
                className="group bg-academic-card border border-academic-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="aspect-[4/3] bg-academic-primary/5 flex items-center justify-center border-b border-academic-border overflow-hidden relative">
                  {/* Since SVG string is stored in article.icon, we can dangerouslySetInnerHTML */}
                  <div className="w-full h-full p-4" dangerouslySetInnerHTML={{ __html: article.icon }} />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-academic-primary shadow-sm border border-black/5">
                    {article.category}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3 text-xs opacity-60 font-medium">
                    <span>{article.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-academic-text group-hover:text-academic-primary transition-colors line-clamp-2 leading-tight">
                    {article.title}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
