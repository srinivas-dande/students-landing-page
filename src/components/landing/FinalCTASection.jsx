'use client';

import { useState } from 'react';

export default function FinalCTASection() {
  const checkItems = [
    '650+ students successfully placed',
    '₹17 LPA average first offer, no experience required',
    'Fits fully around your college schedule',
    '7-day full refund, no risk to try',
    'Only 23 seats left in the June 25th cohort'
  ];

  return (
    <section className="py-20 px-4 bg-[#F5F7FA]">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.9fr] gap-12 items-start">
          {/* Left Content */}
          <div className="lg:pl-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] leading-tight mb-6">
              This Is Where Your<br />
              <span className="text-[#CF2030]">Placement Story</span> Starts
            </h2>
            
            <p className="text-[#6B7280] text-base mb-8 leading-relaxed">
              Every student in our testimonials had exactly the question you have right now. The only difference between them and your batchmates who didn&apos;t act is that they submitted this form.
            </p>

            {/* Checklist */}
            <div className="space-y-0">
              {checkItems.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 py-2 border-b border-[#E5E7EB] w-[85%]"
                >
                  <svg className="w-5 h-5 text-[#4F46E5] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className=" text-base text-[#1a1a1a]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Form Card */}
          <div className="bg-white rounded-2xl border border-[#E5E7EB] p-6 md:p-7 shadow-sm">
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-2">
              Reserve Your Seat, July 2025
            </h3>
            <p className="text-[#6B7280] text-sm mb-6">
              Counsellor will WhatsApp you within 1 hour with full details, fees, and payment options.
            </p>

            {/* Alert */}
            <div className="bg-[#FEF3C7] rounded-lg px-4 py-3 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#F59E0B] rounded-full"></span>
              <span className="text-[#D97706] text-sm font-medium">
                Only 23 seats remaining · July 12 start
              </span>
            </div>

            {/* Form */}
            <form className="space-y-3">
              {/* Full Name */}
              <div>
                <label className="block text-[#344054] text-xs font-semibold mb-2 uppercase tracking-wide">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Aditya Rao"
                  className="w-full px-4 py-3 border border-[#D0D5DD] rounded-lg text-[#1a1a1a] text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#CF2030] focus:border-transparent placeholder:text-[#98A2B3]"
                />
              </div>

              {/* WhatsApp and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#344054] text-xs font-semibold mb-2 uppercase tracking-wide">
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 border border-[#D0D5DD] rounded-lg text-[#1a1a1a] text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#CF2030] focus:border-transparent placeholder:text-[#98A2B3]"
                  />
                </div>
                <div>
                  <label className="block text-[#344054] text-xs font-semibold mb-2 uppercase tracking-wide">
                    Email ID
                  </label>
                  <input
                    type="email"
                    placeholder="you@college.edu"
                    className="w-full px-4 py-3 border border-[#D0D5DD] rounded-lg text-[#1a1a1a] text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#CF2030] focus:border-transparent placeholder:text-[#98A2B3]"
                  />
                </div>
              </div>

              {/* Year and Branch Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#344054] text-xs font-semibold mb-2 uppercase tracking-wide">
                    Year of Study
                  </label>
                  <div className="relative">
                    <select className="w-full px-4 py-3 border border-[#D0D5DD] rounded-lg text-[#98A2B3] text-sm bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-[#CF2030] focus:border-transparent cursor-pointer pr-10">
                      <option value="">Select year</option>
                      <option value="1">1st Year</option>
                      <option value="2">2nd Year</option>
                      <option value="3">3rd Year</option>
                      <option value="4">4th Year</option>
                    </select>
                    <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#98A2B3] pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <label className="block text-[#344054] text-xs font-semibold mb-2 uppercase tracking-wide">
                    Branch / Stream
                  </label>
                  <div className="relative">
                    <select className="w-full px-4 py-3 border border-[#D0D5DD] rounded-lg text-[#98A2B3] text-sm bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-[#CF2030] focus:border-transparent cursor-pointer pr-10">
                      <option value="">Select branch</option>
                      <option value="cse">Computer Science</option>
                      <option value="it">Information Technology</option>
                      <option value="ece">Electronics</option>
                      <option value="mech">Mechanical</option>
                      <option value="commerce">Commerce</option>
                      <option value="other">Other</option>
                    </select>
                    <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#98A2B3] pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#CF2030] hover:bg-[#B91C2C] text-white font-semibold py-4 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                Reserve My Seat in June 25th Batch
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>

              {/* Disclaimer */}
              <p className="text-[#98A2B3] text-xs text-center">
                No spam. Your details stay private. A counsellor reaches out within 1 hour.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
