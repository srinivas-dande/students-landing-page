'use client';

export default function SelfCheckSection() {
  const rightPlaceItems = [
    { bold: "You're currently in college,", text: "1st to final year and want to graduate with something that separates you from your batch" },
    { bold: "You have no prior AI/ML experience", text: "but you're technical enough to follow logic and willing to put in 10 hours a week" },
    { bold: "You want a real portfolio,", text: "GitHub projects, deployed models, things you can walk an interviewer through not just a certificate" },
    { bold: "You're aiming for ₹12–20 LPA", text: "at your first job and understand that the gap between that and a ₹4 LPA offer is skills, not luck" },
    { bold: "You're from a non-CS background,", text: "ECE, Mechanical, Commerce, Civil and want a course that acknowledges your domain instead of ignoring it" },
    { bold: "You've already graduated", text: "and the placement season didn't go how you hoped and you want to reposition before the market moves on" },
    { bold: "You want structured accountability,", text: "live classes, deadlines, mentor check-ins not another course you'll watch 3 modules of and abandon" },
  ];

  const notForYouItems = [
    { bold: "You're looking for something passive", text: "if the plan is to watch videos at 1.5x speed without doing the projects, this course won't work for you" },
    { bold: "You can't commit 10 hours a week", text: "right now, if your schedule is genuinely full for the next 6 months, wait for the next cohort rather than start and drop" },
    { bold: "You want a quick shortcut", text: "this is a 6-month programme that requires real effort. There's no 4-week path to a ₹17 LPA AI/ML offer and anyone who tells you otherwise is lying" },
    { bold: "You're looking for a guaranteed job", text: "we don't guarantee placements and no honest course does. We give you the best possible shot, but the effort is yours to bring" },
    { bold: "You have zero interest in coding", text: "this course involves writing real code. If that's not something you want to build toward at all, this isn't the right fit" },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F5F7FA]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#4F46E5] text-sm font-semibold">Self-Check</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mt-3">
            Is this <span className="text-[#DC2626]">course</span> right for you?
          </h2>
          <p className="text-[#6B7280] mt-4 max-w-2xl mx-auto">
            Be honest with yourself. This course works for the right person and we'd rather you know that before you enroll than after.
          </p>
        </div>

        {/* Two Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Card - Right Place */}
          <div className="bg-[#EEF8F3] rounded-xl p-6 md:p-8 border border-[#B7E4CC]">
            <div className="flex items-start gap-4 mb-6 pb-6 border-b border-[#E5E7EB]">
              <div className="w-12 h-12 rounded-full bg-[#10B981] flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#111827]">You're in the right place if...</h3>
                <p className="text-[#9CA3AF] text-sm mt-1">This course was built for you</p>
              </div>
            </div>

            <ul className="space-y-4">
              {rightPlaceItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] mt-2 flex-shrink-0"></span>
                  <p className="text-[#374151] text-sm leading-relaxed">
                    <span className="font-bold">{item.bold}</span> {item.text}
                  </p>
                </li>
              ))}
            </ul>

            <button className="w-full mt-8 bg-[#CF2030] hover:bg-[#B91C2C] text-white font-semibold py-4 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors">
              Yes, this is me Reserve my seat
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Right Card - Not For You */}
          <div className="bg-[#F9FAFB] rounded-xl p-6 md:p-8 border border-[#E5E7EB]">
            <div className="flex items-start gap-4 mb-6 pb-6 border-b border-[#E5E7EB]">
              <div className="w-12 h-12 rounded-full bg-[#E5E7EB] flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-[#9CA3AF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#111827]">This is probably not for you if...</h3>
                <p className="text-[#9CA3AF] text-sm mt-1">And that's okay, better to know now</p>
              </div>
            </div>

            <ul className="space-y-4">
              {notForYouItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#D97706] mt-2 flex-shrink-0"></span>
                  <p className="text-[#374151] text-sm leading-relaxed">
                    <span className="font-bold">{item.bold}</span> {item.text}
                  </p>
                </li>
              ))}
            </ul>

            {/* Info Box */}
            <div className="mt-8 bg-[#F3F4F6] rounded-lg p-4 flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#E5E7EB] flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-[#6B7280]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <p className="text-[#6B7280] text-sm">
                Still not sure? Our counsellors will tell you honestly whether this course fits your situation, no sales pressure. <a href="#" className="text-[#CF2030] font-semibold hover:underline">WhatsApp us</a> and ask directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
