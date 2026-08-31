'use client';

import React, { useEffect, useLayoutEffect, useState } from 'react';
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

const fullMessage = messageChunks.map(chunk => chunk.text).join('');

const TYPING_SPEED_MS = 60;

// useLayoutEffect warns when it runs on the server, so fall back to useEffect there.
const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const ChangingText: React.FC = () => {
  // Starts fully typed so the server-rendered HTML carries the whole headline,
  // then rewinds before the browser paints so nothing flashes.
  const [displayedLength, setDisplayedLength] = useState(fullMessage.length);

  useIsomorphicLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

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
    }, TYPING_SPEED_MS);

    return () => clearInterval(intervalId);
  }, []);

  let remaining = displayedLength;
  const renderedChunks = messageChunks.map((chunk, index) => {
    if (remaining <= 0) return null;
    const { text, className } = chunk;
    if (remaining >= text.length) {
      remaining -= text.length;
      return (
        <span key={index} className={className}>
          {text}
        </span>
      );
    } else {
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
      <span className="sr-only">{fullMessage}</span>
      <span aria-hidden="true">{renderedChunks}</span>
    </motion.div>
  );
};

export default ChangingText;
