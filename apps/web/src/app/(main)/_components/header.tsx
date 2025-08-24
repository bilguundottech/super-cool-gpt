import { ModeToggle } from "@/components/theme/toggle";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 w-full">
      <h1 className="text-2xl font-bold text-primary">Super Cool GPT</h1>
      <ModeToggle />
    </header>
  );
};

export default Header;
