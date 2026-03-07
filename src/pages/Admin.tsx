import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlusCircle, Trash2, Edit3, Save, X } from 'lucide-react';

interface Article {
  id: number;
  title: string;
  created_at: string;
}

export default function Admin() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const fetchArticles = () => {
    fetch('/api/articles')
      .then((res) => res.json())
      .then((data) => setArticles(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const res = await fetch('/api/articles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content, image_url: imageUrl }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to create article');
      }

      setSuccess('تم إضافة المقالة بنجاح!');
      setTitle('');
      setContent('');
      setImageUrl('');
      fetchArticles();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const [articleToDelete, setArticleToDelete] = useState<number | null>(null);

  const handleDelete = async (id: number) => {
    try {
      const res = await fetch(`/api/articles/${id}`, {
        method: 'DELETE',
      });

      if (!res.ok) throw new Error('Failed to delete');
      fetchArticles();
      setArticleToDelete(null);
    } catch (err) {
      console.error(err);
      setError('حدث خطأ أثناء الحذف');
    }
  };

  return (
    <div className="space-y-12">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <PlusCircle className="w-6 h-6 text-indigo-600" />
          إضافة مقالة جديدة
        </h2>

        {error && (
          <div className="bg-red-50 text-red-700 p-4 rounded-lg mb-6 border border-red-100">
            {error}
          </div>
        )}

        {success && (
          <div className="bg-green-50 text-green-700 p-4 rounded-lg mb-6 border border-green-100">
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
              عنوان المقالة
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
              required
              placeholder="أدخل عنوان المقالة هنا..."
            />
          </div>

          <div>
            <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-2">
              رابط الصورة (اختياري)
            </label>
            <input
              type="url"
              id="imageUrl"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors text-left"
              placeholder="https://example.com/image.jpg"
              dir="ltr"
            />
          </div>

          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
              محتوى المقالة (يدعم Markdown)
            </label>
            <p className="text-xs text-gray-500 mb-2">
              ملاحظة: استخدم علامة الاقتباس `&gt;` للآيات القرآنية لتطبيق خط المصحف عليها.
            </p>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={15}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors font-mono text-sm"
              required
              placeholder="اكتب محتوى المقالة هنا..."
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 transition-colors"
            >
              {loading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              ) : (
                <>
                  <Save className="w-5 h-5" />
                  حفظ المقالة
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">المقالات المنشورة</h2>
        
        {articles.length === 0 ? (
          <p className="text-gray-500 text-center py-8">لا توجد مقالات منشورة بعد.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-right">
              <thead>
                <tr className="border-b border-gray-200 text-gray-600 text-sm">
                  <th className="pb-4 font-medium">العنوان</th>
                  <th className="pb-4 font-medium">تاريخ النشر</th>
                  <th className="pb-4 font-medium w-24">إجراءات</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {articles.map((article) => (
                  <tr key={article.id} className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 text-gray-900 font-medium">
                      <button 
                        onClick={() => navigate(`/article/${article.id}`)}
                        className="hover:text-indigo-600 text-right"
                      >
                        {article.title}
                      </button>
                    </td>
                    <td className="py-4 text-gray-500 text-sm">
                      {new Date(article.created_at).toLocaleDateString('ar-SA')}
                    </td>
                    <td className="py-4">
                      {articleToDelete === article.id ? (
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-red-600">تأكيد الحذف؟</span>
                          <button
                            onClick={() => handleDelete(article.id)}
                            className="text-white bg-red-600 px-2 py-1 rounded text-xs hover:bg-red-700"
                          >
                            نعم
                          </button>
                          <button
                            onClick={() => setArticleToDelete(null)}
                            className="text-gray-600 bg-gray-200 px-2 py-1 rounded text-xs hover:bg-gray-300"
                          >
                            لا
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => setArticleToDelete(article.id)}
                          className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50 transition-colors"
                          title="حذف"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
