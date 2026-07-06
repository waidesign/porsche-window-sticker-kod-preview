import React from "react";
import { Award, ShieldAlert, Cpu, Star } from "lucide-react";

export default function TrustBand() {
  const stats = [
    {
      id: "stat-models",
      icon: <Award className="w-5 h-5 text-zinc-300" />,
      value: "100%",
      label: "Porsche Coverage",
      desc: "All models 1990-2026",
    },
    {
      id: "stat-vins",
      icon: <Cpu className="w-5 h-5 text-zinc-300" />,
      value: "250K+",
      label: "VINs Decoded",
      desc: "Instant precision archival query",
    },
    {
      id: "stat-delivery",
      icon: <ShieldAlert className="w-5 h-5 text-zinc-300" />,
      value: "Instant",
      label: "Archival Delivery",
      desc: "Download and print instantly",
    },
    {
      id: "stat-satisfaction",
      icon: <Star className="w-5 h-5 text-zinc-300" />,
      value: "99.8%",
      label: "Sticker Accuracy",
      desc: "Verified sticker specs",
    },
  ];

  return (
    <section className="bg-zinc-950 border-y border-zinc-800 py-10 relative z-10 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 divide-y lg:divide-y-0 lg:divide-x divide-zinc-800">
          {stats.map((stat, idx) => (
            <div
              key={stat.id}
              className={`flex items-start space-x-4 px-2 group ${
                idx > 1 ? "pt-6 lg:pt-0" : idx > 0 ? "pt-6 sm:pt-0" : ""
              }`}
            >
              <div className="p-3 bg-zinc-900 border border-zinc-800 group-hover:border-[#A1FF2C] transition-all duration-300">
                {stat.icon}
              </div>
              <div>
                <p className="text-2xl font-display font-extrabold tracking-tight text-white group-hover:text-[#A1FF2C] transition-colors">
                  {stat.value}
                </p>
                <p className="text-[10px] font-mono font-bold text-zinc-400 tracking-wider uppercase mt-1">
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
