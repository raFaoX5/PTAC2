import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import ProductGrid from "./components/ProductGrid";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <ProductGrid>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ProductGrid>
      <Footer />
    </>
  );
}