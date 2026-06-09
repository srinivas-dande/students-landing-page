'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

export default function PortfolioSection() {
  const projects = [
    {
      badge: 'Project 01',
      badgeClass: 'bg-[#E0E7FF] text-[#4F46E5]',
      title: 'Customer Churn Predictor',
      description: 'End-to-end ML pipeline, full data cleaning, feature engineering, model training, hyperparameter tuning, and a live REST API endpoint. The type of project that earns 20-minute technical discussions.',
      tags: ['Python', 'Scikit-learn', 'Flask', 'Pandas'],
      companies: ['Mu Sigma', 'Airtel AI', 'Jio Platforms'],
      isCapstone: false
    },
    {
      badge: 'Project 02',
      badgeClass: 'bg-[#EEDCF8] text-[#8B5CF6]',
      title: 'Demand Forecasting System',
      description: 'Time-series forecasting for retail inventory LSTM + ARIMA with comparison, deployed to a live Stream, lit dashboard with confidence intervals. Demonstrates both classical and deep learning approaches.',
      tags: ['TensorFlow', 'LSTM', 'Streamlet', 'SQL'],
      companies: ['Walmart Labs India', 'Flipkart AI'],
      isCapstone: false
    },
    {
      badge: 'Project 03',
      badgeClass: 'bg-[#F5EBDD] text-[#F59E0B]',
      title: 'NLP Sentiment Classifier',
      description: 'Fine-tuned BERT model for multi-class product review sentiment, achieving 94.3% validation accuracy. Deployed as an authenticated REST API with rate-limiting production-grade, not a notebook.',
      tags: ['Hugging Face', 'BERT', 'PyTorch', 'FastAPI'],
      companies: ['Meesho', 'Swiggy AI', 'Amazon'],
      isCapstone: false
    },
    {
      badge: 'Project 04',
      badgeClass: 'bg-[#D9EEF8] text-[#0369A1]',
      title: 'Computer Vision Defect Detector',
      description: 'Industrial image classification for manufacturing quality control. Trained on real datasets, deployed as a web app with real-time camera inference. Especially powerful for non-CS engineers with domain context.',
      tags: ['CNN', 'OpenCV', 'PyTorch', 'Docker'],
      companies: ['Lam Research', 'Bosch AI', 'Honeywell'],
      isCapstone: false
    },
    {
      badge: 'Project 05',
      badgeClass: 'bg-[#DCEFE6] text-[#16A34A]',
      title: 'End-to-End MLOps Pipeline',
      description: 'Production ML platform with automated retraining triggers, model versioning, drift detection, and a monitoring dashboard. The project that signals readiness for senior AI roles not just analyst positions.',
      tags: ['MLflow', 'Airflow', 'AWS', 'GitHub Actions'],
      companies: ['Walmart Labs India', 'Flipkart AI'],
      isCapstone: false
    },
    {
      badge: 'Capstone',
      badgeClass: 'bg-[#DDE1F8] text-[#4F46E5]',
      title: 'Your Domain Capstone Project',
      description: 'Choose your industry finance, healthcare, retail, manufacturing, or e-commerce. Build a complete AI application aligned to where you want to work, with 1:1 mentor guidance from start to deployment.',
      tags: [],
      companies: [],
      isCapstone: true,
      domainTag: 'Your choice of domain',
      footerText: 'This is the project that closes your interviews.'
    }
  ];

  return (
    <section className="bg-[#F9FAFB] py-16 px-4 md:px-8">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#4F46E5] font-medium text-sm mb-3">Your Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
            By the end of this course, your{' '}
            <span className="text-[#CF2030]">GitHub</span>
            <br />
            will have these
          </h2>
          <p className="text-[#6B7280] text-base max-w-2xl mx-auto">
            Not toy datasets from 2017. Not assignment homework. Real, deployable AI systems built
            on the same stacks that hiring companies actually use.
          </p>
        </div>

        

       {/* Mobile Only */}
<div className="md:hidden mb-10">
  <Swiper
    modules={[Navigation]}
    spaceBetween={20}
    slidesPerView={1}
    navigation={{
      prevEl: '.portfolio-prev',
      nextEl: '.portfolio-next',
    }}
  >
    {projects.map((project, index) => (
      <SwiperSlide key={index}>
        <div
          className={`rounded-2xl p-6 border min-h-[430px] flex flex-col ${
            project.isCapstone
              ? 'bg-[#EEF2FF] border-[#E0E7FF]'
              : 'bg-white border-[#E5E7EB]'
          }`}
        >
          <span
            className={`inline-block w-fit px-4 py-2 rounded-lg text-sm font-semibold mb-6 ${project.badgeClass}`}
          >
            {project.badge}
          </span>

          <h3 className="text-[20px] font-bold text-[#111827] mb-4">
            {project.title}
          </h3>

          <p className="text-[#6B7280] text-[16px] leading-8 mb-6">
            {project.description}
          </p>

          {project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="bg-[#F3F4F6] text-[#374151] text-xs px-3 py-1.5 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="mt-auto pt-5 border-t border-[#E5E7EB]">
            {project.companies.length > 0 && (
              <p className="text-xs text-[#9CA3AF]">
                Used by teams at:{' '}
                <span className="text-[#4F46E5] font-medium">
                  {project.companies.join(', ')}
                </span>
              </p>
            )}
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>

  {/* Navigation Buttons */}
  <div className="flex justify-center gap-10 mt-10">
    <button className="portfolio-prev w-14 h-14 rounded-full border border-[#CF2030] flex items-center justify-center">
      <svg
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          d="M15 18L9 12L15 6"
          stroke="#CF2030"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>

    <button className="portfolio-next w-14 h-14 rounded-full bg-[#CF2030] flex items-center justify-center">
      <svg
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          d="M9 18L15 12L9 6"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  </div>
</div>

        {/* Project Cards Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 border ${
                project.isCapstone
                  ? 'bg-[#EEF2FF] border-[#E0E7FF]'
                  : 'bg-white border-[#E5E7EB]'
              }`}
            >
              {/* Badge */}
              <span className={`inline-block px-4 py-2 rounded-lg text-sm font-semibold mb-4 ${project.badgeClass}`}>
                {project.badge}
              </span>

              {/* Title */}
              <h3 className="text-lg font-bold text-[#111827] mb-3">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-[#6B7280] text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Tags */}
              {project.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-[#F3F4F6] text-[#374151] text-xs px-3 py-1.5 rounded-md font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Domain Tag for Capstone */}
              {project.domainTag && (
                <div className="mb-4">
                  <span className="bg-[#E0E7FF] text-[#4F46E5] text-sm px-4 py-2 rounded-md font-medium">
                    {project.domainTag}
                  </span>
                </div>
              )}

              {/* Companies */}
              {project.companies.length > 0 && (
                <p className="text-xs text-[#9CA3AF]">
                  Used by teams at:{' '}
                  <span className="text-[#4F46E5] font-medium">
                    {project.companies.join(', ')}
                  </span>
                </p>
              )}

              {/* Footer Text for Capstone */}
              {project.footerText && (
                <p className="text-[#4F46E5] text-sm font-medium mt-4">
                  {project.footerText}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Quote Banner */}
        <div className="bg-[#F3F4F6] rounded-xl p-6 text-center">
          <p className="text-[#374151] text-sm md:text-base">
            <span className="font-bold">&quot;These aren&apos;t toy projects.&quot;</span>
            {' '}Every project is built to demonstrate production thinking, not just that you know the algorithm, but that you know how to ship it, document it, and defend it in a technical interview. That&apos;s the difference between a certificate and an offer.
          </p>
        </div>
      </div>
    </section>
  );
}
