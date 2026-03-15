import { Link, useNavigate } from "react-router-dom"
import ThemeToggle from "./ThemeToggle.js";
import routes from '../routes.ts'
import LanguageToggle from "./LanguageToggle.tsx";
import { useState } from "react";
import { Menu, X } from "lucide-react";

 
export default function HeaderNavigation() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigate = useNavigate();


    const isActive = (path: string) => {
    if (path === "/") {
    return location.pathname === path;
    }
    return location.pathname.startsWith(path);
    };

    const closeMobileMenu = () => setMobileMenuOpen(false);


   return(
   <header className="sticky top-0 z-50">
        <nav className="border-gray-200 backdrop-blur-md shadow-sm transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-6 py-4">
              <div className="flex items-center justify-between">
                <button onClick={() => navigate(routes.home)} className="flex items-center">
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white text-cyan-900">Kathi</span>
                </button>

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

                <div className="flex items-end gap-2">
                  <ThemeToggle />
                  <LanguageToggle />
                </div>
              </div>

            {/* Mobile Menu Button & Controls */}
              <div className="flex md:hidden items-center gap-2">
                <LanguageToggle />
                <ThemeToggle />

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
                </div>
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
        </nav>
    </header>)
}