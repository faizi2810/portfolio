'use client'

import { useInView } from "react-intersection-observer";
import { SectionName } from "./types";
import { useEffect } from "react";
import { useActiveSectionContext } from "@/context/active-section-context";


export function useSectionInView(SectionName: SectionName, threshold = 0.75){
    const { ref, inView } = useInView({
        threshold,
    });

    const { timeOfLastClick,setActiveSection } = useActiveSectionContext();

    useEffect(()=>{
     if(inView && Date.now() - timeOfLastClick > 1000){
        setActiveSection(SectionName);
     }   
    },[SectionName, inView, setActiveSection, timeOfLastClick])
    
    return{ref};
}