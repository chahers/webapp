import { useState } from "react";
import photo from "../assets/pictures/design4.png";
import ContentTitle from "../components/ContentTitle";
import design from "../assets/pictures/servicedesign1.png";
import testing from "../assets/pictures/testing.png";
import troubleshoot from "../assets/pictures/troubleshooting.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faClipboardCheck,  faWrench,  faCircleCheck,  faAngleDown } from "@fortawesome/free-solid-svg-icons";
import AnimateHeight from "react-animate-height";
import ServiceFooter from "../components/ServiceFooter";

export default function Services() {
  const [active, setActive] = useState<string>("");

  const toggle = (value: string) => {
    setActive((prev) => (prev === value ? "" : value));
  };

  const details = [
    {
      id: 1,
      img: design,
      icon: faGear,
      title: "Engineering design & consultancy",
      listName: "Design and Consultancy Capabilities",
      desc:
        "Comprehensive design and consultancy services for industrial and laboratory ventilation systems.",
      list: [
        "Local Exhaust Ventilation (LEV) system design",
        "General Exhaust Ventilation (GEV) system design",
        "Dedicated Outdoor Air System (DOAS) design",
        "Hood design with velocity calculations",
        "Duct sizing and airflow analysis",
        "Fan performance evaluation",
        "AutoCAD documentation",
        "Commissioning and DOE submissions",
      ],
      outcome:
        "Technically sound designs that are efficient, compliant, and measurable.",
    },
    {
      id: 2,
      img: testing,
      icon: faClipboardCheck,
      title: "Certified Performance Testing (HT2)",
      listName: "Performance Testing Capabilities",
      desc:
        "Performance testing conducted by personnel certified under Hygiene Technician 2 (HT2).",
      list: [
        "LEV & GEV system testing",
        "Velocity and pressure measurements",
        "Smoke visualisation testing",
        "Certified reports",
        "Corrective action recommendations",
      ],
      outcome:
        "Accurate, certified verification of system reliability and compliance.",
    },
    {
      id: 3,
      img: troubleshoot,
      icon: faWrench,
      title: "Troubleshooting & Diagnostics",
      listName: "Common Issues Encountered",
      desc:
        "Engineering-based diagnostics to identify and resolve ventilation issues.",
      list: [
        "Low capture velocity",
        "High static pressure loss",
        "Airflow imbalance",
        "Noise & vibration",
        "Containment failures",
        "Humidity & condensation issues",
      ],
      outcome:
        "Restored performance, improved stability, and safer environments.",
    },
  ];

  return (
    <>
      <head>
        <title>Services | Airflo Systems</title>
      </head>

      <div className="relative min-h-screen overflow-x-hidden">
        <img
          src={photo}
          className="fixed inset-0 -z-10 h-screen w-full object-cover opacity-10"
        />

        <ContentTitle title="Services" />

        <section className="mx-auto max-w-5xl px-4 pt-12 text-secondary sm:px-6">
          <div className="rounded-lg bg-white/70 p-6 sm:p-10">
            <p className="text-base leading-relaxed sm:text-lg">
              Airflo Systems Enterprise delivers engineering services that
              integrate regulatory requirements with established ventilation
              design principles based on ACGIH and ASHRAE standards.
            </p>
            <p className="mt-6 text-base sm:text-lg">
              Our services cover the full lifecycle of ventilation systems — from
              design and specification to testing, troubleshooting, and
              verification.
            </p>
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-5xl px-4 sm:px-6">
          <h2 className="mb-12 text-center text-xl font-medium text-secondary sm:text-3xl">
            We deliver comprehensive solutions to ensure your environment is
            safe, comfortable, and efficient.
          </h2>

          <div className="flex flex-col gap-16">
            {details.map((item) => (
              <div
                key={item.id}
                className="overflow-hidden rounded-2xl bg-white shadow-sm"
              >
                <img
                  src={item.img}
                  className="h-48 w-full object-cover sm:h-64"
                />

                <div className="p-5 sm:p-8">
                  {/* Title */}
                  <div className="flex items-center gap-3">
                    <FontAwesomeIcon
                      icon={item.icon}
                      className="text-xl text-blue-500 sm:text-2xl"
                    />
                    <h3 className="text-lg font-medium sm:text-2xl">
                      {item.title}
                    </h3>
                  </div>

                  <p className="mt-4 text-sm text-secondary/70 sm:text-base">
                    {item.desc}
                  </p>

                  <button
                    onClick={() => toggle(item.id.toString())}
                    className="mt-6 flex w-full items-center justify-between border-b py-3 text-left text-sm font-medium text-gray-600 sm:text-base"
                  >
                    {item.listName}
                    <FontAwesomeIcon icon={faAngleDown} />
                  </button>

                  <AnimateHeight
                    duration={300}
                    height={active === item.id.toString() ? "auto" : 0}
                  >
                    <div className="mt-4 space-y-3">
                      {item.list.map((point, index) => (
                        <div key={index} className="flex gap-3">
                          <FontAwesomeIcon
                            icon={faCircleCheck}
                            className="mt-1 text-green-600"
                          />
                          <p className="text-sm text-secondary/70 sm:text-base">
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>
                  </AnimateHeight>

                  <button
                    onClick={() => toggle(item.id + "outcome")}
                    className="mt-6 flex w-full items-center justify-between border-b py-3 text-left text-sm font-medium text-gray-600 sm:text-base"
                  >
                    Outcome
                    <FontAwesomeIcon icon={faAngleDown} />
                  </button>

                  <AnimateHeight
                    duration={300}
                    height={
                      active === item.id + "outcome" ? "auto" : 0
                    }
                  >
                    <p className="mt-4 text-sm text-secondary/70 sm:text-base">
                      {item.outcome}
                    </p>
                  </AnimateHeight>
                </div>
              </div>
            ))}
          </div>
        </section>

        <ServiceFooter />
      </div>
    </>
  );
}
