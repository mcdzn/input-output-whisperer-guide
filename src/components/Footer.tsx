
import { Facebook, Instagram, Youtube, PinIcon as Pinterest } from "lucide-react";

const Footer = () => {
  return (
    <footer className="text-white py-8 md:py-10 relative overflow-hidden" style={{ backgroundColor: '#24354F' }}>
      {/* Modern background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#24354F] to-[#1a2a3f]"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="flex items-start mb-4">
                <img 
                  src="/lovable-uploads/db4f9a27-1291-49dd-a8f0-863d3301853b.png" 
                  alt="Global Systems" 
                  className="h-16 w-16 object-contain mr-4 flex-shrink-0"
                />
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold mb-2 leading-tight">GLOBAL SYSTEMS S.R.L.</h3>
                </div>
              </div>
            </div>
            <div className="space-y-2 text-sm opacity-90">
              <p>Via dell'Industria 104, 24040</p>
              <p>Comun Nuovo (BG), Italy</p>
              <div className="mt-4 pt-4 border-t border-white/20">
                <p className="font-semibold mb-2 text-blue-200">CONTACTS</p>
                <p className="hover:text-blue-200 transition-colors">Phone: +39 035 4191340</p>
                <p className="hover:text-blue-200 transition-colors">E-Mail: contact@globalsystems.it</p>
              </div>
            </div>
            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              <Facebook className="w-5 h-5 cursor-pointer hover:text-blue-200 transition-all duration-300 hover:scale-110" />
              <Instagram className="w-5 h-5 cursor-pointer hover:text-pink-200 transition-all duration-300 hover:scale-110" />
              <Youtube className="w-5 h-5 cursor-pointer hover:text-red-200 transition-all duration-300 hover:scale-110" />
              <Pinterest className="w-5 h-5 cursor-pointer hover:text-red-200 transition-all duration-300 hover:scale-110" />
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold mb-3 text-blue-200">COMPANY</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-200 transition-colors">ABOUT US</a></li>
              <li><a href="#" className="hover:text-blue-200 transition-colors">MISSION</a></li>
              <li><a href="#" className="hover:text-blue-200 transition-colors">MANUFACTURED IN ITALY</a></li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold mb-3 text-blue-200">PRODUCTS</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-200 transition-colors">JEWELRY BOXES</a></li>
              <li><a href="#" className="hover:text-blue-200 transition-colors">DISPLAY CASES</a></li>
              <li><a href="#" className="hover:text-blue-200 transition-colors">LUXURY PACKAGING</a></li>
            </ul>
          </div>

          {/* Projects */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold mb-3 text-blue-200">PROJECTS</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-200 transition-colors">MASERATI</a></li>
              <li><a href="#" className="hover:text-blue-200 transition-colors">LAMBORGHINI</a></li>
              <li><a href="#" className="hover:text-blue-200 transition-colors">GUCCI</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-300">
            <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
              <a href="#" className="hover:text-blue-200 transition-colors">PRIVACY POLICY</a>
              <span className="text-white/30">|</span>
              <a href="#" className="hover:text-blue-200 transition-colors">COOKIE POLICY</a>
            </div>
            <div className="opacity-75">
              <p>© 2024 Global Systems S.R.L. - Made in Italy</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
