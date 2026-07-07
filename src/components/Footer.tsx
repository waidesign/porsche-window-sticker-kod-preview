import React from "react";
import { Shield, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-50 border-t border-zinc-100 py-16 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Column 1: Brand */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-8 h-8 bg-zinc-100 border border-zinc-200 rounded-none">
                <Shield className="w-5 h-5 text-zinc-700" />
              </div>
              <div>
                <span className="font-display text-base font-bold tracking-[0.18em] uppercase text-zinc-900">
                  PORSCHE
                </span>
                <span className="text-[10px] font-mono tracking-widest text-[#9B2226] block -mt-1 font-semibold">
                  STICKER REGISTRY
                </span>
              </div>
            </div>
            <p className="text-xs text-zinc-600 leading-relaxed max-w-sm">
              An independent, premium historical registry and window sticker decoding service for Porsche automobiles. Restoring heritage, one specification at a time.
            </p>
            <div className="space-y-2 pt-2 text-xs text-zinc-600 font-mono">
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-zinc-600" />
                <span>support@porschestickerregistry.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-3.5 h-3.5 text-zinc-600" />
                <span>Stuttgart, Baden-Württemberg, Germany</span>
              </div>
            </div>
          </div>

          {/* Column 2: Tools */}
          <div>
            <h4 className="font-display text-xs font-extrabold tracking-widest uppercase text-zinc-900 border-b border-zinc-200 pb-2 mb-4">
              Archival Tools
            </h4>
            <ul className="space-y-2 text-xs text-zinc-600">
              <li>
                <a href="#lookup" className="hover:text-[#9B2226] transition-colors">
                  VIN Decoder
                </a>
              </li>
              <li>
                <a href="#lookup" className="hover:text-[#9B2226] transition-colors">
                  Plate Lookup
                </a>
              </li>
              <li>
                <a href="#lookup" className="hover:text-[#9B2226] transition-colors">
                  Year/Model Lookup
                </a>
              </li>
              <li>
                <a href="#models" className="hover:text-[#9B2226] transition-colors">
                  Lineup Selector
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="font-display text-xs font-extrabold tracking-widest uppercase text-zinc-900 border-b border-zinc-200 pb-2 mb-4">
              Company
            </h4>
            <ul className="space-y-2 text-xs text-zinc-600">
              <li>
                <a href="#info" className="hover:text-[#9B2226] transition-colors">
                  About Sticker
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-[#9B2226] transition-colors">
                  Feature Parameters
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-[#9B2226] transition-colors">
                  Archival Method
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#9B2226] transition-colors">
                  FAQ Database
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal & Support */}
          <div>
            <h4 className="font-display text-xs font-extrabold tracking-widest uppercase text-zinc-900 border-b border-zinc-200 pb-2 mb-4">
              Legal & Support
            </h4>
            <ul className="space-y-2 text-xs text-zinc-600 font-mono">
              <li>
                <a href="#" className="hover:text-[#9B2226] transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#9B2226] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#9B2226] transition-colors">
                  Refund Guarantee
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#9B2226] transition-colors">
                  Archival License
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="border-t border-zinc-100 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-zinc-500 text-[10px] font-mono">
          <p>
            &copy; {new Date().getFullYear()} Porsche Window Sticker Lookup. All rights reserved.
          </p>
          <p className="flex items-center space-x-1 mt-4 md:mt-0 text-[9px] max-w-xl text-right leading-relaxed font-light">
            Dr. Ing. h.c. F. Porsche AG marks and logos are owned by their respective trademark holders. This independent registry operates under research and education allowances.
          </p>
        </div>

      </div>
    </footer>
  );
}
