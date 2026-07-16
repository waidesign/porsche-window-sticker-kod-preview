import React from "react";
import { Cpu, ChevronRight } from "lucide-react";
import { LookupRequest } from "../types";
import LookupForm from "./LookupForm";
import FaqSection from "./FaqSection";

interface ModelSpecsPageProps {
  onLookup: (request: LookupRequest) => void;
  isLoading: boolean;
  onOpenVinGuide?: () => void;
}

export default function ModelSpecsPage({ onLookup, isLoading, onOpenVinGuide }: ModelSpecsPageProps) {
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
                <Cpu className="w-4 h-4 text-[#9B2226] animate-pulse" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 font-bold">
                  OFFICIAL MODEL SPECIFICATIONS
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 leading-[1.05]">
                Porsche Model <br />
                <span className="premium-gradient-text">Specs & Performance</span>
              </h1>

              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed max-w-lg font-sans">
                Explore factory-original performance specifications, powertrain configurations, and pricing for every current Porsche model lineup — from the iconic 911 to the electric Taycan Turbo GT.
              </p>

              {/* Status Points */}
              <div className="flex flex-col space-y-3 pt-2 text-xs font-mono text-zinc-600">
                <div className="flex items-center space-x-3 bg-zinc-50/60 border border-zinc-200 px-4 py-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8A6B28]"></div>
                  <span>FACTORY ENGINE & POWERTRAIN CONFIGURATIONS</span>
                </div>
                <div className="flex items-center space-x-3 bg-zinc-50/60 border border-zinc-200 px-4 py-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8A6B28]"></div>
                  <span>OFFICIAL 0–60 MPH & TOP SPEED BENCHMARKS</span>
                </div>
                <div className="flex items-center space-x-3 bg-zinc-50/60 border border-zinc-200 px-4 py-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8A6B28]"></div>
                  <span>MSRP STARTING PRICES & OPTION AVAILABILITY</span>
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

      {/* What is a VIN, and Why is it Important? Section */}
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
                What is a VIN, and Why <br />
                <span className="premium-gradient-text">is it Important?</span>
              </h2>

              <div className="space-y-4 text-zinc-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Your VIN is like your car's fingerprint—a unique 17-character code found on the dashboard or driver's door. It tells you everything about your Porsche, including what type of engine it has, features added at the factory, its original price, safety ratings, history, and more.
                </p>
                <p>
                  Looking up the VIN is a crucial step when buying a used car. More than verifying vehicle specs, obtaining the VIN history report gives you access to a wealth of <strong className="text-zinc-800 font-semibold">vehicle history</strong>, including ownership, title, mileage, lien, recalls, and more, ensuring you have all the information to make an informed buying decision.
                </p>
              </div>

              <div className="space-y-4 text-zinc-600 text-sm sm:text-base leading-relaxed">
                <h3 className="text-sm font-display font-bold text-zinc-900">
                  How to Find Porsche Vehicle Specs by VIN
                </h3>
                <p>
                  You can use a free VIN decoder to get limited information on the year, model, engine type, and trim. However, with a{" "}
                  <a href="/" className="text-[#8A6B28] underline underline-offset-2 hover:text-zinc-900 transition-colors font-medium">Porsche window sticker</a>
                  , you get everything about any Porsche vehicle. This includes the features (interior and exterior), installed options and packages, safety ratings, MSRP, total price, fuel economy,{" "}
                  <a href="/warranty" className="text-[#8A6B28] underline underline-offset-2 hover:text-zinc-900 transition-colors font-medium">warranty information</a>
                  {" "}and more.
                </p>
                <p>
                  When you check a warranty info by VIN with our tool, you receive a copy of the original window sticker in return. This sheet is important to car buyers and sellers in making favourable decisions during a car purchase or sale.
                </p>
              </div>

              {/* CTA Buttons — matches the reference image */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="/"
                  className="inline-flex items-center justify-center bg-[#8A6B28] text-white hover:bg-zinc-900 text-xs font-mono font-bold uppercase tracking-widest py-3.5 px-7 rounded-none border border-transparent transition-all duration-300 active:scale-[0.99] cursor-pointer"
                >
                  View Sample Window Sticker
                </a>
                <a
                  href="/"
                  className="inline-flex items-center justify-center bg-white text-zinc-900 hover:bg-zinc-100 text-xs font-mono font-bold uppercase tracking-widest py-3.5 px-7 rounded-none border border-zinc-300 hover:border-zinc-400 transition-all duration-300 active:scale-[0.99] cursor-pointer"
                >
                  Get Porsche Window Sticker
                </a>
              </div>
            </div>

            {/* Right Column: VIN Breakdown Card */}
            <div className="lg:col-span-5">
              <div className="bg-zinc-100/40 border border-zinc-200 p-6 sm:p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#8A6B28]/5 rounded-full blur-2xl"></div>

                <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#9B2226] mb-6 flex items-center space-x-2 border-b border-zinc-200 pb-3">
                  <Cpu className="w-4 h-4" />
                  <span className="underline decoration-[#9B2226] decoration-2 underline-offset-4">VIN DECODED: 17 CHARACTERS</span>
                </h3>

                <ul className="space-y-4">
                  {[
                    { label: "Positions 1–3: WMI", desc: "World Manufacturer Identifier — identifies the country of origin and the manufacturer (e.g. WP0 = Porsche, Germany)." },
                    { label: "Positions 4–8: VDS", desc: "Vehicle Descriptor Section — encodes model line, body style, engine type, and restraint systems." },
                    { label: "Position 9: Check Digit", desc: "A mathematically derived digit used to verify the authenticity of the entire VIN string." },
                    { label: "Positions 10–17: VIS", desc: "Vehicle Identifier Section — encodes model year, plant of manufacture, and the unique sequential serial number." }
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

      {/* Why Should You Check Your Porsche's Specs? Section */}
      <section className="bg-[#FFFFFF] py-16 sm:py-20 border-b border-zinc-200/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="max-w-3xl mb-12 space-y-4">
            <div className="inline-flex items-center space-x-2 bg-zinc-100 border border-zinc-200 px-3 py-1 rounded-none">
              <span className="w-1.5 h-1.5 bg-[#8A6B28] rounded-full"></span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 font-bold">
                WHY IT MATTERS
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-900 tracking-tight leading-tight">
              Why Should You Check <span className="premium-gradient-text">Your Porsche's Specs?</span>
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              Knowing your Porsche's specs isn't just for car experts—it's helpful for everyone! Here's why:
            </p>
          </div>

          {/* Three Audience Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-zinc-200">

            {/* Card 1: For Buyers */}
            <div className="p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-zinc-200 space-y-5 hover:bg-zinc-50/50 transition-colors">
              <div className="flex items-center space-x-2 border-b border-zinc-100 pb-4">
                <div className="w-5 h-5 bg-[#9B2226]/10 border border-[#9B2226]/30 flex items-center justify-center">
                  <span className="text-[10px] font-mono font-bold text-[#9B2226]">01</span>
                </div>
                <h3 className="text-xs font-mono font-bold text-zinc-900 uppercase tracking-wider">
                  For Buyers
                </h3>
              </div>
              <p className="text-zinc-600 text-sm leading-relaxed">
                When you're buying a used Porsche, it's crucial to know exactly what you're getting. Checking the specs by VIN ensures:
              </p>
              <ul className="space-y-3.5">
                {[
                  { label: "No surprises:", desc: "You'll know the vehicle's exact features, such as the engine type, trim level, and included options (like a sunroof, upgraded sound system, or towing package)." },
                  { label: "Verify authenticity:", desc: "The VIN check confirms the vehicle has all the features the seller claims. It's a great way to avoid any potential misrepresentation or scams." },
                  { label: "Confidence in your purchase:", desc: "Whether you're buying a used Porsche car, truck, or SUV, understanding the specs gives you peace of mind that you're making the right investment." }
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-2.5 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#8A6B28] mt-2 flex-shrink-0"></div>
                    <p className="text-zinc-600 text-sm leading-relaxed">
                      <strong className="text-zinc-900 font-semibold">{item.label}</strong> {item.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 2: For Sellers */}
            <div className="p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-zinc-200 space-y-5 hover:bg-zinc-50/50 transition-colors">
              <div className="flex items-center space-x-2 border-b border-zinc-100 pb-4">
                <div className="w-5 h-5 bg-[#8A6B28]/10 border border-[#8A6B28]/30 flex items-center justify-center">
                  <span className="text-[10px] font-mono font-bold text-[#8A6B28]">02</span>
                </div>
                <h3 className="text-xs font-mono font-bold text-zinc-900 uppercase tracking-wider">
                  For Sellers
                </h3>
              </div>
              <p className="text-zinc-600 text-sm leading-relaxed">
                If you already own a Porsche and are thinking of selling it, knowing the exact specifications can help you:
              </p>
              <ul className="space-y-3.5">
                {[
                  { label: "Showcase your vehicle's value:", desc: "When you know all the specs (such as custom features, safety ratings, and the original MSRP), you can better highlight its value to potential buyers." },
                  { label: "Accurate pricing:", desc: "Knowing the features your car has can help you price it correctly. For example, if your truck has premium features like an upgraded towing package, you can price it higher than a base model with fewer features." },
                  { label: "Decide on upgrades:", desc: "If you're thinking about upgrading your vehicle (for example, adding new wheels or custom upholstery), knowing your current specs will help you choose the right upgrades that will improve the car's appearance and functionality." }
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-2.5 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#8A6B28] mt-2 flex-shrink-0"></div>
                    <p className="text-zinc-600 text-sm leading-relaxed">
                      <strong className="text-zinc-900 font-semibold">{item.label}</strong> {item.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 3: For Repair Shops */}
            <div className="p-6 sm:p-8 space-y-5 hover:bg-zinc-50/50 transition-colors">
              <div className="flex items-center space-x-2 border-b border-zinc-100 pb-4">
                <div className="w-5 h-5 bg-zinc-200/80 border border-zinc-300 flex items-center justify-center">
                  <span className="text-[10px] font-mono font-bold text-zinc-600">03</span>
                </div>
                <h3 className="text-xs font-mono font-bold text-zinc-900 uppercase tracking-wider">
                  For Repair Shops
                </h3>
              </div>
              <p className="text-zinc-600 text-sm leading-relaxed">
                One of the most important reasons to check your Porsche's specs is to ensure you're using the correct parts for repairs or upgrades. Here's how:
              </p>
              <ul className="space-y-3.5">
                {[
                  { label: "Exact part matching:", desc: "Whether you need to replace a part or upgrade to something better, knowing your Porsche's specs helps ensure that the parts you buy fit perfectly and are compatible with your vehicle. For example, some models have specific engine types or transmission systems, so it's important to match the right parts." },
                  { label: "Easy DIY repairs:", desc: "If you like to do your own repairs or customizations, knowing the specs can help you determine the exact parts and tools you'll need to get the job done right." },
                  { label: "Find trusted parts:", desc: "You'll know which parts are genuine or aftermarket options that match your Porsche's exact model, saving you time and money by avoiding incorrect or substandard parts." }
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-2.5 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#8A6B28] mt-2 flex-shrink-0"></div>
                    <p className="text-zinc-600 text-sm leading-relaxed">
                      <strong className="text-zinc-900 font-semibold">{item.label}</strong> {item.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Bottom CTA */}
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center justify-center bg-[#8A6B28] text-white hover:bg-zinc-900 text-xs font-mono font-bold uppercase tracking-widest py-3.5 px-10 rounded-none border border-transparent transition-all duration-300 active:scale-[0.99] cursor-pointer shadow-[0_0_15px_rgba(138,107,40,0.12)]"
            >
              Lookup Porsche specs by VIN
            </button>
          </div>

        </div>
      </section>

      {/* How Does Car Specs Affect Performance? Section */}
      <section className="bg-zinc-50 py-16 sm:py-20 border-b border-zinc-200/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12 space-y-4">
            <div className="inline-flex items-center space-x-2 bg-zinc-100 border border-zinc-200 px-3 py-1 rounded-none justify-center">
              <span className="w-1.5 h-1.5 bg-[#8A6B28] rounded-full"></span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 font-bold">
                PERFORMANCE IMPACT
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-900 tracking-tight leading-tight">
              How Does Car Specs <span className="premium-gradient-text">Affect Performance?</span>
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              A car specifications are like its blueprint—they determine how it performs on the road. Here are four key ways specs in cars affect performance:
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-12">
            
            {/* Card 1: Engine Size and Power */}
            <div className="md:col-span-7 lg:col-span-8 bg-white border border-zinc-200/60 p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.01)] relative hover:-translate-y-1 hover:border-zinc-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
              <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-[#8A6B28] via-[#9B2226] to-transparent"></div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-[#9B2226] bg-[#9B2226]/5 border border-[#9B2226]/10 px-2 py-1 uppercase tracking-wider">
                    Powertrain
                  </span>
                  <span className="text-xs font-mono font-bold text-zinc-400">01</span>
                </div>
                <h3 className="font-display text-lg font-extrabold text-zinc-950 tracking-tight pt-2">
                  Engine Size and Power
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed max-w-2xl">
                  A bigger engine with more horsepower makes a car go faster and accelerate quicker. It's like having a strong engine that gives the car extra energy to zoom ahead. Every extra unit of displacement or force transforms straight-line acceleration limits.
                </p>
              </div>
            </div>

            {/* Card 2: Weight of the Car */}
            <div className="md:col-span-5 lg:col-span-4 bg-white border border-zinc-200/60 p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.01)] relative hover:-translate-y-1 hover:border-zinc-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
              <div className="absolute top-0 inset-x-0 h-[3px] bg-[#9B2226]"></div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-zinc-600 bg-zinc-100 border border-zinc-200 px-2 py-1 uppercase tracking-wider">
                    Mass & Dynamics
                  </span>
                  <span className="text-xs font-mono font-bold text-zinc-400">02</span>
                </div>
                <h3 className="font-display text-lg font-extrabold text-zinc-950 tracking-tight pt-2">
                  Weight of the Car
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  A heavier car moves slower because it takes more power to move it. Lighter cars are easier to handle and use less fuel, making them faster and more fuel-efficient in twisty mountain passes.
                </p>
              </div>
            </div>

            {/* Card 3: Tires and Grip */}
            <div className="md:col-span-5 lg:col-span-4 bg-white border border-zinc-200/60 p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.01)] relative hover:-translate-y-1 hover:border-zinc-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
              <div className="absolute top-0 inset-x-0 h-[3px] bg-[#8A6B28]"></div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-zinc-600 bg-zinc-100 border border-zinc-200 px-2 py-1 uppercase tracking-wider">
                    Contact Patch
                  </span>
                  <span className="text-xs font-mono font-bold text-zinc-400">03</span>
                </div>
                <h3 className="font-display text-lg font-extrabold text-zinc-950 tracking-tight pt-2">
                  Tires and Grip
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  Tires affect how a car sticks to the road. Wider, high-quality compounds give better lateral grip, helping the chassis turn corners faster and decelerate safely.
                </p>
              </div>
            </div>

            {/* Card 4: Aerodynamics */}
            <div className="md:col-span-7 lg:col-span-8 bg-white border border-zinc-200/60 p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.01)] relative hover:-translate-y-1 hover:border-zinc-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
              <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-[#8A6B28] via-[#9B2226] to-transparent"></div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-[#8A6B28] bg-[#8A6B28]/5 border border-[#8A6B28]/10 px-2 py-1 uppercase tracking-wider">
                    Airflow Efficiency
                  </span>
                  <span className="text-xs font-mono font-bold text-zinc-400">04</span>
                </div>
                <h3 className="font-display text-lg font-extrabold text-zinc-950 tracking-tight pt-2">
                  Aerodynamics
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed max-w-2xl">
                  The shape of the car affects how easily it cuts through air. A sleek drag coefficient reduces high-speed wind resistance, boosting top-end speed, stabilizing directional tracking, and making the vehicle more fuel-efficient.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Find Specs by VIN for other Makes Section */}
      <section className="bg-[#FFFFFF] py-16 sm:py-20 border-b border-zinc-200/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center space-x-2 bg-zinc-100 border border-zinc-200 px-3 py-1 rounded-none justify-center">
              <span className="w-1.5 h-1.5 bg-[#8A6B28] rounded-full"></span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 font-bold">
                OTHER MANUFACTURERS
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-900 tracking-tight leading-tight">
              Find Specs by VIN <span className="premium-gradient-text">for other Makes</span>
            </h2>
          </div>

          {/* Makes Table Grid (32 items, 8 rows of 4 columns) */}
          <div className="grid grid-cols-2 md:grid-cols-4 border border-zinc-200 bg-zinc-100/10 max-w-6xl mx-auto">
            {[
              "Alfaromeo", "Audi", "BMW", "Buick",
              "Cadillac", "Chevrolet", "Mclaren", "Mercedesbenz",
              "Mini Cooper", "Mitsubishi", "Chrysler", "Dodge",
              "Ford", "GMC", "GM", "Honda",
              "Porsche", "Ram", "Subaru", "Toyota",
              "Hyundai", "Infiniti", "Jeep", "Kia",
              "Lexus", "Lincoln", "Volkswagen", "Volvo",
              "VW", "Mazda", "Nissan", "Jaguar"
            ].map((make, idx) => {
              const isLastRow = idx >= 28;
              const isRightColumn = (idx + 1) % 4 === 0;
              const isRightColumnMobile = (idx + 1) % 2 === 0;

              return (
                <a
                  key={idx}
                  href="/"
                  className={`p-6 bg-zinc-100/20 hover:bg-[#9B2226]/5 transition-all duration-300 flex items-center justify-between group
                    ${!isLastRow ? "border-b border-zinc-200" : ""}
                    ${!isRightColumn ? "md:border-r md:border-zinc-200" : ""}
                    ${!isRightColumnMobile ? "border-r border-zinc-200 md:border-r-0 md:!border-r" : ""}
                    md:[&:not(:nth-child(4n))]:border-r md:[&:not(:nth-child(4n))]:border-zinc-200
                  `}
                >
                  <span className="text-sm sm:text-base font-semibold text-zinc-800 group-hover:text-zinc-900 transition-colors">
                    {make}
                  </span>
                  <ChevronRight className="w-4 h-4 text-zinc-400 group-hover:text-[#9B2226] transition-all group-hover:translate-x-0.5" />
                </a>
              );
            })}
          </div>

          {/* Sub Section: Check Popular Porsche Models */}
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="flex items-center space-x-3">
              <span className="w-1.5 h-6 bg-[#9B2226] block"></span>
              <h3 className="font-display text-lg font-extrabold text-zinc-950 uppercase tracking-tight">
                Check Popular Porsche Models
              </h3>
            </div>

            {/* Popular Models Table Grid (20 items, 5 rows of 4 columns) */}
            <div className="grid grid-cols-2 md:grid-cols-4 border border-zinc-200 bg-zinc-100/10">
              {[
                "911", "Cayenne", "Panamera", "911 Carrera",
                "Taycan Cross Turismo", "Panamera Sport Turismo", "Macan S", "Macan",
                "Taycan", "718 Boxster", "Cayenne E-Hybrid", "911 GT3",
                "Taycan GTS", "718 Spyder", "718 Cayman", "Cayenne Coupe",
                "911 Turbo", "Panamera Turbo S", "Cayenne Turbo GT", "911 GT2 RS"
              ].map((model, idx) => {
                const isLastRow = idx >= 16;
                const isRightColumn = (idx + 1) % 4 === 0;
                const isRightColumnMobile = (idx + 1) % 2 === 0;

                return (
                  <a
                    key={idx}
                    href="/"
                    className={`p-6 bg-zinc-100/20 hover:bg-[#9B2226]/5 transition-all duration-300 flex items-center justify-between group
                      ${!isLastRow ? "border-b border-zinc-200" : ""}
                      ${!isRightColumn ? "md:border-r md:border-zinc-200" : ""}
                      ${!isRightColumnMobile ? "border-r border-zinc-200 md:border-r-0 md:!border-r" : ""}
                      md:[&:not(:nth-child(4n))]:border-r md:[&:not(:nth-child(4n))]:border-zinc-200
                    `}
                  >
                    <span className="text-sm sm:text-base font-semibold text-zinc-800 group-hover:text-zinc-900 transition-colors">
                      {model}
                    </span>
                    <ChevronRight className="w-4 h-4 text-zinc-400 group-hover:text-[#9B2226] transition-all group-hover:translate-x-0.5" />
                  </a>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* Other Available Porsche VIN Tools Section */}
      <section className="bg-zinc-50 py-16 sm:py-20 border-b border-zinc-200/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Section Title with Red Accent */}
          <div className="flex items-center space-x-3 max-w-6xl mx-auto">
            <span className="w-1.5 h-6 bg-[#9B2226] block"></span>
            <h3 className="font-display text-lg font-extrabold text-zinc-950 uppercase tracking-tight">
              Other Available Porsche VIN Tools
            </h3>
          </div>

          {/* Tools Table Grid (4 items, 1 row of 4 columns on desktop) */}
          <div className="grid grid-cols-2 md:grid-cols-4 border border-zinc-200 bg-white max-w-6xl mx-auto">
            {[
              "Porsche Build Sheet by VIN",
              "Porsche Options by VIN",
              "Porsche Warranty Check by VIN",
              "Porsche Paint Codes by VIN"
            ].map((tool, idx) => {
              const isRightColumn = (idx + 1) % 4 === 0;
              const isRightColumnMobile = (idx + 1) % 2 === 0;

              return (
                <a
                  key={idx}
                  href="/"
                  className={`p-6 hover:bg-[#9B2226]/5 transition-all duration-300 flex items-center justify-between group
                    ${idx < 2 ? "border-b border-zinc-200 sm:border-b-0" : ""}
                    ${!isRightColumn ? "md:border-r md:border-zinc-200" : ""}
                    ${!isRightColumnMobile ? "border-r border-zinc-200 md:border-r-0 md:!border-r" : ""}
                    md:[&:not(:nth-child(4n))]:border-r md:[&:not(:nth-child(4n))]:border-zinc-200
                  `}
                >
                  <span className="text-sm sm:text-base font-semibold text-zinc-800 group-hover:text-zinc-900 transition-colors">
                    {tool}
                  </span>
                  <ChevronRight className="w-4 h-4 text-zinc-400 group-hover:text-[#9B2226] transition-all group-hover:translate-x-0.5" />
                </a>
              );
            })}
          </div>

        </div>
      </section>


      {/* FAQ Section */}
      <FaqSection />

    </div>
  );
}
