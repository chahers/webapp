import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import banner1 from "../assets/pictures/troubleshoot2.png";
import banner2 from "../assets/pictures/industryuniversitylab.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFan, faBuildingCircleCheck, faFileContract, faVialCircleCheck } from "@fortawesome/free-solid-svg-icons";
import photo1 from "../assets/pictures/design1.png"

export default function Home() {
    const bannerCarousel = [
        {image: banner1, title: 'cleaner air'}, 
        {image: banner2, title: 'engineered flow'}];

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
    ]

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
                            <img src={item.image} className="w-full max-h-80 object-cover opacity-50" alt="air flo" />
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
        <div className="relative w-full">
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
                <button type="button" className="w-80 ml-12 mt-12 p-8 btn bg-primary rounded-full text-xl shadow-[4px_6px_10px_-3px_#bfc9d4]">Request consultation</button>
                <button type="button" className="w-80 ml-12 mt-4 p-8 btn bg-primary rounded-full text-xl shadow-[4px_6px_10px_-3px_#bfc9d4]">Book Performance Testing</button>
            </div>
        </div>
        </>
    );
}