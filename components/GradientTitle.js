import React from 'react';

export default function GradientTitle({ children, className = "" }) {
  return (
    <div className={`gradient-title-wrapper ${className}`}>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 py-2">
        {children}
      </h1>
      
      <style jsx>{`
        .gradient-title-wrapper {
          padding: 0.15em 0.5em;
          margin-bottom: 0.75em;
        }
        h1 {
          line-height: 1.3;
          letter-spacing: -0.025em;
        }
      `}</style>
    </div>
  );
}
