import React from "react";
import { ArrowRight, FileText, Paintbrush, ListChecks, ShieldAlert, Cpu, Binary } from "lucide-react";

export default function OtherTools() {
  const tools = [
    {
      title: "Porsche Build Sheet by VIN",
      desc: "Get a comprehensive build sheet listing every option and original spec.",
      icon: <FileText className="w-5 h-5 text-[#A1FF2C]" />
    },
    {
      title: "Porsche Paint Code by VIN",
      desc: "Identify the exact factory paint code, name, and color formulation.",
      icon: <Paintbrush className="w-5 h-5 text-[#A1FF2C]" />
    },
    {
      title: "Porsche Options by VIN",
      desc: "Decode all original factory-installed option codes and prices.",
      icon: <ListChecks className="w-5 h-5 text-[#A1FF2C]" />
    },
    {
      title: "Porsche Warranty Check by VIN",
      desc: "Check active manufacturer warranty coverage and vehicle history.",
      icon: <ShieldAlert className="w-5 h-5 text-[#A1FF2C]" />
    },
    {
      title: "Porsche Specifications by VIN",
      desc: "View complete technical, chassis, dimensions, and engine specs.",
      icon: <Cpu className="w-5 h-5 text-[#A1FF2C]" />
    },
    {
      title: "Porsche VIN Decoder",
      desc: "Translate any 17-character Porsche VIN into readable vehicle data.",
      icon: <Binary className="w-5 h-5 text-[#A1FF2C]" />
    }
  ];

  const scrollToLookup = () => {
    const el = document.getElementById("lookup");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="other-tools" className="py-24 bg-zinc-950 border-b border-zinc-900 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Other Porsche VIN Lookup Tools
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
            Explore our specialized companion tools to decode, analyze, and research your Porsche's exact heritage and manufacturing details.
          </p>
        </div>

        {/* Tools Grid - Symmetrical 3x2 on desktop, matches other grids with rounded-none */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, idx) => (
            <button
              key={idx}
              onClick={scrollToLookup}
              className="text-left bg-zinc-900/30 border border-zinc-800 hover:border-[#A1FF2C]/40 hover:bg-zinc-900/50 transition-all duration-300 p-8 rounded-none flex flex-col justify-between min-h-[180px] group relative active:scale-[0.99]"
            >
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <div className="p-2 bg-zinc-950/80 border border-zinc-800 group-hover:border-[#A1FF2C]/30 transition-colors">
                    {tool.icon}
                  </div>
                  <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-[#A1FF2C] group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 font-display group-hover:text-zinc-100 transition-colors">
                  {tool.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {tool.desc}
                </p>
              </div>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
