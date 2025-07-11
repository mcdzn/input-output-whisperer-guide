
import { Facebook, Instagram, Youtube, PinIcon as Pinterest, Download } from "lucide-react";

const Footer = () => {
  return (
    <footer className="text-white py-12 md:py-16 relative overflow-hidden" style={{ backgroundColor: '#24354F' }}>
      {/* Modern background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#24354F] to-[#1a2a3f]"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* PDF Catalog Download Section */}
        <div className="text-center mb-12 pb-8 border-b border-white/20">
          <h3 className="text-2xl font-bold mb-4 text-blue-200">Download Our Catalog</h3>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Explore our complete collection of luxury packaging solutions in our comprehensive digital catalog.
          </p>
          <button className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
            <Download className="w-5 h-5" />
            <span>Download PDF Catalog</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
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
            <h4 className="text-base font-semibold mb-4 text-blue-200 border-b border-blue-200/30 pb-2">COMPANY</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-blue-200 transition-all duration-300 hover:translate-x-1 block">ABOUT US</a></li>
              <li><a href="#" className="hover:text-blue-200 transition-all duration-300 hover:translate-x-1 block">MISSION</a></li>
              <li><a href="#" className="hover:text-blue-200 transition-all duration-300 hover:translate-x-1 block">MANUFACTURED IN ITALY</a></li>
              <li><a href="#" className="hover:text-blue-200 transition-all duration-300 hover:translate-x-1 block">ADVANCED TECHNOLOGY</a></li>
              <li><a href="#" className="hover:text-blue-200 transition-all duration-300 hover:translate-x-1 block">ONE SUPPLIER</a></li>
              <li><a href="#" className="hover:text-blue-200 transition-all duration-300 hover:translate-x-1 block">OUR CUSTOMERS</a></li>
            </ul>
          </div>

          {/* Products for Jewelers */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold mb-4 text-blue-200 border-b border-blue-200/30 pb-2">PRODUCTS FOR JEWELERS</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-blue-200 transition-all duration-300 hover:translate-x-1 block">DISPLAYS SET</a></li>
              <li><a href="#" className="hover:text-blue-200 transition-all duration-300 hover:translate-x-1 block">JEWELRY BOXES</a></li>
              <li><a href="#" className="hover:text-blue-200 transition-all duration-300 hover:translate-x-1 block">JEWELRY STOCK</a></li>
              <li><a href="#" className="hover:text-blue-200 transition-all duration-300 hover:translate-x-1 block">LUXURY PAPER BAGS</a></li>
              <li><a href="#" className="hover:text-blue-200 transition-all duration-300 hover:translate-x-1 block">PRESENTATION TRAYS & MIRRORS</a></li>
            </ul>
            <div className="mt-6 pt-4">
              <a href="#" className="text-blue-200 hover:text-white transition-all duration-300 font-medium text-sm group">
                ALL JEWELRY PRODUCTS 
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
          </div>

          {/* Our Projects */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold mb-4 text-blue-200 border-b border-blue-200/30 pb-2">OUR PROJECTS</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-blue-200 transition-all duration-300 hover:translate-x-1 block">MASERATI</a></li>
              <li><a href="#" className="hover:text-blue-200 transition-all duration-300 hover:translate-x-1 block">AME</a></li>
              <li><a href="#" className="hover:text-blue-200 transition-all duration-300 hover:translate-x-1 block">ZECCORO</a></li>
              <li><a href="#" className="hover:text-blue-200 transition-all duration-300 hover:translate-x-1 block">ZYDO</a></li>
              <li><a href="#" className="hover:text-blue-200 transition-all duration-300 hover:translate-x-1 block">LAMBORGHINI</a></li>
              <li><a href="#" className="hover:text-blue-200 transition-all duration-300 hover:translate-x-1 block">GRANITO ROSSI</a></li>
              <li><a href="#" className="hover:text-blue-200 transition-all duration-300 hover:translate-x-1 block">GUCCI</a></li>
            </ul>
            <div className="mt-6 pt-4">
              <a href="#" className="text-blue-200 hover:text-white transition-all duration-300 font-medium text-sm group">
                ALL OUR PROJECTS 
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
          </div>

          {/* Jewelry Packaging */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold mb-4 text-blue-200 border-b border-blue-200/30 pb-2">JEWELRY PACKAGING</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-blue-200 transition-all duration-300 hover:translate-x-1 block">THE IMPORTANCE OF A COORDINATED IMAGE FOR A JEWELRY</a></li>
              <li><a href="#" className="hover:text-blue-200 transition-all duration-300 hover:translate-x-1 block">JEWELRY DISPLAYS CONVERT YOUR SHOWCASE INTO A JEWEL</a></li>
              <li><a href="#" className="hover:text-blue-200 transition-all duration-300 hover:translate-x-1 block">LUXURY PACKAGING GIVE VALUE TO YOUR PRODUCTS</a></li>
              <li><a href="#" className="hover:text-blue-200 transition-all duration-300 hover:translate-x-1 block">LUXURY WATCH CASES</a></li>
              <li><a href="#" className="hover:text-blue-200 transition-all duration-300 hover:translate-x-1 block">NECKLACE DISPLAY CASES</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-300">
            <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
              <a href="#" className="hover:text-blue-200 transition-colors">PRIVACY POLICY</a>
              <span className="text-white/30">|</span>
              <a href="#" className="hover:text-blue-200 transition-colors">COOKIE POLICY</a>
              <span className="text-white/30">|</span>
              <a href="#" className="hover:text-blue-200 transition-colors">CREDITS: YOURSITE</a>
            </div>
            <div className="opacity-75">
              <p>P.IVA: 02804940167 - REA: BG - 314697 - Capitale Sociale di € 25.000</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
