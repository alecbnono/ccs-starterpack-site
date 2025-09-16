import { LuBinary } from "react-icons/lu";
import { TbFunction } from "react-icons/tb";
import { RiComputerLine } from "react-icons/ri";
import CourseCard from "../components/CourseCard";

function CoursePage() {
    return (
        <section className="flex justify-center gap-8 px-5 py-10 bg-slate-900">
            <div className="flex flex-col gap-10 px-5 md:max-w-[800px]">
                <div className="flex flex-col gap-3 mr-25">
                    <h1 className="text-4xl font-semibold ">Course</h1>
                    <p>
                        Your learning journey begins here. Explore courses built around the
                        CCS curriculum — complete with lessons, activities, and resources to
                        guide you through your first steps in the College of Computer
                        Studies.
                    </p>
                </div>
                <div className="flex flex-col gap-5">
                    <CourseCard
                        icon={LuBinary}
                        heading="CCPROG1"
                        body="Logic Formulation and Introductory Programming"
                    />
                    <CourseCard
                        icon={RiComputerLine}
                        heading="CCICOMP"
                        body="Introduction to Computing"
                    />
                    <CourseCard
                        icon={TbFunction}
                        heading="MTH101A"
                        body="Foundation Course in Mathematics"
                    />
                </div>
            </div>
        </section>
    );
}

export default CoursePage;
