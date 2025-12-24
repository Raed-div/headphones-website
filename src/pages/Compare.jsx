import React, { useState } from "react";
import Header from "../components/Navbar/Header";
import MobileMenu from "../components/Navbar/MobileMenu";
import Footer from "../components/Footer/Footer";
import ProductCompareCard from "../components/Compare/ProductCompareCard";
import { auraPro, flowII } from "../data/productsData";

/**
 * Compare Page Component
 * Displays side-by-side comparison of Aura Pro II and Flow II products
 * with detailed feature lists and specifications
 */
const Compare = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F5F1EC]">
      <Header setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <div className="container mx-auto px-6 pt-32 pb-20">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#52483E] mb-4">
            Compare Resonance Models
          </h1>
          <p className="text-base text-[#8B8782]">
            Get help choosing. Chat with a Specialist.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto pb-20">
          <ProductCompareCard product={auraPro} />
          <ProductCompareCard product={flowII} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Compare;
