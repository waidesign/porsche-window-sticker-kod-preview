import React, { useState, useEffect } from "react";
import { Agentation } from "agentation";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBand from "./components/TrustBand";
import InformationSection from "./components/InformationSection";
import FeatureGrid from "./components/FeatureGrid";
import HowItWorks from "./components/HowItWorks";
import PorscheModelsGrid from "./components/PorscheModelsGrid";
import OtherTools from "./components/OtherTools";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";
import WarrantyPage from "./components/WarrantyPage";
import { WindowStickerData, LookupRequest } from "./types";
import { Sparkles, Shield, Cpu, Info, Check, RefreshCw, X } from "lucide-react";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");
  const [isVinModalOpen, setIsVinModalOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", handleLocationChange);

    // Dynamic clicks listener to intercept menu clicks and page routing without a full reload
    const handleGlobalClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (target && target.href) {
        const url = new URL(target.href);
        if (url.origin === window.location.origin) {
          // If it's a specific route, handle client-side
          if (url.pathname !== window.location.pathname) {
            e.preventDefault();
            window.history.pushState({}, "", url.pathname + url.search + url.hash);
            window.dispatchEvent(new Event("popstate"));
            window.scrollTo({ top: 0, behavior: "smooth" });
          } else if (url.pathname === "/") {
            // If we are already on home page, and they clicked a link to "/" or hash, let it scroll or reset
            if (url.hash) {
              const el = document.querySelector(url.hash);
              if (el) {
                e.preventDefault();
                el.scrollIntoView({ behavior: "smooth" });
              }
            } else if (url.pathname === window.location.pathname) {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }
        }
      }
    };
    document.addEventListener("click", handleGlobalClick);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      document.removeEventListener("click", handleGlobalClick);
    };
  }, []);

  // Loading messages loop
  const loadingSteps = [
    "Contacting Porsche AG central archives...",
    "Scanning vehicle registration databases...",
    "Validating 17-digit chassis checksum codes...",
    "Decoding German factory exterior paint-work...",
    "Reconstructing custom options, packages & MSRP values...",
    "Generating Porsche Window Sticker..."
  ];

  useEffect(() => {
    let index = 0;
    let interval: NodeJS.Timeout;

    if (isLoading) {
      setLoadingMessage(loadingSteps[0]);
      interval = setInterval(() => {
        index = (index + 1) % loadingSteps.length;
        setLoadingMessage(loadingSteps[index]);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isLoading]);

  const handleLookup = async (request: LookupRequest) => {
    setIsLoading(true);

    try {
      const response = await fetch("/api/lookup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(request)
      });
      const resData = await response.json();
      
      // Simulate real premium database query latency
      setTimeout(() => {
        if (resData && resData.data) {
          // No-op or log because sticker result was removed
          console.log("Successfully decoded vehicle:", resData.data);
        } else {
          console.error("No data returned", resData);
        }
        setIsLoading(false);
      }, 5000); // 5s latency for satisfying premium wait experience!

    } catch (error) {
      console.error("Lookup failed", error);
      setIsLoading(false);
    }
  };

  const handleSelectPreset = (data: WindowStickerData) => {
    // Scroll directly and smoothly to info section since sticker display was removed
    setTimeout(() => {
      const el = document.getElementById("info");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 150);
  };

  const handleSelectVin = (vin: string) => {
    const el = document.getElementById("lookup");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    handleLookup({ type: "vin", vin });
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] flex flex-col selection:bg-[#9B2226] selection:text-white">
      {import.meta.env.DEV && <Agentation />}

      {/* Sticky Premium Navbar */}
      <Navbar />

      <main className="flex-grow">
        {/* Dynamic Loading Overlay */}
        {isLoading && (
          <div className="bg-[#FFFFFF] border-y border-zinc-200 py-24 text-center flex flex-col items-center justify-center relative overflow-hidden z-20">
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:16px_16px]"></div>
            
            <div className="relative w-16 h-16 mb-6">
              {/* Spinning Loader Circles */}
              <div className="absolute inset-0 border-4 border-zinc-100 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-[#9B2226] border-t-transparent rounded-full animate-spin"></div>
            </div>

            <span className="text-[10px] font-mono uppercase tracking-widest text-[#9B2226] font-bold block mb-2">
              CHASSIS ARCHIVAL QUERY IN PROGRESS
            </span>
            <h3 className="font-display text-lg font-bold text-zinc-900 mb-3">
              Decoding Registry Records
            </h3>
            <p className="text-sm text-zinc-600 font-mono animate-pulse min-h-[20px]">
              {loadingMessage}
            </p>
          </div>
        )}

        {currentPath === "/warranty" ? (
          <WarrantyPage 
            onLookup={handleLookup} 
            isLoading={isLoading} 
            onOpenVinGuide={() => setIsVinModalOpen(true)} 
          />
        ) : (
          <>
            {/* Hero Section */}
            <Hero 
              onLookup={handleLookup} 
              isLoading={isLoading} 
              onSelectPreset={handleSelectPreset}
              onOpenVinGuide={() => setIsVinModalOpen(true)}
            />

            {/* Trust Stats Band */}
            <TrustBand />

            {/* Interactive Annotated Sticker Education Section */}
            <InformationSection onSelectVin={handleSelectVin} />

            {/* Process Steps */}
            <HowItWorks onOpenVinGuide={() => setIsVinModalOpen(true)} />

            {/* Feature Grid */}
            <FeatureGrid />

            {/* Porsche Models Grid */}
            <PorscheModelsGrid />

            {/* Other Porsche VIN Lookup Tools */}
            <OtherTools />

            {/* Accordion FAQ Section */}
            <FaqSection />
          </>
        )}
      </main>

      {/* Brand Footer */}
      <Footer />

      {/* VIN Placement Guide Modal */}
      {isVinModalOpen && (
        <div 
          id="vin-guide-modal-overlay" 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-xs p-4"
          onClick={() => setIsVinModalOpen(false)}
        >
          <div 
            id="vin-guide-modal-card" 
            className="bg-zinc-50 border border-zinc-200 p-6 sm:p-8 w-full max-w-[480px] relative shadow-[0_25px_50px_-12px_rgba(0,0,0,0.9)] text-left rounded-none"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top accent line */}
            <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-[#9B2226] via-zinc-900 to-transparent"></div>
            
            {/* Close Button */}
            <button
              id="vin-guide-modal-close-btn"
              type="button"
              onClick={() => setIsVinModalOpen(false)}
              className="absolute top-4 right-4 text-zinc-500 hover:text-[#9B2226] transition-colors p-1 cursor-pointer"
              aria-label="Close VIN guide"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="space-y-6">
              <div>
                <h3 id="vin-guide-modal-title" className="font-display text-lg sm:text-xl font-extrabold tracking-tight text-zinc-900 leading-tight">
                  HOW TO LOCATE YOUR PORSCHE'S 17-CHARACTER VIN
                </h3>
                <p className="text-zinc-600 text-xs mt-2 leading-relaxed font-sans">
                  Porsche embeds your unique 17-character vehicle identification number in multiple easy-to-locate configurations:
                </p>
              </div>

              {/* Step Items */}
              <div className="space-y-5 font-sans">
                {/* Step 1 */}
                <div id="vin-step-1" className="flex items-start space-x-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-none bg-[#9B2226] text-white font-mono text-xs font-bold">
                    1
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#9B2226]">
                      Lower Driver-Side Windshield
                    </h4>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      Stand outside your Porsche and inspect the lower bottom corner of the driver's side front windshield. You will see the VIN engraved onto a metal plate.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div id="vin-step-2" className="flex items-start space-x-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-none bg-[#9B2226] text-white font-mono text-xs font-bold">
                    2
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#9B2226]">
                      Driver's Side Door Jamb
                    </h4>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      Open your driver's cabin door and look at the side door frame pillar (B-pillar). You will see the official safety compliance sticker printing your VIN and manufacturing date.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div id="vin-step-3" className="flex items-start space-x-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-none bg-[#9B2226] text-white font-mono text-xs font-bold">
                    3
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#9B2226]">
                      Vehicle Documents & Registration
                    </h4>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      Your 17-character VIN is printed on your vehicle registration card, title documents, insurance policy, and can also be retrieved in the official My Porsche companion app.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                id="vin-guide-modal-confirm-btn"
                type="button"
                onClick={() => setIsVinModalOpen(false)}
                className="w-full bg-[#9B2226] text-white hover:bg-white hover:text-[#9B2226] hover:border-[#9B2226] text-xs font-mono font-bold uppercase tracking-widest py-3 border border-transparent transition-all duration-300 flex items-center justify-center space-x-2 active:scale-[0.99] shadow-[0_0_15px_rgba(155,34,38,0.12)] hover:shadow-[0_0_20px_rgba(155,34,38,0.08)] cursor-pointer"
              >
                I've found my VIN
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
