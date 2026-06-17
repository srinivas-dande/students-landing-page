'use client';

export default function StatsBanner() {
  const stats = [
    { number: '25,000+',  label: 'STUDENTS TRAINED' },
    { number: '20+ YEARS',  label: 'EXPERIENCE' },
    { number: '6',  label: 'INDUSTRY PROJECTS' },
    { number: '3',  label: 'MOCK INTERVIEWS' },
  ];

  return (
    <section className="bg-[#CF2030] py-4 px-2">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center px-4 md:px-8 ${
                index !== stats.length - 1 ? 'md:border-r md:border-white/30' : ''
              }`}
            >
              <div className="text-white">
                <span className="text-3xl md:text-4xl font-bold">{stat.number}</span>
                
              </div>
              <p className="text-white text-sm md:text-base tracking-wider mt-2 font-semibold">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
