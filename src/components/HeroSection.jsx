import { FiArrowRight } from "react-icons/fi";

function HeroSection() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-[80vh]">
      <div className="flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-5xl md:text-6xl text-center text-slate-50 font-(family-name:--font-heading) font-semibold">
            Your CCS Journey Begins Here.
          </h1>
          <p className="text-center text-slate-50 w-[60%]">
            A student-built guide to help incoming and aspiring Lasallians
            prepare for CCS.
          </p>
        </div>
        <button className="flex gap-1 items-center px-4 py-2 bg-green-600 text-slate-50 hover rounded-lg ">
          View Lessons <FiArrowRight />
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
