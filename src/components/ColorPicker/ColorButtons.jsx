const ColorButtons = ({
  colors,
  colorMap,
  products,
  centerIndex,
  setCenterIndex,
}) => {
  const handleColorClick = (color) => {
    const index = products.findIndex((p) => p.color === color);
    if (index !== -1) setCenterIndex(index);
  };

  return (
    <div className="flex justify-center gap-4 md:gap-6 mt-8">
      {colors.map((color) => {
        const isActive = products[centerIndex]?.color === color;

        return (
          <button
            key={color}
            className={`w-8 h-8 rounded-full border-2 transition-all duration-300 ${
              isActive ? "border-blue-500 scale-110" : "border-gray-300"
            }`}
            style={{ backgroundColor: colorMap[color] }}
            onClick={() => handleColorClick(color)}
          />
        );
      })}
    </div>
  );
};

export default ColorButtons;
