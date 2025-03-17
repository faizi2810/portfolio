'use client';

import { useTheme } from "@/context/theme-context";
import { Button } from "./ui/button";
import { PiSunLight } from "react-icons/pi";
import { FaRegMoon } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";

export default function ThemeSwitch() {
    const { theme, toggleTheme } = useTheme()

    return (
        <>
            <Button
                variant='outline'
                size='icon'
                className="fixed bottom-4 right-4 rounded-full shadow-lg h-14 w-14 dark:bg-black dark:text-white hover:scale-[1.15]"
                onClick={toggleTheme}>
                <AnimatePresence mode="wait">
                    {theme === "light" ? (
                        <motion.div
                            key="sun"
                            initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            exit={{ opacity: 0, scale: 0.8, rotate: 90 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            <PiSunLight size={30} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="moon"
                            initial={{ opacity: 0, scale: 0.8, rotate: 90 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            exit={{ opacity: 0, scale: 0.8, rotate: -90 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            <FaRegMoon size={30} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </Button>
        </>
    );
}