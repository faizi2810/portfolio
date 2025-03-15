import { Button } from "./ui/button";
import { Icon } from "@iconify/react";


export function ResumeDownload(){

    return(
        <a href="/Resume.pdf" download>
            <Button 
              variant='outline' 
              size='icon' 
              className="z-[999] group fixed top-20 sm:top-20 md:top-6 lg:top-6 
                right-4 rounded-full shadow-lg h-14 w-14 inline-flex items-center overflow-hidden transition-all 
                duration-300 ease-in-out dark:bg-black dark:text-white hover:w-40 px-4 py-2"
            >
                <span className="block group-hover:hidden">
                    <Icon icon="line-md:download-loop" className="!w-8 !h-8"/>
                </span>
                <span className="hidden group-hover:block">
                    Download CV
                </span>
            </Button>
        </a>
    );

}