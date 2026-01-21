import React from "react";
import photo from "../assets/pictures/design4.png";
import photo2 from "../assets/pictures/test3.png";
import ContentTitle from "../components/ContentTitle";

export default function About() {
  const commitment = [
    { text: "Verified engineering calculations" },
    { text: "Applicable regulatory requirements" },
    { text: "Globally recognised ventilation guidelines" },
    { text: "Transparent reporting and clear recommendations" },
    { text: "Long-term system performance and reliability" },
  ];

  return (
    <>
      <head>
        <title>About | Airflo Systems</title>
      </head>

      <div className="relative min-h-screen overflow-x-hidden">
        <img
          src={photo}
          className="fixed inset-0 -z-10 h-screen w-full object-cover opacity-10"
        />

        <ContentTitle title="About Us" />

        <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
            <div className="bg-white p-6 sm:p-10">
              <h2 className="text-2xl font-bold text-secondary sm:text-3xl">
                Company Overview
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-secondary/70 sm:text-lg">
                Airflo Systems Enterprise is a specialist engineering consultancy
                focused on the design, evaluation, and optimisation of industrial
                and laboratory ventilation systems. Our work is grounded in
                recognised engineering principles and aligned with national and
                international standards, ensuring clients achieve both technical
                excellence and regulatory compliance.
              </p>
            </div>

            <img src={photo2} className="h-64 w-full h-full object-cover" alt="Ventilation systems"/>

            <div className="bg-primary p-6 sm:p-10">
              <div className="flex items-center gap-4">
                <h3 className="text-base font-medium text-secondary sm:text-lg">
                  Our Mission
                </h3>
                <div className="h-[2px] w-20 bg-secondary opacity-60 sm:w-24" />
              </div>
              <p className="mt-6 text-lg font-semibold text-secondary/70 sm:text-2xl">
                To provide dependable engineering solutions that keep workplaces
                safe, compliant, and efficiently ventilated.
              </p>
            </div>

            <div className="bg-secondary p-6 sm:p-10">
              <div className="flex items-center gap-4">
                <h3 className="text-base font-medium text-white sm:text-lg">
                  Our Approach
                </h3>
                <div className="h-[2px] w-20 bg-white opacity-60 sm:w-24" />
              </div>
              <p className="mt-6 text-lg font-semibold text-white/70 sm:text-2xl">
                Delivering reliable ventilation solutions through sound
                engineering, data-driven design, clear communication, and systems
                tailored to meet both regulatory requirements and long-term
                operational needs.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-4xl px-4 sm:px-6">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold text-secondary sm:text-3xl">
              Our Commitment
            </h2>
            <div className="h-[2px] w-24 bg-secondary opacity-60 sm:w-40" />
          </div>

          <p className="mt-6 text-sm font-medium text-secondary sm:text-lg">
            We believe that safe air is engineered, not assumed. Every design,
            evaluation, and test we deliver is grounded in:
          </p>

          <ul className="mt-6 space-y-3 pb-24">
            {commitment.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-1 text-secondary">•</span>
                <span className="text-sm text-secondary sm:text-lg">
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}