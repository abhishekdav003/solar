import { Sun } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Sun className="w-8 h-8 text-orange-400" />
              <div><h3 className="text-xl font-bold text-white">Akash Power</h3></div>
            </div>
            <p className="text-sm">Empowering homes with clean energy</p>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>Home</li><li>About</li><li>Services</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>Residential Solar</li><li>Commercial Solar</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contact</h4>
            <p className="text-sm">Roorkee, Uttarakhand<br />+91 9917010055</p>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-400">
        © 2025 Akash Power Solutions. All rights reserved.
      </div>
    </footer>
  );
}