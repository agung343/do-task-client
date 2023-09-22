import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

export default function RootLayout() {
    return(<>
        <main>
            <Outlet />
        </main>
        <Footer />
    </>)
}