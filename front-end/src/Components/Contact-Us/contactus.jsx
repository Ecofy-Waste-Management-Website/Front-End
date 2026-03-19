import React, { useState } from "react";
import imgImage from "../../assets/contact-hero-bg.png";

const svgPaths = {
    p22a3b200: "M18 8H6C4.89543 8 4 8.89543 4 10V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V10C20 8.89543 19.1046 8 18 8Z",
    p27c543b0: "M20 10C20 14.993 14.461 20.193 12.601 21.799C12.4277 21.9293 12.2168 21.9998 12 21.9998C11.7832 21.9998 11.5723 21.9293 11.399 21.799C9.539 20.193 4 14.993 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z",
    p2d59bff0: "M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z",
    p31491280: "M18.2117 1.78917L9.095 10.905",
    p375d9e80: "M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1469 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77383 17.3147 6.72534 15.2662 5.19 12.85C3.49998 10.2412 2.44824 7.27099 2.12 4.18C2.09501 3.90347 2.12787 3.62476 2.2165 3.36162C2.30513 3.09849 2.44757 2.85669 2.63477 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55778 2.05833 3.83234 2.00026 4.11 2H7.11C7.59531 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04208 3.23945 9.11 3.72C9.23662 4.68007 9.47145 5.62273 9.81 6.53C9.94454 6.88792 9.97366 7.27691 9.89391 7.65088C9.81415 8.02485 9.62886 8.36811 9.36 8.64L8.09 9.91C9.51356 12.4135 11.5865 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9752 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z",
    p7de2100: "M12.1133 18.0717C12.145 18.1506 12.2 18.2179 12.2711 18.2646C12.3421 18.3113 12.4257 18.3352 12.5107 18.333C12.5957 18.3309 12.678 18.3027 12.7465 18.2524C12.8151 18.2021 12.8666 18.1321 12.8942 18.0517L18.3108 2.21833C18.3375 2.14449 18.3426 2.06459 18.3255 1.98796C18.3084 1.91134 18.2699 1.84116 18.2144 1.78565C18.1588 1.73013 18.0887 1.69158 18.012 1.67449C17.9354 1.65741 17.8555 1.6625 17.7817 1.68917L1.94833 7.10583C1.86791 7.13341 1.79785 7.18493 1.74756 7.25348C1.69727 7.32202 1.66914 7.40431 1.66697 7.4893C1.66479 7.57429 1.68866 7.65791 1.73538 7.72894C1.7821 7.79997 1.84943 7.85501 1.92833 7.88667L8.53667 10.5367C8.74557 10.6203 8.93538 10.7454 9.09464 10.9044C9.2539 11.0633 9.37932 11.2529 9.46333 11.4617L12.1133 18.0717Z"
};

const contactCards = [
    {
        title: "Our Reach",
        description: "Serving the Western & Southern Provinces, Sri Lanka.",
        icon: (
            <svg className="size-6" fill="none" viewBox="0 0 24 24">
                <path d={svgPaths.p27c543b0} stroke="#3DDB66" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d={svgPaths.p2d59bff0} stroke="#3DDB66" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
        ),
    },
    {
        title: "Call or Email",
        description: "info@ecofy.lk\n+94 123 456 789",
        icon: (
            <svg className="size-6" fill="none" viewBox="0 0 24 24">
                <path d={svgPaths.p375d9e80} stroke="#3DDB66" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
        ),
    },
    {
        title: "24/7 AI Chatbot",
        description: "Use our smart assistant for instant booking help and issue routing.",
        icon: (
            <svg className="size-6" fill="none" viewBox="0 0 24 24">
                <path d="M12 8V4H8" stroke="#3DDB66" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d={svgPaths.p22a3b200} stroke="#3DDB66" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d="M2 14H4" stroke="#3DDB66" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d="M20 14H22" stroke="#3DDB66" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d="M15 13V15" stroke="#3DDB66" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d="M9 13V15" stroke="#3DDB66" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
        ),
    },
];

const inquirySources = ["General Inquiry", "Waste Collection", "Recycling Services", "Account Help"];

export default function ContactUs() {
    const [formData, setFormData] = useState({ name: "", email: "", source: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
        setFormData({ name: "", email: "", source: "", message: "" });
    };

    return (
        <div className="bg-[#f5f6f8] font-['Inter',sans-serif]">
            {/* Hero Section */}
            <section className="relative bg-[#062f1b] h-[529px] overflow-hidden">
                <img src={imgImage} alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.07]" />
                <div className="absolute bg-[#3ddb66] blur-[64px] left-[40px] opacity-[0.04] rounded-full size-[256px] top-[40px]" />
                <div className="absolute bg-[#3ddb66] blur-[64px] right-[40px] opacity-[0.05] rounded-full size-[320px] top-[129px]" />
                <div className="relative flex flex-col items-center justify-center h-full px-6 text-center">
                    <p className="font-['Inter',sans-serif] text-[#4dc585] text-[16px] tracking-[1.6px] uppercase mb-4">Contact Us</p>
                    <h1 className="font-['Inder',sans-serif] text-[64px] leading-[80px] text-white mb-6">Get in Touch</h1>
                    <p className="font-['Inter',sans-serif] font-light text-[20px] leading-[32.5px] text-white/80 max-w-[646px]">
                        Have questions about our waste collection services or need help with your account? We're here to help.
                    </p>
                </div>
            </section>

            {/* Contact Cards */}
            <div className="max-w-[976px] mx-auto px-6 -mt-[28px] relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {contactCards.map((card) => (
                        <div key={card.title} className="relative bg-white rounded-[24px] shadow-[0px_8px_30px_0px_rgba(0,0,0,0.08)] pt-[56px] pb-[32px] px-[32px] text-center">
                            <div className="absolute left-1/2 -translate-x-1/2 -top-[28px] bg-[#062f1b] rounded-full size-[56px] flex items-center justify-center shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1)]">
                                {card.icon}
                            </div>
                            <h3 className="font-['Inter',sans-serif] font-semibold text-[22px] leading-[33px] text-[#062f1b] mb-3">{card.title}</h3>
                            <p className="font-['Inter',sans-serif] text-[15px] leading-[24.375px] text-[#4a5565] whitespace-pre-line">{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Contact Form */}
            <div className="max-w-[672px] mx-auto px-6 py-[80px]">
                <div className="bg-white rounded-[24px] shadow-[0px_8px_30px_0px_rgba(0,0,0,0.06)] p-[48px]">
                    <h2 className="font-['Inter',sans-serif] font-semibold text-[36px] leading-[54px] text-[#062f1b] text-center mb-2">Send us an Inquiry</h2>
                    <p className="font-['Inter',sans-serif] text-[15px] leading-[22.5px] text-[#6a7282] text-center mb-10">
                        Fill out the form below and our team will get back to you within 24 hours.
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <label className="font-['Inter',sans-serif] font-medium text-[14px] text-[#062f1b]">Full Name</label>
                            <input
                                type="text"
                                placeholder="Enter your full name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="bg-[#f5f6f8] rounded-[16px] px-5 py-4 text-[15px] text-[#062f1b] placeholder-[#99a1af] outline-none border border-transparent focus:border-[rgba(61,219,102,0.4)] transition-colors"
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="font-['Inter',sans-serif] font-medium text-[14px] text-[#062f1b]">Email Address</label>
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="bg-[#f5f6f8] rounded-[16px] px-5 py-4 text-[15px] text-[#062f1b] placeholder-[#99a1af] outline-none border border-transparent focus:border-[rgba(61,219,102,0.4)] transition-colors"
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="font-['Inter',sans-serif] font-medium text-[14px] text-[#062f1b]">Inquiry Source</label>
                            <div className="relative">
                                <select
                                    value={formData.source}
                                    onChange={(e) => setFormData({ ...formData, source: e.target.value })}
                                    className="w-full bg-[#f5f6f8] rounded-[16px] px-5 py-4 text-[15px] text-[#062f1b] outline-none border border-transparent focus:border-[rgba(61,219,102,0.4)] transition-colors appearance-none cursor-pointer"
                                    required
                                >
                                    <option value="" disabled>Select an option</option>
                                    {inquirySources.map((s) => (
                                        <option key={s} value={s}>{s}</option>
                                    ))}
                                </select>
                                <svg className="absolute right-5 top-1/2 -translate-y-1/2 size-5 pointer-events-none" fill="none" viewBox="0 0 20 20">
                                    <path d="M5 7.5L10 12.5L15 7.5" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                                </svg>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="font-['Inter',sans-serif] font-medium text-[14px] text-[#062f1b]">Your Message</label>
                            <textarea
                                placeholder="Write your message here..."
                                rows={5}
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="bg-[#f5f6f8] rounded-[16px] px-5 py-4 text-[15px] text-[#062f1b] placeholder-[#99a1af] outline-none border border-transparent focus:border-[rgba(61,219,102,0.4)] transition-colors resize-none"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-[#062f1b] text-white rounded-full py-4 text-[17px] font-semibold shadow-[0px_4px_16px_0px_rgba(61,219,102,0.3)] hover:bg-[#0a4a2d] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                        >
                            <svg className="size-5" fill="none" viewBox="0 0 20 20">
                                <g clipPath="url(#clip_send)">
                                    <path d={svgPaths.p7de2100} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                                    <path d={svgPaths.p31491280} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                                </g>
                                <defs>
                                    <clipPath id="clip_send"><rect fill="white" height="20" width="20" /></clipPath>
                                </defs>
                            </svg>
                            {submitted ? "Message Sent!" : "Send Message"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
