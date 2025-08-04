import { useState } from "react";
import { X, Package, User, Mail, Phone, MessageSquare, Calendar, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";

interface QuoteSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
  productCategory?: string;
}

const QuoteSidebar = ({ isOpen, onClose, productName, productCategory }: QuoteSidebarProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    quantity: "",
    timeline: "",
    customization: "",
    message: ""
  });

  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the data to your backend
    toast({
      title: "Quote Request Submitted!",
      description: "We'll get back to you within 24 hours with a detailed quote.",
    });
    
    // Reset form and close sidebar
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      quantity: "",
      timeline: "",
      customization: "",
      message: ""
    });
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 transition-opacity"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-96 bg-background border-l shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <div className="flex items-center gap-3">
              <Package className="w-6 h-6 text-primary" />
              <div>
                <h2 className="text-xl font-semibold text-foreground">Request Quote</h2>
                {productName && (
                  <p className="text-sm text-muted-foreground">{productName}</p>
                )}
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="hover:bg-muted"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Form */}
          <div className="flex-1 overflow-y-scroll p-6" style={{ scrollbarWidth: 'thin' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Product Info */}
              {productName && (
                <div className="bg-muted/50 rounded-lg p-4">
                  <h3 className="font-medium text-foreground mb-2">Selected Product</h3>
                  <p className="text-sm text-muted-foreground mb-1">{productCategory}</p>
                  <p className="font-medium text-foreground">{productName}</p>
                </div>
              )}

              {/* Contact Information */}
              <div className="space-y-4">
                <h3 className="flex items-center gap-2 font-medium text-foreground">
                  <User className="w-4 h-4" />
                  Contact Information
                </h3>
                
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your.email@company.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      placeholder="Your company name"
                    />
                  </div>
                </div>
              </div>

              <Separator />

              {/* Project Details */}
              <div className="space-y-4">
                <h3 className="flex items-center gap-2 font-medium text-foreground">
                  <Package className="w-4 h-4" />
                  Project Details
                </h3>
                
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <Label htmlFor="quantity">Estimated Quantity</Label>
                    <Select onValueChange={(value) => handleInputChange('quantity', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select quantity range" />
                      </SelectTrigger>
                      <SelectContent className="bg-background border z-[60]">
                        <SelectItem value="1-50">1-50 pieces</SelectItem>
                        <SelectItem value="51-100">51-100 pieces</SelectItem>
                        <SelectItem value="101-500">101-500 pieces</SelectItem>
                        <SelectItem value="501-1000">501-1000 pieces</SelectItem>
                        <SelectItem value="1000+">1000+ pieces</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="timeline">Project Timeline</Label>
                    <Select onValueChange={(value) => handleInputChange('timeline', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="When do you need this?" />
                      </SelectTrigger>
                      <SelectContent className="bg-background border z-[60]">
                        <SelectItem value="urgent">ASAP (Rush Order)</SelectItem>
                        <SelectItem value="1-2weeks">1-2 weeks</SelectItem>
                        <SelectItem value="3-4weeks">3-4 weeks</SelectItem>
                        <SelectItem value="1-2months">1-2 months</SelectItem>
                        <SelectItem value="flexible">Flexible timing</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="customization">Customization Needed</Label>
                    <Select onValueChange={(value) => handleInputChange('customization', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Level of customization" />
                      </SelectTrigger>
                      <SelectContent className="bg-background border z-[60]">
                        <SelectItem value="none">No customization</SelectItem>
                        <SelectItem value="logo">Logo/branding only</SelectItem>
                        <SelectItem value="colors">Custom colors</SelectItem>
                        <SelectItem value="materials">Custom materials</SelectItem>
                        <SelectItem value="full">Fully custom design</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Additional Information */}
              <div className="space-y-4">
                <h3 className="flex items-center gap-2 font-medium text-foreground">
                  <MessageSquare className="w-4 h-4" />
                  Additional Information
                </h3>
                
                <div>
                  <Label htmlFor="message">Project Details & Special Requirements</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Please describe your project, any special requirements, budget considerations, or questions you have..."
                    rows={4}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <Button type="submit" className="w-full" size="lg">
                <Send className="w-4 h-4 mr-2" />
                Send Quote Request
              </Button>
            </form>
          </div>

          {/* Footer */}
          <div className="border-t p-6 bg-muted/30">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">
                Need immediate assistance?
              </p>
              <div className="flex items-center justify-center gap-4 text-sm">
                <a href="tel:+1234567890" className="flex items-center gap-1 text-primary hover:underline">
                  <Phone className="w-3 h-3" />
                  Call Us
                </a>
                <a href="mailto:sales@globalsystems.com" className="flex items-center gap-1 text-primary hover:underline">
                  <Mail className="w-3 h-3" />
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuoteSidebar;