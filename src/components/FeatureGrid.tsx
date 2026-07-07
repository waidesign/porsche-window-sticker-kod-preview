import React from "react";
import { Compass, Calendar, History, ShieldCheck, Cpu, HelpCircle } from "lucide-react";

export default function FeatureGrid() {
  const features = [
    {
      id: "feature-coverage",
      icon: <Compass className="w-5 h-5 text-zinc-700" />,
      title: "Extensive Porsche Coverage",
      desc: "Complete manufacturing documentation and specification archives for almost all modern and vintage Porsche models.",
    },
    {
      id: "feature-releases",
      icon: <Calendar className="w-5 h-5 text-zinc-700" />,
      title: "Up to 2025 Releases",
      desc: "Our databases are updated continuously to support the latest 2025 releases, including the newest 911, Taycan, Cayenne, and Macan variants.",
    },
    {
      id: "feature-classic",
      icon: <History className="w-5 h-5 text-zinc-700" />,
      title: "Classic Model Support",
      desc: "Retrieve exact specifications, equipment details, and historical data for classic Porsche chassis dating back several decades.",
    },
    {
      id: "feature-guarantee",
      icon: <ShieldCheck className="w-5 h-5 text-zinc-700" />,
      title: "Satisfaction Guarantee",
      desc: "We stand behind our data. Get accurate, detailed window stickers backed by our comprehensive satisfaction guarantee.",
    },
    {
      id: "feature-precision",
      icon: <Cpu className="w-5 h-5 text-zinc-700" />,
      title: "Precise Factory Data",
      desc: "Every sticker is cross-referenced with official build logs, options packages, original MSRPs, and paint codes.",
    },
    {
      id: "feature-support",
      icon: <HelpCircle className="w-5 h-5 text-zinc-700" />,
      title: "24/7 Customer Support",
      desc: "Our dedicated support team is available around the clock to assist you with any sticker recovery or VIN lookup inquiries.",
    },
  ];

  return (
    <section id="features" className="py-24 bg-zinc-50 border-b border-zinc-100 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-zinc-100 border border-zinc-200 px-3 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 bg-[#8A6B28]"></span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 font-bold">
              TRUSTED BY PORSCHE ENTHUSIASTS
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900">
            Why Choose Us?
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base mt-4">
            Get authentic, accurate, and instant window stickers backed by official factory specifications and premium historical databases.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat) => (
            <div
              key={feat.id}
              className="bg-zinc-100/40 p-6 border border-zinc-200 hover:border-zinc-300 transition-all duration-300 relative group rounded-none"
            >
              <div className="w-10 h-10 bg-zinc-50 border border-zinc-200 flex items-center justify-center mb-5 group-hover:border-[#9B2226] transition-colors duration-300">
                {feat.icon}
              </div>
              <h3 className="font-display text-base font-bold text-zinc-900 mb-2 group-hover:text-zinc-800 transition-colors">
                {feat.title}
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                {feat.desc}
              </p>
              <div className="absolute top-0 right-0 w-0 h-[1.5px] bg-[#9B2226] transition-all duration-300 group-hover:w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
