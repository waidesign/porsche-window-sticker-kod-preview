import React, { useState } from "react";
import { Shield, Info, Award, ArrowRight, TrendingUp, Wrench, Coins, FileText, Paintbrush, ListChecks, Cpu, Binary, Plus, Minus } from "lucide-react";
import { LookupRequest } from "../types";
import LookupForm from "./LookupForm";

interface WarrantyPageProps {
  onLookup: (request: LookupRequest) => void;
  isLoading: boolean;
  onOpenVinGuide?: () => void;
}

export default function WarrantyPage({ onLookup, isLoading, onOpenVinGuide }: WarrantyPageProps) {
  const [openFaqId, setOpenFaqId] = useState<string | null>("warranty-faq-1");

  const warrantyFaqs = [
    {
      id: "warranty-faq-1",
      question: "Does the original Porsche warranty transfer to subsequent owners?",
      answer: "Yes, all original Porsche New Vehicle Limited Warranties and high-voltage battery protection packages are linked directly to the VIN chassis. They transfer automatically and completely to new private owners at no cost."
    },
    {
      id: "warranty-faq-2",
      question: "How does the Porsche Certified Pre-Owned (CPO) warranty function?",
      answer: "The CPO warranty activates immediately when the original 4-year/50,000-mile factory warranty expires. It adds 2 years and unlimited mileage of full bumper-to-bumper protection with a $0 deductible on covered repairs."
    },
    {
      id: "warranty-faq-3",
      question: "Does our Monroney Window Sticker show if a specific warranty is currently active?",
      answer: "The Window Sticker prints the original factory-assigned parameters as standard specifications when the vehicle rolled off the assembly line. To check actual live active coverage today, always verify with an authorized Porsche dealer using the 17-digit chassis VIN."
    }
  ];

  return (
    <div className="bg-[#FFFFFF] min-h-screen text-zinc-900 font-sans">
      
      {/* Immersive Hero Section */}
      <section className="relative min-h-[640px] flex items-center bg-[#FFFFFF] py-16 lg:py-24 overflow-hidden border-b border-zinc-200/50 cyber-grid">
        {/* Decorative Background Glows */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFF]/90 to-transparent w-[60%] z-10"></div>
        
        {/* Subtle grid accent */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:16px_16px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6 lg:pr-6">
              <div className="inline-flex items-center space-x-2 bg-zinc-100 border border-zinc-200 px-3 py-1.5 rounded-none">
                <Shield className="w-4 h-4 text-[#9B2226] animate-pulse" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 font-bold">
                  OFFICIAL WARRANTY REFERENCE
                </span>
              </div>
              
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 leading-[1.05]">
                Porsche Factory Coverage <br />
                <span className="premium-gradient-text">&amp; Sticker Guarantees</span>
              </h1>
              
              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed max-w-lg font-sans">
                Every high-fidelity Monroney window sticker we reproduce details the original manufacturer warranty parameters that came with the vehicle from the factory. Learn about both Porsche's standard coverage profiles and our sticker product guarantee.
              </p>

              {/* Status Points */}
              <div className="flex flex-col space-y-3 pt-2 text-xs font-mono text-zinc-600">
                <div className="flex items-center space-x-3 bg-zinc-50/60 border border-zinc-200 px-4 py-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8A6B28]"></div>
                  <span>RETRIEVE EXTENDED DRIVETRAIN PARAMETERS</span>
                </div>
                <div className="flex items-center space-x-3 bg-zinc-50/60 border border-zinc-200 px-4 py-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8A6B28]"></div>
                  <span>HIGH-VOLTAGE TAYCAN TRACTION BATTERY METRICS</span>
                </div>
                <div className="flex items-center space-x-3 bg-zinc-50/60 border border-zinc-200 px-4 py-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8A6B28]"></div>
                  <span>AUTHENTIC STICKER COVERAGE PRINT GUARANTEES</span>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-6 flex justify-center">
              <LookupForm 
                onLookup={onLookup} 
                isLoading={isLoading} 
                onOpenVinGuide={onOpenVinGuide} 
              />
            </div>

          </div>
        </div>
      </section>

      {/* What is a Porsche Warranty Check? Section */}
      <section className="bg-zinc-50 py-16 sm:py-20 border-b border-zinc-200/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Context Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center space-x-2 bg-zinc-100 border border-zinc-200 px-3 py-1 rounded-none">
                <span className="w-1.5 h-1.5 bg-[#8A6B28] rounded-full"></span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 font-bold">
                  ESSENTIAL KNOWLEDGE
                </span>
              </div>
              
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-900 tracking-tight leading-tight">
                What is a Porsche <br />
                <span className="premium-gradient-text">Warranty Check?</span>
              </h2>
              
              <div className="space-y-4 text-zinc-600 text-sm sm:text-base leading-relaxed">
                <p>
                  A Porsche warranty check reveals crucial details about a Porsche vehicle's original warranty status, including initial active coverage periods, high-voltage battery limits, and factory-authorized guarantees. This is performed instantly using the 17-character chassis VIN, or alternatively, by querying the active license plate registration details.
                </p>
                <p>
                  Knowing the precise warranty boundaries helps owners sidestep unexpected repair expenses and equips buyers with complete transparency during pre-owned acquisitions. It serves as a rapid, professional verification method to guarantee ultimate peace of mind and data-backed confidence.
                </p>
              </div>
            </div>

            {/* Right Column: Key Parameters Verified Badge Card */}
            <div className="lg:col-span-5">
              <div className="bg-zinc-100/40 border border-zinc-200 p-6 sm:p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#9B2226]/5 rounded-full blur-2xl"></div>
                
                <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#9B2226] mb-6 flex items-center space-x-2 border-b border-zinc-200 pb-3">
                  <Shield className="w-4 h-4" />
                  <span className="underline decoration-[#9B2226] decoration-2 underline-offset-4">MONRONEY WARRANTY SPECIFICATIONS</span>
                </h3>

                <ul className="space-y-4">
                  {[
                    { label: "Basic Warranty", desc: "Decodes the duration and distance parameters of the active manufacturer coverage." },
                    { label: "Corrosion Perforation", desc: "Verifies the specialized body rust-through and panel integrity protection periods." },
                    { label: "Powertrain Warranty", desc: "Identifies coverage bounds for the internal combustion engine or electric motors." },
                    { label: "Roadside Assistance", desc: "Retrieves the complimentary flatbed towing and emergency roadside service window." }
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

      {/* What is Porsche Warranty Coverage? Section */}
      <section className="bg-[#FFFFFF] py-16 sm:py-20 border-b border-zinc-200/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header Block */}
          <div className="max-w-3xl mb-12 space-y-4">
            <div className="inline-flex items-center space-x-2 bg-zinc-100 border border-zinc-200 px-3 py-1 rounded-none">
              <span className="w-1.5 h-1.5 bg-[#8A6B28] rounded-full"></span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 font-bold">
                FACTORY COVERAGE MATRIX
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-900 tracking-tight leading-tight">
              What is Porsche <span className="premium-gradient-text">Warranty Coverage?</span>
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              Porsche AG backs every new vehicle with a layered set of factory protections designed to guard against manufacturing defects, premature wear, and unexpected repair costs. Below is a breakdown of each coverage type and exactly what it protects.
            </p>
          </div>

          {/* Coverage Matrix Table */}
          <div className="border border-zinc-200">
            {/* Table Header Row */}
            <div className="hidden sm:grid grid-cols-12 gap-4 px-6 py-4 bg-zinc-100/60 border-b border-zinc-200">
              <span className="col-span-4 text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-bold">Coverage Type</span>
              <span className="col-span-3 text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-bold">Duration</span>
              <span className="col-span-5 text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-bold">What It Covers</span>
            </div>

            {/* Table Rows */}
            {[
              {
                type: "New Vehicle Limited Warranty",
                duration: "4 Yrs / 50,000 Mi",
                covers: "Bumper-to-bumper protection against manufacturing defects across the entire vehicle, including engine, transmission, electronics, and trim."
              },
              {
                type: "High-Voltage Battery Warranty",
                duration: "8 Yrs / 100,000 Mi",
                covers: "Extended coverage for Taycan and Cayenne/Panamera hybrid traction batteries, guaranteeing a minimum of 70% retained capacity."
              },
              {
                type: "Corrosion Perforation Warranty",
                duration: "12 Yrs / Unlimited Mi",
                covers: "Protects against rust-through and body panel perforation on Porsche's hot-dip galvanized steel construction."
              },
              {
                type: "Roadside Assistance",
                duration: "4 Yrs / 50,000 Mi",
                covers: "Complimentary emergency towing, flat tire changes, battery jump-starts, and lockout service through the Porsche Assistance network."
              }
            ].map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 px-6 py-5 border-b border-zinc-200 last:border-b-0 hover:bg-zinc-100/30 transition-colors"
              >
                <div className="sm:col-span-4">
                  <span className="sm:hidden text-[9px] font-mono uppercase tracking-widest text-zinc-400 block mb-1">Coverage Type</span>
                  <h4 className="font-display text-sm font-bold text-zinc-900">{row.type}</h4>
                </div>
                <div className="sm:col-span-3">
                  <span className="sm:hidden text-[9px] font-mono uppercase tracking-widest text-zinc-400 block mb-1">Duration</span>
                  <span className="text-xs font-mono font-bold text-[#9B2226]">{row.duration}</span>
                </div>
                <div className="sm:col-span-5">
                  <span className="sm:hidden text-[9px] font-mono uppercase tracking-widest text-zinc-400 block mb-1">What It Covers</span>
                  <p className="text-xs text-zinc-600 leading-relaxed">{row.covers}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* How Does a Porsche Warranty Check by VIN Work? Section */}
      <section className="bg-zinc-50/20 py-16 sm:py-20 border-b border-zinc-200/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Descriptive Text & CTA */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center space-x-2 bg-zinc-100 border border-zinc-200 px-3 py-1 rounded-none">
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 font-bold">
                  STEP-BY-STEP PROCESS
                </span>
              </div>
              
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-900 tracking-tight leading-tight">
                How Does a Porsche <br />
                <span className="premium-gradient-text">Warranty Check by VIN Work?</span>
              </h2>
              
              <div className="space-y-4 text-zinc-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Just like a comprehensive vehicle history report, our Porsche window sticker lookup tool allows you to input any 17-character Porsche VIN to uncover authentic warranty profiles and other essential vehicle parameters. You'll decode original factory build sheets, standard safety configurations, optional packages, original MSRP specifications, engine metrics, and fuel economy details.
                </p>
                <p>
                  By verifying the factory-backed warranty parameters using the unique chassis VIN, you receive a high-fidelity replica of the original Monroney window sticker. This crucial document assists both prospective buyers and current sellers in making smarter, transparent, and data-backed decisions when purchasing or listing a Porsche.
                </p>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="inline-flex items-center justify-center bg-[#9B2226] text-white hover:bg-white hover:text-[#9B2226] hover:border-[#9B2226] text-xs font-mono font-bold uppercase tracking-widest py-3.5 px-8 rounded-none border border-transparent transition-all duration-300 active:scale-[0.99] shadow-[0_0_15px_rgba(155,34,38,0.12)] hover:shadow-[0_0_20px_rgba(155,34,38,0.08)] cursor-pointer"
                >
                  Get a Porsche warranty lookup
                </button>
              </div>
            </div>

            {/* Right Column: Visual Steps Layout */}
            <div className="lg:col-span-6 space-y-4">
              {[
                {
                  step: "01",
                  title: "Enter Chassis VIN",
                  desc: "Submit your 17-digit Porsche chassis identifier located on your windshield or door jamb. Or, query via license plate registration details."
                },
                {
                  step: "02",
                  title: "Query Factory Archives",
                  desc: "Our high-speed decrypter retrieves regional shipment records, original delivery dates, custom option codes, and base warranty boundaries."
                },
                {
                  step: "03",
                  title: "Generate Monroney Replica",
                  desc: "Receive a precise, print-ready reproduction detailing structural engine configurations, exact factory colors, packages, and warranty parameters."
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-200 p-5 flex items-start space-x-4 hover:border-zinc-300 transition-all duration-300">
                  <div className="text-xs font-mono font-bold text-[#9B2226] bg-zinc-100 border border-zinc-200 w-8 h-8 flex items-center justify-center shrink-0">
                    {item.step}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-mono font-bold text-zinc-900 uppercase tracking-wider">
                      {item.title}
                    </h3>
                    <p className="text-xs text-zinc-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Types of Warranty Information Accessible with the VIN Section */}
      <section className="bg-zinc-50 py-20 border-b border-zinc-200/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(155,34,38,0.02),transparent_40%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header Block */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center space-x-2 bg-zinc-100 border border-zinc-200 px-3 py-1 rounded-none">
              <span className="w-1.5 h-1.5 bg-[#8A6B28] rounded-full"></span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 font-bold">
                DATA CAPABILITIES
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
              Types of Warranty Information <br />
              <span className="premium-gradient-text">Accessible with the VIN</span>
            </h2>
            <p className="text-sm text-zinc-600 leading-relaxed max-w-2xl mx-auto">
              With a Porsche warranty check by VIN, you can instantly unlock comprehensive historic and active coverage profiles embedded within the chassis record.
            </p>
          </div>

          {/* New Asymmetric/Bento Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Bento Card 1: Type of Warranty (Left / Span 7) */}
            <div className="lg:col-span-7 bg-zinc-100/30 border border-zinc-200/80 p-8 flex flex-col justify-between hover:border-zinc-300/80 transition-all duration-300 relative group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#9B2226] bg-zinc-50 border border-zinc-200 px-3 py-1">
                    CLASSIFICATION
                  </span>
                  <Shield className="w-5 h-5 text-zinc-500 group-hover:text-[#9B2226] transition-colors" />
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight pt-2">
                  1. Coverage & Warranty Classification
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed max-w-xl">
                  This details the specific scope of protection allocated to the vehicle. It categorizes whether the chassis remains under the core factory "bumper-to-bumper" limited warranty, a specialized Porsche Powertrain guarantee, an anti-corrosion protection contract, or a verified Porsche Approved Certified Pre-Owned (CPO) extended program.
                </p>
              </div>
              
              {/* Custom visual element inside Card 1 */}
              <div className="mt-8 pt-6 border-t border-zinc-200/60 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {["Limited", "Powertrain", "CPO Extended", "Corrosion"].map((label, idx) => (
                  <div key={idx} className="bg-zinc-50/80 border border-zinc-200 p-3 text-center">
                    <span className="block text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest">TYPE 0{idx + 1}</span>
                    <span className="block text-xs font-bold text-zinc-900 mt-1">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bento Card 2: Original Coverage Period (Right / Span 5) */}
            <div className="lg:col-span-5 bg-zinc-100/30 border border-zinc-200/80 p-8 flex flex-col justify-between hover:border-zinc-300/80 transition-all duration-300 relative group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#9B2226] bg-zinc-50 border border-zinc-200 px-3 py-1">
                    INTERVALS
                  </span>
                  <Award className="w-5 h-5 text-zinc-500 group-hover:text-[#9B2226] transition-colors" />
                </div>
                <h3 className="font-display text-xl font-bold text-zinc-900 tracking-tight pt-2">
                  2. Factory Epoch & Duration Parameters
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  Decodes the exact expiration parameters defined at delivery. Typically listed as duration limits and mileage caps, this specifies the standard duration of original coverage—such as the benchmark 48-month/50,000-mile factory threshold—safeguarding against premature component anomalies.
                </p>
              </div>

              {/* Custom interactive indicator inside Card 2 */}
              <div className="mt-8 bg-zinc-50/60 border border-zinc-200 p-4 space-y-3">
                <div className="flex justify-between text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                  <span>Factory Limit Progress</span>
                  <span className="text-[#9B2226]">100% Retained</span>
                </div>
                <div className="w-full bg-zinc-100 h-1.5 overflow-hidden">
                  <div className="bg-[#9B2226] h-full w-[75%]" />
                </div>
                <div className="flex justify-between text-[10px] text-zinc-400 font-mono">
                  <span>0 Months</span>
                  <span>48 Months</span>
                </div>
              </div>
            </div>

            {/* Bento Card 3: Remaining Coverage (Bottom / Span 12) */}
            <div className="lg:col-span-12 bg-zinc-100/30 border border-zinc-200/80 p-8 hover:border-zinc-300/80 transition-all duration-300 relative group">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                
                <div className="md:col-span-7 space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-xs font-mono font-bold text-[#9B2226] bg-zinc-50 border border-zinc-200 px-3 py-1">
                      PROJECTIONS
                    </span>
                    <Info className="w-4 h-4 text-zinc-500" />
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight pt-1">
                    3. Estimated Active Buffer Projection
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    While exact remaining buffers are not explicitly written onto a physical Monroney window sticker, our intelligent lookup framework uses the original retail in-service delivery date alongside your vehicle's modern odometer mileage to calculate current warranty buffers. This provides instant visibility into remaining months and miles of protection.
                  </p>
                </div>

                {/* Interactive diagram inside Card 3 */}
                <div className="md:col-span-5 bg-zinc-50/80 border border-zinc-200 p-5 space-y-4">
                  <h4 className="text-[10px] font-mono font-bold text-[#9B2226] uppercase tracking-wider">
                    Calculated Buffer Formula
                  </h4>
                  <div className="flex items-center justify-between font-mono bg-zinc-100 p-3 text-xs border border-zinc-200">
                    <div className="text-zinc-600">
                      <span className="block text-[8px] text-zinc-400">IN-SERVICE DATE</span>
                      <span>Delivery Epoch</span>
                    </div>
                    <span className="text-[#9B2226] text-lg font-bold">+</span>
                    <div className="text-zinc-600">
                      <span className="block text-[8px] text-zinc-400">ODOMETER STATE</span>
                      <span>Active Mileage</span>
                    </div>
                    <span className="text-[#9B2226] text-lg font-bold">=</span>
                    <div className="text-zinc-900 font-bold text-right">
                      <span className="block text-[8px] text-[#9B2226]">REMAINING BUFFER</span>
                      <span>Warranty Margin</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Centered CTA */}
          <div className="text-center pt-12">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center justify-center bg-[#9B2226] text-white hover:bg-white hover:text-[#9B2226] hover:border-[#9B2226] text-xs font-mono font-bold uppercase tracking-widest py-3.5 px-8 rounded-none border border-transparent transition-all duration-300 active:scale-[0.99] shadow-[0_0_15px_rgba(155,34,38,0.12)] hover:shadow-[0_0_20px_rgba(155,34,38,0.08)] cursor-pointer"
            >
              Check Porsche Warranty Coverage
            </button>
          </div>

        </div>
      </section>

      {/* Benefits of a Porsche Warranty Check Section */}
      <section className="bg-zinc-100/50 py-20 border-b border-zinc-200/40 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(155,34,38,0.01),transparent_50%)] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-start">
            
            {/* Left Column: Sticky Title & Exposure Card */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
              <div className="inline-flex items-center space-x-2 bg-zinc-50 border border-zinc-200 px-3 py-1 rounded-none">
                <span className="w-1.5 h-1.5 bg-[#8A6B28] rounded-full"></span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 font-bold">
                  EQUITY & RISK
                </span>
              </div>
              
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight leading-tight">
                Benefits of a <br />
                <span className="premium-gradient-text">Porsche Warranty Check</span>
              </h2>
              
              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                Did you know a valid factory or Porsche Approved CPO warranty is a highly valuable asset? Verifying and documenting this active protection is crucial for protecting your investment, buying confidently, and securing top-tier resale value.
              </p>

              {/* Exposure Risk Estimator */}
              <div className="bg-zinc-50 border border-zinc-200 p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
                  <h3 className="text-xs font-mono font-bold text-[#9B2226] uppercase tracking-wider flex items-center space-x-2">
                    <Wrench className="w-4 h-4" />
                    <span>Porsche Component Exposure Risk</span>
                  </h3>
                  <span className="text-[9px] font-mono text-zinc-500 uppercase">Est. Out-Of-Warranty</span>
                </div>
                
                <div className="space-y-3">
                  {[
                    { component: "PDK Dual-Clutch Transmission", cost: "$12,000 - $18,000" },
                    { component: "Chassis Air Suspension Strut", cost: "$4,500 - $6,000" },
                    { component: "PDCC Active Roll Control System", cost: "$3,500 - $5,000" },
                    { component: "PCM Navigation & Cockpit System", cost: "$2,800 - $4,200" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center text-xs">
                      <span className="text-zinc-600 font-sans">{item.component}</span>
                      <span className="text-zinc-900 font-mono font-bold bg-zinc-100 border border-zinc-200 px-2 py-0.5">{item.cost}</span>
                    </div>
                  ))}
                </div>
                
                <p className="text-[10px] text-zinc-500 font-mono italic leading-normal">
                  *Averages based on independent Porsche specialist dealer service labor guides.
                </p>
              </div>
            </div>

            {/* Right Column: Interactive Styled Benefit Cards */}
            <div className="lg:col-span-7 space-y-4">
              {[
                {
                  idx: "01",
                  icon: <Coins className="w-5 h-5 text-[#9B2226]" />,
                  title: "Avoid Catastrophic Repair Expenses",
                  desc: "Porsche repair standards are premium-grade. Checking your warranty parameters ensures you can coordinate complex engineering replacements with your regional Porsche dealer, transferring the repair liability entirely back onto the manufacturer."
                },
                {
                  idx: "02",
                  icon: <Shield className="w-5 h-5 text-[#9B2226]" />,
                  title: "Secure Intelligent Pre-Owned Acquisitions",
                  desc: "When shopping for a pre-owned 911, Boxster, or Macan, having verified warranty timelines eliminates guesswork. Buy with complete certainty, knowing if the factory has your back if early mechanical anomalies surface."
                },
                {
                  idx: "03",
                  icon: <TrendingUp className="w-5 h-5 text-[#9B2226]" />,
                  title: "Command Premium Resale Value",
                  desc: "Active factory coverage or Porsche Approved Certified Pre-Owned warranties are highly transferable assets. Verifying and displaying these details to potential buyers builds instant trust, facilitating accelerated sales and higher market premiums."
                },
                {
                  idx: "04",
                  icon: <Award className="w-5 h-5 text-[#9B2226]" />,
                  title: "Proactive Service Integration",
                  desc: "Uncovering your warranty's exact sunset parameters allows you to coordinate a strategic multi-point inspect-and-fix session with authorized technicians, resolving minor wear issues on Porsche's dime before your coverage window expires."
                }
              ].map((benefit, bIdx) => (
                <div 
                  key={bIdx} 
                  className="bg-zinc-100/30 border border-zinc-200/80 p-6 sm:p-8 flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 hover:border-[#9B2226]/30 hover:bg-zinc-100/40 transition-all duration-300 group"
                >
                  {/* Left Icon with Badge */}
                  <div className="flex sm:flex-col items-center justify-between sm:justify-start w-full sm:w-auto shrink-0 border-b border-zinc-200 sm:border-0 pb-3 sm:pb-0">
                    <div className="w-12 h-12 bg-zinc-50 border border-zinc-200 flex items-center justify-center rounded-none group-hover:border-[#9B2226] group-hover:shadow-[0_0_15px_rgba(155,34,38,0.08)] transition-all duration-300">
                      {benefit.icon}
                    </div>
                    <span className="text-xs font-mono font-bold text-zinc-500 mt-2 block sm:text-center">
                      BENEFIT {benefit.idx}
                    </span>
                  </div>

                  {/* Right Text */}
                  <div className="space-y-2 flex-grow">
                    <h3 className="font-display text-base sm:text-lg font-bold text-zinc-900 uppercase tracking-wider group-hover:text-[#9B2226] transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              ))}

              {/* Verified Action Footer */}
              <div className="pt-6 text-center sm:text-left">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="inline-flex items-center justify-center bg-[#9B2226] text-white hover:bg-white hover:text-[#9B2226] hover:border-[#9B2226] text-xs font-mono font-bold uppercase tracking-widest py-3.5 px-8 rounded-none border border-transparent transition-all duration-300 active:scale-[0.99] shadow-[0_0_15px_rgba(155,34,38,0.12)] hover:shadow-[0_0_20px_rgba(155,34,38,0.08)] cursor-pointer"
                >
                  Verify Porsche Warranty Status Today
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* How to Check Your Porsche's Warranty Section */}
      <section className="bg-zinc-50 py-24 border-b border-zinc-200/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Block */}
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center space-x-2 bg-zinc-100 border border-zinc-200 px-3 py-1 rounded-none">
              <span className="w-1.5 h-1.5 bg-[#8A6B28] rounded-full"></span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 font-bold">
                WARRANTY GUIDE
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight leading-tight">
              How to Check Your <span className="premium-gradient-text">Porsche's Warranty</span>
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed max-w-3xl mx-auto pt-2">
              You can find car warranty details in the window sticker or by checking the vehicle history report. Here, let's guide you on the steps to follow to access the warranty details from a window sticker:
            </p>
          </div>

          {/* Elegant 3-Step Grid Box Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            
            {/* Step 1 */}
            <div className="bg-zinc-100/20 border border-zinc-200/80 hover:border-[#9B2226]/40 transition-all duration-300 p-8 rounded-none flex flex-col justify-between min-h-[260px] relative group">
              <div className="absolute top-4 right-4 text-xs font-mono font-bold text-zinc-400 group-hover:text-[#9B2226] transition-colors">
                STEP 01
              </div>
              <div className="space-y-4 pt-4">
                <h3 className="font-display text-xl font-bold text-zinc-900 uppercase tracking-wider">
                  Enter the 17-digit Porsche VIN
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  Locate your vehicle's chassis number on the windshield lower left or driver's door jamb. If you cannot access the VIN, you can also query the warranty by active license plate number or specifying the Porsche model year, make, and series.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-zinc-100/20 border border-zinc-200/80 hover:border-[#9B2226]/40 transition-all duration-300 p-8 rounded-none flex flex-col justify-between min-h-[260px] relative group">
              <div className="absolute top-4 right-4 text-xs font-mono font-bold text-zinc-400 group-hover:text-[#9B2226] transition-colors">
                STEP 02
              </div>
              <div className="space-y-4 pt-4">
                <h3 className="font-display text-xl font-bold text-zinc-900 uppercase tracking-wider">
                  Click on 'Search' to Preview
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  Initiate the database lookup. Our systems will index factory digital records, decrypt standard configuration parameters, build options, paint packages, and initial active delivery periods to compile your dynamic window sticker.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-zinc-100/20 border border-zinc-200/80 hover:border-[#9B2226]/40 transition-all duration-300 p-8 rounded-none flex flex-col justify-between min-h-[260px] relative group">
              <div className="absolute top-4 right-4 text-xs font-mono font-bold text-zinc-400 group-hover:text-[#9B2226] transition-colors">
                STEP 03
              </div>
              <div className="space-y-4 pt-4">
                <h3 className="font-display text-xl font-bold text-zinc-900 uppercase tracking-wider">
                  Complete & Download Sticker
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  Verify the compiled preview details, then finalize the generation request. This allows you to instantly download or print high-fidelity, print-ready Monroney replicas as standard PDFs for future reference or resale presentations.
                </p>
              </div>
            </div>

          </div>

          {/* Elegant Double Button Action Center */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-full sm:w-auto inline-flex items-center justify-center bg-[#C9A227] text-zinc-900 hover:bg-[#B8922A] text-xs font-mono font-bold uppercase tracking-widest py-3.5 px-8 rounded-none border border-transparent transition-all duration-300 active:scale-[0.99] shadow-sm cursor-pointer"
            >
              View Sample Window Sticker
            </button>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-full sm:w-auto inline-flex items-center justify-center bg-[#9B2226] text-white hover:bg-white hover:text-[#9B2226] hover:border-[#9B2226] text-xs font-mono font-bold uppercase tracking-widest py-3.5 px-8 rounded-none border border-transparent transition-all duration-300 active:scale-[0.99] shadow-[0_0_15px_rgba(155,34,38,0.12)] hover:shadow-[0_0_20px_rgba(155,34,38,0.08)] cursor-pointer"
            >
              Get a Porsche Window Sticker
            </button>
          </div>

        </div>
      </section>

      {/* Other Ways to Check Porsche Warranty Coverage */}
      <section className="bg-zinc-50/40 py-20 border-b border-zinc-200/40 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Header Block */}
          <div className="max-w-3xl mb-14 space-y-4">
            <div className="inline-flex items-center space-x-2 bg-zinc-100 border border-zinc-200 px-3 py-1 rounded-none">
              <span className="w-1.5 h-1.5 bg-[#8A6B28] rounded-full"></span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 font-bold">
                ADDITIONAL RESOURCES
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight leading-tight">
              Other Ways to Check <span className="premium-gradient-text">Porsche Warranty Coverage</span>
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
              While the window sticker is the fastest way to unpack a Porsche's original coverage parameters, owners and buyers have several additional verified channels to confirm active warranty status.
            </p>
          </div>

          {/* Method cards row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "My Porsche App & Website",
                desc: "Sign into the My Porsche portal or companion app with your Porsche ID to view active warranty status, service history, and maintenance schedules straight from Porsche AG's own records."
              },
              {
                title: "Vehicle History Report Providers",
                desc: "Independent providers such as Carfax and AutoCheck can supplement a VIN search with title records, prior accident flags, and factory warranty transfer notes for pre-owned Porsches."
              },
              {
                title: "Authorized Porsche Dealer",
                desc: "Any authorized Porsche Center can pull your chassis's live warranty ledger from the factory PIWIS diagnostic system, confirming exact remaining months, mileage, and prior claims."
              },
              {
                title: "Owner's Documentation Packet",
                desc: "Your original delivery paperwork, Porsche Card, and glovebox documentation wallet include a printed warranty booklet outlining coverage start dates and terms for your specific build."
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-zinc-50 border border-zinc-200 p-6 hover:border-[#9B2226]/40 transition-all duration-300 group"
              >
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                  Method 0{idx + 1}
                </span>
                <h3 className="font-display text-base font-bold text-zinc-900 mt-2 group-hover:text-[#9B2226] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed mt-2.5">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Check Popular Porsche Models */}
      <section className="py-20 border-b border-zinc-200/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header Block */}
          <div className="max-w-3xl mb-14 space-y-4">
            <div className="inline-flex items-center space-x-2 bg-zinc-100 border border-zinc-200 px-3 py-1 rounded-none">
              <span className="w-1.5 h-1.5 bg-[#8A6B28] rounded-full"></span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 font-bold">
                MODEL LINEUP
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight leading-tight">
              Check Popular <span className="premium-gradient-text">Porsche Models</span>
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
              Warranty parameters and factory coverage windows vary by series. Browse the model lines below to check window sticker and warranty details for a specific Porsche.
            </p>
          </div>

          {/* Category rows with wrapped model chips */}
          <div className="space-y-8">
            {[
              {
                label: "911 Series",
                models: ["911 Carrera", "911 Carrera S", "911 GT3", "911 GT3 RS", "911 Turbo S", "911 Targa"]
              },
              {
                label: "Taycan (EV)",
                models: ["Taycan", "Taycan 4S", "Taycan GTS", "Taycan Turbo S", "Taycan Cross Turismo"]
              },
              {
                label: "718 Series",
                models: ["718 Cayman", "718 Cayman GT4 RS", "718 Boxster", "718 Spyder RS"]
              },
              {
                label: "SUV & Sedan",
                models: ["Cayenne", "Cayenne Coupe", "Macan", "Macan EV", "Panamera"]
              }
            ].map((cat, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-10 pb-8 border-b border-zinc-100 last:border-b-0 last:pb-0"
              >
                <div className="sm:w-40 shrink-0 flex items-center gap-2.5">
                  <span className="w-1 h-5 bg-[#9B2226]"></span>
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-600">
                    {cat.label}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {cat.models.map((model, mIdx) => (
                    <span
                      key={mIdx}
                      className="px-4 py-2 text-xs sm:text-sm font-semibold text-zinc-700 bg-zinc-100/40 border border-zinc-200 hover:border-[#9B2226] hover:text-[#9B2226] hover:bg-[#9B2226]/5 transition-all duration-300 cursor-default"
                    >
                      {model}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Other Available Porsche VIN Tools */}
      <section className="py-20 bg-zinc-50/30 border-b border-zinc-200/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header Block */}
          <div className="max-w-3xl mb-12 space-y-4">
            <div className="inline-flex items-center space-x-2 bg-zinc-100 border border-zinc-200 px-3 py-1 rounded-none">
              <span className="w-1.5 h-1.5 bg-[#8A6B28] rounded-full"></span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 font-bold">
                COMPANION TOOLS
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight leading-tight">
              Other Available <span className="premium-gradient-text">Porsche VIN Tools</span>
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
              Beyond warranty coverage, the same chassis VIN unlocks a full set of decoding tools to research any Porsche in depth.
            </p>
          </div>

          {/* Tools Grid - Symmetrical 3x2 on desktop, matches homepage OtherTools layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Porsche Paint Code by VIN", desc: "Identify the exact factory paint code, name, and color formulation.", icon: <Paintbrush className="w-5 h-5 text-[#9B2226]" /> },
              { title: "Porsche Options by VIN", desc: "Decode all original factory-installed option codes and prices.", icon: <ListChecks className="w-5 h-5 text-[#9B2226]" /> },
              { title: "Porsche Build Sheet by VIN", desc: "Get a comprehensive build sheet listing every option and original spec.", icon: <FileText className="w-5 h-5 text-[#9B2226]" /> },
              { title: "Porsche Specification by VIN", desc: "View complete technical, chassis, dimensions, and engine specs.", icon: <Cpu className="w-5 h-5 text-[#9B2226]" /> },
              { title: "Porsche VIN Decoder", desc: "Translate any 17-character Porsche VIN into readable vehicle data.", icon: <Binary className="w-5 h-5 text-[#9B2226]" /> }
            ].map((tool, idx) => (
              <button
                key={idx}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="text-left bg-zinc-100/30 border border-zinc-200 hover:border-[#9B2226]/40 hover:bg-zinc-100/50 transition-all duration-300 p-8 rounded-none flex flex-col justify-between min-h-[180px] group relative active:scale-[0.99]"
              >
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <div className="p-2 bg-zinc-50/80 border border-zinc-200 group-hover:border-[#9B2226]/30 transition-colors">
                      {tool.icon}
                    </div>
                    <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-[#9B2226] group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900 mb-2 font-display">
                    {tool.title}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {tool.desc}
                  </p>
                </div>
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Warranty Frequently Asked Questions (matches homepage FAQ accordion) */}
      <section className="py-24 bg-[#FFFFFF] border-b border-zinc-100 no-print">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">

          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-zinc-100 border border-zinc-200 px-3 py-1.5 mb-4">
              <span className="w-1.5 h-1.5 bg-[#8A6B28]"></span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 font-bold">
                KNOWLEDGE REPOSITORY
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900">
              Warranty Frequently Asked Questions
            </h2>
            <p className="text-zinc-600 text-sm mt-4">
              Have questions about factory coverage, transfers, or CPO protection? Find answers below.
            </p>
          </div>

          {/* Accordions */}
          <div className="space-y-4">
            {warrantyFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-zinc-100/30 border border-zinc-200 transition-all duration-300 shadow-sm hover:border-zinc-300 rounded-none overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaqId((prevId) => (prevId === faq.id ? null : faq.id))}
                    className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                  >
                    <span className="font-display text-sm sm:text-base font-bold text-zinc-900 pr-4 hover:text-[#9B2226] transition-colors">
                      {faq.question}
                    </span>
                    <span className="flex-shrink-0 p-1.5 bg-zinc-50 border border-zinc-200 rounded-none">
                      {isOpen ? (
                        <Minus className="w-3.5 h-3.5 text-zinc-900" />
                      ) : (
                        <Plus className="w-3.5 h-3.5 text-[#9B2226]" />
                      )}
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      isOpen ? "max-h-[500px] border-t border-zinc-200" : "max-h-0"
                    }`}
                  >
                    <p className="p-5 text-xs sm:text-sm text-zinc-600 leading-relaxed bg-zinc-50/20">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}
