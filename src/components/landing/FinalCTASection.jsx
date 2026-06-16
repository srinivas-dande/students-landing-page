'use client';
import { useState, useEffect } from "react";

export default function FinalCTASection() {
  const checkItems = [
    '25,000+ Students Trained since 2005',
    '20+ Years Training Experience',
    'Mock Interviews and Industry Projects',
    'Career Guidance & Placement Assistance',
  ];

  const [formData, setFormData] = useState({
    full_name: "",
    email_id: "",
    whatsapp_number: "",
    year_of_passout: "",
    qualification: "",
    

    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    utm_content: "",
    gclid: "",

    landing_page: "",
    page_url: "",
    form_type: "Students Landing Page",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
      const params = new URLSearchParams(window.location.search);
  
      setFormData((prev) => ({
        ...prev,
        utm_source: params.get("utm_source") || "",
        utm_medium: params.get("utm_medium") || "",
        utm_campaign: params.get("utm_campaign") || "",
        utm_term: params.get("utm_term") || "",
        utm_content: params.get("utm_content") || "",
        gclid: params.get("gclid") || "",
  
        page_url: window.location.href,
        landing_page: window.location.pathname,
        form_type: "Students Landing Page",
      }));
    }, []);

    const validateForm = () => {
      const newErrors = {};

      if (!formData.full_name.trim()) {
        newErrors.full_name = "Full name is required";
      }

      if (!formData.email_id.trim()) {
        newErrors.email_id = "Email is required";
      } else if (
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email_id)
      ) {
        newErrors.email_id = "Enter a valid email";
      }

      if (!formData.whatsapp_number.trim()) {
        newErrors.whatsapp_number = "WhatsApp number is required";
      } else if (!/^\d{10}$/.test(formData.whatsapp_number)) {
        newErrors.whatsapp_number = "Enter a valid 10 digit number";
      }

      if (!formData.year_of_passout) {
        newErrors.year_of_passout = "Please select year";
      }

      if (!formData.qualification) {
        newErrors.qualification = "Please select qualification";
      }

     
      setErrors(newErrors);

      return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
      e.preventDefault();

      setSuccessMessage("");

      if (!validateForm()) {
        return;
      }

      try {
        setLoading(true);
        const response = await fetch("/api/student-lead", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (result.success) {
          setFormData((prev) => ({
            ...prev,

            full_name: "",
            email_id: "",
            whatsapp_number: "",
            year_of_passout: "",
            qualification: "",
            
          }));

          setErrors({});
          setSuccessMessage(
            "Thank you! Our counsellor will contact you shortly."
          );

          setTimeout(() => {
            setSuccessMessage("");
          }, 5000);
        }

        setLoading(false);

        console.log(result);

      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    return (
      <section className="py-20 px-4 bg-[#F5F7FA]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.9fr] gap-12 items-start">
            {/* Left Content */}
            <div className="lg:pl-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] leading-tight mb-6">
                This Is Where Your<br />
                <span className="text-[#CF2030]">Placement Story</span> Starts
              </h2>
            
              <p className="text-[#6B7280] text-base mb-8 leading-relaxed">
                Every student in our testimonials had exactly the question you have right now. The only difference between them and your batchmates who didn&apos;t act is that they submitted this form.
              </p>

              {/* Checklist */}
              <div className="space-y-0">
                {checkItems.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 py-2 border-b border-[#E5E7EB] w-[85%]"
                  >
                    <svg className="w-5 h-5 text-[#4F46E5] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className=" text-base text-[#1a1a1a]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Form Card */}
            <div className="bg-white rounded-2xl border border-[#E5E7EB] p-6 md:p-7 shadow-sm">
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-2">
                Get AI & Machine Learning Career Program Details
              </h3>
              <p className="text-[#6B7280] text-sm mb-6">
                Fill in your details and our team will contact you shortly to discuss the program, career opportunities, fee structure, and admission process.
              </p>

              {/* Alert */}
              <div className="bg-[#FEF3C7] rounded-lg px-4 py-3 mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#F59E0B] rounded-full"></span>
                <span className="text-[#D97706] text-sm font-medium">
                  Batch-3 Filling Fast – Only 23 Seats Left
                </span>
              </div>

              {/* Form */}
              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name */}
              <div>
                <label className="block text-[#344054] text-xs font-semibold mb-2 uppercase tracking-wide">
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.full_name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      full_name: e.target.value,
                    })
                  }
                  placeholder="Aditya Rao"
                  className="w-full px-4 py-3 border border-[#D0D5DD] rounded-lg text-[#1a1a1a] placeholder-[#98A2B3] text-sm focus:outline-none focus:ring-2 focus:ring-[#CF2030] focus:border-transparent"
                />
                {errors.full_name && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.full_name}
                  </p>
                )}
              </div>

              {/* WhatsApp and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#344054] text-xs font-semibold mb-2 uppercase tracking-wide">
                    Email ID
                  </label>
                  <input
                    type="email"
                    value={formData.email_id}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email_id: e.target.value,
                      })
                    }
                    placeholder="you@college.edu"
                    className="w-full px-4 py-3 border border-[#D0D5DD] rounded-lg text-[#1a1a1a] placeholder-[#98A2B3] text-sm focus:outline-none focus:ring-2 focus:ring-[#CF2030] focus:border-transparent"
                  />
                  {errors.email_id && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.email_id}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-[#344054] text-xs font-semibold mb-2 uppercase tracking-wide">
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    value={formData.whatsapp_number}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        whatsapp_number: e.target.value,
                      })
                    }
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 border border-[#D0D5DD] rounded-lg text-[#1a1a1a] placeholder-[#98A2B3] text-sm focus:outline-none focus:ring-2 focus:ring-[#CF2030] focus:border-transparent"
                  />
                  {errors.whatsapp_number && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.whatsapp_number}
                    </p>
                  )}
                </div>
              </div>

              {/* Year and Branch Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <div>
                  <label className="block text-[#344054] text-xs font-semibold mb-2 uppercase tracking-wide">
                    Qualification
                  </label>
                  <div className="relative">
                    <select
                      value={formData.qualification}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          qualification: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 border border-[#D0D5DD] rounded-lg text-[#98A2B3] text-sm bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-[#CF2030] focus:border-transparent cursor-pointer pr-10"
                    >
                      
                      <option value="">Select Qualification</option>
                      <option value="B.Tech">B.E / B.Tech</option>
                      <option value="B.E">M.E / M.Tech</option>
                      <option value="BCA">BCA</option>
                      <option value="MCA">MCA</option>
                      <option value="B.Sc">B.Sc(C.S)</option>
                      <option value="B.Sc">M.Sc(C.S)</option>
                      </select>
                    {errors.qualification && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.qualification}
                      </p>
                    )}
                    <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#98A2B3] pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                <div>
                  <label className="block text-[#344054] text-xs font-semibold mb-2 uppercase tracking-wide">
                    Year of Passout
                  </label>
                  <div className="relative">
                    <select
                      value={formData.year_of_passout}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          year_of_passout: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 border border-[#D0D5DD] rounded-lg text-[#98A2B3] text-sm bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-[#CF2030] focus:border-transparent cursor-pointer pr-10"
                    >
                      <option value="">Select year</option>
                      <option value="2026">2029</option>
                      <option value="2026">2028</option>
                      <option value="2026">2027</option>
                      <option value="2026">2026</option>
                      <option value="2025">2025</option>
                      <option value="2024">2024</option>
                      <option value="2023">2023</option>
                      <option value="2022">2022</option>
                      <option value="2021">2021</option>
                    </select>
                    {errors.year_of_passout && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.year_of_passout}
                      </p>
                    )}
                    <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#98A2B3] pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                
                
                
              </div>

              {successMessage && (
                <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg p-3 text-sm">
                  {successMessage}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#CF2030] hover:bg-[#b01c2a] text-white font-semibold py-3 px-6 rounded-sm flex items-center justify-center gap-2 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Submitting..." : "Get Program Details"}

                {!loading && (
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
                )}
              </button>

              {/* Privacy Note */}
              <p className="text-center text-[#98A2B3] text-xs">
                *Your details are safe. No spam. A counsellor will reach out within 1 hour.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
