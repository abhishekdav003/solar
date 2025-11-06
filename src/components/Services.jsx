import { Home, Building2, Wrench, Shield, Battery, TrendingUp } from 'lucide-react';

export default function Services() {
  const services = [
    { icon: Home, title: "Residential Solar", desc: "Complete solar solutions for homes" },
    { icon: Building2, title: "Commercial Solar", desc: "Customized business solutions" },
    { icon: Wrench, title: "Installation", desc: "Professional certified installation" },
    { icon: Shield, title: "Maintenance", desc: "Comprehensive support services" },
    { icon: Battery, title: "Energy Storage", desc: "Advanced battery solutions" },
    { icon: TrendingUp, title: "PM Surya Scheme", desc: "Government subsidy assistance" }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Comprehensive Solar Solutions</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-blue-200 hover:shadow-xl transition-all group">
              <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <s.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}