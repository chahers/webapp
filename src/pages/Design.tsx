import React from "react";
import photo from "../assets/pictures/design4.png";
import ContentTitle from "../components/ContentTitle";

export default function Design() {
    return (
        <div className="relative min-h-screen">
            <img src={photo} className="fixed -z-10 inset-0 object-cover w-full h-auto opacity-10"/>
            <ContentTitle title=' Engineering Design & Consultancy'/>
        </div>
    )
}