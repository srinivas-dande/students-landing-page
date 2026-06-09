"use client"

export function InstructorSection() {
  return (
    <section
      className="hidden md:block" 
      style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: 600,
      }}
    >
      {/* Full section background image */}
      <img
        src="/images/instructor-bg.png"
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'left center',
          zIndex: 0,
        }}
      />

      {/* Content container */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 1200,
          margin: '0 auto',
          padding: '80px 40px',
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        {/* Right - Content */}
        <div style={{ maxWidth: 620, paddingLeft: 0 }}>
          {/* Mobile instructor image - shown only on mobile */}
          <div className="mobile-instructor-image">
            <img
              src="/images/instructor.png"
              alt="Srinivas Dande"
              style={{
                width: '100%',
                maxWidth: 420,
                height: 'auto',
                display: 'block',
                margin: '0 auto',
              }}
            />
          </div>

          {/* Badge */}
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontSize: 14,
              fontWeight: 500,
              color: '#1a1a1a',
              marginBottom: 16,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                backgroundColor: '#CF2030',
                borderRadius: 2,
              }}
            />
            Meet Your Instructor
          </span>

          {/* Name */}
          <h2
            style={{
              fontSize: 56,
              fontWeight: 700,
              color: '#111',
              marginBottom: 12,
              lineHeight: 1.1,
            }}
          >
            Srinivas Dande
          </h2>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 18,
              fontWeight: 600,
              color: '#CF2030',
              marginBottom: 24,
            }}
          >
            Founder & Lead Instructor, Dandes Academy
          </p>

          {/* Description paragraphs */}
          <p
            style={{
              fontSize: 16,
              color: '#4B5563',
              lineHeight: 1.7,
              marginBottom: 20,
            }}
          >
            Srinivas Dande brings over 20 years of experience in product development, system architecture, and technical training. He began his career at Sun Microsystems and has trained thousands of engineers across Java, System Design, and modern AI technologies.
          </p>

          <p
            style={{
              fontSize: 16,
              color: '#4B5563',
              lineHeight: 1.7,
              marginBottom: 20,
            }}
          >
            His teaching blends real-world engineering with structured interview preparation — helping learners build strong fundamentals while gaining skills directly applicable to real projects.
          </p>

          <p
            style={{
              fontSize: 16,
              color: '#4B5563',
              lineHeight: 1.7,
              marginBottom: 32,
            }}
          >
            Students consistently value his step-by-step teaching approach, practical examples, and clarity in simplifying complex concepts.
          </p>

          {/* Stats */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                backgroundColor: '#fff',
                border: '1px solid #E5E7EB',
                borderRadius: 9999,
                padding: '12px 24px',
              }}
            >
              <span style={{ fontSize: 16, fontWeight: 600, color: '#4F46E5' }}>25000+</span>
              <span style={{ fontSize: 16, color: '#1a1a1a' }}>Students trained</span>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                backgroundColor: '#fff',
                border: '1px solid #E5E7EB',
                borderRadius: 9999,
                padding: '12px 24px',
              }}
            >
              <span style={{ fontSize: 16, fontWeight: 600, color: '#4F46E5' }}>20+</span>
              <span style={{ fontSize: 16, color: '#1a1a1a' }}>Years of experience</span>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style jsx>{`
      .mobile-instructor-image {
        display: none;
      }

      @media (max-width: 1024px) {
        section > div > div {
          max-width: 100% !important;
          padding-left: 0 !important;
        }
      }

      @media (max-width: 768px) {
        section > img {
          display: none !important;
        }

        .mobile-instructor-image {
          display: flex !important;
          justify-content: center !important;
          margin-bottom: 28px;
        }

        section > div {
          justify-content: center !important;
          padding: 40px 20px !important;
        }

        section > div > div {
          max-width: 100% !important;
          padding-left: 0 !important;
        }

        h2 {
          font-size: 36px !important;
        }
      }
    `}</style>
    </section>
  )
}
