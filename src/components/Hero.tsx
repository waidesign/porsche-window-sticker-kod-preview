import React, { useState, useEffect } from "react";
import { ShieldAlert, Car, Search, Eye, Sparkles, CheckCircle, Info, ChevronDown, X } from "lucide-react";
import { LookupRequest, WindowStickerData } from "../types";
import LookupForm from "./LookupForm";

// @ts-ignore
import porscheGt3rsStickerImg from "../assets/images/porsche_gt3rs_sticker_1782991960802.jpg";
// @ts-ignore
import porscheTaycanStickerImg from "../assets/images/porsche_taycan_sticker_1782991975547.jpg";
// @ts-ignore
import porscheCaymanStickerImg from "../assets/images/porsche_cayman_sticker_1782991991694.jpg";

interface HeroProps {
  onLookup: (request: LookupRequest) => void;
  isLoading: boolean;
  onSelectPreset?: (data: WindowStickerData) => void;
  onOpenVinGuide?: () => void;
}

const STATES_LIST = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", 
  "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", 
  "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", 
  "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", 
  "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", 
  "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", 
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", 
  "Wisconsin", "Wyoming"
];

const PRESETS = [
  {
    id: "preset-gt3rs",
    label: "2025 911 GT3 RS",
    color: "GT Silver",
    desc: "4.0L NA Flat-6",
    imageUrl: porscheGt3rsStickerImg,
    stickerData: {
      vin: "WP0AC2A98SS294021",
      year: 2025,
      make: "Porsche",
      model: "911",
      trim: "GT3 RS",
      exteriorColor: { name: "GT Silver Metallic", code: "U2" },
      interiorColor: { name: "Black / GT Silver Stitching", material: "Leather/Race-Tex" },
      engine: "4.0-Liter Naturally Aspirated Boxer 6 (518 HP)",
      transmission: "7-Speed Porsche Doppelkupplung (PDK)",
      baseMlrp: 223800,
      options: [
        { code: "04I", name: "Weissach Package", price: 33520 },
        { code: "P11", name: "Full Bucket Seats", price: 5400 },
        { code: "XBS", name: "Brake Calipers in High Gloss Black", price: 900 },
        { code: "8JU", name: "LED-Matrix Design Headlights in Black incl. PDLS+", price: 4010 }
      ],
      deliveryCharge: 1650,
      totalMlrp: 269280,
      fuelEconomy: { city: 14, highway: 18, combined: 15, annualCost: 3800 },
      standardEquipment: [
        { category: "Performance & Chassis", items: ["Adjustable suspension controls on steering wheel", "Rear-axle steering with sport tuning", "Porsche Active Suspension Management (PASM)", "Porsche Torque Vectoring Plus (PTV Plus)"] },
        { category: "Exterior Features", items: ["Carbon fiber reinforced plastic (CFRP) front lid", "Lightweight glass for windshield and side windows", "Rear wing with DRS (Drag Reduction System)"] },
        { category: "Interior & Comfort", items: ["Race-Tex steering wheel rim with yellow top center marking", "Lightweight door panels with storage nets and opening loops", "GT3 RS logo on headrests"] }
      ],
      portOfEntry: "Port of Houston, TX",
      dealerName: "Porsche Downtown Houston",
      dealerCityState: "Houston, TX"
    } as WindowStickerData
  },
  {
    id: "preset-taycan",
    label: "2025 Taycan Turbo S",
    color: "Frozen Blue",
    desc: "Dual Electric",
    imageUrl: porscheTaycanStickerImg,
    stickerData: {
      vin: "WP0AB2Y19SS483012",
      year: 2025,
      make: "Porsche",
      model: "Taycan",
      trim: "Turbo S",
      exteriorColor: { name: "Frozen Blue Metallic", code: "F0" },
      interiorColor: { name: "Black / Slate Grey Leather", material: "Olea Club Leather" },
      engine: "Dual Electric Motors (750 HP / Overboost)",
      transmission: "2-Speed Automatic Transmission",
      baseMlrp: 194900,
      options: [
        { code: "P4A", name: "Premium Package", price: 5380 },
        { code: "Q1J", name: "Adaptive Sport Seats (18-way) with Memory", price: 1850 },
        { code: "NW2", name: "Mobile Charger Connect", price: 1120 },
        { code: "8JU", name: "LED-Matrix Design Headlights in Glacier Blue incl. PDLS+", price: 3270 }
      ],
      deliveryCharge: 1650,
      totalMlrp: 208170,
      fuelEconomy: { city: 79, highway: 80, combined: 79, annualCost: 950 },
      standardEquipment: [
        { category: "Performance & Chassis", items: ["Porsche Ceramic Composite Brake (PCCB)", "Rear-Axle Steering incl. Power Steering Plus", "Adaptive Air Suspension incl. PASM"] },
        { category: "Exterior Features", items: ["Panoramic Fixed Glass Roof", "Carbon Fiber Exterior Trim", "Under-door puddle light projectors"] },
        { category: "Interior & Comfort", items: ["Advanced 4-Zone Climate Control", "Burmester® 3D High-End Surround Sound", "Passenger Display"] }
      ],
      portOfEntry: "Port of Davisville, RI",
      dealerName: "Porsche Warwick",
      dealerCityState: "Warwick, RI"
    } as WindowStickerData
  },
  {
    id: "preset-gt4rs",
    label: "2025 Cayman GT4 RS",
    color: "Shark Blue",
    desc: "4.0L NA Flat-6",
    imageUrl: porscheCaymanStickerImg,
    stickerData: {
      vin: "WP0AC2A82SS184022",
      year: 2025,
      make: "Porsche",
      model: "718 Cayman",
      trim: "GT4 RS",
      exteriorColor: { name: "Shark Blue", code: "D5" },
      interiorColor: { name: "Black with Arctic Blue Stitching", material: "Leather/Race-Tex" },
      engine: "4.0-Liter Naturally Aspirated Boxer 6 (493 HP)",
      transmission: "7-Speed Porsche Doppelkupplung (PDK)",
      baseMlrp: 160700,
      options: [
        { code: "04I", name: "Weissach Package with Carbon Fiber Details", price: 13250 },
        { code: "P11", name: "Full Bucket Seats", price: 5900 },
        { code: "XBS", name: "Porsche Ceramic Composite Brakes (PCCB)", price: 8000 },
        { code: "450", name: "Front Axle Lift System", price: 3180 }
      ],
      deliveryCharge: 1650,
      totalMlrp: 192680,
      fuelEconomy: { city: 17, highway: 23, combined: 19, annualCost: 3100 },
      standardEquipment: [
        { category: "Performance & Chassis", items: ["Titanium connecting rods and dry-sump lubrication", "Adjustable chassis for racetrack use", "Ball-jointed chassis connections"] },
        { category: "Exterior Features", items: ["Process air intakes behind driver & passenger windows", "Swan-neck aluminum fixed rear wing", "NACA ducts in front lid for brake cooling"] },
        { category: "Interior & Comfort", items: ["Race-Tex door pull loops in Arctic Blue", "Titanium roll cage (when Weissach ordered)", "Chrono Package with lap trigger prep"] }
      ],
      portOfEntry: "Port of San Diego, CA",
      dealerName: "Porsche San Diego",
      dealerCityState: "San Diego, CA"
    } as WindowStickerData
  }
];

export default function Hero({ onLookup, isLoading, onSelectPreset, onOpenVinGuide }: HeroProps) {
  // Quick preset loader
  const handlePresetClick = (presetData: WindowStickerData) => {
    if (onSelectPreset) {
      onSelectPreset(presetData);
    } else {
      // Fallback
      onLookup({ type: "ymm", year: presetData.year, model: presetData.model, trim: presetData.trim });
    }
  };

  return (
    <section id="lookup" className="relative min-h-[680px] flex items-center bg-[#09090B] py-16 lg:py-24 overflow-hidden border-b border-zinc-800/50 no-print cyber-grid">
      
      {/* Absolute Background Porsche Visual */}
      <div className="absolute inset-0 z-0 hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-r from-[#09090B] via-[#09090B]/90 to-transparent w-[60%] z-10"></div>
        <img
          src="/src/assets/images/porsche_hero_1782984439212.jpg"
          alt="Sleek Porsche sports car"
          className="w-full h-full object-cover object-right opacity-65 mix-blend-lighten"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Heading copy */}
          <div className="lg:col-span-6 space-y-6 lg:pr-6">
            <div className="inline-flex items-center space-x-2 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-none">
              <span className="w-1.5 h-1.5 bg-[#A1FF2C] animate-pulse"></span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 font-bold">
                GERMAN ENGINEERING REGISTRY
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.05]">
              Porsche Window <br />
              <span className="premium-gradient-text">Sticker Decryptor</span>
            </h1>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-lg">
              Reconstruct, personalize, and print high-fidelity window stickers for any Porsche model. Retrieve exact custom option lists, standard specs, and MSRP pricing directly from historical archives.
            </p>

            {/* Micro details features */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs text-zinc-400 font-mono">
              <div className="flex items-center space-x-2 bg-zinc-950/60 border border-zinc-800 px-3 py-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-[#A1FF2C]" />
                <span>100% SPEC VERIFIED</span>
              </div>
              <div className="flex items-center space-x-2 bg-zinc-950/60 border border-zinc-800 px-3 py-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-[#A1FF2C]" />
                <span>OFFICIAL EPA METRICS</span>
              </div>
              <div className="flex items-center space-x-2 bg-zinc-950/60 border border-zinc-800 px-3 py-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-[#A1FF2C]" />
                <span>VECTOR DESIGN PDF</span>
              </div>
            </div>
          </div>

          {/* Floating Form Card on Left/Center */}
          <div className="lg:col-span-6 flex justify-center">
            <LookupForm 
              onLookup={onLookup} 
              isLoading={isLoading} 
              onOpenVinGuide={onOpenVinGuide} 
            />
          </div>

        </div>

        {/* Quick presets list for instant review (no-print) */}
        <div className="mt-16 border-t border-zinc-800/60 pt-10 no-print">
          <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-400 mb-4 flex items-center space-x-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#A1FF2C]" />
            <span>VIEW PORSCHE SAMPLE WINDOW STICKERS :</span>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {PRESETS.map((p) => (
              <a
                key={p.id}
                href={p.imageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-left bg-zinc-950/40 p-4 border border-zinc-800 hover:border-[#A1FF2C] hover:bg-zinc-950 transition-all duration-300 flex justify-between items-center group rounded-none"
              >
                <div>
                  <p className="text-xs font-bold text-white group-hover:text-[#A1FF2C]">
                    {p.label}
                  </p>
                  <p className="text-[10px] font-mono text-zinc-500 mt-1">
                    {p.color} Metallic • {p.desc}
                  </p>
                </div>
                <div className="p-1.5 bg-zinc-900 text-zinc-400 group-hover:bg-[#A1FF2C]/10 group-hover:text-[#A1FF2C] border border-zinc-800 transition-colors">
                  <Eye className="w-4 h-4" />
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
