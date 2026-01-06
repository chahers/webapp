"use client";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, MapPin, Phone, Loader2 } from "lucide-react";
import { ReactComponent as WhatsAppIcon } from "../assets/whatsapp.svg";
import ContentTitle from "../components/ContentTitle";
import photo from "../assets/pictures/design4.png";



export default function Contact() {
    const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email." }),
    message: z
        .string()
        .min(10, { message: "Message must be at least 10 characters." })
        .max(500, { message: "Message must not be longer than 500 characters." }),
    });

    type FormValues = z.infer<typeof formSchema>;

    const contactDetails = [
        {
            icon: <MapPin className="h-6 w-6 text-cyan-400" />,
            text: "SB2-23-03 D'Sara Sentral, Jalan Welfare, Kampung Baru Sungai Buloh, 40160 Shah Alam, Selangor, Malaysia",
            link: "https://www.google.com/maps/search/?api=1&query=SB2-23-03+D'Sara+Sentral,+Jalan+Welfare,+Kampung+Baru+Sungai+Buloh,+40160+Shah+Alam,+Selangor,+Malaysia",
        },
        {
            icon: <Phone className="h-6 w-6 text-cyan-400" />,
            text: "+601131324843",
            link: "tel:+601131324843",
        },
        {
            icon: <Mail className="h-6 w-6 text-cyan-400" />,
            text: "hanifirsyad94@gmail.com",
            link: "mailto:hanifirsyad94@gmail.com",
        },
        {
            icon: <WhatsAppIcon className="h-6 w-6 text-cyan-400" />,
            text: "Message us on WhatsApp",
            link: "https://wa.me/601131324843",
        },
    ];

    const [isPending, startTransition] = useTransition();

    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
        name: "",
        email: "",
        message: "",
        },
    });

    return (
        <>
        <head>
            <title>About | airflo systems</title>
        </head>
        <div className="relative min-h-screen">
            <img src={photo} className="fixed -z-10 inset-0 object-cover w-full h-auto opacity-10"/>
            <ContentTitle title='Contact Us'/>
            <div className="relative flex justify-center">
              <main className="container p-4 sm:p-6 lg:p-8">
                <div className="flex flex-col items-center text-center mb-12">
                    <p className="max-w-2xl text-lg text-gray-500">
                    Get in touch with us for all your ventilation needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8">
                    <div className="space-y-8">
                    <div className="rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow-sm">
                        <div className="p-6">
                        <h2 className="font-headline text-2xl font-semibold">Contact Information</h2>
                        </div>
                        <div className="p-6 pt-0">
                        <ul className="space-y-6">
                            {contactDetails.map((item, index) => (
                            <li key={index} className="flex items-start space-x-4">
                                <div className="flex-shrink-0 mt-1">{item.icon}</div>
                                <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-lg hover:text-cyan-400 transition-colors duration-300"
                                >
                                {item.text}
                                </a>
                            </li>
                            ))}
                        </ul>
                        </div>
                    </div>
                    
                    <div className="rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow-sm">
                        <div className="p-6">
                        <h2 className="font-headline text-2xl font-semibold">Our Location</h2>
                        </div>
                        <div className="p-6 pt-0">
                        <div className="aspect-video w-full overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800">
                            <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.504282035817!2d101.58334807502123!3d3.22416899676346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4f5681530e49%3A0x2424a73748c08978!2sD'Sara%20Sentral!5e0!3m2!1sen!2smy!4v1719293892693!5m2!1sen!2smy"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Company Location"
                            ></iframe>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </main>
            </div>
        </div>
        </>
    )
}