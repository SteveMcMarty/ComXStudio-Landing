

function VideoSection(): JSX.Element {
    // Placeholder video ID - can be replaced by the user
    const VIDEO_ID = "dQw4w9WgXcQ";

    return (
        <section className="bg-yellow-400 py-20 px-4 border-y-4 border-black relative overflow-hidden">
            {/* Comic halftone pattern overlay */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

            <div className="container mx-auto max-w-5xl relative z-10 text-center">
                <h2 className="text-4xl md:text-5xl font-comic text-darkest mb-12 tracking-wide uppercase drop-shadow-[3px_3px_0_#fff]">
                    Voir en Action
                </h2>

                <div className="relative w-full max-w-4xl mx-auto">
                    {/* Comic Frame for Video */}
                    <div className="bg-black p-2 md:p-4 shadow-[8px_8px_0_#000] transform rotate-1">
                        <div className="relative pb-[56.25%] h-0 bg-gray-900 border-4 border-white">
                            <iframe
                                className="absolute top-0 left-0 w-full h-full"
                                src={`https://www.youtube.com/embed/${VIDEO_ID}`}
                                title="ComXStudio Demo"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-white rounded-full border-4 border-black flex items-center justify-center font-comic font-bold text-xl shadow-[4px_4px_0_#000] rotate-12 hidden md:flex">
                        POW!
                    </div>
                </div>
            </div>
        </section>
    );
}

export default VideoSection;
