import React, { useState, useEffect } from "react";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Home } from "./pages/Home";
import { Browse } from "./pages/Browse";
import { SessionDetail } from "./pages/SessionDetail";
import { Assessment } from "./pages/Assessment";
import { Pricing } from "./pages/Pricing";
import { Dashboard } from "./pages/Dashboard";
import { Toaster } from "@/components/ui/sonner";
import { AnimatePresence, motion } from "framer-motion";

export type Page = "home" | "browse" | "session" | "assessment" | "pricing" | "dashboard";

function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [selectedSessionId, setSelectedSessionId] = useState<string | null>(null);
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Simple router-like effect to handle navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const navigate = (page: Page, sessionId: string | null = null) => {
    if (sessionId) setSelectedSessionId(sessionId);
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home onNavigate={navigate} />;
      case "browse":
        return <Browse onNavigate={navigate} />;
      case "session":
        return <SessionDetail onNavigate={navigate} sessionId={selectedSessionId} />;
      case "assessment":
        return <Assessment onNavigate={navigate} sessionId={selectedSessionId} />;
      case "pricing":
        return <Pricing onNavigate={navigate} onSubscribe={() => setIsSubscribed(true)} />;
      case "dashboard":
        return <Dashboard onNavigate={navigate} />;
      default:
        return <Home onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary/20">
      <Header currentPage={currentPage} onNavigate={navigate} />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer onNavigate={navigate} />
      <Toaster position="top-center" />
    </div>
  );
}

export default App;