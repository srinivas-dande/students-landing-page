'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function TimeCommitmentSection() {
  const [openItem, setOpenItem] = useState(0);

  const toggleItem = (index) => {
    setOpenItem(prev => (prev === index ? -1 : index));
  };

  const features = [
  {
    image: '/icons/weekend.png',
    title: 'Live Classes (Mon–Thu)',
    description:
      `8:00 P.M. – 10:00 P.M. | 4 Days a Week.

      Live instructor-led classes conducted on weekday evenings. Every session is recorded and shared within 24 hours, so you can revisit concepts or catch up whenever needed.`
  },
  {
    image: '/icons/assignment.png',
    title: 'Weekend Practice & Assignments',
    description:
      `Friday: 2 Hrs | Saturday: 3 Hrs | Sunday: 3 Hrs 

      Dedicated time for practice exercises, assignments, and revision to reinforce the concepts learned during the week.`

  },
  {
    image: '/icons/project.png',
    title: 'Project Work at Your Own Pace',
    description:
      `Flexible & Self-Paced

    Build real-world AI/ML projects at your own pace while receiving guidance and feedback from mentors throughout the program.`
  },
  {
    image: '/icons/recording.png',
    title: 'Lifetime Access to Recordings',
    description:
      `Learn Anytime, Revisit Anytime

    Get permanent access to all class recordings, Q&A sessions, and learning materials. Review concepts before interviews, projects, or whenever you need a refresher.`
  }
];

  const schedule = [
    { day: 'MON', activity: 'Live class · 2 hrs', type: 'assignment' },
    { day: 'TUE', activity: 'Live class · 2 hrs', type: 'assignment' },
    { day: 'WED', activity: 'Live class · 2 hrs', type: 'assignment' },
    { day: 'THU', activity: 'Live class · 2 hrs', type: 'assignment' },
    { day: 'FRI', activity: 'Preparation & Practice · 2 hrs', type: 'live' },
    { day: 'SAT', activity: 'Preparation & Practice · 3 hrs', type: 'live' },
    { day: 'SUN', activity: 'Preparation & Practice / Assignment · 3 hrs', type: 'live' }
  ];

  const getActivityStyle = (type) => {
    switch (type) {
      case 'assignment':
        return 'bg-[#D1FAE5] text-[#059669]';
      case 'live':
        return 'bg-[#DBEAFE] text-[#2563EB]';
      case 'project':
        return 'bg-[#D1FAE5] text-[#059669]';
      case 'free':
        return 'bg-[#F3F4F6] text-[#9CA3AF]';
      default:
        return 'bg-[#F3F4F6] text-[#6B7280]';
    }
  };
 
  return (
    <section className="py-16 md:py-24 bg-[#F5F7FA]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div>
            <span className="inline-block text-[#4F46E5] text-sm font-semibold mb-4">
              Time Commitment
            </span>
            <h2 className="text-[28px] md:text-[34px] font-bold text-[#111827] mb-4 leading-tight">
              Designed around your college schedule, not the other way around
            </h2>
            <p className="text-[#6B7280] text-base mb-8">
              12 months. 15-16 hours per week. Live sessions on weekdays only.
            </p>

            {/* Accordion Features */}
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-[#E5E7EB] overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-5 py-3 flex items-center gap-4 text-left"
                  >
                    <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                    <span className="flex-1 font-semibold text-[#111827]">
                      {feature.title}
                    </span>
                    <svg
                      className={`w-5 h-5 text-[#CF2030] transition-transform ${openItem === index ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </button>
                  {openItem === index && (
                    <div className="px-5 pb-4 pl-[76px]">
                      <p className="text-[#6B7280] text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Schedule Card */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#E5E7EB]">
            <h3 className="text-sm font-semibold text-[#6B7280] uppercase tracking-wide mb-6">
              Sample Weekly Schedule
            </h3>

            <div className="space-y-3">
              {schedule.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <span className="w-10 text-sm font-medium text-[#6B7280]">
                    {item.day}
                  </span>
                  <div className={`flex-1 px-4 py-2 rounded-lg text-sm font-bold ${getActivityStyle(item.type)}`}>
                    {item.activity}
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm text-[#6B7280] leading-relaxed">
              <span className="font-bold text-[#111827]">Total Commitment: ~16 Hours Per Week.</span><br/>This schedule is specifically designed for college students and working professionals, allowing you to build AI/ML skills without disrupting your academics or work commitments.

            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
