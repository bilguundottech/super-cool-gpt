import { ModeToggle } from "@/components/theme/toggle";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex items-center justify-center h-full">
      {/* Mode toggle */}
      <div className="absolute top-6 right-6 z-50">
        <ModeToggle />
      </div>

      {/* Main content with glass morphism container */}
      <div className="relative z-10 rounded-3xl bg-card/40 backdrop-blur-xl border border-border/30 p-8 shadow-2xl">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
