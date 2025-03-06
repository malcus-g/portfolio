'use client';

import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SectionHeading from './section-heading'
import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';

export default function Experience() {
  const { ref } = useSectionInView("Experience", .45);


  return (
    <section 
        id="experience"
        ref={ref}
        className="mb-28 sm:mb-0 scroll-mt-28"
    >
        <SectionHeading>My Experience</SectionHeading>
        <VerticalTimeline lineColor="">
            {
                experiencesData.map((item, index) => (
                    <React.Fragment key={index}>
                        <VerticalTimelineElement
                            contentStyle={{
                                // background: theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, .05)",
                                boxShadow: "none",
                                border: "1px solid rgba(0, 0, 0, .05)",
                                textAlign: "left",
                                padding: "1.3rem 2rem"
                            }}
                            contentArrowStyle={{
                                borderRight: ".4rem solid #9ca3af"
                            }}
                            date={item.date}
                            icon={item.icon}
                            iconStyle={{
                                background: "white",
                                fontSize: "1.5rem",
                            }}
                        >
                            <h3 className="font-semibold capitalize">{item.title}</h3>
                            <p className="font-normal !mt-0">{item.location}</p>
                            <p className="!mt-1 !font-normal text-slate-700">{item.description}</p>
                        </VerticalTimelineElement>
                    </React.Fragment>
    
                ))
            }
        </VerticalTimeline>
    </section>
  )
}
