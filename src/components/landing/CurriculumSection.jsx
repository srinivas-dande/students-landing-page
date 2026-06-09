'use client';

import { useState } from 'react';

export default function CurriculumSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const modules = [
    {
      weeks: 'WEEKS 1–3',
      title: 'Python & ML Foundations',
      items: [
        'Python for data science, NumPy, Pandas, Matplotlib from scratch',
        'Statistics and probability: distributions, hypothesis testing, correlation',
        'Supervised learning: regression, decision trees, model evaluation',
        'Scikit-learn complete walkthrough with real datasets from Day 1'
      ]
    },
    {
      weeks: 'WEEKS 4–6',
      title: 'Data Engineering & EDA',
      items: [
        'SQL for machine learning, joins, aggregations, window functions',
        'Advanced feature engineering and automated selection',
        'Handling missing data, outliers, and class imbalance',
        'Project delivery: Customer Churn Predictor (end-to-end)'
      ]
    },
    {
      weeks: 'WEEKS 7–10',
      title: 'Deep Learning & Neural Networks',
      items: [
        'Neural network architecture, perceptron to deep multi-layer networks',
        'TensorFlow and PyTorch, training loops, optimisers, loss functions',
        'CNNs for vision, RNNs and LSTMs for sequential data',
        'Transfer learning with pre-trained models on new domains'
      ]
    },
    {
      weeks: 'WEEKS 11–14',
      title: 'NLP & Large Language Models',
      items: [
        'Text preprocessing, tokenisation, word embeddings',
        'Transformer architecture, attention, BERT, GPT fine-tuning',
        'Building RAG pipelines with LangChain for production LLM apps',
        'Project: NLP Sentiment Classifier deployed as authenticated API'
      ]
    },
    {
      weeks: 'WEEKS 15–18',
      title: 'MLOps & Cloud Deployment',
      items: [
        'Model serving with Flask, FastAPI, Streamlit, production patterns',
        'Docker for portable, reproducible ML applications',
        'AWS SageMaker and Google Cloud Vertex AI deployment',
        'CI/CD pipelines for automated ML deployment via GitHub Actions'
      ]
    },
    {
      weeks: 'WEEKS 19–24',
      title: 'Capstone + Interview Prep',
      items: [
        '1:1 mentored domain capstone, full build with code review',
        'ML system design interview preparation and walkthroughs',
        '5 structured mock interviews with detailed written feedback',
        'Resume, LinkedIn, and GitHub portfolio review sessions'
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
            A complete <span className="text-[#DC2626]">artificial intelligence</span>
            <br />
            specialist course, 24 weeks
          </h2>
          <p className="text-[#667085] text-base max-w-xl mx-auto">
            Every module compounds on the previous one. Beginner-friendly in
            <br className="hidden md:block" />
            Week 1, deployment-ready by Week 24.
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
