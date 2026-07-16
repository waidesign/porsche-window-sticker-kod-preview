import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ShieldAlert, Car, Search, Eye, Sparkles, CheckCircle, Info, ChevronDown, X, ScanLine } from "lucide-react";
import { LookupRequest, WindowStickerData } from "../types";
import LookupForm from "./LookupForm";

// @ts-ignore
import porscheGt3rsStickerImg from "../assets/images/porsche_gt3rs_sticker_1782991960802.jpg";
// @ts-ignore
import porscheTaycanStickerImg from "../assets/images/porsche_taycan_sticker_1782991975547.jpg";
// @ts-ignore
import porscheCaymanStickerImg from "../assets/images/porsche_cayman_sticker_1782991991694.jpg";
// @ts-ignore
import porscheHeroImg from "../assets/images/hero-section-image.jpg";

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

// Cycles the decode-ticker overlay through each preset's VIN -> model reveal
function useDecodeTicker() {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"scanning" | "decoded">("scanning");

  useEffect(() => {
    setPhase("scanning");
    const toDecoded = setTimeout(() => setPhase("decoded"), 1100);
    const toNext = setTimeout(() => {
      setIndex((i) => (i + 1) % PRESETS.length);
    }, 3600);
    return () => {
      clearTimeout(toDecoded);
      clearTimeout(toNext);
    };
  }, [index]);

  return { preset: PRESETS[index], phase };
}

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero({ onLookup, isLoading, onSelectPreset, onOpenVinGuide }: HeroProps) {
  const { preset: tickerPreset, phase: tickerPhase } = useDecodeTicker();

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
    <section id="lookup" className="relative bg-white border-b border-zinc-200/50 no-print overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:items-stretch">

          {/* LEFT: Hero Heading Copy */}
          <div className="lg:col-span-6 flex flex-col justify-center px-4 sm:px-6 lg:pl-12 xl:pl-20 lg:pr-10 py-14 lg:py-24 relative z-20">
            <motion.div
              initial="hidden"
              animate="show"
              className="max-w-xl space-y-6"
            >
              <motion.div
                custom={0}
                variants={fadeUp}
                className="inline-flex items-center space-x-2 bg-zinc-100 border border-zinc-200 px-3 py-1.5 rounded-none w-fit"
              >
                <span className="w-1.5 h-1.5 bg-[#8A6B28] animate-pulse"></span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 font-bold">
                  German Engineering Registry
                </span>
              </motion.div>

              <motion.h1
                custom={0.1}
                variants={fadeUp}
                className="font-display text-3xl sm:text-5xl lg:text-[3.4rem] font-extrabold tracking-tight text-zinc-900 leading-[1.03]"
              >
                Every Porsche Tells <br />
                a <span className="premium-gradient-text">Factory-Verified</span> <br />
                Story.
              </motion.h1>

              <motion.p
                custom={0.2}
                variants={fadeUp}
                className="text-zinc-600 text-sm sm:text-base leading-relaxed max-w-lg"
              >
                Reconstruct, personalize, and print high-fidelity window stickers for any Porsche model. Retrieve exact custom option lists, standard specs, and MSRP pricing directly from historical archives.
              </motion.p>

              {/* Mobile-only inline lookup form (desktop version floats on the image panel) */}
              <motion.div custom={0.4} variants={fadeUp} className="lg:hidden pt-4">
                <LookupForm onLookup={onLookup} isLoading={isLoading} onOpenVinGuide={onOpenVinGuide} variant="solid" />
              </motion.div>

              {/* Feature strip -- editorial inline list, wraps cleanly at any width */}
              <motion.div
                custom={0.3}
                variants={fadeUp}
                className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2"
              >
                {[
                  "100% Spec Verified",
                  "Official EPA Metrics",
                  "Vector Design PDF",
                ].map((label) => (
                  <div key={label} className="flex items-center space-x-2 text-xs font-mono text-zinc-600">
                    <CheckCircle className="w-3.5 h-3.5 text-[#9B2226] shrink-0" />
                    <span className="uppercase tracking-wider">{label}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT: Full-contrast studio photo panel with angled leading edge */}
          <div className="hidden lg:block lg:col-span-6 relative">
            <div className="absolute inset-0 lg:[clip-path:polygon(9%_0%,100%_0%,100%_100%,0%_100%)] bg-zinc-950">
              <img
                src={porscheHeroImg}
                alt="Porsche 911 GT3 RS studio photo"
                className="absolute inset-0 w-full h-full object-cover object-center opacity-95"
                referrerPolicy="no-referrer"
              />
              {/* Legibility gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/20"></div>
              <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black/40 to-transparent"></div>

              {/* Floating glass lookup form */}
              <div className="absolute inset-0 flex items-center justify-center p-8 xl:p-12 z-20">
                <LookupForm onLookup={onLookup} isLoading={isLoading} onOpenVinGuide={onOpenVinGuide} />
              </div>

              {/* Animated decode ticker */}
              <div className="absolute bottom-6 left-10 right-6 z-20 font-mono">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#8A6B28] mb-1.5">
                  <ScanLine className="w-3.5 h-3.5 animate-pulse" />
                  <span>Live Archive Decode</span>
                </div>
                <div className="text-xs sm:text-sm text-zinc-100/90 min-h-[20px]">
                  <span className="text-zinc-400">VIN {tickerPreset.stickerData.vin}</span>
                  <span className="mx-2 text-zinc-600">&rarr;</span>
                  <span className={`transition-opacity duration-500 ${tickerPhase === "decoded" ? "opacity-100 text-white font-bold" : "opacity-0"}`}>
                    {tickerPreset.label} &bull; {tickerPreset.color}
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Quick presets filmstrip with real thumbnail crops */}
        <div className="relative z-20 border-t border-zinc-200/60 px-4 sm:px-6 lg:px-12 xl:px-20 py-10 no-print">
          <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-600 mb-4 flex items-center space-x-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#9B2226]" />
            <span>View Porsche Sample Window Stickers :</span>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {PRESETS.map((p) => (
              <a
                key={p.id}
                href={p.imageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-50/40 border border-zinc-200 hover:border-[#9B2226] hover:bg-zinc-50 transition-all duration-300 flex items-center gap-3 group rounded-none overflow-hidden"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 overflow-hidden border-r border-zinc-200 bg-white flex items-center justify-center p-1.5">
                  <img
                    src={p.imageUrl}
                    alt={`${p.label} window sticker sample`}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex-1 min-w-0 py-3">
                  <p className="text-xs font-bold text-zinc-900 group-hover:text-[#9B2226] truncate">
                    {p.label}
                  </p>
                  <p className="text-[10px] font-mono text-zinc-500 mt-1">
                    {p.color} Metallic &bull; {p.desc}
                  </p>
                </div>
                <div className="p-1.5 mr-3 bg-zinc-100 text-zinc-600 group-hover:bg-[#9B2226]/10 group-hover:text-[#9B2226] border border-zinc-200 transition-colors shrink-0">
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
