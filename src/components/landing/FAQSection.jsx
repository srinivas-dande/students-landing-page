'use client';

import { useState } from 'react';

const faqs = [
  {
    question: "Do I need prior coding or ML experience to join?",
    answer: `No prior AI/ML experience is required. We start from the fundamentals and gradually build your skills through a structured 12-month roadmap covering Python, Data Analysis, Machine Learning, Deep Learning, Generative AI, and MLOps. 
    
    Whether you're a fresher, software engineer, or an engineer from a non-CS background such as Mechanical, ECE, or Civil, the program is designed to help you transition into AI/ML with confidence.`
    
  },
  {
    question: "I'm from a non-CS background (Mechanical / ECE / Civil). Is this program right for me?",
    answer: `Yes. You do not need a Computer Science degree to build a career in AI/ML. Many of our students come from Mechanical, ECE, Civil, and other engineering backgrounds. In fact, domain expertise can be a strong advantage when applying AI to real-world problems. 
    
    Our program starts from the fundamentals and helps you build the programming, data, and machine learning skills needed to transition into AI/ML roles while leveraging your existing engineering knowledge.`
  },
  {
    question: 'Will this be too much to manage alongside my college coursework?',
    answer: `The program is specifically designed for students and working professionals. Classes run from 8:00 P.M. to 10:00 P.M. (Monday to Thursday), and all sessions are recorded and shared within 24 hours. 
    
    This allows you to balance your college academics while steadily building AI/ML skills. During exams or busy periods, you can learn at your own pace and catch up using the recordings.`
  },
  {
    question: "What happens if I fall behind or miss sessions?",
    answer: "Don't worry. Every live session is recorded and made available within 24 hours, so you can learn at your own pace when needed. We also monitor student progress throughout the program. If you fall behind, our team will help you create a catch-up plan and get back on track."
  },
  {
    question: "What kind of projects will I build during the program?",
    answer: `You'll work on real-world AI/ML projects covering Machine Learning, Deep Learning, Generative AI, Agentic AI, and MLOps. These projects are designed to help you apply concepts, build a strong portfolio, and gain practical experience solving real business problems. 
    
    By the end of the program, you'll have multiple industry-relevant projects that showcase your AI engineering skills to recruiters and hiring managers.`
  },
  {
  question: "How is this different from Udemy, Coursera, or free YouTube AI courses?",
  answer: `Online courses are great for learning concepts. Our focus is helping you apply those concepts to build a career in AI/ML.

  With Dandes Academy, you get:

  • Structured 12-month learning path
  • Live instructor-led training
  • Real-world portfolio projects
  • Mentorship and personalized guidance
  • Mock interviews and career preparation
  • A learning community of like-minded professionals

The goal is not just to complete a course, but to build the skills, projects, and confidence needed for AI/ML roles.`
},
  {
    question: "Is placement guaranteed, or is it just 'support'?",
    answer: `No institute can legally guarantee a job. What we can guarantee is dedicated career support throughout your journey. 
    
    You'll receive guidance on resume building, interview preparation, portfolio development, mock interviews, and job search strategies. Our team works closely with students to help them become industry-ready and improve their chances of securing AI/ML opportunities.`
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
                  <div className="text-[#6B7280] text-sm md:text-base leading-relaxed whitespace-pre-line">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
