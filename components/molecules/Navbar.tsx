import React, { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return(
        // <img src="/images/logo-hyperhire-white.png" className="d-inline-block" width={100} height={100} alt="Hyperhire logo" />
        <nav className="navbar navbar-expand-lg p-4 navbar-padding">
            <div className="container mx-auto flex justify-between items center">
                {/* Logo */}
                <div className="flex items-center">
                    <img src="/images/logo-hyperhire-white.png" className="d-inline-block" width={100} height={100} alt="Hyperhire logo" />
                </div>
                {/* Logo end */}
                {/* Dropdown Menu Center */}
                <div className="hidden md:flex items-center space-x-6">
                    <div className="relative group">
                        <button className="text-white text-lg flex items-center focus:outline-none">
                            채용
                            <svg
                                className="w-4 h-4 ml-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>
                        <div className="absolute left-0 w-56 hidden group-hover:block bg-white text-blue-500 mt-2 rounded-lg shadow-lg text-blue">
                            <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                                해외 개발자 원격 채용
                            </Link>
                            <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                                외국인 원격 채용 (비개발 직군)
                            </Link>
                            <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                                한국어 가능 외국인 채용
                            </Link>
                        </div>
                    </div>

                    <Link href="#" className="text-white text-lg">
                        해외 개발자 활용 서비스
                    </Link>
                </div>
                {/* Dropdown Menu Center end */}
                {/* Button */}
                <div className="hidden md:flex items-center">
                    <Link href="#" className="text-blue bg-white text-blue-500 px-4 py-2 rounded-lg font-bold button-right">
                        문의하기
                    </Link>
                </div>
                {/* Button End */}

                {/* Mobile */}
                <div className="md:hidden flex items-center">
                    <button
                        className="text-white focus:outline-none"
                        aria-label="toggle menu"
                        onClick={toggleMenu}
                    >
                        <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                        </svg>
                    </button>
                </div>
                {/* Mobile End */}
            </div>
            {/* Mobile dropdown */}
            {isOpen && (
                <div className="md:hidden mt-2 bg-white text-blue-500 rounded-lg shadow-lg">
                    <div className="flex flex-col space-y-2 p-2">
                        <Link href="#" className="block px-2 py-2">
                            채용
                        </Link>
                        <div className="pl-4">
                            <Link href="#" className="block px-2 py-2">
                              해외 개발자 원격 채용
                            </Link>
                            <Link href="#" className="block px-2 py-2">
                              외국인 원격 채용 (비개발 직군)
                            </Link>
                            <Link href="#" className="block px-2 py-2">
                              한국어 가능 외국인 채용
                            </Link>
                        </div>
                        <Link href="#" className="block px-2 py-2">
                            해외 개발자 활용 서비스
                        </Link>
                        <Link href="/inquiry" className="block px-2 py-2 bg-blue-500 text-white text-center rounded-lg">
                            문의하기
                        </Link>
                    </div>
                </div>
            )}
            {/* Mobile dropdown end */}
        </nav>
    );
};

export default Navbar;