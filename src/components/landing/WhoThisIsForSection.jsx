'use client';

import { useState } from 'react';

export default function WhoThisIsForSection() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: 'Engineering Students',
      title: 'Engineering Students (CS / ECE / Mechanical / EEE / Civil)',
      description: "Whether you're from a Computer Science background or another engineering discipline, this program starts from the fundamentals and helps you build industry-ready AI/ML skills.",
      benefits: [
        'Build AI/ML skills alongside your college studies',
        'Learn ML, DL, Generative AI and Agentic AI from scratch',
        'Develop real-world projects and a strong GitHub portfolio',
        'Stand out during placements and job interviews',
        'Prepare for future AI/ML career opportunities'
      ]
    },
    
    {
      label: 'Graduates & Job Seekers',
      title: 'Graduates & Job Seekers',
      description: "If you've recently graduated or are looking to improve your career opportunities, this program provides a structured pathway to build practical AI/ML skills and industry-relevant experience.",
      benefits: [
        'Build job-ready AI/ML skills through a structured 12-month roadmap',
        'Gain hands-on experience with real-world projects',
        'Strengthen your resume with real-world AI/ML projects',
        'Prepare for technical interviews and AI/ML roles',
        'Prepare for technical interviews and AI/ML roles'
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
            Built for students and job seekers who want to <br />
            <span className="text-[#DC2626]">&quot;stand out in a competitive &quot;</span>job market.
          </h2>
          <p className="text-[#6B7280] mt-4 text-base">
            Start with the fundamentals, build real-world AI/ML projects, and develop<br />
            the skills employers look for in today's technology roles.
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
