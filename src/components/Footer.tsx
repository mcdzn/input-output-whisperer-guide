
import { Facebook, Instagram, Youtube, PinIcon as Pinterest } from "lucide-react";

const Footer = () => {
  return (
    <footer className="text-white py-12 md:py-16" style={{ backgroundColor: '#24354F' }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/0ea2c340-388a-41ab-acff-2a1e34ad0d50.png" 
                alt="Global Systems" 
                className="h-16 w-auto filter brightness-0 invert mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">GLOBAL SYSTEMS S.R.L.</h3>
            </div>
            <div className="space-y-2 text-sm">
              <p>Via dell'Industria 104, 24040</p>
              <p>Comun Nuovo (BG), Italy</p>
              <div className="mt-4">
                <p className="font-semibold mb-2">CONTACTS</p>
                <p>Phone: +39 035 4191340</p>
                <p>E-Mail: contact@globalsystems.it</p>
              </div>
            </div>
            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              <Facebook className="w-5 h-5 cursor-pointer hover:text-gray-300 transition-colors" />
              <Instagram className="w-5 h-5 cursor-pointer hover:text-gray-300 transition-colors" />
              <Youtube className="w-5 h-5 cursor-pointer hover:text-gray-300 transition-colors" />
              <Pinterest className="w-5 h-5 cursor-pointer hover:text-gray-300 transition-colors" />
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-base font-semibold mb-4 text-blue-300">COMPANY</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gray-300 transition-colors">ABOUT US</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">MISSION</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">MANUFACTURED IN ITALY</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">ADVANCED TECHNOLOGY</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">ONE SUPPLIER</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">OUR CUSTOMERS</a></li>
            </ul>
          </div>

          {/* Products for Jewelers */}
          <div>
            <h4 className="text-base font-semibold mb-4 text-blue-300">PRODUCTS FOR JEWELERS</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gray-300 transition-colors">DISPLAYS SET</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">JEWELRY BOXES</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">JEWELRY STOCK</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">LUXURY PAPER BAGS</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">PRESENTATION TRAYS & MIRRORS</a></li>
            </ul>
            <div className="mt-6">
              <a href="#" className="text-blue-300 hover:text-blue-200 transition-colors font-medium text-sm">
                ALL JEWELRY PRODUCTS →
              </a>
            </div>
          </div>

          {/* Our Projects */}
          <div>
            <h4 className="text-base font-semibold mb-4 text-blue-300">OUR PROJECTS</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gray-300 transition-colors">MASERATI</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">AME</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">ZECCORO</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">ZYDO</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">LAMBORGHINI</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">GRANITO ROSSI</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">GUCCI</a></li>
            </ul>
            <div className="mt-6">
              <a href="#" className="text-blue-300 hover:text-blue-200 transition-colors font-medium text-sm">
                ALL OUR PROJECTS →
              </a>
            </div>
          </div>

          {/* Jewelry Packaging */}
          <div>
            <h4 className="text-base font-semibold mb-4 text-blue-300">JEWELRY PACKAGING</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gray-300 transition-colors">THE IMPORTANCE OF A COORDINATED IMAGE FOR A JEWELRY</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">JEWELRY DISPLAYS CONVERT YOUR SHOWCASE INTO A JEWEL</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">LUXURY PACKAGING GIVE VALUE TO YOUR PRODUCTS</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">LUXURY WATCH CASES</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">NECKLACE DISPLAY CASES</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-300">
            <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
              <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
              <span>|</span>
              <a href="#" className="hover:text-white transition-colors">COOKIE POLICY</a>
              <span>|</span>
              <a href="#" className="hover:text-white transition-colors">CREDITS: YOURSITE</a>
            </div>
            <div>
              <p>P.IVA: 02804940167 - REA: BG - 314697 - Capitale Sociale di € 25.000</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
