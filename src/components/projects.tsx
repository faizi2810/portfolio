"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { professionalProjectsData, personalProjectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.40);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28" >
      {professionalProjectsData.length > 0 && (
        <>
          <SectionHeading>Professional Projects</SectionHeading>
          <Carousel className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-[57rem]">
            <CarouselContent>
              {professionalProjectsData.map((project, index) => (
                <CarouselItem key={index}>
                  <div>
                  <React.Fragment key={index}>
                      <Project {...project} />
                  </React.Fragment>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </>
      )}
      

    {personalProjectsData.length > 0 && (
      <>
        <SectionHeading className="mt-20">Personal Projects</SectionHeading>
        <Carousel className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-[57rem]">
          <CarouselContent>
            {personalProjectsData.map((project, index) => (
              <CarouselItem key={index}>
                <div>
                <React.Fragment key={index}>
                    <Project {...project} />
                </React.Fragment>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </>
    )}
    </section>
  );
}
