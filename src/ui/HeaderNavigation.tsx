import { Link, useNavigate } from "react-router-dom"
import ThemeToggle from "./ThemeToggle.js";
import routes from '../routes.ts'
import LanguageToggle from "./LanguageToggle.tsx";
import { useState } from "react";
import Button from "./Button.tsx";
import { Menu, X } from "lucide-react";

 
export default function HeaderNavigation() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigate = useNavigate();

    function handleHamburger() {
            const menu = document.querySelector('#mobile-menu');
            menu != null ?  menu.classList.toggle('hidden') : null
        }

        const isActive = (path: string) => {
        if (path === "/") {
        return location.pathname === path;
        }
        return location.pathname.startsWith(path);
    };

    const closeMobileMenu = () => setMobileMenuOpen(false);


   return(<header>
        <nav className="border-gray-200 px-4 lg:px-6 py-2.5">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <button onClick={() => navigate(routes.home)} className="flex items-center">
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white text-cyan-900">Home</span>
                </button>

              <div className="flex items-end gap-2">
            <ThemeToggle />
            <LanguageToggle />
            </div>
            <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="rounded-full p-2 hover:bg-[#cdc7e5] dark:hover:bg-[#5b507a]/30"
              >
                {mobileMenuOpen ? (
                  <X className="size-6 text-gray-700 dark:text-gray-300" />
                ) : (
                  <Menu className="size-6 text-gray-700 dark:text-gray-300" />
                )}
              </button>
                {/* <div className="flex items-center lg:order-2">
                    <button onClick={handleHamburger} type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"  aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                </div> */}
                <div className="hidden md:flex items-center gap-8" id="mobile-menu">
              {/* Nav Links */}
              <div className="flex gap-8">
                        <Link
                        to="/projects"
                        className={`transition-colors relative ${
                            isActive("/projects")
                            ? "text-[#5b507a] dark:text-[#cdc7e5] font-semibold"
                            : "text-gray-600 dark:text-gray-300 hover:text-[#5b507a] dark:hover:text-[#cdc7e5]"
                        }`}
                        >
                            Projects
                        {isActive("/projects") && (
                            <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#5b507a] dark:bg-[#cdc7e5] rounded-full" />
                        )}
                        </Link>

                         <Link
                        to="/about"
                        className={`transition-colors relative ${
                            isActive("/about")
                            ? "text-[#5b507a] dark:text-[#cdc7e5] font-semibold"
                            : "text-gray-600 dark:text-gray-300 hover:text-[#5b507a] dark:hover:text-[#cdc7e5]"
                        }`}
                        >
                            About Me
                        {isActive("/about") && (
                            <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#5b507a] dark:bg-[#cdc7e5] rounded-full" />
                        )}
                        </Link>
                </div>
                
                          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2 border-t border-gray-200 dark:border-gray-700 pt-4">
              <Link
                to="/"
                onClick={closeMobileMenu}
                className={`block px-4 py-3 rounded-lg transition-colors ${
                  isActive("/")
                    ? "bg-[#5b507a] text-white dark:bg-[#cdc7e5] dark:text-[#5b507a]"
                    : "text-gray-600 dark:text-gray-300 hover:bg-[#cdc7e5]/30 dark:hover:bg-[#5b507a]/30"
                }`}
              >
                Home
              </Link>
              <Link
                to="/projects"
                onClick={closeMobileMenu}
                className={`block px-4 py-3 rounded-lg transition-colors ${
                  isActive("/projects")
                    ? "bg-[#5b507a] text-white dark:bg-[#cdc7e5] dark:text-[#5b507a]"
                    : "text-gray-600 dark:text-gray-300 hover:bg-[#cdc7e5]/30 dark:hover:bg-[#5b507a]/30"
                }`}
              >
                Projects
              </Link>
              <Link
                to="/about"
                onClick={closeMobileMenu}
                className={`block px-4 py-3 rounded-lg transition-colors ${
                  isActive("/about")
                    ? "bg-[#5b507a] text-white dark:bg-[#cdc7e5] dark:text-[#5b507a]"
                    : "text-gray-600 dark:text-gray-300 hover:bg-[#cdc7e5]/30 dark:hover:bg-[#5b507a]/30"
                }`}
              >
                About
              </Link>
            </div>
          )}
                </div>
            </div>
        </nav>
    </header>)
}