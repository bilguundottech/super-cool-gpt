const LiquidOrbs = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Large floating orb */}
      <div
        className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 blur-3xl animate-pulse"
        style={{ animationDuration: "4s" }}
      />

      {/* Medium floating orb */}
      <div
        className="absolute top-1/4 right-10 h-60 w-60 rounded-full bg-gradient-to-bl from-primary/15 to-primary/5 blur-2xl animate-bounce"
        style={{ animationDuration: "6s" }}
      />

      {/* Small floating orb */}
      <div
        className="absolute bottom-20 left-1/4 h-40 w-40 rounded-full bg-gradient-to-tr from-primary/25 to-primary/10 blur-xl animate-pulse"
        style={{ animationDuration: "3s" }}
      />

      {/* Additional accent orbs */}
      <div
        className="absolute bottom-10 right-1/3 h-32 w-32 rounded-full bg-gradient-to-tl from-accent/20 to-accent/5 blur-2xl animate-bounce"
        style={{ animationDuration: "5s" }}
      />

      <div
        className="absolute top-1/3 left-10 h-24 w-24 rounded-full bg-gradient-to-br from-secondary/30 to-secondary/10 blur-xl animate-pulse"
        style={{ animationDuration: "7s" }}
      />
    </div>
  );
};

export default LiquidOrbs;
