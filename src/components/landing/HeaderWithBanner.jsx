import Image from "next/image";

export default function HeaderWithBanner() {
  return (
    <>
      {/* Frame 1: Red Notification Banner */}
      <div className="hidden md:block bg-[#CF2030] w-full py-3 px-4">
        <div className="max-w-[1440px] mx-auto flex items-center justify-center gap-2">
          {/* Graduation Cap Icon */}
          <Image
            src="/icons/graduation-cap.png"
            alt="Graduation Cap"
            width={20}
            height={20}
            className="w-5 h-5"
          />
          <p className="text-white text-sm md:text-lg">
            Next cohort starts{' '}
            <span className="italic">June 25th, 2025</span>
            , Only{' '}
            <span className="italic">23 seats</span>
            {' '}remaining. Don&apos;t lose your spot.
          </p>
        </div>
      </div>

      {/* Frame 2: Header/Navbar */}
      <header className="bg-white border-b border-gray-200 w-full">
        <div className="max-w-7xl mx-auto h-24 px-4 flex items-center justify-between">
          {/* Logo */}
          <Image
            src="/icons/logo.png"
            alt="Dandes Academy"
            width={180}
            height={60}
            className="object-contain"
          />

          {/* Mobile Menu Icon */}
          <button className="md:hidden flex flex-col gap-2">
            <span className="w-10 h-1 bg-black rounded"></span>
            <span className="w-10 h-1 bg-black rounded"></span>
            <span className="w-10 h-1 bg-black rounded"></span>
          </button>

          {/* Apply Now Button */}
          <button className="hidden md:block bg-[#C41E3A] hover:bg-[#A01830] text-white font-semibold px-6 py-2 rounded transition-colors">
            Apply Now
          </button>
        </div>
      </header>
    </>
  );
}
