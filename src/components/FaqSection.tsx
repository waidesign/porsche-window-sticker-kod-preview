import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const faqs: FaqItem[] = [
    {
      id: "faq-1",
      question: "Is this an official Dr. Ing. h.c. F. Porsche AG window sticker?",
      answer: "No, this is an archival reconstruction tool designed for owners, restorers, and car enthusiasts. It utilizes manufacturing data sheets, option codes, and historically verified specs to recreate a pristine Window Sticker layout matching original factory delivery sheets. It is extremely popular for car shows, documentation binders, and resale folders.",
    },
    {
      id: "faq-2",
      question: "What model years and chassis types are covered?",
      answer: "Our system covers all Porsche sports cars, sedans, and SUVs from 1990 up to the latest 2026 releases. This includes 911 (964, 993, 996, 997, 991, 992), 718 Boxster & Cayman (986, 987, 981, 982), Taycan EV, Panamera, Macan, and Cayenne series.",
    },
    {
      id: "faq-3",
      question: "Where is my 17-character VIN located on my Porsche?",
      answer: "Your unique Vehicle Identification Number is most easily seen looking through your windshield at the bottom driver's side of the dashboard. It is also printed on the safety compliance sticker on the driver-side door jamb, in your registration card, and stamped on the chassis floor plate under the passenger seat carpet fold.",
    },
    {
      id: "faq-4",
      question: "Can I customize the options and paint codes on my sticker?",
      answer: "Yes! Porsche is famous for its massive custom catalog. If you find minor discrepancies or want to customize options (e.g. adding the Weissach Package, changing colors from Shark Blue to Paint-To-Sample, or upgrading to Burmester Sound), you can use our built-in Interactive Customizer to add, remove, and update any option and recalculate total MSRP instantly.",
    },
    {
      id: "faq-5",
      question: "How do I print the Window Sticker to fit a physical display?",
      answer: "Once loaded, click 'Print Window Sticker' to launch standard browser printing. Our system includes a customized print stylesheet that auto-formats the sticker layout to scale perfectly onto standard letter/legal size paper with clean crisp lines and zero navigation menus. For high-end car shows, we recommend printing on thick heavy semi-gloss cardstock (80lb+).",
    },
  ];

  const toggleFaq = (id: string) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 bg-[#09090B] border-b border-zinc-900 no-print">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-zinc-900 border border-zinc-800 px-3 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 bg-[#A1FF2C]"></span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 font-bold">
              KNOWLEDGE REPOSITORY
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-zinc-400 text-sm mt-4">
            Have questions about decoding, sticker history, or printing specifications? Find answers below.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-zinc-900/30 border border-zinc-800 transition-all duration-300 shadow-sm hover:border-zinc-700 rounded-none overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                >
                  <span className="font-display text-sm sm:text-base font-bold text-white pr-4 hover:text-[#A1FF2C] transition-colors">
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0 p-1.5 bg-zinc-950 border border-zinc-800 rounded-none">
                    {isOpen ? (
                      <Minus className="w-3.5 h-3.5 text-white" />
                    ) : (
                      <Plus className="w-3.5 h-3.5 text-[#A1FF2C]" />
                    )}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    isOpen ? "max-h-[500px] border-t border-zinc-800" : "max-h-0"
                  }`}
                >
                  <p className="p-5 text-xs sm:text-sm text-zinc-400 leading-relaxed bg-zinc-950/20">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
