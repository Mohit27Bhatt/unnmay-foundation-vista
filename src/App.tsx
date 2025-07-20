import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import OurWork from "./pages/OurWork";
import UpcomingProjects from "./pages/UpcomingProjects";
import KhaChanHumraGM from "./pages/KhaChanHumraGM";
import FantasticFourExplorer from "./pages/FantasticFourExplorer";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="our-work" element={<OurWork />} />
            <Route path="upcoming-projects" element={<UpcomingProjects />} />
            <Route path="kha-chan-humra-gm" element={<KhaChanHumraGM />} />
            <Route path="fantastic-four-explorer" element={<FantasticFourExplorer />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
