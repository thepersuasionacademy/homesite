'use client'

import React from 'react';

interface KenrickClevelandAuthorCardProps {
  className?: string;
}

export function KenrickClevelandAuthorCard({ 
  className = "" 
}: KenrickClevelandAuthorCardProps) {
  return (
    <div className={`max-w-3xl mx-auto my-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg ${className}`}>
      <div className="text-center mb-6">
        <div className="inline-block px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white text-sm font-semibold rounded-full">
          ABOUT THE AUTHOR
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
          KENRICK CLEVELAND
        </h2>
        <a 
          href="https://www.amazon.com/stores/author/B0DLTPBS4T?ccs_id=fc4f4b1b-55fe-4178-8319-9fec7545fdd4" 
          target="_blank" 
          rel="noopener noreferrer"
          className="feature-pill amazon-pill"
        >
          AUTHOR OF 55+ AMAZON BOOKS
        </a>
      </div>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        <strong>Kenrick Cleveland</strong> is a world-renowned persuasion strategist with over 45 years of experience. 
        Known as "The World's Greatest Persuader," he has pioneered breakthrough techniques in psychology and human influence 
        that have transformed millions of lives worldwide. His work has generated over $1 billion in documented results for clients, 
        and his innovative teaching methods have made complex psychological principles accessible to professionals across every industry. 
        Kenrick has authored 55+ books on persuasion, making him one of the most published experts in the field of influence and human psychology.
      </p>
    </div>
  );
}