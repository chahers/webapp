import React from "react";
import photo from "../assets/pictures/design4.png";
import ContentTitle from "../components/ContentTitle";
import ProjectCard from "../components/ProjectCard";
import project1 from "../assets/pictures/project1-cover.png";

const project1desc = {
    problem: 'The existing Local Exhaust Ventilation (LEV) systems failed to achieve the required capture velocity and did not meet performance expectations set by the local authority. The systems also contributed to operational inefficiencies and elevated exposure risks.',
    work: ['Conducted a tull engineering design evaluation of the existing LEV systems', 
    'Performed detailed measurements and testing',
    'Identified root causes related to improper hood design, sizing, and specifications',
    "Collaborated with the client's technical team in Japan to justify a complete system upgrade",
    'Redesigned the systems based on ACGIH Industrial Ventilation Guidelines',
    'Submitted design documentation and compliance materials to Department of Occupational Safety and Health (DOSH) for review and approval', 'Prepared comprehensive documentation for Department of Environment (DOE) submission, along with a corrective design package for the client'
    ],
    outcomedesc: 'System performance was restored to full compliance with both DOE and DOSH requirements. The upgraded system demonstrated:',
    outcome: ['Significant improvement in worker protection', 'Increased capture efficiency and system stability', 'Enhanced operational performance', 'A reduction in scheduled waste generation — achieved zero scheduled waste']
}

export default function Projects() {
    return (
        <div>
            <head>
                <title>Projects | airflo systems</title>
            </head>
            <div className="relative min-h-screen">
                <img src={photo} className="fixed -z-10 inset-0 object-cover w-full h-full opacity-10"/>
                <ContentTitle title='Our Projects'/>
                <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
                    <div className="mb-10 text-center">
                        <p className="mx-auto max-w-xl text-base text-gray-500 sm:text-lg">
                        Browse our portfolio of successfully completed projects.
                        </p>
                    </div>
                    <ProjectCard 
                    image={project1}
                    title="LEV System Performance Assessment & Remedial Upgrade"
                    description="Evaluating, redesigning, and upgrading an existing local exhaust ventilation system to achieve full regulatory compliance, improve worker protection, and enhance overall operational performance."
                    details={project1desc}/>
                </main>
            </div>
            <div>
                
            </div>
        </div> 
    )
}