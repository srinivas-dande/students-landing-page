'use client';

import { useState } from 'react';

const faqs = [
  {
    question: "Do I need prior coding or ML experience to join?",
    answer: "This course is designed for anyone who wants to build a career in AI/ML. It is suitable for freshers, working professionals, career switchers, non-IT, and non-engineering backgrounds. No prior experience in AI or Machine Learning is required, as the course starts from fundamentals and gradually moves to advanced concepts."
  },
  {
    question: "Will this be too much to manage alongside my college coursework?",
    answer: "This is how 100% of our student cohort does it, alongside college. Live sessions are weekends only. Every class is recorded within 24 hours. Weekday work is 2–3 hours. During exam seasons, you can slow down and catch up without losing momentum. Every student who completed the course in 2024 was managing a full college load at the same time."
  },
  {
    question: 'Is placement guaranteed, or is it just "support"?',
    answer: "We're direct: no course can legally guarantee employment. What we provide is specific and accountable, 5 mock interviews, resume review, direct referrals to 40+ companies, and an active placement team tracking every student's progress. 87% of students who complete the full course receive an offer within 3 months. That track record is what we stand behind, not a promise, but a result you can verify."
  },
  {
    question: "How is this different from Udemy, Coursera, or free YouTube AI courses?",
    answer: "Those give you knowledge. Dandes gives you outcomes. The difference lives in what can't be put online, real portfolio projects you own, feedback from active ML engineers, mock interviews that simulate actual company rounds, and a placement team that knows who's hiring right now. A Coursera certificate tells a recruiter you watched videos. A Dandes portfolio tells them you can do the work. One earns a scroll past. The other earns an interview invite."
  },
  {
    question: "What happens if I fall behind or miss sessions?",
    answer: "Every session is recorded and available within 24 hours, you never lose content permanently. We also track progress for every student in the cohort. If someone falls more than 2 weeks behind, their assigned mentor proactively reaches out to build a catch-up plan. No student who wanted to finish has been left without a path to completion."
  },
  {
    question: "I'm from a non-CS background (Mechanical / ECE / Commerce). Is this right for me?",
    answer: "Not just right, often an advantage. Domain expertise is what makes AI practitioners genuinely valuable. A Mechanical graduate who understands manufacturing and can build a predictive maintenance model is more hirable in industrial AI than a CS graduate who knows the theory but not the business problem. We've built specific entry pathways for engineering non-CS and commerce backgrounds, and our placement record includes students from ECE, Mechanical, Civil, and BBA."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-16 md:py-24 bg-[#F5F7FA]">
      <div className="max-w-[900px] mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">
            Questions we hear every time.{' '}
            <span className="text-[#CF2030]">Answered honestly.</span>
          </h2>
          <p className="text-[#6B7280] text-base md:text-lg max-w-2xl mx-auto">
            Be honest with yourself. This course works for the right person and we&apos;d 
            rather you know that before you enroll than after.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-[#E5E7EB] overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-start justify-between text-left"
              >
                <span className="text-[#1a1a1a] font-semibold text-base md:text-lg pr-4">
                  {faq.question}
                </span>
                <span className="text-[#9CA3AF] text-2xl font-light flex-shrink-0 mt-0.5">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-[#6B7280] text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
