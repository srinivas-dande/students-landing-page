'use client';

import { useState } from 'react';

export default function WhoThisIsForSection() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: 'Engineering Students',
      title: 'Engineering Students (CS / ECE / Mech / EEE)',
      description: "Whether you have a CS background or not, the course starts from your actual level and builds toward production-ready AI skills that complement your engineering domain.",
      benefits: [
        'Starting from basic Python, no prior ML experience needed',
        'Fits alongside a full college schedule, 10 hrs/week',
        'AI workshops for students at all experience levels'
      ]
    },
    {
      label: 'Commerce, BBA & MBA Students',
      title: 'Commerce, BBA & MBA Students',
      description: "This is one of the few artificial intelligence courses for commerce students that doesn't assume a heavy coding background. Business domain knowledge is a genuine advantage in AI and we build on it.",
      benefits: [
        'Business analytics and AI applications track available',
        'No advanced maths prerequisites, we teach what you need',
        'Placed commerce students at analytics and AI product companies'
      ]
    },
    {
      label: 'Graduates & Early Job Seekers',
      title: 'Graduates & Early Job Seekers',
      description: "Already graduated but the placement season didn't go how you hoped? Artificial intelligence courses after graduation are one of the most effective repositioning moves you can make before your career calcifies.",
      benefits: [
        'Intensive 6-month reskill with direct placement support',
        'Faster track for those with a CS foundation from their degree',
        'Resume rebuilt around AI/ML projects before you apply'
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#4F46E5] text-sm font-semibold">Who This Is For</span>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#111827] mt-4 leading-tight">
            This course was built for students who don&apos;t fit the<br />
            <span className="text-[#DC2626]">&quot;ideal candidate&quot;</span> mold
          </h2>
          <p className="text-[#6B7280] mt-4 text-base">
            Every module compounds on the previous one. Beginner-friendly in<br />
            Week 1, deployment-ready by Week 24.
          </p>
        </div>

        {/* Tabs */}
        <div className="bg-[#F9FAFB] rounded-xl p-4 mb-12">
  <div className="flex">
    {tabs.map((tab, index) => (
      <button
        key={index}
        onClick={() => setActiveTab(index)}
        className={`flex-1 py-5 px-2 text-center font-semibold transition-all relative text-sm md:text-base
          ${index !== tabs.length - 1 ? "border-r border-[#E5E7EB]" : ""}
          ${
            activeTab === index
              ? "text-[#111827]"
              : "text-[#6B7280]"
          }
        `}
      >
        {tab.label}

        {activeTab === index && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#CF2030]" />
        )}
      </button>
    ))}
  </div>
</div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-12">
          {/* Left - Description */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#111827] mb-6">
              {tabs[activeTab].title}
            </h3>
            <p className="text-[#4B5563] text-base leading-relaxed">
              {tabs[activeTab].description}
            </p>
          </div>

          {/* Right - Benefits Card */}
          <div className="bg-white border border-[#E5E7EB] rounded-xl p-6">
            <h4 className="text-lg font-semibold text-[#111827] mb-6">
              You will benefit most if you want to:
            </h4>
            <ul className="space-y-4">
              {tabs[activeTab].benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#10B981] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <span className="text-[#374151] text-sm">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Text */}
        <p className="text-center text-[#6B7280] text-sm italic">
          If you want a shortcut to three months, this program may not be the right fit. If you want a structured<br />
          path with real depth, this is designed for you.
        </p>
      </div>
    </section>
  );
}
