import React, { useState } from "react";
import { X, CreditCard, Lock, ShieldCheck, Mail, Calendar, Hash, Check } from "lucide-react";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  vehicleDetails: {
    vin: string;
    year: number;
    make: string;
    model: string;
    trim: string;
  };
  price: number;
  originalPrice?: number;
}

export default function CheckoutModal({
  isOpen,
  onClose,
  onSuccess,
  vehicleDetails,
  price,
  originalPrice
}: CheckoutModalProps) {
  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isDone, setIsDone] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !cardNumber || !expiry || !cvc) return;

    setIsProcessing(true);

    // Simulate Stripe payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsDone(true);

      // Delay slightly before success callback so user sees success screen
      setTimeout(() => {
        onSuccess();
        onClose();
      }, 1800);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/85 backdrop-blur-xs p-4 no-print">
      <div 
        className="bg-zinc-950 border border-zinc-800 text-white w-full max-w-[480px] relative shadow-[0_25px_50px_-12px_rgba(0,0,0,0.9)] text-left rounded-none font-sans"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Gold Accent Line */}
        <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-[#8A6B28] via-[#9B2226] to-transparent"></div>
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          disabled={isProcessing}
          className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors p-1 cursor-pointer disabled:opacity-30"
          aria-label="Close checkout"
        >
          <X className="w-5 h-5" />
        </button>

        {isDone ? (
          <div className="p-8 text-center flex flex-col items-center justify-center space-y-6">
            <div className="w-16 h-16 bg-[#8A6B28]/10 border border-[#8A6B28] rounded-full flex items-center justify-center text-[#8A6B28] animate-bounce">
              <Check className="w-8 h-8" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#8A6B28] font-bold block mb-1">
                TRANSACTION APPROVED
              </span>
              <h3 className="font-display text-xl font-bold text-white">
                Payment Successful
              </h3>
              <p className="text-zinc-400 text-xs mt-2 max-w-xs mx-auto leading-relaxed">
                Thank you for your order! Your factory Monroney Window Sticker has been retrieved and is ready for download.
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
            {/* Header */}
            <div>
              <div className="flex items-center space-x-2 text-[#8A6B28] mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-[10px] font-mono uppercase tracking-widest font-bold">
                  SECURE MONRONEY REGISTRY CHECKOUT
                </span>
              </div>
              <h3 className="font-display text-lg sm:text-xl font-extrabold tracking-tight text-white leading-tight uppercase">
                Retrieve Vehicle Report
              </h3>
              <p className="text-zinc-400 text-xs mt-1">
                Verify specifications & paint codes for {vehicleDetails.year} {vehicleDetails.make} {vehicleDetails.model} {vehicleDetails.trim}.
              </p>
            </div>

            {/* Vehicle Info Card */}
            <div className="bg-zinc-900/50 border border-zinc-800 p-3.5 font-mono text-[11px] space-y-1.5">
              <div className="flex justify-between">
                <span className="text-zinc-500">VEHICLE:</span>
                <span className="text-zinc-200 font-bold">{vehicleDetails.year} {vehicleDetails.make} {vehicleDetails.model}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">VIN:</span>
                <span className="text-zinc-200 font-bold">{vehicleDetails.vin}</span>
              </div>
            </div>

            {/* Order Summary */}
            <div className="border-t border-b border-zinc-800 py-3 space-y-2 text-xs font-mono">
              <div className="flex justify-between text-zinc-400">
                <span>Sticker Report Retrieval</span>
                <span>${(originalPrice || 19.99).toFixed(2)}</span>
              </div>
              {originalPrice && originalPrice > price && (
                <div className="flex justify-between text-[#8A6B28]">
                  <span>20% Promotional Discount</span>
                  <span>-${(originalPrice - price).toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between text-white font-bold text-sm pt-1 border-t border-zinc-900">
                <span>Total Amount Due</span>
                <span className="text-[#8A6B28]">${price.toFixed(2)}</span>
              </div>
            </div>

            {/* Inputs */}
            <div className="space-y-4 font-mono text-[11px]">
              {/* Email Address */}
              <div className="space-y-1.5">
                <label className="block text-zinc-400 uppercase tracking-wider font-bold">
                  Email Address for Delivery
                </label>
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="driver@porsche.com"
                    className="w-full bg-zinc-900 border border-zinc-800 focus:border-[#8A6B28] text-white px-4 py-3 pl-10 text-xs focus:outline-none transition-all rounded-none"
                    disabled={isProcessing}
                  />
                  <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-zinc-500" />
                </div>
              </div>

              {/* Card Details */}
              <div className="space-y-1.5">
                <label className="block text-zinc-400 uppercase tracking-wider font-bold">
                  Card Number
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    maxLength={19}
                    value={cardNumber}
                    onChange={(e) => {
                      // Simple formatter
                      const v = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
                      const matches = v.match(/\d{4,16}/g);
                      const match = (matches && matches[0]) || '';
                      const parts = [];

                      for (let i=0, len=match.length; i<len; i+=4) {
                        parts.push(match.substring(i, i+4));
                      }

                      if (parts.length > 0) {
                        setCardNumber(parts.join(' '));
                      } else {
                        setCardNumber(v);
                      }
                    }}
                    placeholder="4111 2222 3333 4444"
                    className="w-full bg-zinc-900 border border-zinc-800 focus:border-[#8A6B28] text-white px-4 py-3 pl-10 text-xs focus:outline-none transition-all rounded-none"
                    disabled={isProcessing}
                  />
                  <CreditCard className="absolute left-3.5 top-3.5 w-4 h-4 text-zinc-500" />
                </div>
              </div>

              {/* Expiry / CVC */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-zinc-400 uppercase tracking-wider font-bold">
                    Expiration Date
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      maxLength={5}
                      placeholder="MM/YY"
                      value={expiry}
                      onChange={(e) => {
                        const v = e.target.value.replace(/\//g, '').replace(/[^0-9]/g, '');
                        if (v.length >= 2) {
                          setExpiry(v.substring(0, 2) + '/' + v.substring(2, 4));
                        } else {
                          setExpiry(v);
                        }
                      }}
                      className="w-full bg-zinc-900 border border-zinc-800 focus:border-[#8A6B28] text-white px-4 py-3 pl-10 text-xs focus:outline-none transition-all rounded-none"
                      disabled={isProcessing}
                    />
                    <Calendar className="absolute left-3.5 top-3.5 w-4 h-4 text-zinc-500" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="block text-zinc-400 uppercase tracking-wider font-bold">
                    CVC Code
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      required
                      maxLength={4}
                      placeholder="123"
                      value={cvc}
                      onChange={(e) => setCvc(e.target.value.replace(/[^0-9]/g, ''))}
                      className="w-full bg-zinc-900 border border-zinc-800 focus:border-[#8A6B28] text-white px-4 py-3 pl-10 text-xs focus:outline-none transition-all rounded-none"
                      disabled={isProcessing}
                    />
                    <Hash className="absolute left-3.5 top-3.5 w-4 h-4 text-zinc-500" />
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isProcessing}
              className="w-full bg-[#8A6B28] text-white hover:bg-white hover:text-zinc-950 text-xs font-mono font-bold uppercase tracking-widest py-4 rounded-none transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 cursor-pointer active:scale-[0.99] shadow-[0_0_15px_rgba(138,107,40,0.15)]"
            >
              {isProcessing ? (
                <>
                  <div className="w-4 h-4 border-2 border-current border-t-transparent animate-spin rounded-full"></div>
                  <span>AUTHORIZING TRANSACTION...</span>
                </>
              ) : (
                <>
                  <Lock className="w-3.5 h-3.5" />
                  <span>PAY ${price.toFixed(2)} & ACCESS BUILD SHEET</span>
                </>
              )}
            </button>

            {/* Badges footer */}
            <div className="flex items-center justify-center space-x-4 text-[10px] font-mono text-zinc-500 pt-2 border-t border-zinc-900">
              <span className="flex items-center space-x-1">
                <Lock className="w-3 h-3" />
                <span>256-bit SSL</span>
              </span>
              <span>&bull;</span>
              <span>Encrypted Stripe Gateway</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
