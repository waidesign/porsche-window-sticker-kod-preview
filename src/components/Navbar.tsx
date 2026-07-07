import React, { useState, useEffect, useRef } from "react";
import { Shield, Menu, X, ExternalLink, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toolsDropdownOpen, setToolsDropdownOpen] = useState(false);
  const [mobileToolsOpen, setMobileToolsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", handleLocationChange);
    return () => window.removeEventListener("popstate", handleLocationChange);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setToolsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (path: string) => {
    return currentPath === path;
  };

  return (
    <header
      id="navbar"
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FFFFFF]/90 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.4)] border-b border-[#8A6B28]/20 py-2.5"
          : "bg-[#FFFFFF] border-b border-[#D4D4D8]/30 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center group">
            <div className="flex items-center justify-center w-9 h-9 bg-black border border-zinc-200 rounded-none transition-all duration-300 group-hover:border-[#8A6B28] group-hover:shadow-[0_0_15px_rgba(138,107,40,0.15)]">
              <Shield className="w-5 h-5 text-zinc-300 group-hover:text-[#8A6B28] transition-colors" />
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="/vin-decoder"
              className={`text-xs font-mono font-bold tracking-wider uppercase transition-colors relative group py-1 ${
                isActive("/vin-decoder")
                  ? "text-[#8A6B28]"
                  : "text-gray-600 hover:text-zinc-900"
              }`}
            >
              VIN Decoder
              <span className={`absolute bottom-0 left-0 h-[2px] bg-[#8A6B28] transition-all duration-300 ${
                isActive("/vin-decoder") ? "w-full" : "w-0 group-hover:w-full"
              }`}></span>
            </a>
            <a
              href="/model-specs"
              className={`text-xs font-mono font-bold tracking-wider uppercase transition-colors relative group py-1 ${
                isActive("/model-specs")
                  ? "text-[#8A6B28]"
                  : "text-gray-600 hover:text-zinc-900"
              }`}
            >
              Model Specs
              <span className={`absolute bottom-0 left-0 h-[2px] bg-[#8A6B28] transition-all duration-300 ${
                isActive("/model-specs") ? "w-full" : "w-0 group-hover:w-full"
              }`}></span>
            </a>
            <a
              href="/warranty"
              className={`text-xs font-mono font-bold tracking-wider uppercase transition-colors relative group py-1 ${
                isActive("/warranty")
                  ? "text-[#8A6B28]"
                  : "text-gray-600 hover:text-zinc-900"
              }`}
            >
              Warranty
              <span className={`absolute bottom-0 left-0 h-[2px] bg-[#8A6B28] transition-all duration-300 ${
                isActive("/warranty") ? "w-full" : "w-0 group-hover:w-full"
              }`}></span>
            </a>
            
            {/* Tools Dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setToolsDropdownOpen(!toolsDropdownOpen)}
                className={`text-xs font-mono font-bold tracking-wider uppercase transition-colors flex items-center space-x-1 py-1 cursor-pointer focus:outline-none ${
                  ["/build-sheet", "/paint-codes", "/options", "/specs"].includes(currentPath)
                    ? "text-[#8A6B28]"
                    : "text-gray-600 hover:text-zinc-900"
                }`}
              >
                <span>Tools</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${toolsDropdownOpen ? "rotate-180 text-[#8A6B28]" : ""}`} />
              </button>
              
              {/* Dropdown Menu */}
              {toolsDropdownOpen && (
                <div className="absolute left-0 mt-2 w-64 bg-[#FFFFFF] border border-zinc-200 shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-2 z-50">
                  <a
                    href="/build-sheet"
                    className={`block px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider transition-colors ${
                      currentPath === "/build-sheet" ? "text-[#8A6B28] bg-zinc-100/50" : "text-gray-600 hover:text-[#8A6B28] hover:bg-zinc-100/50"
                    }`}
                  >
                    Build Sheet
                  </a>
                  <a
                    href="/paint-codes"
                    className={`block px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider transition-colors ${
                      currentPath === "/paint-codes" ? "text-[#8A6B28] bg-zinc-100/50" : "text-gray-600 hover:text-[#8A6B28] hover:bg-zinc-100/50"
                    }`}
                  >
                    Paint Code Lookup
                  </a>
                  <a
                    href="/options"
                    className={`block px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider transition-colors ${
                      currentPath === "/options" ? "text-[#8A6B28] bg-zinc-100/50" : "text-gray-600 hover:text-[#8A6B28] hover:bg-zinc-100/50"
                    }`}
                  >
                    Options Decoder
                  </a>
                  <a
                    href="/warranty"
                    className={`block px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider transition-colors ${
                      currentPath === "/warranty" ? "text-[#8A6B28] bg-zinc-100/50" : "text-gray-600 hover:text-[#8A6B28] hover:bg-zinc-100/50"
                    }`}
                  >
                    Warranty Check
                  </a>
                  <a
                    href="/specs"
                    className={`block px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider transition-colors ${
                      currentPath === "/specs" ? "text-[#8A6B28] bg-zinc-100/50" : "text-gray-600 hover:text-[#8A6B28] hover:bg-zinc-100/50"
                    }`}
                  >
                    Specifications
                  </a>
                  <a
                    href="/vin-decoder"
                    className={`block px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider transition-colors ${
                      isActive("/vin-decoder") ? "text-[#8A6B28] bg-zinc-100/50" : "text-gray-600 hover:text-[#8A6B28] hover:bg-zinc-100/50"
                    }`}
                  >
                    VIN Decoder
                  </a>
                </div>
              )}
            </div>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-xs font-mono tracking-widest uppercase font-bold text-gray-600 hover:text-[#8A6B28] transition-colors">
              login
            </button>
            <a
              href="#lookup"
              className="bg-[#9B2226] text-white hover:bg-white hover:text-[#9B2226] hover:border-[#9B2226] text-[10px] font-mono font-bold uppercase tracking-widest px-5 py-3 rounded-none border border-transparent transition-all duration-300 flex items-center justify-center shadow-[0_0_15px_rgba(155,34,38,0.12)] hover:shadow-[0_0_20px_rgba(155,34,38,0.08)]"
            >
              <span>Signup</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-zinc-900 hover:text-[#8A6B28] p-1.5 focus:outline-none border border-zinc-200"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFFFFF] border-t border-[#8A6B28]/20 px-4 pt-4 pb-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            <a
              href="/vin-decoder"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-xs font-mono font-bold uppercase tracking-widest py-2 border-b border-gray-200 block ${
                isActive("/vin-decoder")
                  ? "text-[#8A6B28]"
                  : "text-gray-600 hover:text-zinc-900"
              }`}
            >
              VIN Decoder
            </a>
            <a
              href="/model-specs"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-xs font-mono font-bold uppercase tracking-widest py-2 border-b border-gray-200 block ${
                isActive("/model-specs")
                  ? "text-[#8A6B28]"
                  : "text-gray-600 hover:text-zinc-900"
              }`}
            >
              Model Specs
            </a>
            <a
              href="/warranty"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-xs font-mono font-bold uppercase tracking-widest py-2 border-b border-gray-200 block ${
                isActive("/warranty")
                  ? "text-[#8A6B28]"
                  : "text-gray-600 hover:text-zinc-900"
              }`}
            >
              Warranty
            </a>
            
            {/* Tools Collapsible */}
            <div className="border-b border-gray-200 py-2">
              <button
                onClick={() => setMobileToolsOpen(!mobileToolsOpen)}
                className={`w-full text-left text-xs font-mono font-bold uppercase tracking-widest flex items-center justify-between focus:outline-none ${
                  ["/build-sheet", "/paint-codes", "/options", "/specs"].includes(currentPath) ? "text-[#8A6B28]" : "text-gray-600 hover:text-zinc-900"
                }`}
              >
                <span>Tools</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${mobileToolsOpen ? "rotate-180 text-[#8A6B28]" : ""}`} />
              </button>
              {mobileToolsOpen && (
                <div className="mt-2 pl-4 space-y-2">
                  <a
                    href="/build-sheet"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block text-[11px] font-mono font-bold uppercase tracking-wider py-1 ${
                      currentPath === "/build-sheet" ? "text-[#8A6B28]" : "text-zinc-500 hover:text-[#8A6B28]"
                    }`}
                  >
                    Build Sheet
                  </a>
                  <a
                    href="/paint-codes"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block text-[11px] font-mono font-bold uppercase tracking-wider py-1 ${
                      currentPath === "/paint-codes" ? "text-[#8A6B28]" : "text-zinc-500 hover:text-[#8A6B28]"
                    }`}
                  >
                    Paint Code Lookup
                  </a>
                  <a
                    href="/options"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block text-[11px] font-mono font-bold uppercase tracking-wider py-1 ${
                      currentPath === "/options" ? "text-[#8A6B28]" : "text-zinc-500 hover:text-[#8A6B28]"
                    }`}
                  >
                    Options Decoder
                  </a>
                  <a
                    href="/warranty"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block text-[11px] font-mono font-bold uppercase tracking-wider py-1 ${
                      currentPath === "/warranty" ? "text-[#8A6B28]" : "text-zinc-500 hover:text-[#8A6B28]"
                    }`}
                  >
                    Warranty Check
                  </a>
                  <a
                    href="/specs"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block text-[11px] font-mono font-bold uppercase tracking-wider py-1 ${
                      currentPath === "/specs" ? "text-[#8A6B28]" : "text-zinc-500 hover:text-[#8A6B28]"
                    }`}
                  >
                    Specifications
                  </a>
                  <a
                    href="/vin-decoder"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block text-[11px] font-mono font-bold uppercase tracking-wider py-1 ${
                      isActive("/vin-decoder") ? "text-[#8A6B28]" : "text-zinc-500 hover:text-[#8A6B28]"
                    }`}
                  >
                    VIN Decoder
                  </a>
                </div>
              )}
            </div>
          </nav>
          <div className="flex flex-col space-y-3 pt-2">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-center text-xs font-mono font-bold uppercase tracking-wider text-gray-600 py-2.5 border border-gray-200 hover:border-zinc-900 transition-all"
            >
              login
            </button>
            <a
              href="#lookup"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center bg-[#9B2226] text-white py-2.5 text-xs font-mono font-bold uppercase tracking-widest hover:bg-white hover:text-[#9B2226] hover:border-[#9B2226] border border-transparent transition-all block font-bold"
            >
              Signup
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
