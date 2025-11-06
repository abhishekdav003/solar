import { CheckCircle, ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative bg-white pt-16 pb-20 sm:pt-24 sm:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-blue-900">PM Surya Ghar Yojana Partner</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Power Your Future with
              <span className="text-blue-600"> Solar Energy</span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              Akash Power Solutions is your trusted partner in renewable energy. We specialize in designing and installing high-quality solar power systems for both residential and commercial properties.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "Government Approved", desc: "Authorized PM Surya Ghar partner" },
                { title: "Expert Installation", desc: "Certified and experienced team" },
                { title: "Quality Products", desc: "Premium solar panels & inverters" },
                { title: "After-Sales Support", desc: "Comprehensive maintenance services" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition-all font-semibold flex items-center justify-center gap-2 shadow-lg"
              >
                Get Free Consultation <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={scrollToContact}
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
              >
                Request Quote
              </button>
            </div>
          </div>

          {/* Right Side - Image + Stats */}
          <div className="relative space-y-4">
            {/* Hero Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
              <img
                src={`${import.meta.env.BASE_URL}hero.jpeg`}
                alt="Solar Panel Installation by Akash Power Solutions"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>

            {/* Stats Grid - Below the image */}
            <div className="bg-white p-4 rounded-2xl shadow-xl border border-gray-100">
              <div className="grid grid-cols-3 gap-2 sm:gap-4">
                {[
                  { num: "500+", text: "Happy Clients", color: "text-blue-600" },
                  { num: "10+", text: "Years Experience", color: "text-orange-500" },
                  { num: "100%", text: "Satisfaction", color: "text-green-500" }
                ].map((stat, i) => (
                  <div key={i} className="text-center py-2">
                    <div className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${stat.color}`}>
                      {stat.num}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-700 mt-1 font-medium">{stat.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}