import React, { useState } from "react";
import { Cpu, Shield, Binary, ChevronRight, ArrowRight, Search, Gauge, History, FileSpreadsheet, BellRing, FileBadge, Car, FileText, ShieldAlert, ShieldCheck } from "lucide-react";
import { LookupRequest } from "../types";
import LookupForm from "./LookupForm";
import FaqSection from "./FaqSection";

interface VinDecoderPageProps {
  onLookup: (request: LookupRequest) => void;
  isLoading: boolean;
  onOpenVinGuide?: () => void;
}

export default function VinDecoderPage({ onLookup, isLoading, onOpenVinGuide }: VinDecoderPageProps) {
  const [hoveredPart, setHoveredPart] = useState<string | null>(null);

  return (
    <div className="bg-[#FFFFFF] min-h-screen text-zinc-900 font-sans">

      {/* Hero Section - mirrors Warranty Page structure */}
      <section className="relative min-h-[640px] flex items-center bg-[#FFFFFF] py-16 lg:py-24 overflow-hidden border-b border-zinc-200/50 cyber-grid">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFF]/90 to-transparent w-[60%] z-10"></div>
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:16px_16px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6 lg:pr-6">
              <div className="inline-flex items-center space-x-2 bg-zinc-100 border border-zinc-200 px-3 py-1.5 rounded-none">
                <Binary className="w-4 h-4 text-[#9B2226] animate-pulse" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 font-bold">
                  OFFICIAL VIN DECODER
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 leading-[1.05]">
                Porsche VIN Decoder <br />
                <span className="premium-gradient-text">&amp; Specs Retrieval</span>
              </h1>

              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed max-w-lg font-sans">
                Instantly translate any 17-character Porsche chassis VIN into factory build sheets, original optional equipment descriptions, paint configurations, and factory MSRP lines.
              </p>

              {/* Status Points */}
              <div className="flex flex-col space-y-3 pt-2 text-xs font-mono text-zinc-600">
                <div className="flex items-center space-x-3 bg-zinc-50/60 border border-zinc-200 px-4 py-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8A6B28]"></div>
                  <span>DECODE MANUFACTURING YEAR & ASSEMBLY PLANT</span>
                </div>
                <div className="flex items-center space-x-3 bg-zinc-50/60 border border-zinc-200 px-4 py-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8A6B28]"></div>
                  <span>RECOVER FACTORY ENGINE & TRANSMISSION CODES</span>
                </div>
                <div className="flex items-center space-x-3 bg-zinc-50/60 border border-zinc-200 px-4 py-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8A6B28]"></div>
                  <span>IDENTIFY ORIGINAL OPTIONAL EQUIPMENT PACKAGES</span>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-6 flex justify-center">
              <LookupForm
                onLookup={onLookup}
                isLoading={isLoading}
                onOpenVinGuide={onOpenVinGuide}
                variant="solid"
              />
            </div>

          </div>
        </div>
      </section>

      {/* What is a Porsche VIN Decoder? Section */}
      <section className="bg-zinc-50 py-16 sm:py-20 border-b border-zinc-200/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Column: Context Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center space-x-2 bg-zinc-100 border border-zinc-200 px-3 py-1 rounded-none">
                <span className="w-1.5 h-1.5 bg-[#8A6B28] rounded-full"></span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 font-bold">
                  CHASSIS INTELLIGENCE
                </span>
              </div>

              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-900 tracking-tight leading-tight">
                What is a Porsche <br />
                <span className="premium-gradient-text">VIN Number?</span>
              </h2>

              <div className="space-y-4 text-zinc-600 text-sm sm:text-base leading-relaxed">
                <p>
                  A Porsche VIN decoder is a digital lookup utility that translates the unique 17-digit Vehicle Identification Number stamped on your chassis into detailed factory records. It breaks down technical configurations, manufacturing plants, engine versions, and structural options originally designated by Porsche AG during assembly.
                </p>
                <p>
                  Decoding your VIN is the best way to verify option packages, retrieve original paint colors, and double-check standard options when buying, selling, or researching a pre-owned Porsche vehicle.
                </p>
              </div>
            </div>

            {/* Right Column: Key parameters card */}
            <div className="lg:col-span-5">
              <div className="bg-zinc-100/40 border border-zinc-200 p-6 sm:p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#9B2226]/5 rounded-full blur-2xl"></div>

                <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#9B2226] mb-6 flex items-center space-x-2 border-b border-zinc-200 pb-3">
                  <Shield className="w-4 h-4" />
                  <span className="underline decoration-[#9B2226] decoration-2 underline-offset-4">DECODED DATA SHEET INFO</span>
                </h3>

                <ul className="space-y-4">
                  {[
                    { label: "Factory Option List", desc: "Reveals all optional packages, performance groups, and material specs." },
                    { label: "Paint & Upholstery Codes", desc: "Verifies original exterior paint name, formulation code, and interior leather trims." },
                    { label: "Production Stamp", desc: "Identifies assembly factory location (e.g. Zuffenhausen) and production date." },
                    { label: "MSRP Breakdown", desc: "Reconstructs original base pricing and total retail values." }
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3.5 group">
                      <div className="w-5 h-5 rounded-none border border-zinc-300 bg-zinc-100 flex items-center justify-center text-[#9B2226] group-hover:border-[#9B2226] transition-colors mt-0.5 flex-shrink-0">
                        <span className="text-[14px] leading-none font-bold">▪</span>
                      </div>
                      <div>
                        <h4 className="text-xs font-mono font-bold text-zinc-900 uppercase tracking-wider group-hover:text-[#9B2226] transition-colors">
                          {item.label}
                        </h4>
                        <p className="text-[11px] text-zinc-500 leading-normal mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* How to Read a Porsche VIN Number? Section */}
      <section className="bg-[#FFFFFF] py-16 sm:py-20 border-b border-zinc-200/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center space-x-2 bg-zinc-100 border border-zinc-200 px-3 py-1 rounded-none justify-center">
              <span className="w-1.5 h-1.5 bg-[#8A6B28] rounded-full"></span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 font-bold">
                BREAKDOWN DIAGRAM
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-900 tracking-tight leading-tight">
              How to Read a <span className="premium-gradient-text">Porsche VIN Number?</span>
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Every position in your 17-character Porsche VIN represents specific factory parameters. Hover over the VIN parts below to explore their factory meaning.
            </p>
          </div>

          {/* Interactive VIN Display */}

          <div className="max-w-6xl mx-auto bg-white text-zinc-900 p-8 sm:p-10 border border-zinc-200 text-center space-y-8 shadow-[0_8px_32px_rgba(0,0,0,0.08)] relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-[#8A6B28] via-[#9B2226] to-transparent"></div>
            
            <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
              SAMPLE PORSCHE CHASSIS VIN
            </p>

            {/* Interactive Characters Grid */}
            <div className="flex flex-wrap justify-center items-baseline gap-1 sm:gap-2.5 font-display text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight select-none">
              {[
                { label: "W", id: "wmi-1", pos: "1", type: "WMI" },
                { label: "P", id: "wmi-2", pos: "2", type: "WMI" },
                { label: "0", id: "wmi-3", pos: "3", type: "WMI" },
                { label: "A", id: "vds-1", pos: "4", type: "VDS" },
                { label: "A", id: "vds-2", pos: "5", type: "VDS" },
                { label: "2", id: "vds-3", pos: "6", type: "VDS" },
                { label: "A", id: "vds-4", pos: "7", type: "VDS" },
                { label: "9", id: "vds-5", pos: "8", type: "VDS" },
                { label: "2", id: "check", pos: "9", type: "CHECK" },
                { label: "N", id: "year", pos: "10", type: "VIS" },
                { label: "S", id: "plant", pos: "11", type: "VIS" },
                { label: "2", id: "serial-1", pos: "12", type: "SERIAL" },
                { label: "0", id: "serial-2", pos: "13", type: "SERIAL" },
                { label: "5", id: "serial-3", pos: "14", type: "SERIAL" },
                { label: "4", id: "serial-4", pos: "15", type: "SERIAL" },
                { label: "7", id: "serial-5", pos: "16", type: "SERIAL" },
                { label: "1", id: "serial-6", pos: "17", type: "SERIAL" }
              ].map((char, index) => {
                const isHovered = hoveredPart === char.type || hoveredPart === char.id;
                return (
                  <span
                    key={index}
                    onMouseEnter={() => setHoveredPart(char.id)}
                    onMouseLeave={() => setHoveredPart(null)}
                    className={`cursor-pointer transition-all duration-200 py-1.5 px-0.5 sm:px-1 border-b-4 ${
                      isHovered
                        ? "text-[#9B2226] border-[#9B2226] scale-110"
                        : "text-zinc-900 border-transparent hover:text-[#8A6B28]"
                    }`}
                  >
                    {char.label}
                  </span>
                );
              })}
            </div>

            {/* Position helper indicators */}
            <div className="grid grid-cols-4 gap-4 max-w-xl mx-auto pt-4 text-[10px] sm:text-xs font-mono border-t border-zinc-200 text-zinc-600">
              <div 
                onMouseEnter={() => setHoveredPart("WMI")}
                onMouseLeave={() => setHoveredPart(null)}
                className={`py-2 px-1 border transition-colors cursor-pointer ${hoveredPart === "WMI" ? "bg-zinc-50 border-[#8A6B28] text-zinc-900" : "border-zinc-200"}`}
              >
                <span className="block text-zinc-400 font-bold uppercase tracking-wider mb-0.5">Pos 1–3</span>
                <span className="block font-bold text-zinc-700">WMI Section</span>
              </div>
              <div 
                onMouseEnter={() => setHoveredPart("VDS")}
                onMouseLeave={() => setHoveredPart(null)}
                className={`py-2 px-1 border transition-colors cursor-pointer ${hoveredPart === "VDS" ? "bg-zinc-50 border-[#8A6B28] text-zinc-900" : "border-zinc-200"}`}
              >
                <span className="block text-[#8A6B28] font-bold uppercase tracking-wider mb-0.5">Pos 4–8</span>
                <span className="block font-bold text-zinc-700">VDS Section</span>
              </div>
              <div 
                onMouseEnter={() => setHoveredPart("CHECK")}
                onMouseLeave={() => setHoveredPart(null)}
                className={`py-2 px-1 border transition-colors cursor-pointer ${hoveredPart === "CHECK" ? "bg-zinc-50 border-[#9B2226] text-zinc-900" : "border-zinc-200"}`}
              >
                <span className="block text-[#9B2226] font-bold uppercase tracking-wider mb-0.5">Pos 9</span>
                <span className="block font-bold text-zinc-700">Check Digit</span>
              </div>
              <div 
                onMouseEnter={() => setHoveredPart("VIS")}
                onMouseLeave={() => setHoveredPart(null)}
                className={`py-2 px-1 border transition-colors cursor-pointer ${hoveredPart === "VIS" ? "bg-zinc-50 border-[#8A6B28] text-zinc-900" : "border-zinc-200"}`}
              >
                <span className="block text-zinc-400 font-bold uppercase tracking-wider mb-0.5">Pos 10–17</span>
                <span className="block font-bold text-zinc-700">VIS Section</span>
              </div>
            </div>
          </div>

          {/* Explanation Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                id: "wmi-1",
                label: "W (Position 1)",
                title: "Country of Origin",
                desc: "Identifies the manufacturing location of the vehicle. For Porsche vehicles built in Germany, this begins with W."
              },
              {
                id: "wmi-2",
                label: "P0 (Positions 2-3)",
                title: "Manufacturer Identification",
                desc: "Represents Dr. Ing. h.c. F. Porsche AG as the verified official vehicle manufacturer."
              },
              {
                id: "vds-1",
                label: "AA2A9 (Positions 4-8)",
                title: "Vehicle Descriptor Section (VDS)",
                desc: "Encodes distinct chassis properties such as the vehicle model line, engine size/configuration, and restraint systems."
              },
              {
                id: "check",
                label: "2 (Position 9)",
                title: "Security Check Digit",
                desc: "A mathematical check digit derived to verify the absolute legitimacy of the 17-character VIN sequence."
              },
              {
                id: "year",
                label: "N (Position 10)",
                title: "Model Year Code",
                desc: "Specifies the factory year designation (e.g. N = 2022 model series, P = 2023, etc.)."
              },
              {
                id: "plant",
                label: "S (Position 11)",
                title: "Assembly Plant Code",
                desc: "Indicates the assembly location where the chassis was completed (e.g., S = Stuttgart-Zuffenhausen plant)."
              },
              {
                id: "serial-1",
                label: "205471 (Positions 12-17)",
                title: "Sequential Serial Number",
                desc: "The unique production sequence serial code assigned as the vehicle rolled off the assembly line."
              }
            ].map((card, idx) => {
              const isHovered = hoveredPart === card.id || hoveredPart === "WMI" && (card.id === "wmi-1" || card.id === "wmi-2") || hoveredPart === "VDS" && card.id === "vds-1" || hoveredPart === "CHECK" && card.id === "check" || hoveredPart === "VIS" && (card.id === "year" || card.id === "plant" || card.id === "serial-1");
              return (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredPart(card.id)}
                  onMouseLeave={() => setHoveredPart(null)}
                  className={`bg-white border p-6 flex flex-col justify-between transition-all duration-300 relative rounded-none hover:shadow-md ${
                    isHovered
                      ? "border-[#8A6B28] bg-zinc-50/40 shadow-xs -translate-y-1"
                      : "border-zinc-200"
                  } ${card.id === "serial-1" ? "md:col-span-2 lg:col-span-3" : ""}`}
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#9B2226]">
                      {card.label}
                    </span>
                    <h4 className="font-display text-base font-extrabold text-zinc-950 tracking-tight">
                      {card.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Introductory Content */}
          <div className="max-w-4xl mx-auto space-y-5 text-sm sm:text-base text-zinc-600 leading-relaxed">
            <p className="bg-zinc-50 border border-zinc-200 px-5 py-3 text-[13px] text-zinc-500 font-sans italic">
              Note that the letters <strong className="text-zinc-700 not-italic">I</strong>, <strong className="text-zinc-700 not-italic">O</strong>, and <strong className="text-zinc-700 not-italic">Q</strong> are not included in a VIN to avoid confusion with the numbers <strong className="text-zinc-700 not-italic">1 (One)</strong>, <strong className="text-zinc-700 not-italic">0 (Zero)</strong>, and <strong className="text-zinc-700 not-italic">9 (Nine)</strong>.
            </p>
            <p>
              Each digit of the 17-digit characters provides information about Porsche's specific details. These characters are also grouped into three sections to make decoding easier, they are:
            </p>
            <ul className="space-y-4 pl-2">
              <li className="flex items-start space-x-3">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-[#8A6B28] flex-shrink-0"></span>
                <span>
                  <strong className="text-zinc-900">World Manufacturer Identifier (WMI):</strong> This includes the first three characters (characters 1 – 3) and signifies the vehicle's country of origin and manufacturer.
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-[#8A6B28] flex-shrink-0"></span>
                <span>
                  <strong className="text-zinc-900">Vehicle Descriptor Section (VDS):</strong> This section includes the 4th to 8th characters (characters 4 – 8) and contains information about the vehicle's make, engine specs, model, and more.
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-[#8A6B28] flex-shrink-0"></span>
                <span>
                  <strong className="text-zinc-900">Vehicle Identifier Section (VIS):</strong> Here, you will find the 9th to 17th characters (characters 9 – 17), which encode details like the model year, manufacturing plant code, and a serial number unique to each vehicle.
                </span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* 2008 Porsche 911 VIN Character Breakdown Section */}
      <section className="bg-zinc-50 py-16 sm:py-20 border-b border-zinc-200/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center space-x-2 bg-white border border-zinc-200 px-3 py-1 rounded-none justify-center">
              <span className="w-1.5 h-1.5 bg-[#9B2226] rounded-full"></span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 font-bold">
                REAL-WORLD EXAMPLE
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-900 tracking-tight leading-tight">
              In this section, we will break down each character of the VIN using a{" "}
              <span className="premium-gradient-text">2008 Porsche 911 VIN</span>
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Sample VIN: <span className="font-mono font-bold text-zinc-900 tracking-widest bg-white border border-zinc-200 px-3 py-1 inline-block mt-1">WP0AA29988S720067</span>
            </p>
          </div>

          {/* Position Reference Grid */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 border border-zinc-200 bg-white overflow-hidden">
              {/* Header row */}
              <div className="bg-zinc-900 text-white px-4 py-2.5 text-[10px] font-mono font-bold uppercase tracking-widest">Position</div>
              <div className="bg-zinc-900 text-white px-4 py-2.5 text-[10px] font-mono font-bold uppercase tracking-widest">Character</div>
              <div className="bg-zinc-900 text-white px-4 py-2.5 text-[10px] font-mono font-bold uppercase tracking-widest border-l border-zinc-700">Position</div>
              <div className="bg-zinc-900 text-white px-4 py-2.5 text-[10px] font-mono font-bold uppercase tracking-widest">Character</div>
              {/* Data rows — 17 chars of WP0AA29988S720067 split into two columns */}
              {[
                { pos: "1st", char: "W", pos2: "10th", char2: "8" },
                { pos: "2nd", char: "P", pos2: "11th", char2: "S" },
                { pos: "3rd", char: "0", pos2: "12th", char2: "7" },
                { pos: "4th", char: "A", pos2: "13th", char2: "2" },
                { pos: "5th", char: "A", pos2: "14th", char2: "0" },
                { pos: "6th", char: "2", pos2: "15th", char2: "0" },
                { pos: "7th", char: "9", pos2: "16th", char2: "6" },
                { pos: "8th", char: "9", pos2: "17th", char2: "7" },
                { pos: "9th", char: "8", pos2: null, char2: null },
              ].map((row, idx) => (
                <React.Fragment key={idx}>
                  <div className={`px-4 py-2.5 text-[11px] font-mono text-zinc-500 border-t border-zinc-100 ${idx % 2 === 0 ? "bg-white" : "bg-zinc-50/60"}`}>{row.pos}</div>
                  <div className={`px-4 py-2.5 text-sm font-mono font-bold text-zinc-900 border-t border-zinc-100 ${idx % 2 === 0 ? "bg-white" : "bg-zinc-50/60"}`}>{row.char}</div>
                  <div className={`px-4 py-2.5 text-[11px] font-mono text-zinc-500 border-t border-l border-zinc-100 ${idx % 2 === 0 ? "bg-white" : "bg-zinc-50/60"}`}>{row.pos2 ?? "—"}</div>
                  <div className={`px-4 py-2.5 text-sm font-mono font-bold text-zinc-900 border-t border-zinc-100 ${idx % 2 === 0 ? "bg-white" : "bg-zinc-50/60"}`}>{row.char2 ?? "—"}</div>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Per-Character Breakdown Cards */}
          <div className="max-w-6xl mx-auto space-y-6">

            {/* Position 1 — W */}
            <div className="bg-white border border-zinc-200 p-6 sm:p-8 space-y-3">
              <div className="flex items-center space-x-3">
                <span className="font-mono text-3xl font-black text-zinc-900 border border-zinc-200 w-12 h-12 flex items-center justify-center bg-zinc-50">W</span>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#9B2226]">Position 1</span>
                  <h3 className="font-display text-base font-extrabold text-zinc-900">Country of Manufacture</h3>
                </div>
              </div>
              <p className="text-sm text-zinc-600 leading-relaxed">
                The first character <strong className="text-zinc-900">(W)</strong> indicates where the Porsche was manufactured. This helps identify the country of production. The sample VIN starting with "W" means the Porsche was built in <strong className="text-zinc-900">Germany</strong>.
              </p>
            </div>

            {/* Position 2 — P */}
            <div className="bg-white border border-zinc-200 p-6 sm:p-8 space-y-3">
              <div className="flex items-center space-x-3">
                <span className="font-mono text-3xl font-black text-zinc-900 border border-zinc-200 w-12 h-12 flex items-center justify-center bg-zinc-50">P</span>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#9B2226]">Position 2</span>
                  <h3 className="font-display text-base font-extrabold text-zinc-900">Vehicle Manufacturer</h3>
                </div>
              </div>
              <p className="text-sm text-zinc-600 leading-relaxed">
                This identifies the vehicle's manufacturer. For Porsches, this is typically represented by <strong className="text-zinc-900">"P"</strong>, as in the sample VIN.
              </p>
            </div>

            {/* Position 3 — 0, with sub-options */}
            <div className="bg-white border border-zinc-200 p-6 sm:p-8 space-y-4">
              <div className="flex items-center space-x-3">
                <span className="font-mono text-3xl font-black text-zinc-900 border border-zinc-200 w-12 h-12 flex items-center justify-center bg-zinc-50">0</span>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#9B2226]">Position 3</span>
                  <h3 className="font-display text-base font-extrabold text-zinc-900">Vehicle Type / Division</h3>
                </div>
              </div>
              <p className="text-sm text-zinc-600 leading-relaxed">
                The third character <strong className="text-zinc-900">(0)</strong> shows the vehicle type or the division. Here are the two common characters:
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { code: "0", label: "Sports / Passenger" },
                  { code: "1", label: "SUV" },
                ].map((item) => (
                  <div key={item.code} className="border border-zinc-200 bg-zinc-50 px-4 py-3 flex items-center space-x-3">
                    <span className="font-mono text-base font-black text-[#8A6B28]">{item.code}</span>
                    <span className="text-[11px] text-zinc-700 font-medium">— {item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Position 4 — A, body type */}
            <div className="bg-white border border-zinc-200 p-6 sm:p-8 space-y-4">
              <div className="flex items-center space-x-3">
                <span className="font-mono text-3xl font-black text-zinc-900 border border-zinc-200 w-12 h-12 flex items-center justify-center bg-zinc-50">A</span>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#9B2226]">Position 4</span>
                  <h3 className="font-display text-base font-extrabold text-zinc-900">Porsche Body Type</h3>
                </div>
              </div>
              <p className="text-sm text-zinc-600 leading-relaxed">
                This represents the Porsche body type. Some common characters include:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { code: "A", label: "911 Coupe" },
                  { code: "B", label: "964/996/997 Targa" },
                  { code: "C", label: "944 Cabriolet" },
                  { code: "D", label: "993 Targa" },
                  { code: "L", label: "911 3G Targa/Cabrio" },
                  { code: "J", label: "902 up to MY1990" },
                ].map((item) => (
                  <div key={item.code} className="border border-zinc-200 bg-zinc-50 px-4 py-3 flex items-center space-x-3">
                    <span className="font-mono text-base font-black text-[#8A6B28]">{item.code}</span>
                    <span className="text-[11px] text-zinc-700 font-medium">— {item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Position 5 — A, engine type */}
            <div className="bg-white border border-zinc-200 p-6 sm:p-8 space-y-3">
              <div className="flex items-center space-x-3">
                <span className="font-mono text-3xl font-black text-zinc-900 border border-zinc-200 w-12 h-12 flex items-center justify-center bg-zinc-50">A</span>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#9B2226]">Position 5</span>
                  <h3 className="font-display text-base font-extrabold text-zinc-900">Engine Type</h3>
                </div>
              </div>
              <p className="text-sm text-zinc-600 leading-relaxed">
                This represents the engine type installed at the factory. The code encodes the engine family, displacement class, and fuel system designation assigned during production.
              </p>
            </div>

            {/* Position 9 — 8, check digit */}
            <div className="bg-white border border-zinc-200 p-6 sm:p-8 space-y-3">
              <div className="flex items-center space-x-3">
                <span className="font-mono text-3xl font-black text-zinc-900 border border-zinc-200 w-12 h-12 flex items-center justify-center bg-zinc-50">8</span>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#9B2226]">Position 9</span>
                  <h3 className="font-display text-base font-extrabold text-zinc-900">Check Digit</h3>
                </div>
              </div>
              <p className="text-sm text-zinc-600 leading-relaxed">
                The check digit <strong className="text-zinc-900">(8)</strong> verifies that the VIN is authentic and not a fake string of random characters. It is calculated using a specific algorithm developed by the <strong className="text-zinc-900">U.S. Department of Transportation</strong>.
              </p>
            </div>

            {/* Position 10 — 8, model year with year table */}
            <div className="bg-white border border-zinc-200 p-6 sm:p-8 space-y-5">
              <div className="flex items-center space-x-3">
                <span className="font-mono text-3xl font-black text-zinc-900 border border-zinc-200 w-12 h-12 flex items-center justify-center bg-zinc-50">8</span>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#9B2226]">Position 10</span>
                  <h3 className="font-display text-base font-extrabold text-zinc-900">Model Year</h3>
                </div>
              </div>
              <p className="text-sm text-zinc-600 leading-relaxed">
                The tenth character <strong className="text-zinc-900">(8)</strong> indicates the model year and alternates between numbers and letters. Each letter represents a specific year; <strong className="text-zinc-900">'8'</strong> from the VIN example, signifies the Porsche is a <strong className="text-zinc-900">2008</strong> model.
              </p>
              <p className="text-[11px] text-zinc-500 font-mono">Here's a table that can help you quickly identify any car's model year:</p>
              <div className="grid grid-cols-5 border border-zinc-200 overflow-hidden text-[10px] font-mono">
                <div className="bg-zinc-900 text-white px-3 py-2 font-bold uppercase tracking-wider">Code/Year</div>
                <div className="bg-zinc-900 text-white px-3 py-2 font-bold uppercase tracking-wider">Code/Year</div>
                <div className="bg-zinc-900 text-white px-3 py-2 font-bold uppercase tracking-wider">Code/Year</div>
                <div className="bg-zinc-900 text-white px-3 py-2 font-bold uppercase tracking-wider">Code/Year</div>
                <div className="bg-zinc-900 text-white px-3 py-2 font-bold uppercase tracking-wider">Code/Year</div>
                {[
                  ["A/1980","L/1990","Y/2000","A/2010","L/2020"],
                  ["B/1981","M/1991","1/2001","B/2011","M/2021"],
                  ["C/1982","N/1992","2/2002","C/2012","N/2022"],
                  ["D/1983","P/1993","3/2003","D/2013","P/2023"],
                  ["E/1984","R/1994","4/2004","E/2014","R/2024"],
                  ["F/1985","S/1995","5/2005","F/2015","S/2025"],
                  ["G/1986","T/1996","6/2006","G/2016","T/2026"],
                  ["H/1987","V/1997","7/2007","H/2017","V/2027"],
                  ["J/1988","W/1998","8/2008","J/2018","W/2028"],
                  ["K/1989","X/1999","9/2009","K/2019","X/2029"],
                ].flat().map((cell, i) => (
                  <div key={i} className={`px-3 py-2 border-t border-zinc-100 ${cell.startsWith("8/2008") ? "bg-[#8A6B28]/10 text-[#8A6B28] font-bold" : i % 10 < 5 ? "bg-white text-zinc-700" : "bg-zinc-50/60 text-zinc-700"}`}>
                    {cell}
                  </div>
                ))}
              </div>
            </div>

            {/* Position 11 — S, assembly plant */}
            <div className="bg-white border border-zinc-200 p-6 sm:p-8 space-y-4">
              <div className="flex items-center space-x-3">
                <span className="font-mono text-3xl font-black text-zinc-900 border border-zinc-200 w-12 h-12 flex items-center justify-center bg-zinc-50">S</span>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#9B2226]">Position 11</span>
                  <h3 className="font-display text-base font-extrabold text-zinc-900">Assembly / Manufacturing Plant</h3>
                </div>
              </div>
              <p className="text-sm text-zinc-600 leading-relaxed">
                The eleventh character <strong className="text-zinc-900">(S)</strong> shows the vehicle's assembly or manufacturing plant. For instance, the sample VIN has "S" as the 11th character, depicting the Porsche assembled in <strong className="text-zinc-900">Stuttgart</strong>. Other codes include:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { code: "U", label: "Uusikauupunki" },
                  { code: "L", label: "Leipzig" },
                  { code: "K", label: "Osnabruck VW factory" },
                  { code: "N", label: "Neckarsulm Audi factory" },
                  { code: "D", label: "Bratislava VW factory" },
                  { code: "S", label: "Stuttgart-Zuffenhausen" },
                ].map((item) => (
                  <div key={item.code} className="border border-zinc-200 bg-zinc-50 px-4 py-3 flex items-center space-x-3">
                    <span className="font-mono text-base font-black text-[#8A6B28]">{item.code}</span>
                    <span className="text-[11px] text-zinc-700 font-medium">— {item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Position 4+8 — Model ID */}
            <div className="bg-white border border-zinc-200 p-6 sm:p-8 space-y-3">
              <div className="flex items-center space-x-3">
                <span className="font-mono text-2xl font-black text-zinc-900 border border-zinc-200 w-12 h-12 flex items-center justify-center bg-zinc-50 leading-none">4+8</span>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#9B2226]">Positions 4 & 8 Combined</span>
                  <h3 className="font-display text-base font-extrabold text-zinc-900">Porsche Model ID</h3>
                </div>
              </div>
              <p className="text-sm text-zinc-600 leading-relaxed">
                This position and the 8th position are read together to find the Porsche model ID. The combination of these two characters precisely identifies the model line for parts matching, service records, and configuration verification.
              </p>
            </div>

            {/* Positions 12–17 — Serial */}
            <div className="bg-white border border-zinc-200 p-6 sm:p-8 space-y-3">
              <div className="flex items-center space-x-3">
                <span className="font-mono text-xl font-black text-zinc-900 border border-zinc-200 w-12 h-12 flex items-center justify-center bg-zinc-50 leading-none tracking-tighter">12–17</span>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#9B2226]">Positions 12 – 17</span>
                  <h3 className="font-display text-base font-extrabold text-zinc-900">Unique Sequential Serial Number</h3>
                </div>
              </div>
              <p className="text-sm text-zinc-600 leading-relaxed">
                These characters <strong className="text-zinc-900">(720067)</strong> make up the unique sequential number (serial number) of the Porsche. This distinguishes it uniquely from other Porsches with the same model, trim, etc., manufactured in the same plant.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Where is the VIN Number on a Porsche? Section */}
      <section className="bg-[#FFFFFF] py-16 sm:py-20 border-b border-zinc-200/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center space-x-2 bg-zinc-100 border border-zinc-200 px-3 py-1 rounded-none justify-center">
              <span className="w-1.5 h-1.5 bg-[#8A6B28] rounded-full"></span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 font-bold">
                VIN LOCATION GUIDE
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-900 tracking-tight leading-tight">
              Where is the VIN Number{" "}
              <span className="premium-gradient-text">on a Porsche?</span>
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              The VIN represents a way to identify a vehicle. If you're unsure about your Porsche VIN location, check the following places:
            </p>
          </div>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto">

            {/* Left: Bullet list of VIN locations */}
            <div className="lg:col-span-7 space-y-6">
              <ul className="space-y-4">
                {[
                  { text: "On the dashboard of the vehicle, near the windshield." },
                  { text: "On the driver's side door pillar." },
                  { text: "On the car's title, registration, maintenance book, or the auto insurance policy." },
                  { text: "For most Porsches, the VIN can be found on the driver's side windshield post." },
                  {
                    text: "For the 1973 – 1998 Porsche 911, the VIN is located on the driver's side windshield post. The VIN can also be located inside the front luggage compartment under the rug, to the right hood latch.",
                    highlighted: true
                  },
                  { text: "From the 1999 models, the VIN is located on the left windshield pillar." },
                  {
                    text: "For the Porsche 912 and 930, the VIN is located on the driver's side windshield post or the luggage compartment.",
                    highlighted: true
                  },
                  {
                    text: "The 914 model VIN can also be found on the right front wheel and on the right headlamp housing.",
                    highlighted: true
                  },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3 group">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-[#8A6B28] flex-shrink-0 group-hover:bg-[#9B2226] transition-colors"></span>
                    <span className={`text-sm leading-relaxed ${item.highlighted ? "text-[#9B2226] font-medium" : "text-zinc-600"}`}>
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="text-sm text-zinc-600 leading-relaxed border-l-2 border-[#8A6B28] pl-4 py-1 bg-zinc-50">
                Now that you've found the VIN, it's time to retrieve all the information available from the VIN.
              </p>

              <div className="pt-2">
                <a
                  href="/"
                  className="inline-block bg-[#8A6B28] hover:bg-[#7A5C1E] text-white text-center px-8 py-3.5 font-display font-bold text-xs tracking-widest uppercase transition-colors duration-200"
                >
                  Decode your Porsche VIN now
                </a>
              </div>
            </div>

            {/* Right: Location reference cards */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-zinc-50 border border-zinc-200 p-6 space-y-5">
                <h3 className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-500 border-b border-zinc-200 pb-3">
                  WHERE IS THE VIN NUMBER LOCATED?
                </h3>

                <div className="space-y-3">
                  {[
                    {
                      location: "Driver's Side Dashboard",
                      detail: "Viewable through the windshield",
                      icon: "◈"
                    },
                    {
                      location: "Driver's Side Door Frame",
                      detail: "Looks like a sticker on the door jamb",
                      icon: "◈"
                    },
                    {
                      location: "Front Luggage Compartment",
                      detail: "Under the rug near the right hood latch (911 pre-1999)",
                      icon: "◈"
                    },
                    {
                      location: "Left Windshield Pillar",
                      detail: "Standard location from 1999 models onward",
                      icon: "◈"
                    },
                  ].map((card, idx) => (
                    <div key={idx} className="flex items-start space-x-3 bg-white border border-zinc-200 px-4 py-3 hover:border-[#8A6B28] transition-colors group">
                      <span className="text-[#8A6B28] font-mono text-base mt-0.5 flex-shrink-0 group-hover:text-[#9B2226] transition-colors">{card.icon}</span>
                      <div>
                        <p className="text-xs font-bold text-zinc-900 font-display">{card.location}</p>
                        <p className="text-[11px] text-zinc-500 mt-0.5 leading-snug">{card.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-zinc-200 pt-4">
                  <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-500 mb-2">OTHER PLACES TO FIND VIN</p>
                  <ul className="space-y-1.5">
                    {[
                      "Vehicle title (DMV) records",
                      "Vehicle insurance records",
                      "Vehicle registration card",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-[11px] text-zinc-600">
                        <span className="w-1 h-1 rounded-full bg-zinc-400 flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Why Should I Use a Porsche VIN Decoder? Section */}
      <section className="bg-zinc-50 py-16 sm:py-20 border-b border-zinc-200/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center space-x-2 bg-white border border-zinc-200 px-3 py-1 rounded-none justify-center">
              <span className="w-1.5 h-1.5 bg-[#8A6B28] rounded-full"></span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 font-bold">
                DECISION SUPPORT
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-900 tracking-tight leading-tight">
              Why Should I Use a <span className="premium-gradient-text">Porsche VIN Decoder?</span>
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Wondering why you should decode your Porsche VIN? Here are some key reasons that show how decoding can help you make smarter, safer car decisions.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Confirm Vehicle Identity",
                desc: "A Porsche VIN decoder helps you confirm the exact make, model, year, and body style. This ensures the car matches what's advertised and protects you from buying the wrong or misrepresented vehicle.",
                icon: Search,
                accent: "text-[#8A6B28] bg-[#8A6B28]/5"
              },
              {
                title: "Check Factory Specifications",
                desc: "By decoding the VIN, you can view the original factory specs of the Porsche. This includes engine type, transmission, trim level, and more—helpful when comparing features or checking for factory authenticity.",
                icon: FileSpreadsheet,
                accent: "text-[#9B2226] bg-[#9B2226]/5"
              },
              {
                title: "Reveal Vehicle History",
                desc: "Our VIN decoder connects to vehicle history databases to show past accidents, ownership changes, or title issues. This helps you avoid cars with hidden damage or serious problems that affect value and safety.",
                icon: History,
                accent: "text-[#8A6B28] bg-[#8A6B28]/5"
              },
              {
                title: "Detect Mileage Fraud",
                desc: "Some VIN decoder reports flag mileage inconsistencies. If the current mileage doesn't match past records, it may have been rolled back. This protects you from overpaying for a high-mileage Porsche.",
                icon: Gauge,
                accent: "text-[#9B2226] bg-[#9B2226]/5"
              },
              {
                title: "Verify Recall and Service Information",
                desc: "A Porsche VIN decoder can show if the Porsche has had any manufacturer recalls or missed service updates. This helps keep the car safe and ensures you're aware of any urgent repair needs.",
                icon: BellRing,
                accent: "text-[#8A6B28] bg-[#8A6B28]/5"
              },
              {
                title: "Useful for Insurance and Registration",
                desc: "Insurers and registration offices often need exact vehicle details. A VIN decoder gives you accurate info quickly, saving time and reducing errors when filling out documents or getting quotes.",
                icon: FileBadge,
                accent: "text-[#9B2226] bg-[#9B2226]/5"
              }
            ].map((card, idx) => {
              const IconComp = card.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-zinc-200 p-6 flex flex-col justify-between transition-all duration-300 relative rounded-none hover:shadow-md hover:border-[#8A6B28] hover:-translate-y-1 group"
                >
                  <div className="space-y-4">
                    <div className={`w-10 h-10 flex items-center justify-center border border-zinc-200/60 ${card.accent} group-hover:border-[#8A6B28] transition-colors`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-display text-base font-extrabold text-zinc-950 tracking-tight group-hover:text-[#9B2226] transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Common Uses of the Porsche VIN Number Section */}
      <section className="bg-[#FFFFFF] py-16 sm:py-20 border-b border-zinc-200/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center space-x-2 bg-zinc-100 border border-zinc-200 px-3 py-1 rounded-none justify-center">
              <span className="w-1.5 h-1.5 bg-[#9B2226] rounded-full"></span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 font-bold">
                CHASSIS APPLICATIONS
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-900 tracking-tight leading-tight">
              Common Uses of the <span className="premium-gradient-text">Porsche VIN Number</span>
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              The VIN can serve different purposes depending on what you're searching for - basic specs, detailed specs and features, or the vehicle history. Some of the common uses of the Porsche VIN are:
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Vehicle Verification",
                desc: "The VIN can be decoded to reveal the vehicle profile like the year, make, model, engine etc. This helps ensure the vehicle matches its factory description and as advertised by the seller.",
                icon: Car,
                accent: "text-[#9B2226] bg-[#9B2226]/5"
              },
              {
                title: "Vehicle Registration",
                desc: "A vehicle registration is only possible by providing the VIN. This is mandatory before you can legally drive the vehicle on the road. Documents like ownership papers, bills of sale, and titles usually have the VIN for proper identification.",
                icon: FileText,
                accent: "text-[#8A6B28] bg-[#8A6B28]/5"
              },
              {
                title: "Insurance Purposes",
                desc: "The VIN helps insurance firms to obtain accurate vehicle information for insurance and registration purposes.",
                icon: ShieldCheck,
                accent: "text-[#9B2226] bg-[#9B2226]/5"
              },
              {
                title: "Vehicle History Checks",
                desc: "This is one of the main reasons why the VIN is important. A VIN check tool can decode the Porsche VIN to reveal any Porsche history and condition that has been used. You can uncover records, including ownership history, theft, sales records, lien accidents, salvage brands, rebuilt titles, warranty coverage, and more. This helps you avoid car scams like buying a stolen car or detecting a car with an odometer rollback. The rule of thumb is never to purchase a used car without checking its history.",
                icon: History,
                accent: "text-[#8A6B28] bg-[#8A6B28]/5"
              },
              {
                title: "Safety Recalls",
                desc: "Since manufacturers have VINs in their database, they can easily identify specific vehicle models that get recalled and notify the owners to get them fixed as soon as possible. Before purchasing, car buyers can also run a recall check by VIN for pending recalls on any used car.",
                icon: ShieldAlert,
                accent: "text-[#9B2226] bg-[#9B2226]/5"
              },
              {
                title: "Police Checks",
                desc: "If a vehicle is reported stolen, the police can track it using its VIN. They can even place police markers on those VINs and receive alerts at checkpoints.",
                icon: Shield,
                accent: "text-[#8A6B28] bg-[#8A6B28]/5"
              }
            ].map((card, idx) => {
              const IconComp = card.icon;
              return (
                <div
                  key={idx}
                  className="bg-zinc-50/40 border border-zinc-200 p-6 flex flex-col justify-between transition-all duration-300 relative rounded-none hover:shadow-md hover:bg-white hover:border-[#8A6B28] hover:-translate-y-1 group"
                >
                  <div className="space-y-4">
                    <div className={`w-10 h-10 flex items-center justify-center border border-zinc-200/60 ${card.accent} group-hover:border-[#8A6B28] transition-colors`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-display text-base font-extrabold text-zinc-950 tracking-tight group-hover:text-[#9B2226] transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* What to Get from Decoding a Porsche VIN Number? Section */}
      <section className="bg-zinc-50 py-16 sm:py-20 border-b border-zinc-200/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* Part 1: Specifications */}
          <div className="space-y-8">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <div className="inline-flex items-center space-x-2 bg-white border border-zinc-200 px-3 py-1 rounded-none justify-center">
                <span className="w-1.5 h-1.5 bg-[#8A6B28] rounded-full"></span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 font-bold">
                  DECODED DATA
                </span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-900 tracking-tight leading-tight">
                What to Get from <span className="premium-gradient-text">Decoding a Porsche VIN?</span>
              </h2>
              <p className="text-zinc-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-sans">
                A Porsche VIN decoder can help you access everything about a new or used Porsche, including vehicle specifications, features, build sheets, and past history records. Here are some Porsche specifications you can access:
              </p>
            </div>

            {/* Specifications Symmetric Grid */}
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-t border-l border-zinc-200/80">
              {[
                "Year", "Make", "Exterior dimensions", "Number of doors",
                "Ground clearance", "Standard seating", "Transmission style", "Fuel type",
                "Braking", "Range extender", "Engine Description", "Front airbag information",
                "Emissions", "Cargo dimensions", "Model", "Valve train design",
                "Interior dimensions", "Suspension", "Traction battery", "Engine Size and specs",
                "Drive Type", "Tank capacity", "Trailering", "Displacement",
                "Mileage", "Tire pressure and size", "Wheels", "Electrical powertrain",
                "Trim", "Country", "Delivery charges", "Steering",
                "Weight", "MSRP", "Body type", "Seating",
                "EPA Class", "Engine model", "Engine configuration", "Seat belt type",
                "Off-road attributes", "Electrical specifications"
              ].map((spec, idx) => (
                <div
                  key={idx}
                  className="bg-white border-r border-b border-zinc-200/80 p-3 sm:p-4 flex items-center space-x-2.5 hover:bg-zinc-50 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-none bg-[#8A6B28] flex-shrink-0"></span>
                  <span className="text-xs sm:text-sm font-semibold text-zinc-800 tracking-tight">{spec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Part 2: Car History */}
          <div className="space-y-8 pt-8 border-t border-zinc-200/60">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <div className="inline-flex items-center space-x-2 bg-white border border-zinc-200 px-3 py-1 rounded-none justify-center">
                <span className="w-1.5 h-1.5 bg-[#9B2226] rounded-full"></span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 font-bold">
                  VEHICLE HISTORY
                </span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-extrabold text-zinc-900 tracking-tight leading-tight">
                Check a Car History with a <span className="premium-gradient-text">Porsche VIN Decoder</span>
              </h3>
              <div className="space-y-3 text-zinc-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-sans">
                <p>
                  The VIN number is important for checking a car's details and where it was made, but there's more to it. When buying a used Porsche, you can use our reliable Porsche VIN decoder to find past records and learn about the car's history.
                </p>
                <p className="text-xs sm:text-sm text-zinc-500">
                  By conducting a Porsche VIN number lookup, you can track the vehicle history records from when the vehicle first left the factory. Below are the records you can uncover:
                </p>
              </div>
            </div>

            {/* History Records Symmetric Grid */}
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-t border-l border-zinc-200/80">
              {[
                "Mileage", "Odometer Readings", "Sales History", "Auction History",
                "Accident History", "Title Brand", "Salvage Title", "Hail Damage",
                "Flood Damage", "Structural Damage", "Ownership History", "Usage History",
                "Ownership Duration", "Lien & Loans", "Maintenance Schedule", "Warranty Status",
                "Repair Cost", "Recalls History"
              ].map((record, idx) => (
                <div
                  key={idx}
                  className="bg-white border-r border-b border-zinc-200/80 p-3 sm:p-4 flex items-center space-x-2.5 hover:bg-zinc-50 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-none bg-[#9B2226] flex-shrink-0"></span>
                  <span className="text-xs sm:text-sm font-semibold text-zinc-800 tracking-tight">{record}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Pre-1981 Porsche VIN Number Formats: The Timeline Section */}
      <section className="bg-[#FFFFFF] py-16 sm:py-20 border-b border-zinc-200/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center space-x-2 bg-zinc-100 border border-zinc-200 px-3 py-1 rounded-none justify-center">
              <span className="w-1.5 h-1.5 bg-[#9B2226] rounded-full"></span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 font-bold">
                HISTORICAL TIMELINE
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-900 tracking-tight leading-tight">
              Pre-1981 Porsche VIN Number Formats: <span className="premium-gradient-text">The Timeline</span>
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-sans">
              Before the NHTSA standardization of VIN, Porsche used several VIN number systems with the chassis number only indicating the car sequence coming off the production line.
            </p>
          </div>

          {/* Vertical Timeline */}
          <div className="max-w-3xl mx-auto relative border-l border-zinc-200 pl-6 sm:pl-8 space-y-10 py-2">
            {[
              {
                era: "1948 – 1968",
                title: "Porsche VIN 1948 - 1968 (5 & 6 Digits)",
                desc: "From 1948 - 1958, the 356 models had 5 digit VIN. This became a six digit identification tag, covering the 356 B and 356 C. This system lasted until 1968 when Porsche moved to an 8 digit VIN code."
              },
              {
                era: "1968",
                title: "Porsche VIN 1968 (8 Digits)",
                desc: "The VIN ID number became 8 digits where the first two digits represented the model number. Other information include the model year, variant details and the serial number. E.g. the VIN 12801211 codes for a MY1968 912 Coupe."
              },
              {
                era: "1969",
                title: "Porsche VIN 1969 (9 Digits)",
                desc: "When the 9 digit system was introduced, the first two digits represented the model year. Other details include the model year, sub model etc. For instance, the VIN 129010219 codes for a MY1969 Targa."
              },
              {
                era: "1970 – 1979",
                title: "Porsche VIN 1970 - 1979 (10 Digits)",
                desc: "In 1970, the 10 digit VIN ID system was introduced and included the 914/4 - a sports car that combined the affordable Porsche and a modern Volkswagen. The first three digits represented the model number. Other details are the model year, sub model, variant details and the serial number. For instance, the VIN 9249204924 codes for a MY1969 92 kW."
              },
              {
                era: "1980",
                title: "Porsche VIN 1980 (10 Digits)",
                desc: "The Porsche VIN 1980 had a unique 10 digits with the position 1, 2 and 5 required to verify the model. For instance the 911 model (VIN: 91A0134831) had a \"9\" in position 1, a \"1\" in position 2, and a \"1\" in position 5."
              }
            ].map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline Bullet */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 bg-white border-2 border-[#8A6B28] rounded-full group-hover:border-[#9B2226] group-hover:scale-110 transition-all flex items-center justify-center">
                  <span className="w-1.5 h-1.5 bg-[#8A6B28] rounded-full group-hover:bg-[#9B2226]"></span>
                </div>

                {/* Card Container */}
                <div className="bg-zinc-50 border border-zinc-200 p-6 transition-all duration-300 hover:bg-white hover:border-[#8A6B28] hover:shadow-xs group-hover:-translate-y-0.5">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="inline-block bg-[#8A6B28]/10 text-[#8A6B28] px-2 py-0.5 text-[10px] font-mono font-bold tracking-wider">
                      {item.era}
                    </span>
                  </div>
                  <h3 className="font-display text-base font-extrabold text-zinc-950 tracking-tight group-hover:text-[#9B2226] transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>



      {/* How to Decode a Porsche VIN Section */}
      <section className="bg-zinc-50 py-16 sm:py-20 border-b border-zinc-200/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center space-x-2 bg-white border border-zinc-200 px-3 py-1 rounded-none justify-center">
              <span className="w-1.5 h-1.5 bg-[#8A6B28] rounded-full"></span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 font-bold">
                STEP-BY-STEP PROCESS
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-900 tracking-tight leading-tight">
              How to Decode a <span className="premium-gradient-text">Porsche VIN Number?</span>
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-sans">
              Follow these simple steps to decode and get your Porsche vehicle history reports within seconds:
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                step: "01",
                title: "Locate Your VIN",
                desc: (
                  <span>
                    Locate the 17-character VIN (Vehicle Identification Number) on your Porsche. It can be found on the dashboard, driver's side door jamb, or vehicle registration documents. Classic models may have a VIN of 5 to 13 digits.
                  </span>
                ),
                link: "WHERE CAN I FIND MY PORSCHE VIN?"
              },
              {
                step: "02",
                title: "Input Vehicle Info",
                desc: (
                  <span>
                    <strong className="text-zinc-900 font-bold">Enter the VIN</strong> into the form on this page. If the VIN is unavailable, you can use the license plate number or provide the vehicle's year, make, and model.
                  </span>
                )
              },
              {
                step: "03",
                title: "Generate Sticker",
                desc: (
                  <span>
                    Click "Get Window Sticker" to view your window sticker preview.
                  </span>
                )
              },
              {
                step: "04",
                title: "Download & Print",
                desc: (
                  <span>
                    Complete the payment process to download or print your window sticker.
                  </span>
                )
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#F8F9FA] border border-zinc-200/80 p-6 flex flex-col justify-between hover:border-[#8A6B28] hover:-translate-y-1 transition-all duration-300 relative rounded-none min-h-[280px]">
                <div className="space-y-4">
                  <div className="flex justify-end">
                    <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-400">STEP {item.step}</span>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-display text-[15px] font-extrabold text-zinc-950 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-[12px] text-zinc-500 leading-relaxed font-sans">
                      {item.desc}
                    </p>
                  </div>
                </div>
                {item.link && (
                  <div className="pt-4 mt-auto">
                    <button
                      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                      className="text-[9px] font-mono font-bold uppercase tracking-wider text-zinc-800 hover:text-[#9B2226] underline underline-offset-4 cursor-pointer text-left"
                    >
                      {item.link}
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>


          {/* CTAs at the bottom */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto pt-4">
            <button
              onClick={() => {
                // Simulates navigating to the premium preview page
                window.location.hash = "/preview";
                window.dispatchEvent(new HashChangeEvent("hashchange"));
              }}
              className="w-full sm:w-auto text-center bg-[#8A6B28] hover:bg-[#7A5C1E] text-white py-3.5 px-8 font-display font-bold text-xs tracking-widest uppercase transition-colors duration-200 cursor-pointer"
            >
              View Sample Report
            </button>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-full sm:w-auto text-center border border-zinc-300 hover:border-zinc-900 bg-white text-zinc-700 hover:text-zinc-900 py-3.5 px-8 font-display font-bold text-xs tracking-widest uppercase transition-colors duration-200 cursor-pointer"
            >
              Get Porsche Vehicle History Report
            </button>
          </div>

        </div>
      </section>

      {/* Decode Popular Porsche Models Section */}
      <section className="bg-[#FFFFFF] py-16 sm:py-20 border-b border-zinc-200/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center space-x-2 bg-zinc-100 border border-zinc-200 px-3 py-1 rounded-none justify-center">
              <span className="w-1.5 h-1.5 bg-[#8A6B28] rounded-full"></span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 font-bold">
                POPULAR MODELS
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-900 tracking-tight leading-tight">
              Decode Popular Porsche Models with our <span className="premium-gradient-text">Porsche VIN Decoder</span>
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-sans">
              You can easily decode any Porsche VIN format – standard 17-digit or classic car VINs (5-14 digits long) using our Porsche VIN decoder. Here are some Porsche models you may be interested in:
            </p>
          </div>

          {/* Symmetric Grid Table (3 columns desktop, 2 columns mobile) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-zinc-200 bg-white max-w-6xl mx-auto">
            {[
              "911", "Cayenne Coupe", "Cayenne E-Hybrid",
              "Cayenne", "911 Turbo", "911 GT3",
              "Panamera", "911 Carrera", "Taycan GTS",
              "Macan", "Taycan Cross Turismo", "718 Spyder",
              "Taycan", "Panamera Sport", "Panamera Turbo S",
              "718 Boxster", "Turismo", "Cayenne Turbo GT",
              "718 Cayman", "Macan S", "911 GT2 RS"
            ].map((model, idx) => {
              const isRightColumn = (idx + 1) % 3 === 0;
              const isRightColumnMobile = (idx + 1) % 2 === 0;
              
              return (
                <button
                  key={idx}
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className={`p-6 hover:bg-[#9B2226]/5 transition-all duration-300 flex items-center justify-between group text-left w-full border-zinc-200 border-b
                    ${!isRightColumn ? "lg:border-r" : ""}
                    ${!isRightColumnMobile ? "sm:border-r lg:border-r-0 lg:[&:not(:nth-child(3n))]:border-r" : ""}
                  `}
                >
                  <span className="text-sm sm:text-base font-semibold text-zinc-800 group-hover:text-zinc-900 transition-colors">
                    {model}
                  </span>
                  <ChevronRight className="w-4 h-4 text-zinc-400 group-hover:text-[#9B2226] transition-all group-hover:translate-x-0.5" />
                </button>
              );
            })}
          </div>

        </div>
      </section>


      {/* Other Available Porsche VIN Tools Section */}
      <section className="bg-[#FFFFFF] py-16 sm:py-20 border-b border-zinc-200/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Section Title with Red Accent */}
          <div className="flex items-center space-x-3 max-w-6xl mx-auto">
            <span className="w-1.5 h-6 bg-[#9B2226] block"></span>
            <h3 className="font-display text-lg font-extrabold text-zinc-950 uppercase tracking-tight">
              Other Available Porsche VIN Tools
            </h3>
          </div>

          {/* Tools Grid (5 items, symmetric border layout) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-zinc-200 bg-white max-w-6xl mx-auto">
            {[
              "Porsche Paint Code by VIN",
              "Porsche Options by VIN",
              "Porsche Warranty Check by VIN",
              "Porsche Build Sheet by VIN",
              "Porsche Specs by VIN"
            ].map((tool, idx) => (
              <a
                key={idx}
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="p-6 border-r border-b border-zinc-200 hover:bg-[#9B2226]/5 transition-all duration-300 flex items-center justify-between group"
              >
                <span className="text-sm sm:text-base font-semibold text-zinc-800 group-hover:text-zinc-900 transition-colors">
                  {tool}
                </span>
                <ChevronRight className="w-4 h-4 text-zinc-400 group-hover:text-[#9B2226] transition-all group-hover:translate-x-0.5" />
              </a>
            ))}
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection />

    </div>
  );
}
