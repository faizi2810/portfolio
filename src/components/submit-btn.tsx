'use client';

import { useFormStatus } from "react-dom";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

export function SubmitButton({ text = "Submit" }: { text?: string }) {
  const { pending } = useFormStatus();

  return (
    <motion.button
      type="submit"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300 }}
      disabled={pending}
      className="group relative flex h-12 w-40 items-center justify-center overflow-hidden rounded-full text-white shadow-md backdrop-blur-md transition-all duration-300 ease-in-out
                 bg-black hover:bg-gray-800
                 dark:bg-white/10 dark:hover:bg-white/20
                 disabled:cursor-not-allowed disabled:bg-gray-600 dark:disabled:bg-white/5"
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-2 border-t-transparent border-white" />
      ) : (
        <>
          <span className="text-base font-semibold">{text}</span>
          <FaPaperPlane className="ml-2 text-xs opacity-70 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </>
      )}
    </motion.button>
  );
}
