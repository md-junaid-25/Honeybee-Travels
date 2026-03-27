import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import Enquiry from './pages/Enquiry';
import Planner from './pages/Planner';
import { motion, AnimatePresence } from 'motion/react';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route 
                path="/international" 
                element={
                  <CategoryPage 
                    category="International" 
                    title="International Trips"
                    subtitle="From European cobblestones to Asian temples — the world is calling."
                    eyebrow="Explore The World"
                    heroImage="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1800&q=80"
                  />
                } 
              />
              <Route 
                path="/domestic" 
                element={
                  <CategoryPage 
                    category="Domestic" 
                    title="Domestic Trips"
                    subtitle="From the Himalayas to the backwaters — India's beauty is infinite."
                    eyebrow="Incredible India"
                    heroImage="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1800&q=80"
                  />
                } 
              />
              <Route 
                path="/honeymoon" 
                element={
                  <CategoryPage 
                    category="Honeymoon" 
                    title="Honeymoon Packages"
                    subtitle="Romance, crafted with love and every detail perfected."
                    eyebrow="For Two Hearts"
                    heroImage="https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1800&q=80"
                  />
                } 
              />
              <Route path="/enquiry" element={<Enquiry />} />
              <Route path="/planner" element={<Planner />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Chatbot />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
