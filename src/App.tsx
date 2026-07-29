import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { BookOpen, User, Info, Settings, LayoutGrid } from 'lucide-react';
import Home from './pages/Home';
import Article from './pages/Article';
import Books from './pages/Books';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="bg-academic-bg text-academic-text antialiased min-h-screen font-readex flex flex-col">
        <header className="sticky top-0 z-50 bg-academic-bg/90 backdrop-blur-md border-b border-academic-border shadow-sm">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link to="/" className="flex items-center gap-3 group" title="العودة للصفحة الرئيسية">
              <div className="w-12 h-12 rounded-full bg-academic-primary text-white flex items-center justify-center text-2xl font-amiri font-bold shadow-lg group-hover:bg-academic-hover transition-colors">
                ر
              </div>
              <div>
                <h1 className="text-xl font-bold text-academic-primary tracking-tight group-hover:underline">
                  أ.د. رشيد الجراح
                </h1>
                <p className="text-sm opacity-80 font-medium">المكتبة الرقمية</p>
              </div>
            </Link>

            <div className="flex items-center gap-2 relative">
              <Link to="/books" className="flex items-center gap-2 px-4 py-2 rounded-full bg-academic-primary text-white text-sm font-bold hover:bg-academic-hover transition-colors shadow-sm" title="تصفح الكتب والمؤلفات">
                <BookOpen className="w-5 h-5" />
                <span>الكتب</span>
              </Link>
              <Link to="/about" className="p-2 rounded-full text-academic-text hover:bg-academic-hover transition-colors" title="عن الموقع">
                <Info className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </header>

        <main className="flex-grow max-w-7xl mx-auto px-6 lg:px-8 py-12 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/article/:id" element={<Article />} />
            <Route path="/books" element={<Books />} />
            <Route path="/about" element={<About />} />
            <Route path="/posts/:slug" element={<Article />} />
          </Routes>
        </main>

        <footer className="bg-academic-card border-t border-academic-border mt-20 pt-16 pb-8 font-readex relative z-10">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
              <div>
                <h3 className="font-amiri text-2xl font-bold text-academic-primary mb-6">د. رشيد الجراح</h3>
                <p className="text-sm opacity-80 leading-relaxed mb-6">
                  مكتبة رقمية وموسوعة معرفية تضم أبحاث ودراسات ومقالات الأستاذ الدكتور رشيد الجراح في مختلف مجالات الفكر والفلسفة والعلوم الإنسانية.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-6 text-academic-text">روابط هامة</h4>
                <ul className="space-y-3 text-sm opacity-80">
                  <li><Link to="/about" className="hover:text-academic-primary transition-colors">عن الموقع</Link></li>
                  <li><a href="https://qran.top/" target="_blank" rel="noreferrer" className="hover:text-academic-primary transition-colors">القرآن الكريم</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
