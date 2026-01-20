import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import banner1 from "../assets/pictures/industryuniversitylab.png";
import banner2 from "../assets/pictures/troubleshoot2.png";
import photo from "../assets/pictures/test2edit.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFan, faBuildingCircleCheck, faFileContract, faVialCircleCheck, faBiohazard, faScaleUnbalanced, faPlugCircleBolt, faExplosion, faHouseCrack, faBugs, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import photo1 from "../assets/pictures/design1.png";
import { ReactComponent as Tower } from '../assets/tower.svg';
import { ReactComponent as School } from '../assets/school.svg';
import { ReactComponent as TestTubes } from '../assets/test-tubes.svg';
import { ReactComponent as Factory } from '../assets/factory.svg';
import { ReactComponent as AirCond } from '../assets/air-cond.svg';
import { ReactComponent as Warehouse } from '../assets/warehouse.svg';
import Logo from "../assets/Logo.svg";
import { useNavigate } from "react-router-dom";
import ServiceFooter from "../components/ServiceFooter";

export default function Home() {
    const bannerCarousel = [
        {image: banner1, title: 'cleaner air'}, 
        {image: banner2, title: 'engineered flow'}
    ];

    const whatWeDo = [
        {
            point: 'Ventilation Design Consultancy', 
            desc: 'Designs based on regulatory requirements, cost-efficient operation, and established engineering principles from ACGIH and ASHRAE.',
            icon: faFan,
        },
        {
            point: 'Certified Performance Testing', 
            desc: 'Testing by Hygiene Technician 2-certified personnel (DOSH) for Engineering Control Equipment such as Local Exhaust Ventilation (LEV) and General Exhaust Ventilation (GEV) systems.',
            icon: faVialCircleCheck,
        },
        {
            point: 'Troubleshooting & System Operation', 
            desc: 'Identifying airflow issues, pressure losses, hood inefficiencies, fan problems, noise, clogged air cleaning devices and overall system instability.',
            icon: faBuildingCircleCheck,
        },
        {
            point: 'Regulatory Documentation', 
            desc: 'Assistance with regulatory submissions to the Department of Environment (DOE).',
            icon: faFileContract,
        },
    ];

    const whyVentilationMatters = [
        {   
            desc: 'Chemical exposure risks',
            icon: faBiohazard,
        },
        {
            desc:'Requlatory non-compliance',
            icon: faScaleUnbalanced
        },
        {
            desc: 'Energy wastage and high operating cost',
            icon: faPlugCircleBolt,        
        },
        {
            desc: "Inefficient production or laboratory operations",
            icon: faHouseCrack,
        },
        {
            desc: "Equipment damage, condensation, or contamination.",
            icon: faBugs,
        },
        {
            desc: "Worker discomfort (noise and odour) and safety hazards",
            icon: faExplosion,
        },
    ];

    const industries = [
        { text: 'Scientific and research laboratories' , icon: TestTubes},
        { text: 'Higher education institutions', icon: School},
        { text: 'Semiconductor and electronics facilities', icon: Factory},
        { text: 'Industrial production assembly lines', icon: Warehouse},
        { text: 'Cleanrooms and controlled environments', icon: AirCond},
    ];

    const whyairflo = [
        {text: 'Engineering-driven methods'},
        {text: 'Compliance-ready designs and reports'},
        {text: 'Accurate, certified system testing'},
        {text: 'Clear, professional communication'},
        {text: 'Vendor-neutral and cost-efficient solutions'},
        {text: 'Strong project experience across multiple industries'},
    ];

    const navigate = useNavigate();

    return (
        <>
        <head>
            <title>Home | airflo systems</title>
        </head>

        {/* HERO / CAROUSEL */}
        <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500 }}
            className="w-full"
        >
            {bannerCarousel.map((item, i) => (
                <SwiperSlide key={i} className="relative">
                    <img
                        src={item.image}
                        alt="airflo banner"
                        className="
                            w-full
                            h-[260px]
                            sm:h-[360px]
                            lg:h-[480px]
                            xl:h-[520px]
                            object-cover
                            object-center
                            opacity-50
                        "
                    />

                    <div className="absolute inset-0 flex items-center justify-center">
                        <h1 className="text-2xl sm:text-5xl font-bold text-secondary">
                            {item.title}
                        </h1>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>

        {/* WHAT WE DO */}
        <section className="px-4 py-16 max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-primary text-center">
                What we do
            </h2>
            <p className="text-secondary text-lg text-center mt-4 mb-12">
                We help facilities achieve safe, efficient, and compliant ventilation performance through:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {whatWeDo.map((item, i) => (
                    <div
                        key={i}
                        className="bg-white rounded shadow p-6 text-center"
                    >
                        <div className="bg-secondary inline-flex p-3 rounded-full mb-4">
                            <FontAwesomeIcon icon={item.icon} className="size-10 text-white" />
                        </div>
                        <h5 className="text-secondary text-lg font-semibold mb-2">
                            {item.point}
                        </h5>
                        <p className="text-sm text-secondary opacity-70">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>

        {/* BRAND STATEMENT */}
        <section className="relative bg-white px-4 py-20">
            <img src={photo1} className="absolute inset-0 w-full h-full object-cover opacity-10" />
            <div className="relative max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-secondary">
                    Cleaner air. Engineered flow.
                </h2>
                <p className="mt-6 text-lg md:text-xl text-secondary opacity-80">
                    Trusted ventilation experts for safer, compliant, and well-performing facilities.
                </p>
                <p className="mt-4 text-secondary opacity-60">
                    Airflo Systems Enterprise supports organisations in designing, testing,
                    and improving industrial and laboratory ventilation systems.
                </p>
            </div>
        </section>

        {/* WHY VENTILATION MATTERS */}
        <section className="py-20 px-12">
            <h2 className="text-3xl md:text-5xl font-bold text-primary text-center">
                Why Your Ventilation System Matters
            </h2>
            <p className="text-center text-secondary mt-4 mb-12">
                A poorly designed system can lead to:
            </p>

            <Swiper
                modules={[Pagination, Autoplay]}
                autoplay={{ delay: 4000 }}
                pagination={{ clickable: true }}
                spaceBetween={24}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 4 },
                }}
                className=""
            >
                {whyVentilationMatters.map((item, i) => (
                    <SwiperSlide key={i}>
                        <div className="bg-white h-72 rounded-lg border-solid border-gray-200 border-2 flex flex-col items-center justify-center text-center p-6">
                            <FontAwesomeIcon icon={item.icon} className="size-10 text-secondary" />
                            <p className="mt-6 text-secondary">
                                {item.desc}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>

        {/* WHY US */}
        <section className="px-4 py-20 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1">
                    <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-8">
                        Why Us?
                    </h2>
                    {whyairflo.map((item, i) => (
                        <div key={i} className="flex items-center gap-3 mb-4">
                            <FontAwesomeIcon icon={faCircleCheck} className="text-green-700" />
                            <p className="text-secondary opacity-70">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>

                <img
                    src={photo}
                    className="w-full md:w-1/2 rounded"
                    alt="ventilation equipment"
                />
            </div>
        </section>

        {/* INDUSTRIES */}
        <section className="px-4 py-20">
            <h2 className="text-3xl md:text-5xl font-bold text-primary text-center mb-12">
                Industries We Support
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 justify-items-center">
                {industries.map((item, i) => {
                    const Icon = item.icon;
                    return (
                        <div key={i} className="text-center w-[150px]">
                            <Icon className="size-20 text-primary mx-auto mb-4" />
                            <p className="text-sm text-primary">
                                {item.text}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>

        <ServiceFooter />
        </>
    );

}