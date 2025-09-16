import { BrowserRouter, Routes, Route } from "react-router";
import LandingPage from "../pages/LandingPage";
import Layout from "../layouts/Layout";
import CoursesPage from "../pages/CoursesPage";
import LessonPage from "../pages/LessonPage";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<LandingPage />} />
                </Route>
                <Route path="courses" element={<Layout />}>
                    <Route index element={<CoursesPage />} />
                    <Route path="lesson">
                        <Route index element={<LessonPage />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
