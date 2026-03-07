import { Outlet, Link } from 'react-router-dom';
import { BookOpen, Settings } from 'lucide-react';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-indigo-900 hover:text-indigo-700 transition-colors">
            <BookOpen className="w-6 h-6" />
            <span className="font-bold text-xl tracking-tight">مكتبة المقالات</span>
          </Link>
          <nav>
            <Link to="/admin" className="text-gray-500 hover:text-gray-900 transition-colors" title="لوحة التحكم">
              <Settings className="w-5 h-5" />
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow max-w-4xl mx-auto w-full px-4 py-8">
        <Outlet />
      </main>

      <footer className="bg-white border-t border-gray-200 py-8 mt-12">
        <div className="max-w-4xl mx-auto px-4 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} مكتبة المقالات الأكاديمية. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </div>
  );
}
