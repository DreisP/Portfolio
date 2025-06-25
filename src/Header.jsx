import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";

function Header() {
    return (
        <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 2 }} 
            className="h-screen w-full flex flex-col items-center justify-center relative"
        >
            <h1 className="relative z-20 text-blue-500 py-8 text-5xl font-bold sm:text-7xl">
                Dries Pattyn
            </h1>
            <p
                className="relative text-2xl z-20 text-nowrap overflow-hidden font-semibold text-gray-400 inline-flex animate-background-shine bg-[linear-gradient(110deg,#939393,45%,#1e293b,55%,#939393)] bg-[length:250%_100%] bg-clip-text"
                style={{ fontSize: "clamp(1rem, 5vw, 1.7rem)" }}
            >
                Student Software Developer
            </p>
            <p className="relative text-1xl text-gray-400 font-bold">Ghent, Belgium</p>

            {/* Pijlen onderaan */}
            <motion.div
                className="absolute bottom-10 flex gap-4 z-20"
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 1.75, ease: "easeInOut" }}
            >
                <img className="scale-200" src="img/arrow_downward_24dp_2463EB_FILL0_wght400_GRAD0_opsz24.svg" alt="" />
            </motion.div>
        </motion.div>
    );
}

export default Header;
