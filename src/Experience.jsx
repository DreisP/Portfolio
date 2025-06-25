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
                                    href="https://project.driespattyn.ikdoeict.be/index.html"
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
                                <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                                    MySQL
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="flex flex-col h-[600px] max-w-md w-full rounded-3xl overflow-hidden shadow-lg bg-white">
                        <img
                            className="w-full h-48 object-cover border-2 border-blue-500 rounded-3xl"
                            src="img/EliaWebsite.png"
                            alt="The Coldest Sunset"
                        />
                        <div className="flex flex-col flex-grow px-6 py-4 justify-between">
                            <div>
                                <h2 className="font-bold text-xl mb-2">Project - Energy Data Viewer</h2>
                                <a
                                    href="https://project2.driespattyn.ikdoeict.be"
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
                                    Schoolproject waar je de energie die van België naar het buiteland en andersom kan zien op een bepaald tijdstip en dag. Je kan zien hoeveel energie in MegaWatt wordt verplaatst. Werd gemaakt via api's van Elias
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
                                <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                                    MySQL
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="flex flex-col h-[600px] max-w-md w-full rounded-3xl overflow-hidden shadow-lg bg-white">
                        <img
                            className="w-full h-48 object-cover border-2 border-blue-500 rounded-3xl"
                            src="img/Style_sheet.png"
                            alt="Style Sheet"
                        />
                        <div className="flex flex-col flex-grow px-6 py-4 justify-between">
                            <div>
                                <h2 className="font-bold text-xl mb-2">Style Sheet (School Opdracht)</h2>
                                <a
                                    href="https://driespattyn.ikdoeict.be/Labo02/"
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
                                    Via OOCSS eensStyle schema maken. Dit moest via OOCSS zijn zodat dit herbruikbaar is in andere opdrachten / projecten. Deze CSS heb ik dan hergebruikt voor mijn project.


                                </p>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-2">
                                <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                                    HTML
                                </span>
                                <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                                    OOCSS
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="flex flex-col h-[600px] max-w-md w-full rounded-3xl overflow-hidden shadow-lg bg-white">
                        <img
                            className="w-full h-48 object-cover border-2 border-blue-500 rounded-3xl"
                            src="img/Css_demos.png"
                            alt="The Coldest Sunset"
                        />
                        <div className="flex flex-col flex-grow px-6 py-4 justify-between">
                            <div>
                                <h2 className="font-bold text-xl mb-2">CSS Demo's (School Opdracht)</h2>
                                <a
                                    href="https://driespattyn.ikdoeict.be/Labo03/"
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
                                    School opdracht waar je moest aantonen dat je complexe css zaken onder controle had en kon gebruiken op een website


                                </p>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-2">
                                <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                                    HTML
                                </span>
                                <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                                    OOCSS
                                </span>
                                
                            </div>
                        </div>
                    </div>
                    {/* Card 5 */}
                    <div className="flex flex-col h-[600px] max-w-md w-full rounded-3xl overflow-hidden shadow-lg bg-white">
                        <img
                            className="w-full h-48 object-cover border-2 border-blue-500 rounded-3xl"
                            src="img/Rocky-Linux-Logo.png.webp"
                            alt="The Coldest Sunset"
                        />
                        <div className="flex flex-col flex-grow px-6 py-4 justify-between">
                            <div>
                                <h2 className="font-bold text-xl mb-2">Website Creator Script</h2>
                                <a
                                    href="https://github.com/DreisP/Website-Creator-Script"
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
                                    Python script dat dient voor op een server te runnen dat je een website bouwt en rund. Je kan kiezen tussen verschillende websites. Gebruikt een ander script dat dient voor dynamisch databases aan te maken.

                                </p>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-2">
                                <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                                    Python
                                </span>
                                <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                                    MySQL
                                </span>
                                <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                                    Bash
                                </span>
                                <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                                    Rocky Linux (Server distro)
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
