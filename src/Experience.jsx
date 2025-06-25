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
                    <div className="flex flex-col h-[620px] max-w-md w-full rounded-3xl overflow-hidden shadow-lg bg-white">
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
                                    Schoolproject rond API-gebruik met een fullstack website. Via de website kun je een fiets zoeken op een kaart en deze vervolgens huren. Daarnaast kun je straatkunst op de kaart ontdekken en een route uitstippelen tussen de kunstwerken. Ook is er een detailpagina per kunstwerk waar je een review kunt achterlaten. Gemaakt met de API's van Stad Gent.
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
                    <div className="flex flex-col h-[620px] max-w-md w-full rounded-3xl overflow-hidden shadow-lg bg-white">
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
                                    Schoolproject waarin je de energie-uitwisseling tussen België en het buitenland kunt bekijken op een specifieke datum en tijdstip. Je ziet hoeveel energie in megawatt wordt verplaatst. Gemaakt met de API's van Elia.                                </p>
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
                    <div className="flex flex-col h-[620px] max-w-md w-full rounded-3xl overflow-hidden shadow-lg bg-white">
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
                                    Opdracht waarbij ik via OOCSS een stijlenschema heb opgezet. Door OOCSS toe te passen is de CSS herbruikbaar in andere opdrachten en projecten. Deze stylesheet heb ik later opnieuw gebruikt voor mijn project.
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
                    <div className="flex flex-col h-[620px] max-w-md w-full rounded-3xl overflow-hidden shadow-lg bg-white">
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
                                    Schoolopdracht waarin ik moest aantonen dat ik complexe CSS-technieken beheers en correct kan toepassen binnen een website.

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
                    <div className="flex flex-col h-[620px] max-w-md w-full rounded-3xl overflow-hidden shadow-lg bg-white">
                        <img
                            className="w-full h-48 object-cover border-2 border-blue-500 rounded-3xl"
                            src="img/Rocky-Linux-Logo.png.webp"
                            alt="The Coldest Sunset"
                        />
                        <div className="flex flex-col flex-grow px-6 py-4 justify-between">
                            <div>
                                <h2 className="font-bold text-xl mb-2">Website Creator Script (School Opdracht)</h2>
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
                                    Python-script dat op een server draait en automatisch websites opzet en start. Je kunt kiezen tussen verschillende soorten websites. Het script maakt ook gebruik van een ander script om dynamisch databases aan te maken.
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
