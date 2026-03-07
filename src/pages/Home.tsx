import { useState } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { ar } from 'date-fns/locale';
import { FileText, Calendar, Image as ImageIcon } from 'lucide-react';
import articlesData from '../data/articles.json';

interface Article {
  id: number;
  title: string;
  image_url: string | null;
  created_at: string;
}

export default function Home() {
  const [articles] = useState<Article[]>(
    [...articlesData].sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
  );

  return (
    <div className="space-y-8">
      <div className="text-center py-12 bg-white rounded-2xl shadow-sm border border-gray-100 mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">المكتبة الأكاديمية</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          مجموعة من المقالات الأكاديمية والأبحاث المتخصصة، مصممة لتجربة قراءة مريحة وممتعة.
        </p>
      </div>

      {articles.length === 0 ? (
        <div className="text-center text-gray-500 py-12">
          <FileText className="w-16 h-16 mx-auto mb-4 text-gray-300" />
          <p className="text-xl">لا توجد مقالات حالياً.</p>
          <Link to="/admin" className="text-indigo-600 hover:underline mt-2 inline-block">
            أضف مقالتك الأولى
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link
              key={article.id}
              to={`/article/${article.id}`}
              className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-200 flex flex-col h-full"
            >
              {article.image_url ? (
                <div className="h-48 overflow-hidden">
                  <img
                    src={article.image_url}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ) : (
                <div className="h-48 bg-gray-50 flex items-center justify-center text-gray-300">
                  <ImageIcon className="w-12 h-12" />
                </div>
              )}
              <div className="p-5 flex flex-col flex-grow">
                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-indigo-700 transition-colors">
                  {article.title}
                </h2>
                <div className="mt-auto flex items-center text-sm text-gray-500 gap-2">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={article.created_at}>
                    {format(new Date(article.created_at), 'dd MMMM yyyy', { locale: ar })}
                  </time>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
