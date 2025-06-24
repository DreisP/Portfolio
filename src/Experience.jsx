import React from "react";

function Experience() {
    return (
        <div>
            <h1 className="text-4xl font-bold text-center mb-5 underline">Projects</h1>
            <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-8 p-8">

                {/* Card 1 */}
                <div className="max-w-md h-full rounded overflow-hidden shadow-lg bg-white">
                    <img className="w-full border border-blue-500 rounded-2xl" src="img/Project_screenshot.png" alt="Sunset in the mountains" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Project - KunstKoers</div>

                        {/* ✅ Live project met pulserende rode bol */}
                        <a
                            href="https://pypi.org/project/cbe/"
                            className="inline-flex items-center text-gray-400 hover:underline mb-4"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {/* ✅ Bol met correcte centrering */}
                            <div className="relative w-3 h-3 mr-2 self-center">
                                <span className="absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75 animate-ping"></span>
                                <span className="relative mb-5 inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                            </div>
                            Live Project
                        </a>


                        <p className="text-gray-700 text-base">
                            Schoolproject voor api gebruik met een fullstack website. De website dient voor een fiets te vinden op een map en die dan te huren. Hierna kan je straatkunt op een map vinden en een route maken tussen de kunstwerken. Ook kan je naar de detailpagina gaan van het kunstwerk waar je een review kan achterlaten. Gemaakt met Api's van Gent
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Javascript</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">HTML / CSS</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Node.js / Express.js</span>

                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">MySQL</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">API's</span>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="max-w-md rounded overflow-hidden shadow-lg bg-white">
                    <img className="w-full border border-blue-500 rounded-2xl" src="/img/Style_sheet.png" alt="Sunset in the mountains" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Style Sheet</div>

                        {/* ✅ Live project met pulserende rode bol */}
                        <a
                            href="https://pypi.org/project/cbe/"
                            className="inline-flex items-center text-gray-400 hover:underline mb-4"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {/* ✅ Bol met correcte centrering */}
                            <div className="relative w-3 h-3 mr-2 self-center">
                                <span className="absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75 animate-ping"></span>
                                <span className="relative mb-5 inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                            </div>
                            Live Project
                        </a>


                        <p className="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="max-w-md rounded overflow-hidden shadow-lg bg-white">
                    <img className="w-full border border-blue-500 rounded-2xl" src="/img/Project_screenshot.png" alt="Sunset in the mountains" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>

                        {/* ✅ Live project met pulserende rode bol */}
                        <a
                            href="https://pypi.org/project/cbe/"
                            className="inline-flex items-center text-gray-400 hover:underline mb-4"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {/* ✅ Bol met correcte centrering */}
                            <div className="relative w-3 h-3 mr-2 self-center">
                                <span className="absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75 animate-ping"></span>
                                <span className="relative mb-5 inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                            </div>
                            Live Project
                        </a>


                        <p className="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Experience;
