import { useState } from "react";
import photo from "../assets/pictures/design4.png";
import ContentTitle from "../components/ContentTitle";
import photo2 from "../assets/pictures/troubleshoot1.jpeg";
import { Link, Route } from "react-router-dom";
import design from "../assets/pictures/servicedesign1.png";
import testing from "../assets/pictures/testing.png";
import troubleshoot from "../assets/pictures/troubleshooting.png";
import { faGear, faClipboardCheck, faWrench, faCircleCheck, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AnimateHeight from 'react-animate-height';
import ServiceFooter from "../components/ServiceFooter";

export default function Services() {

    const [active1, setActive1] = useState<string>('');
    const togglePara1 = (value: string) => {
        setActive1((oldValue) => {
            return oldValue === value ? '' : value;
        });
    };

    const details = [
        {
            id: 1,
            img: design,
            icon: faGear,
            title: 'Engineering design & consultancy',
            listName: 'Design and Consultancy Capabilities',
            desc: 'Comprehensive design and consultancy services for industrial and laboratory ventilation systems.',
            list: ['Local Exhaust Ventilation (LEV) system design', 'General Exhaust Ventilation  (GEV) system design', 'Dedicated Outdoor Air System (DOAS) design to support proper supply-exhaust balance and pressurization', 'Hood design with face and capture velocity calculations', 'Duct sizing and transport velocity analysis', 'Static pressure analysis and airflow balancing', 'fan performance curve evaluation and selection', 'Air cleaning device design and selection, including activated carbon filters, wet scrubbers, and dust collectors, based on operational needs', 'System optimization and upgrading to improve performance and compliance', 'AutoCAD documentation for design packages and technical submissions', 'Commissioning support to verify system performance during installation and start-up', 'Documentation for Department of Environment (DOE) Written Notification and Written Declaration submissions'],
            outcome: 'Technically sound designs that are measurable, efficient, and aligned with functional and regulatory requirements',
        },
        {
            id: 2,
            img: testing,
            icon: faClipboardCheck,
            listName: 'Performance Testing Capabilities',
            title: 'Certified Performance Testing (Hygiene Technician 2)',
            desc: 'Performance testing is conducted by personel recognised under the Hygien Technician 2 (HT2) competency by the Department of Occupational Safety and Health (DOSH).',
            list: ['Baseline and periodic LEV and GEV system testing', 'Hood face and capture velocity verification', 'Duct transport velocity and static pressure measurement', 'Air cleaning device performance verification', 'Fan speed and performance evaluation', 'Air movement visualisation using smoke test kits', 'System performance evaluation against established ventilation criteria', 'Certified performance test reports', 'Recommendations for corrective or preventive actions'],
            outcome: 'Accurate, certified assessments to verify performance, reliability, and compliance of ventilation systems',
        },
        {
            id: 3,
            img: troubleshoot,
            icon: faWrench,
            title: 'Troubleshooting & System Diagnostics',
            listName: 'Common Issues Encountered',
            troubleshootTitle: 'Troubleshoot Deliverables',
            desc: 'Diagnostic evaluations to identify and resolve ventilation system performance issues.',
            list: ['Inadequate hood face or capture velocity', 'High static pressure losses', 'Airflow imbalance across branches', 'Fan underperformance', 'Noise and vibration issues', 'Inefficient or clogged air cleaning devices', 'Improperly sized or poorly routed ducting', 'Containment failures and odour compalints', 'Over-pressurised rooms and difficulty opening doors', 'Humidity and condensation issues'],
            troubleshooting: ['On-site diagnostic evaluation', 'Engineering-based root-cause cycle', 'Clear technical recommendations for improvement', 'System optimisation planning', 'Follow-up performance verification testing'],
            outcome: 'Restored system performance, improved stability, and enhanced safety and compliance',
        }
    ];
    return (
        <>
        <head>
            <title>Services | airflo systems</title>
        </head>
        <div className="relative min-h-screen">
            <img src={photo} className="fixed -z-10 inset-0 object-cover w-full h-auto opacity-10"/>
            <ContentTitle title='Services'/>
            <div className="absolute justify-self-center w-5/6 max-w-7xl h-72 bg-white opacity-60 mt-24"/>
            <div className="relative flex flex-col justify-self-center w-5/6 max-w-7xl mt-24 text-secondary font-normal text-xl p-12">
                <p>Airflo Systems Enterprise delivers engineering services that integrate regulatory requirements with established ventilation design principles based on ACGIH Industrial Ventilation Guidelines and supported by relevant ASHRAE standards.</p>
                <p className="pt-12">Our services cover the full lifecycle of ventilation systems, from design and specification to testing, troubleshooting, and performance verification.</p>
            </div>
            <div className="m-12 flex flex-col gap-12 justify-self-center mt-20 bg-gray-50 max-w-[1000px] ">
                <h1 className="mx-24 mt-20 text-3xl text-secondary font-medium text-center">We deliver comprehensive solutions to ensure your environment is safe, comfortable, and efficient.</h1>

                {details.map((item) => {
                    return (
                        <div className="mb-24 flex-col self-center bg-white rounded-2xl w-3/4">
                            <img src={item.img} className="w-full rounded-t-2xl"/>
                            <div className="flex flex-row mt-4 w-full">
                                <FontAwesomeIcon icon={item.icon} className="ml-2 mx-2 size-8 text-blue-500"/>
                                <h1 className="flex w-3/4 text-2xl text-secondary font-medium">{item.title}</h1>
                            </div>
                            <p className="px-4 py-8 text-xl text-secondary opacity-60 font-medium">{item.desc}</p>
                            <div>
                            <button
                                type="button"
                                className="text-gray-500 text-2xl font-medium pl-12 text-left w-full h-[50px] pt-2 border-b-2 rounded-2xl"
                                onClick={() => togglePara1(item.id.toString())}
                            >
                                {item.listName}
                                <FontAwesomeIcon icon={faAngleDown} className="pl-2"/>
                                <div className="rotate-180">
                                <svg>...</svg>
                                </div>
                            </button>

                            <AnimateHeight duration={300} height={active1 === item.id.toString() ? 'auto' : 0}>
                                <div className="space-y-2 p-4 text-white-dark text-xl">
                                {item.list.map((listItem, index) => (
                                    <div key={index} className="flex flex-row">
                                    <FontAwesomeIcon icon={faCircleCheck} className="size-8 text-green-700" />
                                    <p className="pl-4 text-xl text-secondary font-semibold opacity-60">
                                        {listItem}
                                    </p>
                                    </div>
                                ))}
                                </div>
                            </AnimateHeight>
                            </div>
                            <div>
                            <button
                                type="button"
                                className="text-gray-500 text-2xl font-medium pl-12 text-left w-full h-[50px] pt-2 border-b-2 rounded-2xl"
                                onClick={() => togglePara1(item.id.toString()+'outcome')}
                            >
                                Outcome
                                <FontAwesomeIcon icon={faAngleDown} className="pl-2"/>
                                <div className="rotate-180">
                                <svg>...</svg>
                                </div>
                            </button>

                            <AnimateHeight duration={300} height={active1 === item.id.toString()+'outcome' ? 'auto' : 0}>
                                <div className="space-y-2 p-4 text-white-dark text-secondary font-semibold opacity-60 text-xl">
                                {item.outcome}
                                </div>
                            </AnimateHeight>
                            </div>
                        </div>
                    );
                })}
            </div>
            <ServiceFooter/>
        </div>
        </>
    )
}