import React from "react";
import { Award, ShieldAlert, Cpu, Star } from "lucide-react";

export default function TrustBand() {
  const stats = [
    {
      id: "stat-models",
      icon: <Award className="w-5 h-5 text-zinc-700" />,
      value: "100%",
      label: "Porsche Coverage",
      desc: "All models 1990-2026",
    },
    {
      id: "stat-vins",
      icon: <Cpu className="w-5 h-5 text-zinc-700" />,
      value: "250K+",
      label: "VINs Decoded",
      desc: "Instant precision archival query",
    },
    {
      id: "stat-delivery",
      icon: <ShieldAlert className="w-5 h-5 text-zinc-700" />,
      value: "Instant",
      label: "Archival Delivery",
      desc: "Download and print instantly",
    },
    {
      id: "stat-satisfaction",
      icon: <Star className="w-5 h-5 text-zinc-700" />,
      value: "99.8%",
      label: "Sticker Accuracy",
      desc: "Verified sticker specs",
    },
  ];

  return (
    <section className="bg-zinc-50 border-y border-zinc-200 py-10 relative z-10 no-print overflow-hidden">
      <style>{`
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile View: Horizontal Snap Slider */}
        <div className="md:hidden flex space-x-4 overflow-x-auto snap-x snap-mandatory pb-2 scrollbar-none -mx-4 px-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex-shrink-0 w-[270px] snap-center flex items-start space-x-4 p-5 bg-white border border-zinc-200 shadow-sm"
            >
              <div className="p-3 bg-zinc-50 border border-zinc-200">
                {stat.icon}
              </div>
              <div>
                <p className="text-2xl font-display font-extrabold tracking-tight text-zinc-900">
                  {stat.value}
                </p>
                <p className="text-[10px] font-mono font-bold text-zinc-600 tracking-wider uppercase mt-1">
                  {stat.label}
                </p>
                <p className="text-xs text-zinc-500 mt-1 leading-snug">{stat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View: Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 divide-y md:divide-y-0 lg:divide-x divide-zinc-200">
          {stats.map((stat, idx) => (
            <div
              key={stat.id}
              className={`flex items-start space-x-4 px-2 group ${
                idx > 1 ? "pt-6 lg:pt-0" : idx > 0 ? "pt-6 md:pt-0" : ""
              }`}
            >
              <div className="p-3 bg-zinc-100 border border-zinc-200 group-hover:border-[#9B2226] transition-all duration-300">
                {stat.icon}
              </div>
              <div>
                <p className="text-2xl font-display font-extrabold tracking-tight text-zinc-900 group-hover:text-[#9B2226] transition-colors">
                  {stat.value}
                </p>
                <p className="text-[10px] font-mono font-bold text-zinc-600 tracking-wider uppercase mt-1">
                  {stat.label}
                </p>
                <p className="text-xs text-zinc-500 mt-1 leading-snug">{stat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
