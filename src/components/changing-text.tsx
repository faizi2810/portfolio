'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Chunk {
  text: string;
  className?: string;
}

const messageChunks: Chunk[] = [
  { text: "Hello, I'm" },
  { text:' Faizan', className: 'font-bold'},
  { text: " I'm a " },
  { text: "principal software engineer", className: 'font-bold' },
  { text: " at " },
  { text: "Techlogix", className: 'font-bold' },
  { text: " in Pakistan. I'm currently working with Next.Js, Nest.Js, Angular and .Net" },
];

const ChangingText: React.FC = () => {
  // Combine all chunks into one full message string for counting
  const fullMessage = messageChunks.map(chunk => chunk.text).join('');
  // State: number of characters to display
  const [displayedLength, setDisplayedLength] = useState(0);

  useEffect(() => {
    setDisplayedLength(0);
    const intervalId = setInterval(() => {
      setDisplayedLength(prev => {
        if (prev < fullMessage.length) {
          return prev + 1;
        } else {
          clearInterval(intervalId);
          return prev;
        }
      });
    }, 60); // Adjust the speed (ms) for the typewriter effect

    return () => clearInterval(intervalId);
  }, [fullMessage]);

  // Rebuild the message while preserving each chunk's styling.
  let remaining = displayedLength;
  const renderedChunks = messageChunks.map((chunk, index) => {
    if (remaining <= 0) return null;
    const { text, className } = chunk;
    if (remaining >= text.length) {
      // Entire chunk is visible
      remaining -= text.length;
      return (
        <span key={index} className={className}>
          {text}
        </span>
      );
    } else {
      // Only part of the chunk is visible
      const partialText = text.slice(0, remaining);
      remaining = 0;
      return (
        <span key={index} className={className}>
          {partialText}
        </span>
      );
    }
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      {renderedChunks}
    </motion.div>
  );
};

export default ChangingText;
