import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { format } from 'date-fns';
import { ar } from 'date-fns/locale';
import { Play, Square, ArrowRight, Volume2, VolumeX } from 'lucide-react';
import articlesData from '../data/articles.json';

interface Article {
  id: number;
  title: string;
  content: string;
  image_url: string | null;
  created_at: string;
}

export default function Article() {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const synth = window.speechSynthesis;
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    const foundArticle = articlesData.find(a => a.id === Number(id));
    if (foundArticle) {
      setArticle(foundArticle);
    }

    return () => {
      if (synth.speaking) {
        synth.cancel();
      }
    };
  }, [id, synth]);

  const toggleSpeech = () => {
    if (!article) return;

    if (isPlaying && !isPaused) {
      synth.pause();
      setIsPaused(true);
    } else if (isPlaying && isPaused) {
      synth.resume();
      setIsPaused(false);
    } else {
      // Start playing
      const textToRead = `${article.title}. ${article.content.replace(/[#*`_]/g, '')}`;
      const utterance = new SpeechSynthesisUtterance(textToRead);
      utterance.lang = 'ar-SA'; // Arabic
      utterance.rate = 0.9; // Slightly slower for better comprehension
      
      utterance.onend = () => {
        setIsPlaying(false);
        setIsPaused(false);
      };
      
      utterance.onerror = (e) => {
        console.error('Speech synthesis error', e);
        setIsPlaying(false);
        setIsPaused(false);
      };

      utteranceRef.current = utterance;
      synth.speak(utterance);
      setIsPlaying(true);
      setIsPaused(false);
    }
  };

  const stopSpeech = () => {
    if (synth.speaking) {
      synth.cancel();
      setIsPlaying(false);
      setIsPaused(false);
    }
  };

  if (!article) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">المقالة غير موجودة</h2>
        <Link to="/" className="text-indigo-600 hover:underline flex items-center justify-center gap-2">
          <ArrowRight className="w-4 h-4" />
          العودة للمكتبة
        </Link>
      </div>
    );
  }

  return (
    <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      {article.image_url && (
        <div className="w-full h-64 md:h-96 overflow-hidden">
          <img
            src={article.image_url}
            alt={article.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      )}
      
      <div className="p-6 md:p-12">
        <header className="mb-10 border-b border-gray-100 pb-8">
          <Link to="/" className="inline-flex items-center text-sm text-indigo-600 hover:text-indigo-800 mb-6 transition-colors gap-1">
            <ArrowRight className="w-4 h-4" />
            العودة للمكتبة
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            {article.title}
          </h1>
          <div className="flex items-center justify-between flex-wrap gap-4 text-gray-500 text-sm">
            <time dateTime={article.created_at}>
              {format(new Date(article.created_at), 'dd MMMM yyyy', { locale: ar })}
            </time>
            
            {/* TTS Controls */}
            <div className="flex items-center gap-2 bg-gray-50 rounded-full px-4 py-2 border border-gray-200">
              <span className="font-medium ml-2">القارئ الآلي:</span>
              <button
                onClick={toggleSpeech}
                className={`p-2 rounded-full transition-colors ${isPlaying && !isPaused ? 'bg-indigo-100 text-indigo-700' : 'hover:bg-gray-200 text-gray-700'}`}
                title={isPlaying && !isPaused ? 'إيقاف مؤقت' : 'تشغيل'}
              >
                {isPlaying && !isPaused ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>
              {isPlaying && (
                <button
                  onClick={stopSpeech}
                  className="p-2 rounded-full hover:bg-red-100 text-red-600 transition-colors"
                  title="إيقاف"
                >
                  <Square className="w-5 h-5 fill-current" />
                </button>
              )}
            </div>
          </div>
        </header>

        <div className="prose prose-lg prose-indigo max-w-none markdown-body text-gray-800">
          <Markdown 
            remarkPlugins={[remarkGfm]}
            components={{
              blockquote: ({node, ...props}) => (
                <blockquote className="quran-text text-2xl text-indigo-900 bg-indigo-50/50 py-4 px-6 rounded-l-lg border-r-4 border-indigo-500 my-8 shadow-sm" {...props} />
              )
            }}
          >
            {article.content}
          </Markdown>
        </div>
      </div>
    </article>
  );
}
