import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#0F2A3D] text-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 py-16">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Left Side - Logo and Tagline */}
          <div className="max-w-md">
            {/* Logo */}
            <div className="mb-6">
              <Image
                src="/icons/logo.png"
                alt="Dandes Academy"
                width={150}
                height={60}
                className="object-contain"
              />
            </div>
            <p className="text-white text-[#94A3B8] text-base">
              Stay informed on new courses and industry insights.
            </p>
          </div>

          {/* Right Side - Subscribe Form */}
          <div className="max-w-lg w-full">
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-4 bg-transparent border border-white rounded-lg text-white placeholder-[#64748B] focus:outline-none focus:border-[#CF2030]"
              />
              <button className="bg-[#CF2030] hover:bg-[#B91C2C] text-white font-semibold px-8 py-4 rounded-lg transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-white text-[#64748B] text-sm mb-6">
              By subscribing you agree to our Privacy Policy and consent to receive updates from Dandes Academy
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {/* Facebook */}
              <div className="flex items-center gap-4">
  <a href="#">
    <Image src="/icons/facebook.png" alt="Facebook" width={24} height={24} />
  </a>

  <a href="#">
    <Image src="/icons/instagram.png" alt="Instagram" width={24} height={24} />
  </a>

  <a href="#">
    <Image src="/icons/twitter.png" alt="Twitter" width={24} height={24} />
  </a>

  <a href="#">
    <Image src="/icons/linkedin.png" alt="LinkedIn" width={24} height={24} />
  </a>

  <a href="#">
    <Image src="/icons/youtube.png" alt="YouTube" width={24} height={24} />
  </a>

  
</div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#334155] mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white text-[#94A3B8] text-sm">
              © 2026 Dandes Academy. All rights reserved.
            </p>
            <div className="flex items-center gap-8">
              <a href="#" className="text-white text-[#94A3B8] hover:text-white text-sm transition-colors">
                Privacy policy
              </a>
              <a href="#" className="text-white text-[#94A3B8] hover:text-white text-sm transition-colors">
                Terms of service
              </a>
              <a href="#" className="text-white text-[#94A3B8] hover:text-white text-sm transition-colors">
                Cookie settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
