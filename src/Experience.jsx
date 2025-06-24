import React from "react";
import { motion } from "framer-motion";

function Experience() {
    return (
        <section className="py-16 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-12 underline">
                    Projects
                </h1>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-stretch"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                >

                    {/* Card 1 */}
                    <div className="flex flex-col h-[600px] max-w-md w-full rounded-3xl overflow-hidden shadow-lg bg-white">
                        <img
                            className="w-full h-48 object-cover border-2 border-blue-500 rounded-3xl"
                            src="img/Project_screenshot.png"
                            alt="KunstKoers"
                        />
                        <div className="flex flex-col flex-grow px-6 py-4 justify-between">
                            <div>
                                <h2 className="font-bold text-xl mb-2">Project - KunstKoers</h2>
                                <a
                                    href="https://pypi.org/project/cbe/"
                                    className="inline-flex items-center text-gray-400 hover:underline mb-4"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="relative w-3 h-3 mr-2 self-center">
                                        <span className="absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75 animate-ping"></span>
                                        <span className="relative mb-5 inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                                    </div>
                                    Live Project
                                </a>
                                <p className="text-gray-700 text-base">
                                    Schoolproject voor api gebruik met een fullstack website. De
                                    website dient voor een fiets te vinden op een map en die dan te
                                    huren. Hierna kan je straatkunt op een map vinden en een route
                                    maken tussen de kunstwerken. Ook kan je naar de detailpagina
                                    gaan van het kunstwerk waar je een review kan achterlaten.
                                    Gemaakt met API's van Gent.
                                </p>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-2">
                                <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                                    Javascript
                                </span>
                                <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                                    HTML / CSS
                                </span>
                                <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                                    Node.js / Express.js
                                </span>
                                <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                                    MySQL
                                </span>
                                <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                                    API's
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="flex flex-col h-[600px] max-w-md w-full rounded-3xl overflow-hidden shadow-lg bg-white">
                        <img
                            className="w-full h-48 object-cover border-2 border-blue-500 rounded-3xl"
                            src="img/Style_sheet.png"
                            alt="Style Sheet"
                        />
                        <div className="flex flex-col flex-grow px-6 py-4 justify-between">
                            <div>
                                <h2 className="font-bold text-xl mb-2">Style Sheet</h2>
                                <a
                                    href="https://pypi.org/project/cbe/"
                                    className="inline-flex items-center text-gray-400 hover:underline mb-4"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="relative w-3 h-3 mr-2 self-center">
                                        <span className="absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75 animate-ping"></span>
                                        <span className="relative mb-5 inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                                    </div>
                                    Live Project
                                </a>
                                <p className="text-gray-700 text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                                    exercitationem praesentium nihil.
                                </p>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-2">
                                <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                                    #photography
                                </span>
                                <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                                    #travel
                                </span>
                                <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                                    #winter
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="flex flex-col h-[600px] max-w-md w-full rounded-3xl overflow-hidden shadow-lg bg-white">
                        <img
                            className="w-full h-48 object-cover border-2 border-blue-500 rounded-3xl"
                            src="img/Project_screenshot.png"
                            alt="The Coldest Sunset"
                        />
                        <div className="flex flex-col flex-grow px-6 py-4 justify-between">
                            <div>
                                <h2 className="font-bold text-xl mb-2">The Coldest Sunset</h2>
                                <a
                                    href="https://pypi.org/project/cbe/"
                                    className="inline-flex items-center text-gray-400 hover:underline mb-4"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="relative w-3 h-3 mr-2 self-center">
                                        <span className="absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75 animate-ping"></span>
                                        <span className="relative mb-5 inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                                    </div>
                                    Live Project
                                </a>
                                <p className="text-gray-700 text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                                    exercitationem praesentium nihil.
                                </p>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-2">
                                <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                                    #photography
                                </span>
                                <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                                    #travel
                                </span>
                                <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                                    #winter
                                </span>
                            </div>
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}

export default Experience;
