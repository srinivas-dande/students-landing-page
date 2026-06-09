'use client';

export default function RealitySection() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#4F46E5] text-sm font-semibold">The Reality</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mt-4 leading-tight">
            What a recruiter sees when{' '}
            <span className="text-[#DC2626]">500 identical CVs</span>
            <br />
            land in their inbox
          </h2>
          <p className="text-[#6B7280] mt-4 max-w-lg mx-auto">
            The shortlist decision is made in 6 seconds. This is what
            <br />
            those 6 seconds look like.
          </p>
        </div>

        {/* Three Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* Card 1 - Most CVs (Pink) */}
          <div className="bg-[#FEE2E2] rounded-2xl p-6 flex flex-col relative overflow-hidden">
            <span className="inline-block bg-[#FEF2F2] text-[#DC2626] text-xs font-semibold px-3 py-1 rounded-full border border-[#FECACA] w-fit">
              MOST CVS
            </span>
            <h3 className="text-[#111827] text-lg font-bold mt-4">
              The average engineering CV
            </h3>
            <p className="text-[#4B5563] text-sm mt-3 leading-relaxed">
              BTech degree, a few MOOC certificates, standard coursework projects. 487 students in your batch have something almost identical.
            </p>

            {/* CV Placeholder Image */}
            <div className="mt-4 flex-1">
              <img 
                src="/icons/1.png" 
                alt="Average CV placeholder" 
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Footer */}
            <div className="flex items-center gap-2 mt-4 text-[#DC2626]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeWidth="2" />
                <path strokeLinecap="round" strokeWidth="2" d="M12 6v6l4 2" />
              </svg>
              <span className="text-sm font-medium">Recruiter time: ~4 seconds. Next.</span>
            </div>
          </div>

          {/* Card 2 - Dandes Graduate (Blue) */}
          <div className="bg-[#EFF6FF] rounded-2xl p-6 flex flex-col relative overflow-hidden">
            <span className="inline-block bg-white text-[#4F46E5] text-xs font-semibold px-3 py-1 rounded-full border border-[#C7D2FE] w-fit">
              DANDES GRADUATE
            </span>
            <h3 className="text-[#111827] text-lg font-bold mt-4">
              The CV that makes them lean forward
            </h3>
            <p className="text-[#4B5563] text-sm mt-3 leading-relaxed">
              Same degree. But this has real AI/ML portfolio projects, a GitHub link with live demos, and skills that match exactly what&apos;s in the JD.
            </p>

            {/* CV Placeholder Image */}
            <div className="mt-4 flex-1">
              <img 
                src="/icons/2.png" 
                alt="Dandes Graduate CV placeholder" 
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-2 mt-4">
              <button className="bg-[#E6E8FF] text-[#4F5DFF] text-[12px] font-semibold px-3 py-2 rounded-2xl flex items-center gap-3">
                Recruiter opens GitHub
              <span className="text-sm">→</span>
              </button>
              <button className="bg-[#E6E8FF] text-[#4F5DFF] text-[12px] font-semibold px-3 py-2 rounded-2xl flex items-center gap-3">
                Reads projects
              <span className="text-sm">→</span>
              </button>
            </div>

            <button className="bg-[#4F46E5] text-white text-sm font-medium px-6 py-2 rounded-full mt-3 w-fit">
              Sends invite.
            </button>

            {/* Blue curve at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-3">
              <svg viewBox="0 0 400 12" className="w-full h-full" preserveAspectRatio="none">
                <path d="M0,12 Q200,0 400,12 L400,12 L0,12 Z" fill="#4F46E5" />
              </svg>
            </div>
          </div>

          {/* Card 3 - The Outcome (Green) */}
          <div className="bg-[#ECFDF5] rounded-2xl p-6 flex flex-col relative overflow-hidden">
            <span className="inline-block bg-[#D1FAE5] text-[#059669] text-xs font-semibold px-3 py-1 rounded-full border border-[#A7F3D0] w-fit">
              THE OUTCOME
            </span>
            <h3 className="text-[#111827] text-lg font-bold mt-4">
              The decision is already made before the interview
            </h3>
            <p className="text-[#4B5563] text-sm mt-3 leading-relaxed">
              Not at the interview. Not based on your CGPA. The shortlist happens in the first scroll and it&apos;s binary. You&apos;re in the next pile or you&apos;re not.
            </p>

            {/* Status Pills */}
            <div className="space-y-3 mt-6 flex-1">
              <div className="bg-[#10B981] text-white px-4 py-3 rounded-lg flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm font-medium">AI/ML skills on CV → Shortlisted</span>
              </div>
              <div className="bg-white text-[#374151] px-4 py-3 rounded-lg flex items-center gap-2 border border-[#E5E7EB]">
                <svg className="w-5 h-5 text-[#9CA3AF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="text-sm">Degree only → Scrolled past</span>
              </div>
            </div>

            <p className="text-[#374151] text-sm mt-4">
              Dandes fills that first column. That&apos;s the whole point of this course.
            </p>

            {/* Green curve at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-3">
              <svg viewBox="0 0 400 12" className="w-full h-full" preserveAspectRatio="none">
                <path d="M0,12 Q200,0 400,12 L400,12 L0,12 Z" fill="#10B981" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
