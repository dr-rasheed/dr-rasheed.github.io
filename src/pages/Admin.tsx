import { useState, useRef } from 'react';
import { Upload, AlertCircle, CheckCircle2, FileText, FileCode2 } from 'lucide-react';
import TurndownService from 'turndown';
import mammoth from 'mammoth';

export default function Admin() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [statusType, setStatusType] = useState<'info' | 'success' | 'error'>('info');
  const xmlInputRef = useRef<HTMLInputElement>(null);
  const docxInputRef = useRef<HTMLInputElement>(null);

  const turndownService = new TurndownService({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced'
  });

  const showMessage = (msg: string, type: 'info' | 'success' | 'error') => {
    setStatusMessage(msg);
    setStatusType(type);
  };

  const saveArticlesToServer = async (articlesToSave: any[]) => {
    const batchSize = 10;
    for (let i = 0; i < articlesToSave.length; i += batchSize) {
      const batch = articlesToSave.slice(i, i + batchSize);
      const response = await fetch('/api/save-articles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(batch)
      });
      if (!response.ok) throw new Error('فشل في حفظ المقالات.');
      
      // Update progress message
      showMessage(`جاري الحفظ... (${Math.min(i + batchSize, articlesToSave.length)}/${articlesToSave.length})`, 'info');
    }
  };

  const processBloggerXml = async (xmlText: string) => {
    setIsProcessing(true);
    showMessage('جاري تحليل ملف بلوجر...', 'info');

    try {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlText, "text/xml");
      
      const parseError = xmlDoc.getElementsByTagName("parsererror");
      if (parseError.length > 0) {
        throw new Error('فشل في قراءة ملف XML. تأكد من أنه ملف صالح.');
      }

      const entries = xmlDoc.getElementsByTagName("entry");
      if (entries.length === 0) {
        throw new Error('لم يتم العثور على مقالات.');
      }

      const articlesToSave = [];
      let currentId = Date.now();

      for (let i = 0; i < entries.length; i++) {
        const entry = entries[i];
        
        let isPost = false;
        let isComment = false;
        
        // Check all elements to safely find blogger:type regardless of namespace parsing
        const allElements = entry.getElementsByTagName("*");
        for (let j = 0; j < allElements.length; j++) {
          const nodeName = allElements[j].nodeName.toLowerCase();
          if (nodeName === "blogger:type" || nodeName === "type") {
            if (allElements[j].textContent === "POST") isPost = true;
            if (allElements[j].textContent === "COMMENT") isComment = true;
          }
        }

        // Skip comments immediately
        if (isComment) continue;

        // Fallback to category check if blogger:type wasn't explicitly POST
        if (!isPost) {
          const categories = entry.getElementsByTagName("category");
          for (let j = 0; j < categories.length; j++) {
            if (categories[j].getAttribute("term")?.includes("kind#post")) {
              isPost = true;
              break;
            }
          }
        }
        
        if (!isPost) continue;

        const titleNode = entry.getElementsByTagName("title")[0];
        const title = titleNode ? titleNode.textContent || 'بدون عنوان' : 'بدون عنوان';
        
        const contentNode = entry.getElementsByTagName("content")[0];
        const htmlContent = contentNode ? contentNode.textContent || '' : '';
        
        if (!htmlContent) continue;

        const markdownContent = turndownService.turndown(htmlContent);
        const imgMatch = htmlContent.match(/<img[^>]+src="([^">]+)"/);
        const imageUrl = imgMatch ? imgMatch[1] : null;
        
        const publishedNode = entry.getElementsByTagName("published")[0];
        const date = publishedNode ? publishedNode.textContent || new Date().toISOString() : new Date().toISOString();

        currentId++;
        const safeTitle = title.replace(/[^a-zA-Z0-9\u0600-\u06FF]/g, '-').substring(0, 50);
        const filename = `${currentId}-${safeTitle}.md`;
        
        const fileContent = `---
id: ${currentId}
title: "${title.replace(/"/g, '\\"')}"
image_url: "${imageUrl || ''}"
created_at: "${date}"
---

${markdownContent}`;
        
        articlesToSave.push({
          filename,
          content: fileContent,
          metadata: { id: currentId, title, image_url: imageUrl || null, created_at: date, filename }
        });
      }

      if (articlesToSave.length === 0) throw new Error('لا توجد مقالات صالحة.');

      showMessage(`تم استخراج ${articlesToSave.length} مقالة. جاري الحفظ...`, 'info');
      await saveArticlesToServer(articlesToSave);
      showMessage('تم استيراد جميع المقالات بنجاح! يمكنك العودة للصفحة الرئيسية لرؤيتها.', 'success');

    } catch (error: any) {
      showMessage(error.message, 'error');
    } finally {
      setIsProcessing(false);
      if (xmlInputRef.current) xmlInputRef.current.value = '';
    }
  };

  const processWordDoc = async (file: File) => {
    setIsProcessing(true);
    showMessage('جاري تحويل ملف الوورد...', 'info');

    try {
      const arrayBuffer = await file.arrayBuffer();
      const result = await mammoth.convertToHtml({ arrayBuffer });
      const markdownContent = turndownService.turndown(result.value);
      
      const title = file.name.replace(/\.[^/.]+$/, "");
      const currentId = Date.now();
      const safeTitle = title.replace(/[^a-zA-Z0-9\u0600-\u06FF]/g, '-').substring(0, 50);
      const filename = `${currentId}-${safeTitle}.md`;
      const date = new Date().toISOString();

      const fileContent = `---
id: ${currentId}
title: "${title.replace(/"/g, '\\"')}"
image_url: ""
created_at: "${date}"
---

${markdownContent}`;

      await saveArticlesToServer([{
        filename,
        content: fileContent,
        metadata: { id: currentId, title, image_url: null, created_at: date, filename }
      }]);

      showMessage('تم تحويل وحفظ المقالة بنجاح! يمكنك العودة للصفحة الرئيسية لرؤيتها.', 'success');
    } catch (error: any) {
      showMessage(`خطأ في تحويل الملف: ${error.message}`, 'error');
    } finally {
      setIsProcessing(false);
      if (docxInputRef.current) docxInputRef.current.value = '';
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 mt-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">إضافة المقالات بسهولة</h2>
        <p className="text-gray-600">ارفع ملفاتك هنا وسيتم تحويلها وحفظها في الموقع فوراً.</p>
      </div>

      {statusMessage && (
        <div className={`p-4 rounded-xl flex items-center justify-center gap-3 mb-8 ${
          statusType === 'error' ? 'bg-red-50 text-red-700' :
          statusType === 'success' ? 'bg-green-50 text-green-700' :
          'bg-blue-50 text-blue-700'
        }`}>
          {statusType === 'error' ? <AlertCircle className="w-5 h-5" /> : <CheckCircle2 className="w-5 h-5" />}
          <p className="font-medium">{statusMessage}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Word Document Upload */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center hover:shadow-md transition-shadow">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">رفع مقالة (Word)</h3>
          <p className="text-sm text-gray-500 mb-6">ارفع ملف .docx ليتم تحويله ونشره فوراً</p>
          
          <label className={`flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-xl cursor-pointer transition-colors ${isProcessing ? 'bg-gray-50 border-gray-300' : 'bg-blue-50 border-blue-300 hover:bg-blue-100'}`}>
            <span className="text-blue-600 font-medium">اختر ملف Word</span>
            <input 
              ref={docxInputRef}
              type="file" 
              className="hidden" 
              accept=".docx" 
              onChange={(e) => e.target.files?.[0] && processWordDoc(e.target.files[0])}
              disabled={isProcessing}
            />
          </label>
        </div>

        {/* Blogger XML Upload */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center hover:shadow-md transition-shadow">
          <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <FileCode2 className="w-8 h-8 text-orange-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">استيراد من بلوجر</h3>
          <p className="text-sm text-gray-500 mb-6">ارفع ملف XML لاستيراد جميع مقالاتك دفعة واحدة</p>
          
          <label className={`flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-xl cursor-pointer transition-colors ${isProcessing ? 'bg-gray-50 border-gray-300' : 'bg-orange-50 border-orange-300 hover:bg-orange-100'}`}>
            <span className="text-orange-600 font-medium">اختر ملف XML أو ATOM</span>
            <input 
              ref={xmlInputRef}
              type="file" 
              className="hidden" 
              accept=".xml,.atom" 
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (!file) return;
                const reader = new FileReader();
                reader.onload = (event) => processBloggerXml(event.target?.result as string);
                reader.readAsText(file);
              }}
              disabled={isProcessing}
            />
          </label>
        </div>
      </div>
    </div>
  );
}
