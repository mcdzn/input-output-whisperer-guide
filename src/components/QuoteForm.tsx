import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import DiamondSpinner from "@/components/ui/diamond-spinner";

const QuoteForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    typeOfCompany: "",
    email: "",
    phoneNumber: "",
    country: "",
    city: "",
    productCategory: [],
    request: ""
  });

  const productCategories = [
    "Bags", "Jewelry boxes", "Pouches", "Accessory", "Display", 
    "Trays", "Mirror", "Cuvette", "Jewelry case", "Rolls"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log("Quote request submitted:", formData);
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCategoryToggle = (category: string) => {
    setFormData(prev => ({
      ...prev,
      productCategory: prev.productCategory.includes(category)
        ? prev.productCategory.filter(c => c !== category)
        : [...prev.productCategory, category]
    }));
  };

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden" id="quote">
      {/* Modern background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-purple-50/30"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-blue-100/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-r from-purple-100/20 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Give us more information so we can help you.
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              Fill in the following fields and we will contact you within 24 hours.
            </p>
          </div>
          
          <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm hover:shadow-3xl transition-all duration-500">
            <CardContent className="p-4 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-gray-700 font-medium">First Name *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="border-0 border-b-2 border-muted rounded-none bg-transparent focus:border-blue-500 focus:ring-0 transition-all duration-300 hover:border-gray-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-gray-700 font-medium">Last Name *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="border-0 border-b-2 border-muted rounded-none bg-transparent focus:border-blue-500 focus:ring-0 transition-all duration-300 hover:border-gray-400"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="companyName" className="text-gray-700 font-medium">Company Name</Label>
                    <Input
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      className="border-0 border-b-2 border-muted rounded-none bg-transparent focus:border-blue-500 focus:ring-0 transition-all duration-300 hover:border-gray-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="typeOfCompany" className="text-gray-700 font-medium">Type of company *</Label>
                    <Select onValueChange={(value) => handleSelectChange("typeOfCompany", value)}>
                      <SelectTrigger className="border-0 border-b-2 border-muted rounded-none bg-transparent focus:border-blue-500 hover:border-gray-400 transition-all duration-300">
                        <SelectValue placeholder="Please Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="retailer">Retailer</SelectItem>
                        <SelectItem value="wholesaler">Wholesaler</SelectItem>
                        <SelectItem value="manufacturer">Manufacturer</SelectItem>
                        <SelectItem value="designer">Designer</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700 font-medium">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-0 border-b-2 border-muted rounded-none bg-transparent focus:border-blue-500 focus:ring-0 transition-all duration-300 hover:border-gray-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phoneNumber" className="text-gray-700 font-medium">Phone Number</Label>
                    <Input
                      id="phoneNumber"
                      name="phoneNumber"
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="border-0 border-b-2 border-muted rounded-none bg-transparent focus:border-blue-500 focus:ring-0 transition-all duration-300 hover:border-gray-400"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="country" className="text-gray-700 font-medium">Country *</Label>
                    <Select onValueChange={(value) => handleSelectChange("country", value)}>
                      <SelectTrigger className="border-0 border-b-2 border-muted rounded-none bg-transparent focus:border-blue-500 hover:border-gray-400 transition-all duration-300">
                        <SelectValue placeholder="Please Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="it">Italy</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="fr">France</SelectItem>
                        <SelectItem value="de">Germany</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city" className="text-gray-700 font-medium">City *</Label>
                    <Input
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="border-0 border-b-2 border-muted rounded-none bg-transparent focus:border-blue-500 focus:ring-0 transition-all duration-300 hover:border-gray-400"
                    />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <Label className="text-gray-700 font-medium">Product category of interest *</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {productCategories.map((category) => (
                      <label key={category} className="flex items-center space-x-2 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={formData.productCategory.includes(category)}
                          onChange={() => handleCategoryToggle(category)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 group-hover:border-blue-400 transition-colors duration-300"
                        />
                        <span className="text-sm group-hover:text-blue-600 transition-colors duration-300">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="request" className="text-gray-700 font-medium">Request *</Label>
                  <textarea
                    id="request"
                    name="request"
                    value={formData.request}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full border-0 border-b-2 border-muted rounded-none bg-transparent focus:border-blue-500 focus:outline-none resize-none p-2 transition-all duration-300 hover:border-gray-400"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <input type="checkbox" id="communications" className="mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                    <label htmlFor="communications" className="text-sm text-muted-foreground">
                      I agree to receive other communications from Global Systems srl.
                    </label>
                  </div>
                  <div className="flex items-start space-x-2">
                    <input type="checkbox" id="privacy" className="mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500" required />
                    <label htmlFor="privacy" className="text-sm text-muted-foreground">
                      I agree to allow Global Systems srl to store and process my personal data. *
                    </label>
                  </div>
                </div>
                
                <div className="text-center pt-4 md:pt-6">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="text-white px-8 md:px-12 py-3 md:py-4 rounded-lg text-sm md:text-base font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg bg-gradient-to-r from-[#24354F] to-[#1a2a3f] hover:from-[#1a2a3f] hover:to-[#24354F] group relative overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed min-w-[140px]"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center gap-2">
                        <DiamondSpinner size="sm" />
                        <span>SUBMITTING...</span>
                      </div>
                    ) : (
                      <>
                        <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                        <span className="relative z-10">SUBMIT</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
