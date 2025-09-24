interface ExpertTipProps {
  tip: string;
  context?: string;
  className?: string;
}

export function ExpertTip({ tip, context, className = "" }: ExpertTipProps) {
  return (
    <div className={`bg-blue-50 border-l-4 border-primary p-6 rounded-r-2xl ${className}`}>
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm font-semibold text-primary">
              Settleline Expert Tip
            </span>
          </div>
          <p className="text-foreground leading-relaxed">
            {tip}
          </p>
          {context && (
            <p className="text-sm text-muted-foreground mt-2 italic">
              — {context}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
