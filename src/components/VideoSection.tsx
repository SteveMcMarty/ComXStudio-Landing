

function VideoSection(): JSX.Element {
    // Placeholder video replaced by static image until official demo is ready
    // const VIDEO_ID = "dQw4w9WgXcQ";

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
                        <div className="absolute inset-0 w-full h-full bg-slate-900 group cursor-pointer relative overflow-hidden">
                            <img
                                src="/video-placeholder.png"
                                alt="Aperçu de l'interface ComXStudio"
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-all">
                                <div className="bg-primary/90 text-white p-4 items-center gap-3 border-4 border-black shadow-comic transform transition-transform group-hover:scale-110 flex cursor-not-allowed">
                                    <span className="text-2xl font-bold font-comic">DÉMO BIENTÔT DISPONIBLE</span>
                                </div>
                            </div>
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
