'use client'
import { SectionName } from "@/lib/types";
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";


type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: Dispatch<SetStateAction<SectionName>>;
    timeOfLastClick: number;
    setTimeOfLastClick: Dispatch<SetStateAction<number>>;
}

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export function ActiveSectionContextProvider({ children }: { children: ReactNode }){
    const [activeSection, setActiveSection] = useState<SectionName>("Intro");
    const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0);
    return (
        <ActiveSectionContext.Provider value={{
            activeSection, 
            setActiveSection,
            timeOfLastClick,
            setTimeOfLastClick
            }}>
            {children}
        </ActiveSectionContext.Provider>
    );
}

export const useActiveSectionContext = () => {
    const context = useContext(ActiveSectionContext);
    if (!context) {
        throw new Error(
          "useActiveSectionContext must be used within a ActiveSectionContextProvider"
        );
      }
      return context;
}