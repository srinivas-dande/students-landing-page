export default function PortfolioSection() {
  const projects = [
    {
      badge: 'Project 01',
      badgeClass: 'bg-[#E0E7FF] text-[#4F46E5]',
      title: 'Customer Churn Predictor',
      description: 'Build an end-to-end ML pipeline to identify customers likely to leave. Covers data cleaning, feature engineering, model training, hyperparameter tuning, model evaluation, and REST API deployment.',
      tags: ['Python', 'Pandas', 'Scikit-learn', 'XGBoost', 'Hyperparameter Tuning', 'Flask API'],
      companies: ['Telecom', 'SaaS', 'Banking', 'E-Commerce'],
      isCapstone: false
    },
    {
      badge: 'Project 02',
      badgeClass: 'bg-[#EEDCF8] text-[#8B5CF6]',
      title: 'AI Resume Screening System',
      description: 'Build an intelligent resume screening application that analyzes resumes, matches them with job descriptions, and ranks candidates using NLP and Machine Learning techniques.',
      tags: ['Python', 'NLP', 'BERT', 'TensorFlow', 'FastAPI', 'Text Classification', 'Semantic Search'],
      companies: ['HR Tech', 'Recruitment Platforms', 'Enterprise Hiring'],
      isCapstone: false
    },
    {
      badge: 'Project 03',
      badgeClass: 'bg-[#F5EBDD] text-[#F59E0B]',
      title: 'GenAI Chatbot with RAG',
      description: 'Build a production-ready AI chatbot that answers questions from enterprise documents and knowledge bases using Retrieval-Augmented Generation and Large Language Models.',
      tags: ['Python', 'LLMs', 'LangChain', 'ChromaDB', 'RAG', 'Prompt Engineering', 'FastAPI'],
      companies: ['Customer Support', 'Internal Knowledge Search', 'EdTech', 'SaaS'],
      isCapstone: false
    },   
    {
      badge: 'Project 04',
      badgeClass: 'bg-[#D9EEF8] text-[#0369A1]',
      title: 'Multi-Agent Business Analyst',
      description: 'Build a team of AI agents that collaborate to analyze business data, generate insights, identify trends, and recommend actions for decision-making.',
      tags: ['Agentic AI', 'CrewAI', 'LangGraph', 'MCP', 'SQL', 'Tool Calling'],
      companies: ['Business Analytics', 'Operations', 'Sales', 'Strategy Teams'],
      isCapstone: false
    },
    {
      badge: 'Project 05',
      badgeClass: 'bg-[#DCEFE6] text-[#16A34A]',
      title: 'End-to-End MLOps Pipeline',
      description: 'Automate model training, versioning, deployment, monitoring, and retraining. Learn how production AI systems are managed at scale.',
      tags: ['MLflow', 'Airflow', 'AWS', 'Docker', 'CI/CD', 'Model Deployment & Monitoring'],
      companies: ['AI Platforms', 'Data Science Teams', 'ML Engineering Teams'],
      isCapstone: false
    },
    {
      badge: 'Capstone',
      badgeClass: 'bg-[#DDE1F8] text-[#4F46E5]',
      title: 'Your Domain Capstone Project',
      description: 'Build a complete AI application from problem definition to deployment in your chosen domain such as Healthcare, Finance, E-Commerce, Education, or Manufacturing.',
      tags: ['Python', 'ML', 'DL', 'GenAI', 'Agentic AI', 'MLOps', 'Cloud Deployment'],
      companies: [],
      isCapstone: true,
      
      footerText: 'This is the project that helps you stand out to recruiters and unlock more AI/ML career opportunities.'
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

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
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

              

              {/* Companies */}
              {project.companies.length > 0 && (
                <p className="text-xs text-[#9CA3AF]">
                  Inspired by real-world Use Cases from:{' '}
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
