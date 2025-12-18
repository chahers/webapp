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
            desc: 'Testing by Hygiene Technician 2-certified personnel (DOSH) for Engineering Control Equipment such as Local Exhaust Venttilation (LEV) and General Exhaust Ventilation (GEV) systems.',
            icon: faVialCircleCheck,
        },
        {
            point: 'Troubleshooting & System Operation', 
            desc: 'Identifying airflow issues, pressure losses, hood in efficiencies, fan problems, noise, clogged air, cleaning devices and overall system instability.',
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
        { text: 'Pilot plants, R&D facilities, and specialised ventilation spaces', icon: Tower},
    ];

    const whyairflo = [
        {text: 'Engineering-driven methods'},
        {text: 'Compliance-ready designs and reports'},
        {text: 'Accurate, certified system testing'},
        {text: 'Clear, professional communication'},
        {text: 'Vendor-neutral and cost-efficient solutions'},
        {text: 'Strong project experience across multiple industries'},
    ];

    return (
        <>
        <head>
            <title>Home | airflo systems</title>
            <meta
                name="description"
                content="Professional ventilation solutions for homes and businesses in Malaysia"
            />
        </head>
        {/* carousel banner container */}
        <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            navigation={{ nextEl: '.swiper-button-next-ex2', prevEl: '.swiper-button-prev-ex2' }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2000 }}
            className="swiper max-w-full mx-auto mb-5"
            id="slider2"
            dir="ltr"
        >
            <div className="swiper-wrapper">
                {bannerCarousel.map((item, i) => {
                    return (
                        <SwiperSlide key={i}>
                            <img src={item.image} className="w-full max-h-80 opacity-50 [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)] mt-20" alt="air flo" />
                            <div className="absolute inset-0 flex items-center justify-center z-[999] ">
                                <div key={i} className="sm:text-7xl text-base font-bold text-secondary">
                                    {item.title}
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </div>
        </Swiper>
        {/* what we do container */}
        <div className="py-8 px-4 flex flex-col items-center gap-8 h-full"> 
            <h2 className="flex text-center justify-center text-5xl font-bold text-primary">
                What we do
            </h2>
            <h5 className="text-secondary text-xl font-semibold mb-4 dark:text-white-light">We help facilities achieve safe, efficient, and compliant ventilation performance through:</h5>
            <div className="flex flex-row gap-6 justify-center">
                {whatWeDo.map((item, i) => {
                    return (
                        <div key={i} className="mb-5 flex items-center justify-center">
                            <div className="max-w-[19rem] w-full h-full bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] rounded border border-white-light dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none">
                                <div className="py-7 px-6">
                                    <div className="relative bg-[#3b3f5c] mb-5 inline-block p-3 text-surface rounded-full bg-secondary left-1/3 shadow-[4px_6px_10px_-3px_#bfc9d4]">
                                        <FontAwesomeIcon icon={item.icon} className="size-12"/>
                                    </div>
                                    <h5 className="text-secondary text-xl font-semibold mb-4 dark:text-white-light">{item.point}</h5>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
        {/* air flo description */}
        <div className="relative w-full bg-white">
            <img src={photo1} className="opacity-10 px-4"/>
            <div className="absolute inset-0 flex justify-center flex-col">
                <h2 className="justify-center text-5xl font-bold text-secondary pl-12">
                    Cleaner air. Engineered flow.
                </h2>
                <h1 className="pl-12 pt-8 text-2xl font-medium text-secondary opacity-80">
                    Trusted ventilation experts for safer, compliant, and well performing facilities.
                </h1>
                <p className="pl-12 pt-4 text-xl font-medium text-secondary opacity-60">
                    Airflo Systems Enterprise supports organisations in designing, testing, and improving industrial and laboratory ventilation systems — ensuring safe operations, efficient performance, and full regulatory compliance.   
                </p>
            </div>
        </div>
        {/* why your ventilation system matters multiple carousel cards*/}
        <div className="flex flex-col py-16 justify-center overflow-hidden">
             <h5 className="text-primary text-5xl font-bold text-center" >Why Your Ventilation System Matters</h5>   
             <h1 className="text-center text-xl font-medium text-secondary opacity-80 pt-4 pb-16">A poorly designed or underperforming ventilation system can lead to:</h1>
             <div className="swiper-wrapper w-full pl-8">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    autoplay={{ delay: 5000 }}
                    navigation={{
                        nextEl: '.swiper-button-next-ex5',
                        prevEl: '.swiper-button-prev-ex5',
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        1536: {
                            slidesPerView: 6,
                            spaceBetween: 5,
                        },
                        1440: {
                            slidesPerView: 5,
                            spaceBetween: 5,
                        },
                        1280: {
                            slidesPerView: 4,
                            spaceBetween: 5,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 5,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 5,
                        },
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 5,
                        },
                    }}
                    dir="ltr"
                >
                    {whyVentilationMatters.map((item, i) => {
                        return (
                            <SwiperSlide key={i}>
                                <div className="relative max-w-[19rem] w-auto h-72 bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] rounded border border-white-light dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none text-center justify-center pt-12 text-secondary">
                                    <FontAwesomeIcon icon={item.icon} className="size-12"/>
                                    <p className="mt-8 mx-4 text-xl text-secondary">
                                        {item.desc}
                                    </p>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
             </div>
        </div>
        {/* why airflo? */}
        <div className="flex flex-row gap-16 justify-center pt-16 pb-28 w-full">
            <div className="flex flex-col gap-6 justify-center">
            <h1 className="text-5xl text-secondary font-bold pb-8">Why airflo?</h1>
            {whyairflo.map((item) => {
                return (
                    <div className="flex flex-row">
                    <FontAwesomeIcon icon={faCircleCheck} className="size-8 text-green-700"/>
                    <p className="pl-4 text-xl text-secondary font-semibold opacity-60">
                        {item.text}
                    </p>
                    </div>
                );
            })}
            </div>
                <img src={photo} alt='photo of machine' className="h-auto max-h-[550px] [mask-image:linear-gradient(to_top,black_70%,transparent_100%)]"/>
        </div>
        {/* industries we support */}
        <div className="justify-center flex flex-col pb-24">
            <h1 className="text-5xl text-primary text-center font-bold pb-16">Industries We Support</h1>
            <div className="grid grid-rows-2 grid-flow-col gap-12 justify-center items-center">
            {industries.map((item) =>{
                const Icon = item.icon;
                return(
                    <div>
                    <Icon className="size-28"/>
                    </div>
                );
            })}
            </div>
        </div>
        {/* service links */}
        <div className="relative w-full bg-primary h-full [mask-image:linear-gradient(to_top,black_70%,transparent_100%)]">
            <img src={Logo} className="relative w-full opacity-0 object-cover -left-[40px]"/>
            <div className="absolute inset-16 flex justify-self-center z-[999] bg-blue-100 w-11/12 h-4/5 opacity-70 rounded-full"/>
            <div className="absolute inset-0 flex items-center justify-center z-[999]">
                <div className="w-11/12 pl-8 pr-8 text-center">
                <h1 className="text-5xl text-secondary font-bold pb-4">Ready to Improve Your Ventilation?</h1>
                <p className="text-xl pb-12 font-medium">Whether you're facing a performance issue or planning a new installation, we are here to help.</p>
                <button type="button" className="w-auto mt-4 px-4 mx-4 btn rounded-full bg-primary text-xl font-medium shadow-[4px_6px_10px_-3px_#bfc9d4] text-secondary h-16">Request Consultation</button>
                <button type="button" className="w-auto mt-4 px-4  mx-4 btn rounded-full  bg-primary text-xl font-medium shadow-[4px_6px_10px_-3px_#bfc9d4] text-secondary h-16">Book Performance Testing</button>
                <button type="button" className="w-auto mt-4 px-4  mx-4 btn rounded-full  bg-primary text-xl font-medium shadow-[4px_6px_10px_-3px_#bfc9d4] text-secondary h-16">System Troubleshooting</button>
                </div>
            </div>
        </div>
        </>
    );
}