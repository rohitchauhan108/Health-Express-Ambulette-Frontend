import React from 'react';
import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const BrooklynMapSection = () => {
    return (
        <div className="w-full bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] py-14 px-6 md:px-16">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-5"
                >
                    <h2 className="text-[#132870] text-2xl md:text-4xl font-bold leading-tight">
                        Ambulette Service Brooklyn
                    </h2>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                        Professional ambulette services NYC serving the whole of Brooklyn on doctor visits, hospital discharges, and non-emergency medical travel. Our staff guarantees quality, safe and caring service all the time.

                    </p>
                    <div className="flex items-center gap-2 text-[#132870] font-semibold">
                        <MapPin className="w-5 h-5" />
                        Brooklyn, New York
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="rounded-2xl overflow-hidden shadow-xl border-2 border-[#132870]"
                >
                    
                    <iframe
                        title="Ambulette Service Brooklyn"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2727.461894318041!2d-73.99014965818375!3d40.70333776171919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25bae236ed06f%3A0xa1c4b2b8792699be!2sHealth%20Express%20Ambulette!5e1!3m2!1sen!2sin!4v1793077839976!5m2!1sen!2sin"
                        className="w-full h-[300px] md:h-[350px]"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="strict-origin-when-cross-origin"
                    ></iframe>
                </motion.div>
            </div>
        </div>
    );
};

export default BrooklynMapSection;
