export default function Partners() {
  const partners = [
    {
      id: 1,
      name: "Partner 1",
      logo: "/adani.png", // Update with your actual logo filename
      description: "Leading Industry Partner"
    },
    {
      id: 2,
      name: "Partner 2",
      logo: "/fujiy.jpg", // Update with your actual logo filename
      description: "Trusted Collaborator"
    },
    {
      id: 3,
      name: "Partner 3",
      logo: "/tata.jpg", // Update with your actual logo filename
      description: "Innovation Partner"
    },
    {
      id: 4,
      name: "Partner 4",
      logo: "/waree.png", // Update with your actual logo filename
      description: "Strategic Alliance"
    }
  ];

  return (
    <section id="partners" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold border border-blue-100">
              Trusted Partnerships
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Associated with Leading
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Brands
            </span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Collaborating with industry leaders to deliver excellence
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {partners.map((partner, index) => (
            <div
              key={partner.id}
              className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col items-center justify-center border-2 border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Logo container */}
              <div className="relative z-10 w-full h-20 sm:h-24 lg:h-28 flex items-center justify-center mb-3 sm:mb-4">
                <img
                  src={`${import.meta.env.BASE_URL}${partner.logo}`}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback if image fails to load */}
                <div className="hidden flex-col items-center justify-center text-gray-400 group-hover:text-blue-600 transition-colors">
                  <svg className="w-12 h-12 sm:w-16 sm:h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span className="text-xs sm:text-sm font-semibold mt-2">{partner.name}</span>
                </div>
              </div>

              {/* Partner info - shows on hover */}
              <div className="relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                <p className="text-xs sm:text-sm font-medium text-gray-600">
                  {partner.description}
                </p>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute top-2 right-2 w-3 h-3 bg-blue-500 rounded-full animate-ping"></div>
                <div className="absolute top-2 right-2 w-3 h-3 bg-blue-500 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats or additional info */}
        <div className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-gray-200">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">4+</div>
              <div className="text-sm sm:text-base text-gray-600">Partner Brands</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">100%</div>
              <div className="text-sm sm:text-base text-gray-600">Quality Assured</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">24/7</div>
              <div className="text-sm sm:text-base text-gray-600">Support</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">5★</div>
              <div className="text-sm sm:text-base text-gray-600">Rated Service</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, #e5e7eb 1px, transparent 1px),
            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </section>
  );
}