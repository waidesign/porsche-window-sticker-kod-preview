import React, { useState } from "react";
import { Search, Info, ChevronDown } from "lucide-react";
import { LookupRequest } from "../types";

interface LookupFormProps {
  onLookup: (request: LookupRequest) => void;
  isLoading: boolean;
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

const trimsMap: { [key: string]: string[] } = {
  "911": ["GT3 RS", "Turbo S", "Carrera GTS", "Carrera 4S", "S", "Base"],
  "Taycan": ["Turbo S", "GTS", "4S", "Base"],
  "718 Cayman": ["GT4 RS", "GTS 4.0", "Style Edition", "S", "Base"],
  "Cayenne": ["Turbo GT Coupe", "Turbo E-Hybrid", "S Coupe", "E-Hybrid", "Base"]
};

export default function LookupForm({ onLookup, isLoading, onOpenVinGuide }: LookupFormProps) {
  const [activeTab, setActiveTab] = useState<"vin" | "plate" | "ymm">("vin");
  
  // Form states
  const [vin, setVin] = useState("");
  const [plate, setPlate] = useState("");
  const [state, setState] = useState("California");
  
  const [year, setYear] = useState(2025);
  const [model, setModel] = useState("911");
  const [trim, setTrim] = useState("GT3 RS");

  const handleModelChange = (selectedModel: string) => {
    setModel(selectedModel);
    if (trimsMap[selectedModel]) {
      setTrim(trimsMap[selectedModel][0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeTab === "vin") {
      if (vin.length !== 17) return;
      onLookup({ type: "vin", vin: vin.toUpperCase() });
    } else if (activeTab === "plate") {
      if (!plate.trim()) return;
      onLookup({ type: "plate", plate: plate.toUpperCase(), state });
    } else {
      onLookup({ type: "ymm", year, model, trim });
    }
  };

  return (
    <div className="bg-white/35 backdrop-blur-md backdrop-saturate-150 border border-white/60 rounded-none p-6 sm:p-8 w-full max-w-[480px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.7)] relative overflow-hidden">
      {/* Glass sheen overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/50 via-white/5 to-transparent"></div>

      {/* Confident Pills Tab Toggles */}
      <div className="relative flex bg-white/40 backdrop-blur-sm p-1 mb-6 border border-white/50 rounded-none">
        <button
          type="button"
          onClick={() => setActiveTab("vin")}
          className={`flex-1 text-center py-2 text-[10px] font-mono font-bold uppercase tracking-wider transition-all rounded-none ${
            activeTab === "vin"
              ? "bg-[#9B2226] text-white shadow-[0_0_15px_rgba(155,34,38,0.15)]"
              : "text-black hover:text-black"
          }`}
        >
          VIN
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("plate")}
          className={`flex-1 text-center py-2 text-[10px] font-mono font-bold uppercase tracking-wider transition-all rounded-none ${
            activeTab === "plate"
              ? "bg-[#9B2226] text-white shadow-[0_0_15px_rgba(155,34,38,0.15)]"
              : "text-black hover:text-black"
          }`}
        >
          PLATE
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("ymm")}
          className={`flex-1 text-center py-2 text-[10px] font-mono font-bold uppercase tracking-wider transition-all rounded-none ${
            activeTab === "ymm"
              ? "bg-[#9B2226] text-white shadow-[0_0_15px_rgba(155,34,38,0.15)]"
              : "text-black hover:text-black"
          }`}
        >
          MODEL
        </button>
      </div>

      {/* Form implementation */}
      <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
        
        {activeTab === "vin" && (
          <div className="space-y-2">
            <label htmlFor="vin-input-form" className="block text-[10px] font-mono font-bold uppercase tracking-wider text-black">
              Chassis Identification VIN
            </label>
            <div className="relative">
              <input
                id="vin-input-form"
                type="text"
                maxLength={17}
                value={vin}
                onChange={(e) => setVin(e.target.value.toUpperCase())}
                placeholder="e.g. WP0AC2A9XFS1XXXXX"
                className="w-full border border-white/50 px-4 py-3.5 pr-10 text-xs font-mono bg-white/40 text-black focus:bg-white/60 focus:outline-none focus:border-[#9B2226] transition-all rounded-none"
              />
              <Search className="absolute right-3.5 top-3.5 w-4 h-4 text-black" />
            </div>
            {/* Inline helper text */}
            <div className="flex items-start space-x-2 mt-2">
              <Info className="w-3.5 h-3.5 text-[#9B2226] flex-shrink-0 mt-0.5" />
              <p className="text-[10px] text-black leading-normal font-mono">
                Provide a standard 17-character Porsche VIN. Found stamped on driver-side windshield or B-pillar plate.
              </p>
            </div>
          </div>
        )}

        {activeTab === "plate" && (
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="plate-input-form" className="block text-[10px] font-mono font-bold uppercase tracking-wider text-black">
                License Plate Registration
              </label>
              <input
                id="plate-input-form"
                type="text"
                value={plate}
                onChange={(e) => setPlate(e.target.value.toUpperCase())}
                placeholder="e.g. 911GT3RS"
                className="w-full border border-white/50 px-4 py-3.5 text-xs font-mono bg-white/40 text-black focus:bg-white/60 focus:outline-none focus:border-[#9B2226] transition-all rounded-none"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="state-select-form" className="block text-[10px] font-mono font-bold uppercase tracking-wider text-black">
                Registration State
              </label>
              <div className="relative">
                <select
                  id="state-select-form"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="w-full appearance-none border border-white/50 pl-4 pr-10 py-3.5 text-xs bg-white/40 text-black focus:bg-white/60 focus:outline-none focus:border-[#9B2226] transition-all rounded-none font-mono"
                >
                  {STATES_LIST.map((st) => (
                    <option key={st} value={st} className="bg-[#FFFFFF]">
                      {st}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-black">
                  <ChevronDown className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "ymm" && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="year-select-form" className="block text-[10px] font-mono font-bold uppercase tracking-wider text-black">
                  Model Year
                </label>
                <div className="relative">
                  <select
                    id="year-select-form"
                    value={year}
                    onChange={(e) => setYear(parseInt(e.target.value))}
                    className="w-full appearance-none border border-white/50 pl-4 pr-10 py-3.5 text-xs bg-white/40 text-black focus:bg-white/60 focus:outline-none focus:border-[#9B2226] rounded-none font-mono"
                  >
                    {[2026, 2025, 2024, 2023, 2022, 2021, 2020].map((yr) => (
                      <option key={yr} value={yr} className="bg-[#FFFFFF]">
                        {yr}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-black">
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="model-select-form" className="block text-[10px] font-mono font-bold uppercase tracking-wider text-black">
                  Model Lineup
                </label>
                <div className="relative">
                  <select
                    id="model-select-form"
                    value={model}
                    onChange={(e) => handleModelChange(e.target.value)}
                    className="w-full appearance-none border border-white/50 pl-4 pr-10 py-3.5 text-xs bg-white/40 text-black focus:bg-white/60 focus:outline-none focus:border-[#9B2226] rounded-none font-mono"
                  >
                    <option value="911" className="bg-[#FFFFFF]">911 Sports Car</option>
                    <option value="Taycan" className="bg-[#FFFFFF]">Taycan EV</option>
                    <option value="718 Cayman" className="bg-[#FFFFFF]">718 Cayman</option>
                    <option value="Cayenne" className="bg-[#FFFFFF]">Cayenne SUV</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-black">
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="trim-select-form" className="block text-[10px] font-mono font-bold uppercase tracking-wider text-black">
                Factory Trim Level
              </label>
              <div className="relative">
                <select
                  id="trim-select-form"
                  value={trim}
                  onChange={(e) => setTrim(e.target.value)}
                  className="w-full appearance-none border border-white/50 pl-4 pr-10 py-3.5 text-xs bg-white/40 text-black focus:bg-white/60 focus:outline-none focus:border-[#9B2226] rounded-none font-semibold font-mono"
                >
                  {trimsMap[model]?.map((tr) => (
                    <option key={tr} value={tr} className="bg-[#FFFFFF]">
                      {tr} ({model === "Taycan" ? "Electric" : "Petrol"})
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-black">
                  <ChevronDown className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Primary Green CTA button */}
        <button
          type="submit"
          disabled={isLoading || (activeTab === "vin" && vin.length !== 17) || (activeTab === "plate" && !plate.trim())}
          className="w-full bg-[#9B2226] text-white hover:bg-white hover:text-[#9B2226] hover:border-[#9B2226] text-xs font-mono font-bold uppercase tracking-widest py-4 rounded-none border border-transparent transition-all duration-300 flex items-center justify-center space-x-2 active:scale-[0.99] shadow-[0_0_15px_rgba(155,34,38,0.12)] hover:shadow-[0_0_20px_rgba(155,34,38,0.08)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#9B2226] disabled:hover:text-white disabled:hover:border-transparent cursor-pointer"
        >
          {isLoading ? (
            <>
              <div className="w-4 h-4 border-2 border-current border-t-transparent animate-spin rounded-full"></div>
              <span>GETTING WINDOW STICKER...</span>
            </>
          ) : (
            <span>GET PORSCHE WINDOW STICKER</span>
          )}
        </button>
      </form>

      {/* Where can I find my Porsche VIN? link and popover trigger */}
      {activeTab === "vin" && onOpenVinGuide && (
        <div className="relative z-10 mt-6 border-t border-white/50 pt-4 text-center">
          <button
            id="vin-lookup-guide-trigger-form"
            type="button"
            onClick={onOpenVinGuide}
            className="text-[11px] font-mono text-black hover:text-[#9B2226] underline underline-offset-4 transition-colors uppercase tracking-wider font-semibold cursor-pointer"
          >
            Where can I find my Porsche VIN?
          </button>
        </div>
      )}

    </div>
  );
}
