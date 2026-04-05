import React from "react";
import { GraduationCap, Menu, User, Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Page } from "../../App";

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 border-b ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-border" : "bg-background border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div 
          className="flex flex-col cursor-pointer group"
          onClick={() => onNavigate("home")}
        >
          <div className="flex items-center gap-2">
            <div className="bg-primary p-2 rounded-lg group-hover:rotate-12 transition-transform shadow-lg shadow-primary/20">
              <GraduationCap className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl tracking-tight">EduStream</span>
          </div>
          <span className="text-[10px] font-medium text-muted-foreground mt-0.5 ml-1 leading-none uppercase tracking-widest opacity-80">
            Owned by Virgilio Mbotjhwa Msibi
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {[
            { id: "home", label: "Home" },
            { id: "browse", label: "Syllabi & Sessions" },
            { id: "pricing", label: "Subscription" },
            { id: "dashboard", label: "Dashboard" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id as Page)}
              className={`text-sm font-medium transition-colors hover:text-primary relative py-1 ${
                currentPage === item.id ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {item.label}
              {currentPage === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full" />
              )}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <Search className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <Bell className="w-5 h-5" />
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="rounded-full hidden sm:flex border-primary/20 hover:bg-primary/5 hover:border-primary/50 transition-all"
            onClick={() => onNavigate("dashboard")}
          >
            <User className="w-4 h-4 mr-2" />
            Sign In
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </header>
  );
}