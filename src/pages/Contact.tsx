"use client";

import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, MapPin, Phone } from "lucide-react";
import { ReactComponent as WhatsAppIcon } from "../assets/whatsapp.svg";
import ContentTitle from "../components/ContentTitle";
import photo from "../assets/pictures/design4.png";

export default function Contact() {
  const formSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    message: z.string().min(10).max(500),
  });

  type FormValues = z.infer<typeof formSchema>;

  const contactDetails = [
    {
      icon: <MapPin className="h-5 w-5 text-cyan-400" />,
      text:
        "SB2-23-03 D'Sara Sentral, Jalan Welfare, Kampung Baru Sungai Buloh, 40160 Shah Alam, Selangor, Malaysia",
      link:
        "https://www.google.com/maps/search/?api=1&query=SB2-23-03+D'Sara+Sentral",
    },
    {
      icon: <Phone className="h-5 w-5 text-cyan-400" />,
      text: "+601131324843",
      link: "tel:+601131324843",
    },
    {
      icon: <Mail className="h-5 w-5 text-cyan-400" />,
      text: "hanifirsyad94@gmail.com",
      link: "mailto:hanifirsyad94@gmail.com",
    },
    {
      icon: <WhatsAppIcon className="h-5 w-5 text-cyan-400" />,
      text: "Message us on WhatsApp",
      link: "https://wa.me/601131324843",
    },
  ];

  useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  return (
    <>
      <head>
        <title>Contact | Airflo Systems</title>
      </head>

      <div className="relative min-h-screen overflow-x-hidden">
        <img
          src={photo}
          alt=""
          className="fixed inset-0 -z-10 h-screen w-full object-cover opacity-10"
        />

        <ContentTitle title="Contact Us" />

        <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="mx-auto max-w-xl text-base text-gray-500 sm:text-lg">
              Get in touch with us for all your ventilation needs.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            <section className="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <div className="p-5 sm:p-6">
                <h2 className="text-xl font-semibold sm:text-2xl">
                  Airflo Systems Enterprise
                </h2>
              </div>

              <div className="px-5 pb-6 sm:px-6">
                <ul className="space-y-5">
                  {contactDetails.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 break-words"
                    >
                      <span className="mt-1 shrink-0">{item.icon}</span>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm leading-relaxed transition-colors hover:text-cyan-400 sm:text-base"
                      >
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <div className="p-5 sm:p-6">
                <h2 className="text-xl font-semibold sm:text-2xl">
                  Our Location
                </h2>
              </div>

              <div className="px-5 pb-6 sm:px-6">
                <div className="aspect-video w-full overflow-hidden rounded-lg border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.504282035817!2d101.58334807502123!3d3.22416899676346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4f5681530e49%3A0x2424a73748c08978!2sD'Sara%20Sentral!5e0!3m2!1sen!2smy!4v1719293892693!5m2!1sen!2smy"
                    className="h-full w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                    title="Company Location"
                  />
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
