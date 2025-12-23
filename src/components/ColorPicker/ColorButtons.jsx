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
    <div className="flex justify-center gap-5 mt-8">
      {colors.map((color) => {
        const isActive = products[centerIndex]?.color === color;

        return (
          <button
            key={color}
            className={`
              w-10 h-10 
              rounded-full 
              transition-all 
              duration-300
              hover:scale-110
              ${isActive 
                ? "ring-2 ring-offset-2 ring-[#52483E] scale-110" 
                : "hover:ring-2 hover:ring-offset-2 hover:ring-gray-400"
              }
            `}
            style={{ backgroundColor: colorMap[color] }}
            onClick={() => handleColorClick(color)}
            aria-label={`Select ${color} color`}
          />
        );
      })}
    </div>
  );
};

export default ColorButtons;
