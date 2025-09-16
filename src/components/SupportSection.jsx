import { FiArrowRight } from "react-icons/fi";

function SupportSection() {
    return (
        <section className="flex flex-col items-center gap-7 px-5 py-20 bg-slate-900">
            <div className="flex flex-col gap-3 items-center text-center">
                <h1 className="text-3xl font-semibold">Support Us</h1>
                <div>
                    <p>Help us grow this open-source resource for future CCS students</p>
                    <p>Contribute, share, or support our work!</p>
                </div>
            </div>
            <div className="flex gap-4">
                <button className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-950 hover rounded-lg">
                    Share
                </button>
                <button className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-950 hover rounded-lg">
                    Donate
                </button>
                <button className="flex gap-1 items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-slate-50 rounded-lg ">
                    Contribute <FiArrowRight />
                </button>
            </div>
        </section>
    );
}

export default SupportSection;
