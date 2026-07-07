import React, { useState } from "react";
import { Info, CheckCircle, HelpCircle, Eye, Shield, Cpu, Activity, Award, Star, DollarSign, PenTool, Truck, Sparkles, MapPin, Layers } from "lucide-react";
// @ts-ignore
import porscheStickerImg from "../assets/images/porsche_911_gts_sticker_WP0AB2A91NS222176.jpg";

interface InformationSectionProps {
  onSelectVin?: (vin: string) => void;
}

export default function InformationSection({ onSelectVin }: InformationSectionProps) {
  const [activePin, setActivePin] = useState(13); // Start with vehicle details highlighted

  const annotations = [
    {
      id: 13,
      title: "Vehicle Details",
      desc: "Crucial identification data located at the top-left, including the unique 17-character VIN (Vehicle Identification Number), year, model, trim, and delivering dealer information.",
      coord: "top-[6%] left-[24%]",
      icon: <Layers className="w-4 h-4 text-[#9B2226]" />,
    },
    {
      id: 6,
      title: "Exterior & Interior Colors",
      desc: "Specifies the factory-designated paint formulas (such as multi-coat metallic options) and interior cabin materials with their corresponding code listings.",
      coord: "top-[5%] left-[54%]",
      icon: <PenTool className="w-4 h-4 text-[#9B2226]" />,
    },
    {
      id: 10,
      title: "EPA Fuel Economy",
      desc: "The official EPA-certified fuel efficiency ratings showing city, highway, and combined MPG (or MPGe for electric vehicles), along with estimated 5-year savings or spending compared to average cars.",
      coord: "top-[11%] left-[80%]",
      icon: <Activity className="w-4 h-4 text-[#9B2226]" />,
    },
    {
      id: 1,
      title: "Exterior Features",
      desc: "Lists the vehicle's standard exterior specifications, including advanced LED lighting systems, auto-dimming heated mirrors, rain-sensing wipers, and protective clearcoat finish.",
      coord: "top-[28%] left-[11%]",
      icon: <Sparkles className="w-4 h-4 text-[#9B2226]" />,
    },
    {
      id: 2,
      title: "Interior Features",
      desc: "Displays the standard cabin equipment, premium seat adjustments, dual-zone climate controls, multifunction GT steering wheel, and advanced infotainment connectivity options.",
      coord: "top-[58%] left-[11%]",
      icon: <Info className="w-4 h-4 text-[#9B2226]" />,
    },
    {
      id: 3,
      title: "Mechanical Features",
      desc: "Details the core powertrain specifications, including motor/engine architecture, transmission configuration, drive-type (AWD/RWD/FWD), suspension damping, and braking technologies.",
      coord: "top-[24%] left-[30%]",
      icon: <Cpu className="w-4 h-4 text-[#9B2226]" />,
    },
    {
      id: 4,
      title: "Safety Features",
      desc: "Details active and passive safety elements such as multi-stage airbag configurations, rigid safety cell structure, electronic stability controls, and integrated parking assist networks.",
      coord: "top-[41%] left-[30%]",
      icon: <Shield className="w-4 h-4 text-[#9B2226]" />,
    },
    {
      id: 5,
      title: "Warranty Information",
      desc: "Presents the manufacturer's backing, including limited vehicle warranties, rust-through corrosion perforation timelines, powertrain guarantees, and complimentary roadside assistance.",
      coord: "top-[56%] left-[30%]",
      icon: <Award className="w-4 h-4 text-[#9B2226]" />,
    },
    {
      id: 7,
      title: "MSRP Base Price",
      desc: "The original Manufacturer's Suggested Retail Price of the vehicle in its base trim level before destination fees, dealer charges, or custom packages are added.",
      coord: "top-[13%] left-[50%]",
      icon: <DollarSign className="w-4 h-4 text-[#9B2226]" />,
    },
    {
      id: 8,
      title: "Packages & Options",
      desc: "A itemized breakdown of all custom factory-installed option groups, driver-assistance software upgrades, premium wheel styles, and aesthetic packages with discrete individual prices.",
      coord: "top-[50%] left-[50%]",
      icon: <HelpCircle className="w-4 h-4 text-[#9B2226]" />,
    },
    {
      id: 9,
      title: "Shipping & Total Price",
      desc: "Combines the base vehicle price, customized options, and the destination/delivery fee to form the official final recommended vehicle retail value.",
      coord: "top-[81%] left-[50%]",
      icon: <Truck className="w-4 h-4 text-[#9B2226]" />,
    },
    {
      id: 11,
      title: "Greenhouse Gas Rating",
      desc: "Government rating assessing tailpipe carbon dioxide and smog emissions on a scale from 1 (worst) to 10 (cleanest), tracking overall eco-footprint.",
      coord: "top-[36%] left-[74%]",
      icon: <Activity className="w-4 h-4 text-[#9B2226]" />,
    },
    {
      id: 12,
      title: "Safety Ratings",
      desc: "Official NHTSA 5-star crash safety ratings mapping occupant protection across frontal barrier, side impact, and rollover safety tests.",
      coord: "top-[50%] left-[74%]",
      icon: <Star className="w-4 h-4 text-[#9B2226]" />,
    },
  ];

  // Sort annotations by their requested order for clean list display
  const orderedList = [13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(id => 
    annotations.find(ann => ann.id === id)!
  );

  return (
    <section id="info" className="py-24 bg-[#FFFFFF] border-b border-zinc-100 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* What is a Porsche Window Sticker? */}
        <div className="mb-16 border-b border-zinc-200/60 pb-16">
          <div className="w-full">
            <div className="inline-flex items-center space-x-2 bg-zinc-100 border border-zinc-200 px-3 py-1.5 mb-4">
              <span className="w-1.5 h-1.5 bg-[#8A6B28]"></span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 font-bold">
                Porsche Heritage & Specifications
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 leading-tight mb-6">
              What is a Porsche Window Sticker?
            </h2>
            <div className="w-full space-y-5">
              <p className="text-zinc-700 text-sm sm:text-base leading-relaxed font-light">
                A Porsche window sticker is the comprehensive document affixed to every new Porsche vehicle delivered in North America. Legally mandated since 1958, it serves as the ultimate proof of authenticity and configuration for a vehicle, preserving its unique manufacturing history.
              </p>
              <p className="text-zinc-700 text-sm sm:text-base leading-relaxed font-light">
                Unlike standard specifications, a Porsche sticker lists every single precision-engineered detail of the car exactly as it rolled out of the Zuffenhausen or Leipzig factories. It acts as a historical ledger detailing the original base MSRP, Paint-to-Sample (PTS) exterior options, individual build codes (such as Weissach Packages or leather stitching), engine tuning, EPA ratings, and the target port of entry.
              </p>
              <p className="text-zinc-700 text-sm sm:text-base leading-relaxed font-light">
                For collectors, buyers, and enthusiasts, verifying this factory window sticker is the single most critical step to guarantee build authenticity, prevent option counterfeiting, and protect the long-term investment value of a classic or modern sports car.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Information Copy */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-zinc-100 border border-zinc-200 px-3 py-1.5 mb-2">
              <span className="w-1.5 h-1.5 bg-[#8A6B28]"></span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 font-bold">
                interactive window sticker schematic
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 leading-tight">
              Anatomy of a Certified Window Sticker
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-light">
              A Window Sticker is the definitive birth certificate of your vehicle. Every custom option, safety rating, fuel estimate, and structural spec has a designated sector on this regulatory spec sheet.
            </p>
            <p className="text-zinc-600 text-sm leading-relaxed font-light">
              Click on any hotspot on the interactive spec layout or select a detail item from the list below to learn how standard, optional, and governmental metrics are officialized.
            </p>

            {/* Interactive Selector with Scroll Area */}
            <div className="mt-8 space-y-2.5 max-h-[580px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-zinc-200">
              {orderedList.map((ann, idx) => {
                const isActive = activePin === ann.id;
                return (
                  <button
                    key={ann.id}
                    onClick={() => setActivePin(ann.id)}
                    className={`w-full text-left p-3.5 transition-all duration-300 border rounded-none ${
                      isActive
                        ? "border-[#9B2226] bg-zinc-50 shadow-[0_4px_20px_rgba(155,34,38,0.06)]"
                        : "border-zinc-200/80 bg-zinc-100/10 hover:border-zinc-300 hover:bg-zinc-100/30"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span
                          className={`flex items-center justify-center w-6 h-6 font-mono text-[10px] font-bold rounded-none border ${
                            isActive
                              ? "bg-[#9B2226] text-white border-[#9B2226]"
                              : "bg-zinc-100 text-zinc-600 border-zinc-200"
                          }`}
                        >
                          {idx + 1}
                        </span>
                        <div className="flex items-center space-x-2">
                          {ann.icon}
                          <span className="font-display text-xs sm:text-sm font-semibold text-zinc-900">
                            {ann.title}
                          </span>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-zinc-400 font-bold uppercase">
                        Point {ann.id}
                      </span>
                    </div>
                    {isActive && (
                      <p className="text-xs text-zinc-600 mt-2.5 pl-9 leading-relaxed font-light border-l border-[#9B2226]/30">
                        {ann.desc}
                      </p>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interactive Illustrated Sticker on Right */}
          <div className="lg:col-span-7 flex flex-col items-center lg:sticky lg:top-28">
            <div className="w-full text-center mb-4 lg:hidden">
              <span className="text-[11px] font-mono text-[#9B2226] uppercase tracking-widest flex items-center justify-center gap-1.5">
                <Eye className="w-3.5 h-3.5" /> Tap the sticker hotspots to explore
              </span>
            </div>

            <div className="relative w-full max-w-[640px] aspect-[4/3] bg-zinc-50 border border-zinc-200 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden rounded-none select-none">
              
              {/* Actual Window Sticker Image Background */}
              <img
                src={porscheStickerImg}
                alt="2022 Porsche 911 Carrera GTS Coupe Window Sticker Specs"
                className="w-full h-full object-fill opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />

              {/* Tint overlay to make hotspots highly readable */}
              <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>

              {/* Interactive Pulsing Hotspots */}
              {annotations.map((ann, idx) => {
                const isActive = activePin === ann.id;
                const displayNum = orderedList.findIndex(item => item.id === ann.id) + 1;
                return (
                  <button
                    key={ann.id}
                    onClick={() => setActivePin(ann.id)}
                    className={`absolute ${ann.coord} flex items-center justify-center w-8 h-8 font-mono text-[11px] font-black rounded-full transition-all duration-300 z-20 -translate-x-1/2 -translate-y-1/2 cursor-pointer shadow-lg ${
                      isActive
                        ? "bg-[#9B2226] text-white scale-125 ring-4 ring-[#9B2226]/30 border-2 border-black"
                        : "bg-black/90 text-[#9B2226] border border-[#9B2226]/40 hover:bg-[#9B2226] hover:text-white hover:scale-110 hover:border-black"
                    }`}
                    title={ann.title}
                  >
                    <span className={`absolute inset-0 rounded-full bg-inherit animate-ping opacity-25 ${isActive ? "duration-1000" : "duration-2000"}`}></span>
                    <span className="relative z-10">{displayNum}</span>
                  </button>
                );
              })}
            </div>

            <div className="mt-4 text-center">
              <p className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                Interactive schematic displays verified 13 key points of a certified spec sheet.
              </p>
            </div>
          </div>

        </div>

        {/* Recently Search Porsche Window Sticker by VIN */}
        <div className="mt-24 pt-16 border-t border-zinc-100">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 mb-2">
                Recently Search Porsche Window Sticker by VIN
              </h3>
              <p className="text-zinc-500 text-xs sm:text-sm">
                Latest vehicle checks for Porsche
              </p>
            </div>
            <div>
              <span className="inline-flex items-center px-4 py-1.5 text-xs font-semibold font-mono text-[#9B2226] border border-[#9B2226]/20 bg-[#9B2226]/5 rounded-none">
                Refreshes daily
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "WP0AC2A98SS294021",
              "WP0AB2Y19SS483012",
              "WP0AC2A82SS184022",
              "WP0AD2A9XPS259041",
              "WP0CB2A98NS273821",
              "WP0AA2Y13PSA12948",
              "WP1AA2AY2ND194821",
              "WP1AB2AY5PD102941",
              "WP0AB2A8XKS182049",
              "WP0AC2A95NS254921",
              "WP0AC2A99SS283011",
              "WP0AA2A94SS249012"
            ].map((vin) => (
              <button
                key={vin}
                onClick={() => onSelectVin && onSelectVin(vin)}
                className="text-center bg-zinc-50/40 p-5 border border-zinc-200/80 hover:border-[#9B2226] hover:bg-zinc-50 transition-all duration-300 group rounded-none focus:outline-none flex justify-center items-center shadow-sm"
              >
                <span className="font-mono text-xs sm:text-sm font-bold text-zinc-700 group-hover:text-[#9B2226] tracking-wider transition-colors">
                  {vin}
                </span>
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
