import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import OfficeFiles from "./pages/OfficeFiles";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <div className="min-h-screen flex flex-col">
        <BrowserRouter>
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/office-files" element={<OfficeFiles />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <footer className="w-full bg-white border-t border-gray-200">
            <div className="w-full max-w-6xl mx-auto py-3 px-6">
              <p className="text-xs text-gray-700">SurwayHR 2025 ©</p>
            </div>
          </footer>
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
