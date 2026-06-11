'use client';

import { useState } from 'react';

const testimonials = [
  {
    initials: 'AR',
    name: 'Aditya Rao',
    details: 'Final Year · CSE · Tier-2 college, Pune',
    subDetails: 'No prior work experience · Joined in 3rd year',
    quote: '"I graduated with a 7.2 CGPA from a mid-tier college. I knew I wasn\'t going to win on pedigree. The Dandes AI/ML course gave me 4 real projects on my GitHub, that\'s what the Mu Sigma interviewer spent 20 minutes asking about. Not my grades. My projects."',
    role: 'ML Engineer',
    company: 'Mu Sigma, Bangalore · Batch 2024',
    salary: '₹17 LPA'
  },
  {
    initials: 'PK',
    name: 'Priya Krishnan',
    details: 'Pre-final Year · ECE · Chennai',
    subDetails: 'Started during 3rd year · Commerce background in school',
    quote: '"I started these artificial intelligence classes online in my 3rd year. By the time placements opened, I had an ML portfolio nobody else in my batch had. Two companies reached out before I had even applied. I didn\'t expect that to happen."',
    role: 'AI Engineer',
    company: 'Fractal Analytics · Batch 2024',
    salary: '₹19.5 LPA'
  },
  {
    initials: 'RS',
    name: 'Priya Krishnan',
    details: 'Final Year · Mechanical Engineering · Nagpur',
    subDetails: 'Non-CS background · Joined as a complete beginner',
    quote: '"Everyone told me AI/ML was only for CS students. These are genuinely AI courses for beginners, it started from foundations. I landed a role most CS students in my batch couldn\'t get an interview for. My Mechanical background was actually an advantage."',
    role: 'Data Scientist',
    company: 'Lam Research · Batch 2023',
    salary: '₹16 LPA'
  },
  {
    initials: 'SM',
    name: 'Sneha Mehta',
    details: '2nd Year → Completed in 3rd Year · IT Engineering · Hyderabad',
    subDetails: 'Commerce student in 11th–12th',
    quote: '"I did this AI course online for students while managing exams and a semester project, fully manageable with a college schedule. The mock interviews were what made the real difference. I walked into placements knowing exactly what was coming."',
    role: 'ML Associate',
    company: 'Sigmoid Analytics · Batch 2024',
    salary: '₹15 LPA'
  }
];

export default function StudentOutcomesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-16 md:py-24 px-4 bg-[#F5F7FA]">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div>
            <span className="text-[#4F46E5] text-sm font-semibold mb-4 block">
              Student Outcomes
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-2">
              No prior work experience. No IIT.
            </h2>
            <h2 className="text-3xl md:text-4xl font-bold text-[#DC2626] mb-6">
              Real Career Outcomes.
            </h2>
            <p className="text-[#6B7280] text-base leading-relaxed mb-12">
              Every student featured here started with the same challenge — no industry experience, no AI/ML background, and no special advantage.
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-4 text-center">
                <div className="text-[#7C3AED] text-2xl md:text-3xl font-bold mb-2">
                 Production Ready
                </div>
                <p className="text-[#6B7280] text-sm leading-relaxed">
                   Projects.Built and deployed during the program.

                </p>
              </div>

              <div className="bg-white rounded-xl p-4 text-center">
                <div className="text-[#7C3AED] text-2xl md:text-3xl font-bold mb-2">
                  GitHub Portfolio
                </div>
                <p className="text-[#6B7280] text-sm leading-relaxed">
                  Showcase real AI/ML projects recruiters can review.
                </p>
              </div>

              {/* Third card */}
              <div className="col-span-2 lg:col-span-1 flex justify-center">
                <div className="bg-white rounded-xl p-4 text-center max-w-[280px]">
                  <div className="text-[#7C3AED] text-2xl md:text-3xl font-bold mb-2">
                    Interview Ready

                  </div>
                  <p className="text-[#6B7280] text-sm leading-relaxed">
                    Project discussions, technical rounds, and career guidance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Testimonial Card */}
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              {/* Profile */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-[#E6EAFC] rounded-full flex items-center justify-center text-[#4F46E5] font-bold text-sm">
                  {current.initials}
                </div>
                <div>
                  <h3 className="text-[#1a1a1a] font-bold text-lg">{current.name}</h3>
                  <p className="text-[#6B7280] text-sm">{current.details}</p>
                  <p className="text-[#6B7280] text-sm">{current.subDetails}</p>
                </div>
              </div>

              {/* Quote */}
              <p className="text-[#4B5563] text-base italic leading-relaxed mb-8">
                {current.quote}
              </p>

              {/* Job Card */}
              <div className="bg-[#F9FAFB] rounded-lg p-4 border-l-4 border-[#10B981] flex justify-between items-center">
                <div>
                  <h4 className="text-[#1a1a1a] font-bold text-sm">{current.role}</h4>
                  <p className="text-[#10B981] text-sm">{current.company}</p>
                </div>
                <div className="text-[#10B981] font-bold text-xl">{current.salary}</div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex gap-3 mt-6 justify-center lg:justify-start">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full border-2 border-[#CF2030] flex items-center justify-center text-[#CF2030] hover:bg-[#CF2030] hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full bg-[#CF2030] flex items-center justify-center text-white hover:bg-[#b81c2c] transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
