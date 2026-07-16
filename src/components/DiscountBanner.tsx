import React, { useState } from "react";
import { Copy, Check, X } from "lucide-react";
import { defaultDiscount } from "../config/discountConfig";
import CheckoutModal from "./CheckoutModal";

// Import the auction photo we copied
// @ts-ignore
import porscheAuctionCar from "../assets/images/porsche_auction_car.png";

interface DiscountBannerProps {
  decodedVehicle: any;
  setDecodedVehicle: (vehicle: any) => void;
  onCheckoutSuccess?: (vehicle: any) => void;
}

export default function DiscountBanner({
  decodedVehicle,
  setDecodedVehicle,
  onCheckoutSuccess
}: DiscountBannerProps) {
  const [copied, setCopied] = useState(false);
  const [showSuccessBanner, setShowSuccessBanner] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  // Read campaign details from config
  const { campaignName, discountText, code, percentage } = defaultDiscount;

  // Handle copy of default discount code
  const handleCopyCode = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setShowSuccessBanner(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleDismissDecoded = () => {
    localStorage.setItem("checkoutStatus", "dismissed");
    setDecodedVehicle(null);
  };

  const handleCheckoutSuccess = () => {
    localStorage.setItem("checkoutStatus", "completed");
    if (onCheckoutSuccess) {
      onCheckoutSuccess(decodedVehicle);
    }
    setDecodedVehicle(null);
  };

  const hasPendingOffer = decodedVehicle !== null;

  // Banner State 1 - Code Copied Success (Image 2)
  if (showSuccessBanner && !hasPendingOffer) {
    return (
      <div 
        id="discount-success-banner" 
        className="w-full bg-[#E2F6E9] border-b border-[#C8E6C9] py-2.5 px-4 text-center flex items-center justify-center relative font-sans text-xs sm:text-sm z-40 no-print"
      >
        <span className="text-[#2E7D32] font-semibold flex items-center gap-1.5">
          You have received {percentage}% Discount!
        </span>
        <button
          type="button"
          onClick={() => setShowSuccessBanner(false)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-[#2E7D32] hover:text-[#1B5E20] transition-colors p-1 cursor-pointer"
          aria-label="Close notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    );
  }

  // Banner State 2 & 3 - Decoded Vehicle Offer (Image 3 & 4)
  if (hasPendingOffer) {
    const hasAuction = decodedVehicle.hasAuctionHistory;
    const finalPrice = hasAuction ? 15.99 : 19.99;
    const originalPrice = 19.99;

    return (
      <>
        <div 
          id="decoded-discount-banner" 
          className="w-full bg-[#FF9F00] border-b border-[#E08C00] py-2.5 px-4 text-black flex items-center justify-center font-sans z-40 no-print"
        >
          <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Left section: Thumbnail + Details */}
            <div className="flex items-center gap-3.5 flex-1 max-w-4xl justify-center md:justify-start">
              {/* Show Auction image if available (Image 4 state) */}
              {hasAuction && (
                <div className="w-14 h-10 shrink-0 border border-black/10 shadow-xs overflow-hidden rounded bg-zinc-900">
                  <img 
                    src={porscheAuctionCar} 
                    alt="Auction vehicle" 
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Text Stack */}
              <div className="flex flex-col text-left">
                {hasAuction && (
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-xs font-bold text-[#D00000]">${originalPrice.toFixed(2)}</span>
                    <span className="bg-[#E8F5E9] border border-[#2E7D32]/20 text-[#2E7D32] text-[10px] font-semibold px-2 py-0.5 uppercase tracking-wide rounded-full">
                      20% discount applied!
                    </span>
                  </div>
                )}
                <p className="text-xs sm:text-sm font-semibold text-zinc-950 leading-tight">
                  Your report for {decodedVehicle.year} {decodedVehicle.make} {decodedVehicle.model}, VIN: {decodedVehicle.vin} is ready!
                </p>
              </div>
            </div>

            {/* Right section: Action Buttons */}
            <div className="flex items-center gap-2.5 shrink-0 w-full md:w-auto justify-center md:justify-end">
              <button
                type="button"
                onClick={() => setIsCheckoutOpen(true)}
                className="bg-black hover:bg-zinc-900 text-white text-xs font-bold px-4 py-2 rounded transition-colors border border-transparent cursor-pointer shadow-xs active:scale-[0.98]"
              >
                Grab it now for only ${finalPrice.toFixed(2)}!
              </button>
              <button
                type="button"
                onClick={handleDismissDecoded}
                className="bg-transparent hover:bg-black/5 text-black text-xs font-bold px-4 py-2 rounded transition-colors border border-black cursor-pointer active:scale-[0.98]"
              >
                No, Thanks
              </button>
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
      </>
    );
  }

  // Banner State 1 - Default (Image 1)
  return (
    <div 
      id="default-discount-banner" 
      className="w-full bg-[#FF9F00] border-b border-[#E08C00] py-2.5 px-4 text-center text-black flex flex-row items-center justify-center gap-2 transition-all duration-300 font-sans text-xs sm:text-sm font-semibold z-40 no-print"
    >
      <span>
        {campaignName}: {discountText} Use code
      </span>

      {/* Copy Code Coupon Box */}
      <button
        type="button"
        onClick={handleCopyCode}
        className="bg-black hover:bg-zinc-900 text-white text-xs font-bold px-3 py-1 flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer border border-white/10 rounded"
        title="Click to copy discount code"
      >
        {copied ? (
          <Check className="w-3.5 h-3.5 text-[#A5C198]" />
        ) : (
          <Copy className="w-3.5 h-3.5 text-zinc-400" />
        )}
        <span className="tracking-wider">{code}</span>
      </button>

      <span>
        on checkout.
      </span>
    </div>
  );
}
