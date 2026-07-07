import React from "react";

interface HowItWorksProps {
  onOpenVinGuide?: () => void;
}

export default function HowItWorks({ onOpenVinGuide }: HowItWorksProps) {
  const steps = [
    {
      title: "Locate Your VIN",
      text: "Locate the 17-character VIN (Vehicle Identification Number) on your Porsche. It can be found on the dashboard, driver's side door jamb, or vehicle registration documents. Classic models may have a VIN of 5 to 13 digits."
    },
    {
      title: "Input Vehicle Info",
      text: "Enter the VIN into the form on this page. If the VIN is unavailable, you can use the license plate number or provide the vehicle's year, make, and model."
    },
    {
      title: "Generate Sticker",
      text: "Click \"Get Window Sticker\" to view your window sticker preview."
    },
    {
      title: "Download & Print",
      text: "Complete the payment process to download or print your window sticker."
    }
  ];

  const additionalWays = [
    {
      title: "Online Forums",
      text: "Car owners often share window stickers on dedicated forums, though finding an exact match for your vehicle may be challenging."
    },
    {
      title: "Porsche Website",
      text: "Visit the official Porsche website to search for the window sticker. If it's not available online, contacting customer support may be necessary. However, it may take a long time before your sticker arrives."
    },
    {
      title: "Dealerships",
      text: "Your local Porsche dealership can access window sticker databases and assist in obtaining the document. Simply drive in and make a request."
    }
  ];

  const scrollToLookup = () => {
    const el = document.getElementById("lookup");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="how-it-works" className="py-24 bg-zinc-50 border-b border-zinc-100 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title & Description */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900 mb-6 leading-tight">
            How Do I Get the Window Sticker for My Porsche?
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
            Accessing your Porsche window sticker is simple with the right methods. To get one for a Porsche you are interested in, you can get one with a Porsche window sticker by VIN lookup. If the VIN is unavailable, you can also use the license plate number or the Porsche’s year, make, and model.
          </p>
        </div>

        {/* Subtitle */}
        <div className="text-center mb-10">
          <h3 className="font-display text-lg sm:text-xl font-bold text-zinc-800 tracking-wide">
            Follow these steps to obtain your window sticker:
          </h3>
        </div>

        {/* Steps Grid matching the screenshot's outline boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {steps.map((st, idx) => (
            <div 
              key={idx} 
              className="bg-zinc-100/20 border border-zinc-200/80 hover:border-[#9B2226]/40 transition-all duration-300 p-8 rounded-none flex flex-col justify-start min-h-[240px] shadow-sm relative group"
            >
              <div className="absolute top-4 right-4 text-[10px] font-mono font-bold text-zinc-400 group-hover:text-[#9B2226] transition-colors">
                STEP {(idx + 1).toString().padStart(2, '0')}
              </div>
              <h4 className="font-display text-lg font-bold text-zinc-900 mb-3 pt-2">
                {st.title}
              </h4>
              <p className="text-sm text-zinc-600 leading-relaxed mb-4">
                {idx === 1 ? (
                  <>
                    <button
                      type="button"
                      onClick={scrollToLookup}
                      className="text-[#9B2226] hover:underline underline-offset-2 font-semibold cursor-pointer inline-block"
                    >
                      Enter the VIN
                    </button>{" "}
                    into the form on this page. If the VIN is unavailable, you can use the license plate number or provide the vehicle's year, make, and model.
                  </>
                ) : (
                  st.text
                )}
              </p>
              {idx === 0 && onOpenVinGuide && (
                <button
                  type="button"
                  onClick={onOpenVinGuide}
                  className="mt-auto text-[11px] font-mono text-zinc-600 hover:text-[#9B2226] underline underline-offset-4 transition-colors uppercase tracking-wider font-semibold cursor-pointer text-left self-start"
                >
                  Where can I find my Porsche VIN?
                </button>
              )}
            </div>
          ))}
        </div>

        {/* New sub-section for additional ways */}
        <div className="border-t border-zinc-100 pt-20">
          <div className="text-center max-w-4xl mx-auto mb-14">
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 leading-snug">
              Once you have the window sticker, you can thoroughly review all the details about your vehicle. Additional ways to obtain this document include:
            </h3>
          </div>

          {/* 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {additionalWays.map((item, idx) => (
              <div 
                key={idx}
                className="bg-zinc-100/40 border border-zinc-200/80 hover:border-[#9B2226]/40 transition-all duration-300 p-8 rounded-none flex flex-col justify-start min-h-[240px] group"
              >
                <h4 className="font-display text-xl font-bold text-zinc-900 mb-4">
                  {item.title}
                </h4>
                <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Button center */}
          <div className="flex justify-center">
            <button
              onClick={scrollToLookup}
              className="px-10 py-4 bg-[#9B2226] hover:bg-white hover:text-[#9B2226] hover:border-[#9B2226] text-white font-mono font-bold uppercase tracking-widest transition-all duration-300 rounded-none flex items-center justify-center space-x-2 border border-transparent active:scale-[0.99] shadow-[0_0_15px_rgba(155,34,38,0.15)]"
            >
              <span>Get a Porsche Window Sticker</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
