
import TopBanner from "../components/TopBanner";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import BestSellingProducts from "../components/BestSellingProducts";
import Services from "../components/Services";
import Footer from "../components/Footer";
import TabbedProducts from "../components/TabbedProducts";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <TopBanner />
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-12">
        {/* Sidebar + Hero aligned horizontally */}
        <div className="flex flex-col md:flex-row gap-6">
          <TopBar />
          <Sidebar />
          <Hero />
        </div>

        {/* Scrollable sections below */}
        <FeaturedProducts />
        <BestSellingProducts />
        <TabbedProducts />
        <Services />
        <Footer />
      </main>
    </div>
  );
}
