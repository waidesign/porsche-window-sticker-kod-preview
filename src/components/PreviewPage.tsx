import React, { useState, useEffect } from "react";
import { Lock, FileText, CheckCircle2, MapPin, Gauge, Wrench, Sparkles, ShieldCheck, ArrowLeft } from "lucide-react";
import CheckoutModal from "./CheckoutModal";

// Import sample stickers for blurred preview
// @ts-ignore
import porscheGt3rsStickerImg from "../assets/images/porsche_gt3rs_sticker_1782991960802.jpg";
// @ts-ignore
import porscheTaycanStickerImg from "../assets/images/porsche_taycan_sticker_1782991975547.jpg";
// @ts-ignore
import porscheCaymanStickerImg from "../assets/images/porsche_cayman_sticker_1782991991694.jpg";

interface PreviewPageProps {
  decodedVehicle: any;
  setDecodedVehicle: (vehicle: any) => void;
  onCheckoutSuccess?: () => void;
}

export default function PreviewPage({
  decodedVehicle,
  setDecodedVehicle,
  onCheckoutSuccess
}: PreviewPageProps) {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  // If no decoded vehicle, redirect to home page
  useEffect(() => {
    if (!decodedVehicle) {
      window.history.pushState({}, "", "/");
      window.dispatchEvent(new Event("popstate"));
    }
  }, [decodedVehicle]);

  if (!decodedVehicle) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 bg-white font-sans text-center">
        <div className="w-12 h-12 border-4 border-zinc-100 border-t-[#9B2226] rounded-full animate-spin mb-4"></div>
        <p className="text-zinc-500 font-mono text-xs">Redirecting to registry lookup...</p>
      </div>
    );
  }

  const hasAuction = decodedVehicle.hasAuctionHistory;
  const finalPrice = hasAuction ? 15.99 : 19.99;
  const originalPrice = 19.99;

  // Choose preview sticker image based on model
  const getStickerImage = () => {
    const model = decodedVehicle.model.toLowerCase();
    if (model.includes("taycan")) return porscheTaycanStickerImg;
    if (model.includes("cayman") || model.includes("718")) return porscheCaymanStickerImg;
    return porscheGt3rsStickerImg;
  };

  const handleCheckoutSuccess = () => {
    localStorage.setItem("checkoutStatus", "completed");
    if (onCheckoutSuccess) {
      onCheckoutSuccess();
    }
    setDecodedVehicle(null);
    // Redirect to home page where they can see checkout was successful
    window.history.pushState({}, "", "/");
    window.dispatchEvent(new Event("popstate"));
  };

  const handleGoBack = () => {
    window.history.pushState({}, "", "/");
    window.dispatchEvent(new Event("popstate"));
  };

  return (
    <section className="bg-[#FCFCFC] py-10 sm:py-16 font-sans text-zinc-900 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Back navigation */}
        <button
          onClick={handleGoBack}
          className="inline-flex items-center space-x-2 text-xs font-mono text-zinc-500 hover:text-zinc-900 uppercase tracking-widest transition-colors font-bold cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-[#9B2226]" />
          <span>Back to registry search</span>
        </button>

        {/* Dynamic Spec Header */}
        <div className="bg-white border border-zinc-200/60 p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 relative shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
          {/* Top accent line */}
          <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-[#9B2226] via-[#8A6B28] to-transparent"></div>
          
          <div className="space-y-2.5">
            <div className="inline-flex items-center space-x-2 bg-emerald-50 border border-emerald-100 px-3 py-1 text-[10px] font-mono text-emerald-700 font-bold uppercase tracking-wider">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Chassis Registry Record Recovered</span>
            </div>
            <h1 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight">
              {decodedVehicle.year} {decodedVehicle.make} {decodedVehicle.model} {decodedVehicle.trim || ""}
            </h1>
            <p className="text-zinc-500 text-xs sm:text-sm font-mono uppercase tracking-wider">
              VERIFIED CHASSIS VIN: <span className="font-bold text-zinc-900">{decodedVehicle.vin}</span>
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-1.5 justify-center">
            {hasAuction && (
              <span className="bg-[#E8F5E9] border border-[#2E7D32]/25 text-[#2E7D32] text-[10px] font-semibold px-2.5 py-1 uppercase tracking-wider rounded-full">
                20% promotional discount applied
              </span>
            )}
            <div className="flex items-baseline space-x-2">
              {hasAuction && (
                <span className="text-sm font-bold text-zinc-400 line-through">${originalPrice.toFixed(2)}</span>
              )}
              <span className="text-2xl font-display font-extrabold text-[#9B2226]">${finalPrice.toFixed(2)}</span>
            </div>
            <button
              onClick={() => setIsCheckoutOpen(true)}
              className="bg-[#9B2226] text-white hover:bg-zinc-950 text-xs font-mono font-bold uppercase tracking-widest px-6 py-3 border border-transparent transition-all active:scale-[0.99] shadow-[0_0_15px_rgba(155,34,38,0.12)] cursor-pointer"
            >
              Unlock Vector PDF Sticker
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Specification Table & Options List (8 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Decoded Spec Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white border border-zinc-200/50 p-5 space-y-3 shadow-xs">
                <div className="flex items-center space-x-2 text-zinc-400">
                  <Gauge className="w-4 h-4 text-[#9B2226]" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider">Engine Specs</span>
                </div>
                <p className="text-xs text-zinc-500 font-mono leading-relaxed">
                  Porsche Performance Unit:
                </p>
                <p className="text-sm font-bold text-zinc-950">
                  {decodedVehicle.engine || "Flat-6 High Output Cylinder Block"}
                </p>
              </div>

              <div className="bg-white border border-zinc-200/50 p-5 space-y-3 shadow-xs">
                <div className="flex items-center space-x-2 text-zinc-400">
                  <Wrench className="w-4 h-4 text-[#9B2226]" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider">Transmission</span>
                </div>
                <p className="text-xs text-zinc-500 font-mono leading-relaxed">
                  Gearbox Configuration:
                </p>
                <p className="text-sm font-bold text-zinc-950">
                  {decodedVehicle.transmission || "Porsche Doppelkupplung (PDK)"}
                </p>
              </div>

              <div className="bg-white border border-zinc-200/50 p-5 space-y-3 shadow-xs">
                <div className="flex items-center space-x-2 text-zinc-400">
                  <Sparkles className="w-4 h-4 text-[#9B2226]" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider">Exterior & Paint</span>
                </div>
                <p className="text-xs text-zinc-500 font-mono leading-relaxed">
                  Original Factory Paintwork:
                </p>
                <p className="text-sm font-bold text-zinc-950">
                  {decodedVehicle.exteriorColor?.name || "GT Silver Metallic"} 
                  {decodedVehicle.exteriorColor?.code && ` (${decodedVehicle.exteriorColor.code})`}
                </p>
              </div>

              <div className="bg-white border border-zinc-200/50 p-5 space-y-3 shadow-xs">
                <div className="flex items-center space-x-2 text-zinc-400">
                  <MapPin className="w-4 h-4 text-[#9B2226]" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider">Port & Dealer</span>
                </div>
                <p className="text-xs text-zinc-500 font-mono leading-relaxed">
                  Delivery Destination:
                </p>
                <p className="text-sm font-bold text-zinc-950">
                  {decodedVehicle.dealerName || "Porsche Centre Zuffenhausen"} 
                  {decodedVehicle.dealerCityState && `, ${decodedVehicle.dealerCityState}`}
                </p>
              </div>
            </div>

            {/* Locked Options list sheet */}
            <div className="bg-white border border-zinc-200/60 p-6 sm:p-8 space-y-6 relative overflow-hidden shadow-sm">
              <h3 className="font-display text-lg font-bold text-zinc-950 uppercase border-b border-zinc-100 pb-3 flex items-center space-x-2">
                <FileText className="w-5 h-5 text-[#9B2226]" />
                <span>Original Factory Option Sheet</span>
              </h3>

              {/* Blurred Spec Lines */}
              <div className="space-y-4 filter blur-[2px] opacity-25 select-none pointer-events-none font-mono text-xs">
                <div className="flex justify-between border-b pb-2">
                  <span>BASE MSRP VALUE</span>
                  <span>$114,400</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span>04I - Weissach Package with carbon fiber trim</span>
                  <span>$18,000</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span>426 - Ceramic Composite Brakes (PCCB)</span>
                  <span>$9,210</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span>9VJ - Burmester 3D Surround Sound</span>
                  <span>$5,810</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span>2UH - Front Axle Hydraulic Lift</span>
                  <span>$3,670</span>
                </div>
              </div>

              {/* Lock overlay card */}
              <div className="absolute inset-0 bg-white/70 backdrop-blur-xs flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-10 h-10 bg-[#9B2226]/10 text-[#9B2226] border border-[#9B2226]/30 flex items-center justify-center rounded-full">
                  <Lock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-display text-sm font-extrabold tracking-wide uppercase text-zinc-900">
                    Option Codes & MSRP Pricing Locked
                  </h4>
                  <p className="text-zinc-500 text-xs mt-1 max-w-xs leading-normal">
                    This vehicle has custom optional packages. Unlock the vector document to reveal full pricing breakdown.
                  </p>
                </div>
                <button
                  onClick={() => setIsCheckoutOpen(true)}
                  className="bg-zinc-950 hover:bg-[#9B2226] text-white text-xs font-mono font-bold uppercase tracking-wider px-5 py-2.5 transition-colors cursor-pointer"
                >
                  Unlock specs for ${finalPrice.toFixed(2)}
                </button>
              </div>
            </div>

          </div>

          {/* RIGHT: Blurred Monroney Sticker Preview (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-zinc-200/60 p-5 relative overflow-hidden shadow-sm flex flex-col items-center">
              
              {/* Gold border accents on top and left */}
              <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#8A6B28]"></div>
              
              <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-widest block text-center mb-3">
                DYNAMIC REPLICA MONRONEY STICKER PREVIEW
              </span>

              {/* Blurred sticker image */}
              <div className="relative border border-zinc-200 overflow-hidden w-full aspect-[3/4.2]">
                <img
                  src={getStickerImage()}
                  alt="Sticker Preview"
                  className="w-full h-full object-cover filter blur-[6px] opacity-40 select-none pointer-events-none"
                />

                {/* Overlay lock screen */}
                <div className="absolute inset-0 bg-black/35 flex flex-col items-center justify-center text-center p-6 text-white space-y-4">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 text-[#FF9F00] flex items-center justify-center rounded-full animate-pulse">
                    <Lock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-extrabold tracking-wider uppercase">
                      Official Document Locked
                    </h4>
                    <p className="text-zinc-200/80 text-[11px] mt-1.5 max-w-[220px] mx-auto leading-relaxed">
                      Complete payment to print the official high-resolution, unblurred Monroney sticker in full vector format.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsCheckoutOpen(true)}
                    className="bg-[#9B2226] hover:bg-white hover:text-zinc-950 text-white text-xs font-mono font-bold uppercase tracking-widest px-5 py-3 transition-colors cursor-pointer shadow-[0_4px_15px_rgba(155,34,38,0.25)]"
                  >
                    Unlock Document
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Checkout Modal Trigger */}
      <CheckoutModal 
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        onSuccess={handleCheckoutSuccess}
        vehicleDetails={{
          vin: decodedVehicle.vin,
          year: decodedVehicle.year,
          make: decodedVehicle.make,
          model: decodedVehicle.model,
          trim: decodedVehicle.trim || ""
        }}
        price={finalPrice}
        originalPrice={hasAuction ? originalPrice : undefined}
      />
    </section>
  );
}
