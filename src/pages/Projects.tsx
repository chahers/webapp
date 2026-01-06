import React from "react";
import photo from "../assets/pictures/design4.png";
import ContentTitle from "../components/ContentTitle";

export default function Projects() {
    return (
        <div>
            <head>
                <title>Projects | airflo systems</title>
            </head>
            <div className="relative min-h-screen">
                <img src={photo} className="fixed -z-10 inset-0 object-cover w-full h-auto opacity-10"/>
                <ContentTitle title='Projects'/>
            </div>
            <div>
                
            </div>
        </div> 
    )
}