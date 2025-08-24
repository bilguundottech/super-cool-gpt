import { AppSidebar } from "@/app/(main)/_components/app-sidebar";
import Header from "@/app/(main)/_components/header";
import { SidebarProvider } from "@/components/ui/sidebar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex flex-col w-full">
        <Header />
        {children}
      </main>
    </SidebarProvider>
  );
};

export default MainLayout;
