import { FiArrowRight } from "react-icons/fi";

function HeroSection() {
    return (
        <section className="flex flex-col justify-center items-center w-full h-[80vh] bg-slate-900 px-5">
            <div className="flex flex-col items-center gap-5">
                <div className="flex flex-col items-center gap-2">
                    <h1 className="text-5xl md:text-6xl text-center font-heading font-semibold">
                        Your CCS Journey Begins Here.
                    </h1>
                    <p className="text-center w-[60%]">
                        A student-built guide to help incoming and aspiring Lasallians
                        prepare for CCS.
                    </p>
                </div>
                <button className="flex gap-1 items-center px-5 py-3 bg-green-600 hover:bg-green-700 rounded-lg ">
                    View Lessons <FiArrowRight />
                </button>
            </div>
        </section>
    );
}

export default HeroSection;
