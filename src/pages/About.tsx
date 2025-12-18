import React from "react";
import photo from "../assets/pictures/design4.png";
import photo2 from "../assets/pictures/test3.png";
import ContentTitle from "../components/ContentTitle";

export default function About() {
    const commitment = [
        {text: 'Verified engineering calculations'},
        {text: 'Applicable regulatory requirements'},
        {text: 'Globally recognised ventilation guidelines'},
        {text: 'Transparent reporting and clear recommendations'},
        {text: 'Long-term system performance and reliability'},
    ]
    return (
        <div className="relative min-h-screen">
            <img src={photo} className="fixed -z-10 inset-0 object-cover w-full h-auto opacity-10"/>
            <ContentTitle title='About Us'/>

            {/* boxes */}
            <div className="relative grid grid-cols-2 pt-24 p-12 max-w-screen-xl justify-self-center">
                <div className="bg-white">
                    <div className="flex text-4xl font-bold text-secondary pl-12 py-8 mt-16">
                    Company Overview
                    </div>
                    <div className="pl-12 px-4 text-xl font-normal text-secondary opacity-70 mr-24 mt-12">
                        Airflo Systems Enterprise is a specialist engineering consultancy focused on the design, evaluation, and optimisation of industrial and laboratory ventilation systems. Our work is grounded in recognised engineering principles and aligned with national and international standards, ensuring clients achieve both technical excellence and regulatory compliance.
                    </div>
                </div>
                <img src={photo2} className="min-h-[600px] object-cover"/>
                <div className="bg-primary">
                    <div className="flex flex-row items-center">
                        <div className="flex text-xl font-medium text-secondary pl-12 py-8">Our Mission</div>
                        <div className="flex ml-4 h-[3px] w-24 bg-secondary opacity-60"></div>
                    </div>
                    <div className="p-12 text-2xl font-bold text-secondary opacity-70 ">To provide reliable engineering solutions that enhance workplace safety, ensure regulatory compliance, and optimise ventilation performance through detailed design analysis and certified system testing.
                    </div>
                </div>
                <div className="bg-secondary">
                    <div className="flex flex-row items-center">
                        <div className="flex text-xl font-medium text-white pl-12 py-8">Our Approach
                        </div>
                        <div className="flex ml-4 h-[3px] w-24 bg-white opacity-60"></div>
                    </div>
                    <div className="p-12 text-2xl font-bold text-white opacity-70 ">To provide reliable engineering solutions that enhance workplace safety, ensure regulatory compliance, and optimise ventilation performance through detailed design analysis and certified system testing.
                    </div>
                </div>
            </div>

            {/* our commitment section */}
            <div className="flex flex-row items-center justify-self-center w-[1100px]">
                <div className="relative flex text-4xl font-bold text-secondary my-4 pl-12">
                    Our Commitment
                </div>
                <div className="flex ml-4 h-[3px] w-40 bg-secondary opacity-60"></div>
            </div>
            <div className="font-medium text-secondary text-xl justify-self-center w-[1000px] my-4">
                We believe that safe air is engineered, not assumed. Every design, evaluation, and test we deliver is grounded in:
            </div>
            <ul className="font-normal text-secondary text-xl list-none justify-self-center w-[1000px] my-4 mb-56">
                {commitment.map((item)=> {
                    return (
                        <li className="flex items-start gap-3">
                            <span className="text-secondary text-xl">•</span>
                            <span>{item.text}</span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}