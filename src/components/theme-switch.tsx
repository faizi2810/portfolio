'use client';

import { useTheme } from "@/context/theme-context";
import { Button } from "./ui/button";
import { PiSunLight } from "react-icons/pi";
import { FaRegMoon } from "react-icons/fa6";

export default function ThemeSwitch() {
    const { theme, toggleTheme } = useTheme()

    return (
        <>
            <Button
                variant='outline'
                size='icon'
                className="fixed bottom-4 right-4 rounded-full shadow-lg h-14 w-14 dark:bg-black dark:text-white"
                onClick={toggleTheme}>
                {theme === 'light' ? <PiSunLight size={100} /> : <FaRegMoon size={100} />}
            </Button>
        </>
    );
}