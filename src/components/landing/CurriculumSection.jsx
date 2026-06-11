'use client';

import { useState } from 'react';

export default function CurriculumSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const modules = [
    {
      weeks: 'PHASE 1',
      title: 'Programming & Data Foundations',
      items: [ 
        'SQL & Advanced SQL Queries',
        'Database Design & Data Modeling',
        'Python Programming',
        'Object-Oriented Programming (OOP)',
        'Data Structures & Algorithms Basics',
        'NumPy & Pandas',
        'Data Manipulation & Processing'
      ]
    },
    {
      weeks: 'PHASE 2',
      title: 'Mathematics & Data Analysis',
      items: [
        'Statistics & Probability',
        'Linear Algebra Fundamentals',
        'Data Visualization',
        'Exploratory Data Analysis (EDA)',
        'Feature Analysis',
        'Data Cleaning & Preprocessing',
        'Business Insights Generation'
      ]
    },
    {
      weeks: 'PHASE 3',
      title: 'Machine Learning Engineering',
      items: [
        'Supervised Learning',
        'Unsupervised Learning',
        'Feature Engineering',
        'Model Evaluation & Optimization',
        'Ensemble Methods',
        'Recommendation Systems',
        'Real-World ML Problem Solving'
      ]
    },
    {
      weeks: 'PHASE 4',
      title: 'Deep Learning & Computer Vision',
      items: [
        'Neural Networks',
        'TensorFlow & PyTorch',
        'CNN Architectures',
        'Transfer Learning',
        'Image Classification',
        'Object Detection',
        'Computer Vision Applications'
      ]
    },
    {
      weeks: 'PHASE 5',
      title: 'NLP, Generative AI & Agentic AI',
      items: [
        'Natural Language Processing (NLP)',
        'Transformers & BERT',
        'Prompt Engineering',
        'Retrieval-Augmented Generation (RAG)',
        'Large Language Models (LLMs)',
        'Fine-Tuning Techniques',
        'Model Context Protocol (MCP)',
        'AI Agents & Multi-Agent Systems',
        'Tool Calling & Function Calling',
        'Agent Workflows & Orchestration'
      ]
    },
    {
      weeks: 'PHASE 6',
      title: 'MLOps & Industry Capstone',
      items: [
        'Model Deployment',
        'Docker & Cloud Platforms',
        'CI/CD for Machine Learning',
        'MLflow & Experiment Tracking',
        'Model Monitoring',
        'Production AI Systems',
        'End-to-End AI Project Development'
      ]
    }
  ];

  // Layout order as shown in Frame 5: Left column [0, 4], Right column [2, 1, 3, 5]
  const leftModules = [modules[0], modules[4]];
  const rightModules = [modules[2], modules[1], modules[3], modules[5]];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const AccordionItem = ({ module, index }) => {
    const isOpen = openIndex === index;
    
    return (
      <div className="bg-white rounded-xl border border-[#E5E7EB] overflow-hidden">
        {/* Module Header */}
        <button
          onClick={() => toggleAccordion(index)}
          className="w-full flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-4">
            <span className="px-3 py-1 bg-[#EEF2FF] text-[#4F46E5] text-xs font-semibold rounded">
              {module.weeks}
            </span>
            <h3 className="text-[#1a1a1a] font-semibold text-base md:text-lg text-left">
              {module.title}
            </h3>
          </div>
          <svg 
            className={`w-5 h-5 text-[#4F46E5] transition-transform ${isOpen ? 'rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {/* Module Content */}
        {isOpen && (
          <div className="px-6 py-4 border-t border-[#E5E7EB]">
            <ul className="space-y-3">
              {module.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start gap-3 text-[#667085] text-sm">
                  <span className="w-1.5 h-1.5 bg-[#4F46E5] rounded-full mt-2 flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="bg-[#F5F7FA] py-14 px-4">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-white text-[#4F46E5] text-semibold font-sm rounded-full mb-6">
            Curriculum
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">
            Comprehensive <span className="text-[#DC2626]">AI & Machine Learning</span> Curriculum
            <br />
            specialist course, 24 weeks
          </h2>
          <p className="text-[#667085] text-base max-w-xl mx-auto">
            A structured 12-month career program designed to take you from
            <br className="hidden md:block" />
            fundamentals to industry-ready AI skills.
          </p>
        </div>

        {/* Modules Grid - Custom Layout matching Frame 5 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-12">
          {/* Left Column */}
          <div className="flex flex-col gap-4">
            <AccordionItem module={leftModules[0]} index={0} />
            <AccordionItem module={leftModules[1]} index={4} />
          </div>
          
          {/* Right Column */}
          <div className="flex flex-col gap-4">
            <AccordionItem module={rightModules[0]} index={2} />
            <AccordionItem module={rightModules[1]} index={1} />
            <AccordionItem module={rightModules[2]} index={3} />
            <AccordionItem module={rightModules[3]} index={5} />
          </div>
        </div>

        {/* Email Input + Download Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Your email"
            className="w-full sm:w-72 px-4 py-3 border border-[#D0D5DD] rounded-sm text-[#667085] text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#DC2626] focus:border-transparent"
          />
          <button className="w-full sm:w-auto bg-[#DC2626] hover:bg-[#b91c1c] text-white font-medium px-6 py-3 rounded-sm flex items-center justify-center gap-3 transition-colors">
            Download the Curriculum
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
