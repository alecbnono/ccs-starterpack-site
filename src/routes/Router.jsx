import { BrowserRouter, Routes, Route } from "react-router";
import LandingPage from "../pages/LandingPage";
import Layout from "../layouts/Layout";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<LandingPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
