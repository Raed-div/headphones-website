import React from "react";

/**
 * ProductCompareCard Component
 * 
 * Displays a product card with:
 * - Product name
 * - Product image
 * - Price
 * - Buy button
 * - List of features with icons
 * 
 * @param {Object} product - Product object containing name, image, price, and features
 */
const ProductCompareCard = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm">
      {/* Product Image Container with Name, Price and Button */}
      <div className="relative flex flex-col items-center justify-center bg-[#F5F5F5] rounded-xl py-8 px-6 mb-8">
        {/* Product Name */}
        <h2 className="text-2xl font-semibold text-[#4A4A4A] text-center mb-6">
          {product.name}
        </h2>

        {/* Product Image */}
        <div className="h-48 mb-6 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            width="200"
            height="200"
            className="h-full w-auto object-contain"
          />
        </div>

        {/* Price */}
        <p className="text-center text-sm text-gray-500 mb-4">
          Starting at {product.price}
        </p>

        {/* Buy Button */}
        <button 
          className="px-8 py-2 bg-gradient-to-r from-[#52483E] to-[#8B8782] text-white rounded-full font-medium hover:shadow-lg transition-all text-sm"
          aria-label={`Buy ${product.name}`}
        >
          Buy Now
        </button>
      </div>

      {/* Features List */}
      <div className="space-y-0">
        {product.features.map((feature, index) => (
          <div
            key={`${product.id}-feature-${index}`}
            className={`flex flex-col items-center text-center py-6 ${
              index !== product.features.length - 1 ? 'border-b border-gray-200' : ''
            } ${feature.disabled ? "opacity-30" : ""}`}
          >
            {/* Icon */}
            <div className="mb-2.5 text-gray-400" aria-hidden="true">
              {feature.icon}
            </div>
            
            {/* Label */}
            <p className={`text-xs leading-relaxed px-4 ${
              feature.disabled ? "text-gray-400" : "text-gray-600"
            }`}>
              {feature.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCompareCard;
