import React from 'react'

const DoodleBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
      {/* Hearts */}
      <svg className="absolute top-10 left-10 w-8 h-8 text-slate-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
      
      {/* Stars */}
      <svg className="absolute top-32 right-20 w-6 h-6 text-slate-500" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
      
      <svg className="absolute bottom-20 left-32 w-5 h-5 text-slate-500" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>

      {/* Squiggly Lines */}
      <svg className="absolute bottom-32 right-16 w-24 h-16 text-slate-400" viewBox="0 0 100 50">
        <path d="M 0 25 Q 12 15 25 25 T 50 25 T 75 25 T 100 25" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>

      {/* Circles */}
      <svg className="absolute top-1/4 right-40 w-12 h-12 text-slate-400" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
      </svg>

      <svg className="absolute bottom-1/4 left-20 w-10 h-10 text-slate-400" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>

      {/* Small dots cluster */}
      <svg className="absolute top-1/3 left-1/4 w-16 h-16 text-slate-400">
        <circle cx="8" cy="8" r="2" fill="currentColor" />
        <circle cx="24" cy="12" r="2" fill="currentColor" />
        <circle cx="40" cy="8" r="2" fill="currentColor" />
        <circle cx="16" cy="28" r="2" fill="currentColor" />
        <circle cx="32" cy="32" r="2" fill="currentColor" />
      </svg>

      {/* Smiley */}
      <svg className="absolute top-1/2 right-1/4 w-10 h-10 text-slate-500" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="14" cy="16" r="2" fill="currentColor" />
        <circle cx="26" cy="16" r="2" fill="currentColor" />
        <path d="M 12 24 Q 20 28 28 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>

      {/* More hearts scattered */}
      <svg className="absolute bottom-40 right-1/3 w-6 h-6 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>

      {/* Sparkles */}
      <svg className="absolute top-20 right-1/3 w-8 h-8 text-slate-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0l1.5 8.5L22 10l-8.5 1.5L12 20l-1.5-8.5L2 10l8.5-1.5L12 0z" />
      </svg>

      <svg className="absolute bottom-1/3 right-20 w-6 h-6 text-slate-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0l1.5 8.5L22 10l-8.5 1.5L12 20l-1.5-8.5L2 10l8.5-1.5L12 0z" />
      </svg>
      
      {/* Music Notes */}
      <svg className="absolute top-40 left-1/3 w-8 h-8 text-slate-500" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
      </svg>
    </div>
  )
}

export default DoodleBackground
