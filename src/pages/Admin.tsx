import { useState } from 'react';
import { FileCode2, Copy, CheckCircle2 } from 'lucide-react';
import articlesData from '../data/articles.json';

export default function Admin() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [generatedJson, setGeneratedJson] = useState('');
  const [copied, setCopied] = useState(false);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title || !content) return;

    // Generate a new ID based on existing articles
    const newId = articlesData.length > 0 
      ? Math.max(...articlesData.map(a => a.id)) + 1 
      : 1;

    const newArticle = {
      id: newId,
      title: title,
      content: content,
      image_url: imageUrl || null,
      created_at: new Date().toISOString()
    };

    // Create the new array with the new article at the beginning
    const newArticlesArray = [newArticle, ...articlesData];
    
    setGeneratedJson(JSON.stringify(newArticlesArray, null, 2));
    setCopied(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedJson);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <FileCode2 className="w-6 h-6 text-indigo-600" />
          أداة إنشاء المقالات لـ GitHub
        </h2>
        
        <div className="bg-blue-50 text-blue-800 p-4 rounded-lg mb-8 text-sm leading-relaxed border border-blue-100">
          <p className="font-bold mb-2">كيفية إضافة مقالة من بلوجر إلى موقعك على GitHub:</p>
          <ol className="list-decimal list-inside space-y-1">
            <li>انسخ عنوان المقالة ومحتواها من بلوجر والصقها هنا.</li>
            <li>للآيات القرآنية، ضع علامة <code>&gt;</code> قبل الآية ليتم تطبيق خط المصحف عليها.</li>
            <li>اضغط على "توليد الكود".</li>
            <li>انسخ الكود الناتج، واذهب إلى مستودعك في GitHub.</li>
            <li>افتح الملف <code>src/data/articles.json</code> واضغط على زر التعديل (القلم).</li>
            <li>احذف المحتوى القديم والصق الكود الجديد، ثم احفظ التعديلات (Commit changes).</li>
          </ol>
        </div>

        <form onSubmit={handleGenerate} className="space-y-6">
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
              محتوى المقالة
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={10}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors font-mono text-sm"
              required
              placeholder="اكتب أو الصق محتوى المقالة هنا..."
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
            >
              توليد الكود
            </button>
          </div>
        </form>
      </div>

      {generatedJson && (
        <div className="bg-gray-900 rounded-2xl shadow-sm border border-gray-800 p-8 text-left" dir="ltr">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-white">الكود المولد (articles.json)</h3>
            <button
              onClick={copyToClipboard}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                copied ? 'bg-green-600 text-white' : 'bg-white text-gray-900 hover:bg-gray-100'
              }`}
            >
              {copied ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  تم النسخ!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  نسخ الكود
                </>
              )}
            </button>
          </div>
          <pre className="bg-black p-4 rounded-lg overflow-x-auto text-green-400 text-sm font-mono leading-relaxed">
            <code>{generatedJson}</code>
          </pre>
        </div>
      )}
    </div>
  );
}
