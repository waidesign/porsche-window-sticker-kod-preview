import React from "react";

export default function PorscheModelsGrid() {
  const models = [
    "911 Carrera", "Taycan", "Cayenne", "718 Cayman",
    "911 GT3 RS", "Panamera", "Macan", "718 Boxster",
    "918 Spyder", "Cayenne Coupe", "Carrera GT", "Macan EV",
    "911 Turbo S", "Taycan Cross Turismo", "Porsche 959", "Classic 356"
  ];

  return (
    <section id="porsche-models" className="py-24 bg-zinc-950 border-b border-zinc-900 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title & Description */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Find the Window Sticker for These Porsche Models
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
            We offer access to window stickers for a wide range of Porsche vehicles, including high-performance sports cars, luxury sedans, and versatile SUVs. Get a window sticker for all models, such as:
          </p>
        </div>

        {/* Models Grid (4 columns, rounded-none to match user preferences) */}
        <div className="grid grid-cols-2 md:grid-cols-4 border border-zinc-800 bg-zinc-900/10">
          {models.map((model, idx) => {
            // Calculate borders for a clean symmetric table grid effect without double-borders
            const isLastRow = idx >= 12;
            const isRightColumn = (idx + 1) % 4 === 0;
            const isRightColumnMobile = (idx + 1) % 2 === 0;

            return (
              <div
                key={idx}
                className={`p-6 bg-zinc-900/20 hover:bg-[#A1FF2C]/5 transition-all duration-300 flex items-center justify-between group
                  ${!isLastRow ? "border-b border-zinc-800" : ""}
                  ${!isRightColumn ? "md:border-r md:border-zinc-800" : ""}
                  ${!isRightColumnMobile ? "border-r border-zinc-800 md:border-r-0 md:!border-r" : ""}
                  /* Apply right border override on md up if it's not the right column */
                  md:[&:not(:nth-child(4n))]:border-r md:[&:not(:nth-child(4n))]:border-zinc-800
                `}
              >
                <span className="text-sm sm:text-base font-semibold text-zinc-200 group-hover:text-white transition-colors">
                  {model}
                </span>
                <span className="text-[10px] font-mono text-zinc-600 group-hover:text-[#A1FF2C] transition-colors">
                  AVAILABLE
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
