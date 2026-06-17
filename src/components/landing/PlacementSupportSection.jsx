export default function PlacementSupportSection() {
  const checklistItems = [
    'Mock Interviews & Interview Preparation',
    'Resume & LinkedIn Optimization',
    'Portfolio & GitHub Review',
    'Job Search Strategy & Career Guidance',
    'Exclusive Job & Opportunity Updates',
    '1:1 Mentor Support'
  ];

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row items-stretch">

          {/* Left Content */}
          <div className="order-2 lg:order-1 lg:w-1/2 px-6 md:px-12 lg:px-20 flex flex-col justify-center">
            <span className="text-[#4F46E5] text-sm font-semibold">
              Placement Support
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#111827] mt-4 leading-tight">
              We don&apos;t hand you a certificate and wish you luck
            </h2>

            <p className="text-[#6B7280] text-base md:text-lg mt-6 leading-relaxed">
              Placement support is baked into the final 6 weeks, not bolted on as an afterthought. By the time you apply, you&apos;ve already cleared the hard rounds.
            </p>

            {/* Checklist */}
            <div className="mt-8 bg-white rounded-lg border border-[#E5E7EB] overflow-hidden">
              {checklistItems.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-2 px-3 py-1.5 ${
                    index !== checklistItems.length - 1 ? 'border-b border-[#E5E7EB]' : ''
                  }`}
                >
                  <svg
                    className="w-5 h-5 text-[#4F46E5] flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-[#111827] text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>

            {/* Apply Now Button */}
            <a
  href="#apply-form"
  className="mt-8 w-fit bg-[#CF2030] text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-3 hover:bg-[#B91C2C] transition-colors"
>
  Apply Now
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
</a>
          </div>

          {/* Right Image — edge to edge, no padding, no rounded corners */}
          <div className="order-1 lg:order-2 lg:w-3/5 flex justify-center lg:justify-end -mx-6 md:-mx-12 lg:mx-0">
            <div className="w-full px-6 md:px-12 lg:px-8 h-[320px] sm:h-[380px] md:h-[450px] lg:h-[520px]">
              <img
                src="/images/placement-support.jpg"
                alt="Students working together on placement preparation"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}