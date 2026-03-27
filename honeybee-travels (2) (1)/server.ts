import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Mock Database
  const packages = [
    { id: 1, title: 'Paris & Swiss Alps Explorer', destination: 'France & Switzerland', category: 'International', duration: '9 Nights / 10 Days', price: 145000, image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80', description: 'A breathtaking journey through the City of Light and the majestic Swiss Alps. Explore the Eiffel Tower, cruise the Seine, and ride scenic mountain trains through snow-capped peaks.', featured: true },
    { id: 2, title: 'Bali Honeymoon Escape', destination: 'Bali, Indonesia', category: 'Honeymoon', duration: '6 Nights / 7 Days', price: 89000, image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80', description: 'Romance blooms on the island of the gods. Stay in a private pool villa, enjoy couples spa, watch the sunset at Tanah Lot, and dine under the stars.', featured: true },
    { id: 3, title: 'Kerala Backwaters Bliss', destination: 'Kerala, India', category: 'Domestic', duration: '5 Nights / 6 Days', price: 38000, image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80', description: 'Drift along the serene backwaters aboard a traditional houseboat. Experience the lush tea gardens of Munnar and pristine beaches of Kovalam.', featured: true },
    { id: 4, title: 'Rajasthan Royal Heritage', destination: 'Rajasthan, India', category: 'Domestic', duration: '7 Nights / 8 Days', price: 52000, image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80', description: 'Step into the royal grandeur of Rajasthan — majestic forts, romantic lakes of Udaipur, and the golden sands of Jaisalmer.', featured: true },
    { id: 5, title: 'Maldives Paradise Retreat', destination: 'Maldives', category: 'Honeymoon', duration: '5 Nights / 6 Days', price: 175000, image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80', description: 'Float above crystal-clear waters in a stunning overwater bungalow. World-class snorkelling, private beach dinners, sunrise yoga.', featured: false },
    { id: 6, title: 'Thailand Tropical Adventure', destination: 'Thailand', category: 'International', duration: '7 Nights / 8 Days', price: 72000, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', description: 'From Bangkok to Koh Samui — ancient temples, world-famous street food, island-hopping and turquoise water massages.', featured: false },
    { id: 7, title: 'Ladakh High Altitude Trek', destination: 'Ladakh, India', category: 'Domestic', duration: '8 Nights / 9 Days', price: 45000, image: 'https://images.unsplash.com/photo-1559628129-67cf63b72248?w=800&q=80', description: 'Roof of the world — Nubra Valley, Pangong Tso lake, ancient cliff monasteries and the iconic Khardung La pass.', featured: false },
    { id: 8, title: 'Santorini Sunset Romance', destination: 'Santorini, Greece', category: 'Honeymoon', duration: '6 Nights / 7 Days', price: 168000, image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80', description: 'White and blue villages of Oia, the world\'s most spectacular sunset, volcanic beaches and authentic Greek cuisine.', featured: false },
  ];

  // API Routes
  app.get("/api/packages", (req, res) => {
    const { category, featured, id } = req.query;
    
    if (id) {
      const pkg = packages.find(p => p.id === parseInt(id as string));
      return res.json({ success: true, data: pkg });
    }

    let filtered = [...packages];
    if (category) {
      filtered = filtered.filter(p => p.category.toLowerCase() === (category as string).toLowerCase());
    }
    if (featured === 'true') {
      filtered = filtered.filter(p => p.featured);
    }

    res.json({ success: true, data: filtered });
  });

  app.post("/api/enquiry", (req, res) => {
    console.log("Enquiry received:", req.body);
    // In a real app, save to DB or send email
    res.json({ success: true, message: "Enquiry received successfully!" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
