const GridPattern = () => {
  return (
    <div
      className="absolute inset-0 opacity-[0.1]"
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
        backgroundSize: "50px 50px",
      }}
    />
  );
};

export default GridPattern;
