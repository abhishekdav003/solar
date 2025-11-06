import { Award, Users, Target, Zap } from 'lucide-react';

export default function About() {
  const values = [
    { icon: Award, title: "Quality Excellence", desc: "Premium grade solar panels and equipment" },
    { icon: Users, title: "Customer First", desc: "Dedicated support and service" },
    { icon: Target, title: "Precision Work", desc: "Expert installation with attention to detail" },
    { icon: Zap, title: "Innovation", desc: "Latest solar technology solutions" }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-semibold text-blue-900">About Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Leading Solar Solutions Provider
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Empowering homes and businesses with clean, renewable energy
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
          {/* Image Grid */}
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {/* Large Featured Image */}
              <div className="col-span-2 bg-white rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-300">
                <div className="aspect-[16/10] relative overflow-hidden">
                  <img 
                    src={`${import.meta.env.BASE_URL}industry.png`}
                    alt="Commercial Solar Installation"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                    <p className="text-white font-semibold text-sm sm:text-base p-4 sm:p-6">
                      Commercial Installation
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Small Images */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src={`${import.meta.env.BASE_URL}home.png`}
                    alt="Residential Solar Solutions"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end">
                    <p className="text-white font-semibold text-xs sm:text-sm p-3 sm:p-4">
                      Residential
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src={`${import.meta.env.BASE_URL}worker.png`}
                    alt="Expert Installation Team"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end">
                    <p className="text-white font-semibold text-xs sm:text-sm p-3 sm:p-4">
                      Expert Team
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 bg-gradient-to-br from-blue-600 to-blue-700 text-white p-4 sm:p-6 rounded-2xl shadow-2xl z-10">
              <div className="text-2xl sm:text-3xl font-bold">10+</div>
              <div className="text-xs sm:text-sm">Years Excellence</div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              Your Trusted Partner in Solar Energy
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Akash Power Solutions provides top-tier solar installation services. As an authorized PM Surya Ghar Yojana partner, we make solar energy accessible and affordable for everyone.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Our certified professionals bring years of expertise in solar panel installation, design, and maintenance. We're committed to delivering sustainable energy solutions that reduce your carbon footprint and energy costs.
            </p>
            
            {/* Quote Box */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-600 p-4 sm:p-6 rounded-r-lg">
              <p className="text-gray-700 font-medium text-sm sm:text-base italic">
                "Making clean energy accessible while helping clients achieve significant energy savings and contribute to a sustainable future."
              </p>
            </div>

           
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {values.map((v, i) => (
            <div 
              key={i} 
              className="bg-white p-5 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-4">
                <v.icon className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" />
              </div>
              <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                {v.title}
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {v.desc}
              </p>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
}