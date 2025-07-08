
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import QuoteForm from "@/components/QuoteForm";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Products />
      <QuoteForm />
      <Contact />
    </div>
  );
};

export default Index;
