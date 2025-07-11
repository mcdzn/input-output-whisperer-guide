
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import ProductGrid from "@/components/ProductGrid";
import Sustainability from "@/components/Sustainability";
import Showrooms from "@/components/Showrooms";
import Clients from "@/components/Clients";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <ProductGrid />
      <Products />
      <Sustainability />
      <Showrooms />
      <Clients />
      <QuoteForm />
      <Footer />
    </div>
  );
};

export default Index;
