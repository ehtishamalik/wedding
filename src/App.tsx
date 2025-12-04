import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages";
import NotFound from "./pages/NotFound";
import Mehndi from "./pages/Mehndi";
import Barat from "./pages/Barat";
import Walima from "./pages/Walima";
import { Analytics } from "@vercel/analytics/next";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/mehndi" element={<Mehndi />} />
      <Route path="/barat" element={<Barat />} />
      <Route path="/walima" element={<Walima />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Analytics />
  </BrowserRouter>
);

export default App;
