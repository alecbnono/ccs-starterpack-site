import { FaArrowTrendUp } from "react-icons/fa6";
import { FaBookReader } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import AboutCard from "./AboutCard";

function AboutSection() {
    return (
        <section className="flex flex-col items-center gap-8 px-5 py-20 bg-slate-950">
            <h1 className="text-4xl font-semibold">About</h1>
            <div className="flex flex-col md:flex-row gap-5">
                <AboutCard
                    icon={FaArrowTrendUp}
                    heading={"Head Start"}
                    body="Get a running start before your first CCS class. Designed so you don’t walk in blind."
                />
                <AboutCard
                    icon={HiUserGroup}
                    heading={"Community"}
                    body="Open-source and student-driven. Contribute, share, and help shape it for future Lasallians."
                />
                <AboutCard
                    icon={FaBookReader}
                    heading={"Essentials"}
                    body="Learn through lessons and activities based on the syllabus, written by students like you."
                />
            </div>
        </section>
    );
}

export default AboutSection;
