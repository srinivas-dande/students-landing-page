export default function HeroSection() {
  return (
    <section className="bg-[#F5F7FA] py-12 md:py-16 px-4 md:px-8">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
        
        {/* Left Content */}
        <div className="flex-1 max-w-[700px] lg:pl-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#D8EAE2] rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 bg-[#08A85B] rounded-full"></span>
            <span className="text-[#08A85B] text-sm font-bold">
              June 2025 Cohort · Enrolling Now
            </span>
          </div>

          {/* Heading */}
          <h1 className="max-w-[900px] text-[46px] md:text-[58px] lg:text-[62px] font-medium leading-[1] tracking-[-0.02em] mb-6">
            <span className="text-[#CF2030] font-semibold">Upskill With AI</span>
            <span className="text-[#0B132B]">
              {" "}While You Study. Secure Guaranteed Placements.
            </span>
          </h1>

          {/* Description */}
          <p className="text-[#475467] text-base md:text-[15px] leading-relaxed mb-8 max-w-[600px]">
            India&apos;s most outcome-focused AI program for engineering and commerce students. Build real-world projects while you study, gain industry-ready AI skills, and access guaranteed placement support.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-3">
            <div className="bg-white border border-[#E5E7EB] rounded-full px-5 py-3 flex items-center gap-2">
              <span className="text-[#4F46E5] font-bold">650+</span>
              <span className="text-[#1a1a1a] font-bold">Students Placed</span>
            </div>
            <div className="bg-white border border-[#E5E7EB] rounded-full px-5 py-3 flex items-center gap-2">
              <span className="text-[#4F46E5] font-bold">₹17L</span>
              <span className="text-[#1a1a1a] font-bold">Avg Offer</span>
            </div>
            <div className="bg-white border border-[#E5E7EB] rounded-full px-5 py-3 flex items-center gap-2">
              <span className="text-[#4F46E5] font-bold">87%</span>
              <span className="text-[#1a1a1a] font-bold">Placed in 3 Months</span>
            </div>
            <div className="bg-white border border-[#E5E7EB] rounded-full px-5 py-3 flex items-center gap-2">
              <span className="text-[#4F46E5] font-bold">4.9★</span>
              <span className="text-[#1a1a1a] font-bold">Student Rating</span>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="w-full lg:w-[420px] bg-white rounded-2xl shadow-lg p-5 md:p-6">
          <h2 className="text-xl md:text-2xl font-bold text-[#1a1a1a] mb-2">
            Get Your Free Seat, June Cohort
          </h2>
          <p className="text-[#475467] text-sm mb-6">
            Fill in your details and we&apos;ll reach out within 1 hour with the full course guide, fees, and payment options.
          </p>

          {/* Alert Box */}
          <div className="bg-[#F5F1E6] border border-[#E9D2A8] rounded-md px-3 py-1 mb-6 flex items-center gap-3">
            <span className="w-2.5 h-2.5 bg-[#F28C28] rounded-full"></span>
            <span className="text-[#F28C28] text-[13px] font-semibold">
              Only 23 seats remaining out of 80 in the June batch
            </span>
          </div>

          {/* Form */}
          <form className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-[#344054] text-xs font-semibold mb-2 uppercase tracking-wide">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Aditya Rao"
                className="w-full px-4 py-3 border border-[#D0D5DD] rounded-lg text-[#1a1a1a] placeholder-[#98A2B3] text-sm focus:outline-none focus:ring-2 focus:ring-[#CF2030] focus:border-transparent"
              />
            </div>

            {/* WhatsApp and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[#344054] text-xs font-semibold mb-2 uppercase tracking-wide">
                  WhatsApp Number
                </label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 border border-[#D0D5DD] rounded-lg text-[#1a1a1a] placeholder-[#98A2B3] text-sm focus:outline-none focus:ring-2 focus:ring-[#CF2030] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-[#344054] text-xs font-semibold mb-2 uppercase tracking-wide">
                  Email ID
                </label>
                <input
                  type="email"
                  placeholder="you@college.edu"
                  className="w-full px-4 py-3 border border-[#D0D5DD] rounded-lg text-[#1a1a1a] placeholder-[#98A2B3] text-sm focus:outline-none focus:ring-2 focus:ring-[#CF2030] focus:border-transparent"
                />
              </div>
            </div>

            {/* Year and Branch Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[#344054] text-xs font-semibold mb-2 uppercase tracking-wide">
                  Year of Study
                </label>
                <div className="relative">
                  <select className="w-full px-4 py-3 border border-[#D0D5DD] rounded-lg text-[#98A2B3] text-sm bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-[#CF2030] focus:border-transparent cursor-pointer pr-10">
                    <option value="">Select year</option>
                    <option value="1">1st Year</option>
                    <option value="2">2nd Year</option>
                    <option value="3">3rd Year</option>
                    <option value="4">4th Year</option>
                  </select>
                  <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#98A2B3] pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              <div>
                <label className="block text-[#344054] text-xs font-semibold mb-2 uppercase tracking-wide">
                  Branch / Stream
                </label>
                <div className="relative">
                  <select className="w-full px-4 py-3 border border-[#D0D5DD] rounded-lg text-[#98A2B3] text-sm bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-[#CF2030] focus:border-transparent cursor-pointer pr-10">
                    <option value="">Select branch</option>
                    <option value="cse">Computer Science</option>
                    <option value="it">Information Technology</option>
                    <option value="ece">Electronics</option>
                    <option value="commerce">Commerce</option>
                    <option value="other">Other</option>
                  </select>
                  <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#98A2B3] pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#CF2030] hover:bg-[#b01c2a] text-white font-semibold py-3 px-6 rounded-sm flex items-center justify-center gap-2 transition-colors"
            >
              Reserve My Seat in the June Batch
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>

            {/* Privacy Note */}
            <p className="text-center text-[#98A2B3] text-xs">
              *Your details are safe. No spam. A counsellor will reach out within 1 hour.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
