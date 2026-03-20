import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.svg";

const NAV_LINKS = [
    { label: "Home", path: "/" },
    { label: "section_1", path: "/section_1" },
    { label: "section_2", path: "/section_2" },
    { label: "section_3", path: "/section_3" },
];

export default function AppNavBar() {
    const location = useLocation();
    // eslint-disable-next-line
    const [lastUpdated, setLastUpdated] = useState(null);
    const [loading, setLoading] = useState(false); //eslint-disable-line
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="border-b border-gray-700 bg-transparent px-6 py-3">
            <div className="flex items-center justify-between">

                {/* Logo */}
                <Link to="/">
                    <img src={logo} alt="NaijaMetrics Logo" className="h-16 cursor-pointer" />
                </Link>

                {/* Desktop Nav Links */}
                <div className="hidden md:flex items-center gap-2">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200
                                ${location.pathname === link.path
                                    ? "text-green-400 border-b-2 border-green-400"
                                    : "text-gray-300 hover:text-green-400 hover:bg-gray-800"
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Live Timestamp */}
                <div className="hidden md:flex items-center gap-2 text-sm text-gray-400">
                    <span className={`h-2 w-2 rounded-full ${loading ? "bg-yellow-400" : "bg-green-500"}`} />
                    <span>Last updated:</span>
                    <span className="font-medium text-gray-200">
                        {loading ? "fetching..." : lastUpdated ?? "—"}
                    </span>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden text-gray-300 hover:text-green-400 focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {menuOpen
                            ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        }
                    </svg>
                </button>

            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden mt-3 flex flex-col gap-1 pb-3">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            onClick={() => setMenuOpen(false)}
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200
                                ${location.pathname === link.path
                                    ? "text-green-400 bg-gray-800 border-l-4 border-green-400"
                                    : "text-gray-300 hover:text-green-400 hover:bg-gray-800"
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}

                    {/* Timestamp on mobile too */}
                    <div className="flex items-center gap-2 text-sm text-gray-500 px-4 pt-2">
                        <span className={`h-2 w-2 rounded-full ${loading ? "bg-yellow-400" : "bg-green-500"}`} />
                        <span>Last updated:</span>
                        <span className="font-medium text-gray-700">
                            {loading ? "fetching..." : lastUpdated ?? "—"}
                        </span>
                    </div>
                </div>
            )}
        </nav>
    );
}