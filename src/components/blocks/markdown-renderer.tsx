interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export function MarkdownRenderer({ content, className = "" }: MarkdownRendererProps) {
  const formatContent = (text: string) => {
    return text
      // Headers
      .replace(/^# (.*$)/gim, '<h1 id="$1" class="text-4xl font-bold text-foreground mb-6 mt-8">$1</h1>')
      .replace(/^## (.*$)/gim, '<h2 id="$1" class="text-3xl font-bold text-foreground mb-4 mt-8">$1</h2>')
      .replace(/^### (.*$)/gim, '<h3 id="$1" class="text-2xl font-semibold text-foreground mb-3 mt-6">$1</h3>')
      .replace(/^#### (.*$)/gim, '<h4 id="$1" class="text-xl font-semibold text-foreground mb-2 mt-4">$1</h4>')
      
      // Bold and italic
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
      
      // Lists
      .replace(/^\- (.*$)/gim, '<li class="ml-4 mb-2">$1</li>')
      .replace(/(<li[^>]*>.*?<\/li>)/g, '<ul class="list-disc list-inside mb-4 space-y-2">$1</ul>')
      
      // Expert tips
      .replace(/^> \*\*(.*?)\*\*: (.*$)/gim, '<div class="bg-blue-50 border-l-4 border-primary p-4 rounded-r-lg my-6"><div class="flex items-start gap-3"><div class="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1"><svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" /></svg></div><div><div class="text-sm font-semibold text-primary mb-1">Settleline Expert Tip</div><p class="text-foreground">$2</p></div></div></div>')
      
      // Paragraphs
      .replace(/\n\n/g, '</p><p class="mb-4 leading-relaxed">')
      .replace(/^(?!<[h|d|u|l])/gm, '<p class="mb-4 leading-relaxed">')
      .replace(/(?<!>)$/gm, '</p>')
      
      // Clean up empty paragraphs
      .replace(/<p class="mb-4 leading-relaxed"><\/p>/g, '')
      .replace(/<p class="mb-4 leading-relaxed">\s*<\/p>/g, '');
  };

  return (
    <div 
      className={`prose prose-lg max-w-none ${className}`}
      dangerouslySetInnerHTML={{ __html: formatContent(content) }}
    />
  );
}
