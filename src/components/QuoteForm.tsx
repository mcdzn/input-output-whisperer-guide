
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const QuoteForm = () => {
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
    "Trays", "Mirror", "Couvette", "Jewelry case", "Rolls"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Quote request submitted:", formData);
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
    <section className="py-20 bg-background" id="quote">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Give us more information so we can help you.
            </h2>
            <p className="text-muted-foreground text-lg">
              Fill in the following fields and we will contact you within 24 hours.
            </p>
          </div>
          
          <Card className="shadow-lg border-0">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="border-0 border-b-2 border-muted rounded-none bg-transparent focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="border-0 border-b-2 border-muted rounded-none bg-transparent focus:border-primary"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company Name</Label>
                    <Input
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      className="border-0 border-b-2 border-muted rounded-none bg-transparent focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="typeOfCompany">Type of company *</Label>
                    <Select onValueChange={(value) => handleSelectChange("typeOfCompany", value)}>
                      <SelectTrigger className="border-0 border-b-2 border-muted rounded-none bg-transparent">
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
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-0 border-b-2 border-muted rounded-none bg-transparent focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phoneNumber">Phone Number</Label>
                    <Input
                      id="phoneNumber"
                      name="phoneNumber"
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="border-0 border-b-2 border-muted rounded-none bg-transparent focus:border-primary"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="country">Country *</Label>
                    <Select onValueChange={(value) => handleSelectChange("country", value)}>
                      <SelectTrigger className="border-0 border-b-2 border-muted rounded-none bg-transparent">
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
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="border-0 border-b-2 border-muted rounded-none bg-transparent focus:border-primary"
                    />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <Label>Product category of interest *</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {productCategories.map((category) => (
                      <label key={category} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.productCategory.includes(category)}
                          onChange={() => handleCategoryToggle(category)}
                          className="rounded border-gray-300"
                        />
                        <span className="text-sm">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="request">Request *</Label>
                  <textarea
                    id="request"
                    name="request"
                    value={formData.request}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full border-0 border-b-2 border-muted rounded-none bg-transparent focus:border-primary focus:outline-none resize-none p-2"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <input type="checkbox" id="communications" className="mt-1" />
                    <label htmlFor="communications" className="text-sm text-muted-foreground">
                      I agree to receive other communications from Global Systems srl.
                    </label>
                  </div>
                  <div className="flex items-start space-x-2">
                    <input type="checkbox" id="privacy" className="mt-1" required />
                    <label htmlFor="privacy" className="text-sm text-muted-foreground">
                      I agree to allow Global Systems srl to store and process my personal data. *
                    </label>
                  </div>
                </div>
                
                <div className="text-center pt-6">
                  <Button 
                    type="submit" 
                    className="bg-teal-600 hover:bg-teal-700 text-white px-12 py-3 text-base font-medium"
                  >
                    SUBMIT
                  </Button>
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
