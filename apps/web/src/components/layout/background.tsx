import GlassMorphism from "./glass-morphism";
import GridPattern from "./grid-pattern";
import LiquidOrbs from "./liquid-orbs";

export const Background = () => {
  return (
    <div className="relative">
      <LiquidOrbs />
      <GlassMorphism />
      <GridPattern />
    </div>
  );
};
