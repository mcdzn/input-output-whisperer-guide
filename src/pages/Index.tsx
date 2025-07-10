
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Showrooms from "@/components/Showrooms";
import Clients from "@/components/Clients";
import QuoteForm from "@/components/QuoteForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Products />
      <Showrooms />
      <Clients />
      <QuoteForm />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
