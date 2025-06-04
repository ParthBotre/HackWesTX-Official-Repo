import { useState } from "react";
import Navlinks from "./Floating-Navlinks";

export default function Floating_Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative z-50">
            {/* Burger Icon Button for smaller screens */}
            <div className="fixed top-8 left-4 z-50 md:hidden">
                <button
                    onClick={toggleSidebar}
                    className="text-white text-2xl p-2 bg-gray-900 rounded-md"
                >
                    &#9776;
                </button>
            </div>

            {/* Sidebar for smaller screens */}
            <div
                className={`fixed top-0 left-0 w-64 h-full bg-gray-900 text-white transition-transform transform ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                } md:hidden`} // Ensure sidebar is hidden on larger screens
            >
                <button
                    onClick={toggleSidebar}
                    className="absolute top-4 right-4 text-white text-2xl"
                >
                    &times;
                </button>
                <div className="flex flex-col items-center justify-center h-full">
                    <Navlinks />
                </div>
            </div>

            {/* Top Bar for larger screens */}
            <div className="hidden md:block fixed top-4 left-1/2 -translate-x-1/2 mx-auto w-full md:w-2/5 h-16 bg-gray-900 bg-opacity-15 rounded-lg">
                <div className="flex justify-center items-center h-full">
                    <Navlinks />
                </div>
            </div>
        </div>
    );
}
