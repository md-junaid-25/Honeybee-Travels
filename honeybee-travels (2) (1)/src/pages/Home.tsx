import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { travelService } from '@/services/api';
import { Package } from '@/types';
import PackageCard from '@/components/PackageCard';
import PackageModal from '@/components/PackageModal';
import { cn } from '@/lib/utils';

export default function Home() {
  const [featuredPackages, setFeaturedPackages] = useState<Package[]>([]);
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await travelService.getPackages({ featured: true });
        setFeaturedPackages(data);
      } catch (error) {
        console.error("Failed to load packages", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1800&q=80" 
            alt="Hero" 
            className="w-full h-full object-cover scale-105 animate-[heroZoom_12s_ease-in-out_infinite_alternate]"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1208]/75 via-[#1a1208]/35 to-[#1a1208]/55" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white/65 text-[11px] font-medium uppercase tracking-[0.2em] mb-5"
          >
            Est. 2025 · Premium Travel Curators
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-white text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.08] mb-6"
          >
            Where Will <br />
            <em className="text-[#e8a84a] not-italic">Your Story</em><br />
            Take You?
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-white/75 text-lg md:text-xl max-w-lg font-light mb-10"
          >
            Handcrafted journeys to the world's most extraordinary destinations. Let us turn your travel dreams into memories that last forever.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="flex flex-wrap gap-4"
          >
            <Link to="/international" className="px-8 py-4 bg-[#c8832a] text-white text-xs font-semibold uppercase tracking-widest rounded-sm hover:bg-[#8a5a1a] transition-all shadow-xl shadow-[#c8832a]/20">
              Explore Packages
            </Link>
            <Link to="/enquiry" className="px-8 py-4 border border-white/60 text-white text-xs font-semibold uppercase tracking-widest rounded-sm hover:bg-white hover:text-[#1a1208] transition-all">
              Plan My Trip
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-28 right-12 hidden lg:flex flex-col items-center gap-3">
          <span className="text-white/55 text-[10px] uppercase tracking-[0.15em] [writing-mode:vertical-rl]">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent animate-pulse" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-[#1a1208]/60 backdrop-blur-md py-5 flex justify-center gap-12 md:gap-24 border-t border-white/10">
          <div className="text-center">
            <strong className="block font-serif text-3xl text-white font-light">500+</strong>
            <span className="text-[10px] text-white/55 uppercase tracking-wider">Happy Travellers</span>
          </div>
          <div className="w-px h-10 bg-white/15" />
          <div className="text-center">
            <strong className="block font-serif text-3xl text-white font-light">50+</strong>
            <span className="text-[10px] text-white/55 uppercase tracking-wider">Destinations</span>
          </div>
          <div className="w-px h-10 bg-white/15" />
          <div className="text-center">
            <strong className="block font-serif text-3xl text-white font-light">1 Yr</strong>
            <span className="text-[10px] text-white/55 uppercase tracking-wider">Experience</span>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 bg-[#fff9f3]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#c8832a] text-[11px] font-medium uppercase tracking-[0.18em] mb-3">Our Collections</p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1a1208]">Choose Your <em className="text-[#c8832a] not-italic">Adventure</em></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link to="/international" className="relative h-[380px] rounded-sm overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80" alt="International" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1208]/80 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <h3 className="text-white font-serif text-2xl mb-1">International Trips</h3>
                <p className="text-white/70 text-xs mb-3">Europe, Asia, Americas & Beyond</p>
                <span className="text-[#e8a84a] text-[11px] font-medium uppercase tracking-widest opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">Explore →</span>
              </div>
            </Link>
            <Link to="/domestic" className="relative h-[380px] rounded-sm overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80" alt="Domestic" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1208]/80 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <h3 className="text-white font-serif text-2xl mb-1">Domestic Trips</h3>
                <p className="text-white/70 text-xs mb-3">Incredible India Awaits You</p>
                <span className="text-[#e8a84a] text-[11px] font-medium uppercase tracking-widest opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">Explore →</span>
              </div>
            </Link>
            <Link to="/honeymoon" className="relative h-[380px] rounded-sm overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80" alt="Honeymoon" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1208]/80 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <h3 className="text-white font-serif text-2xl mb-1">Honeymoon Packages</h3>
                <p className="text-white/70 text-xs mb-3">Romance Crafted Just For Two</p>
                <span className="text-[#e8a84a] text-[11px] font-medium uppercase tracking-widest opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">Explore →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-24 bg-[#faf7f2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#c8832a] text-[11px] font-medium uppercase tracking-[0.18em] mb-3">Handpicked For You</p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1a1208]">Featured <em className="text-[#c8832a] not-italic">Packages</em></h2>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="bg-white rounded-sm h-[400px] animate-pulse border border-[#e8dcc8]" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredPackages.map(pkg => (
                <PackageCard 
                  key={pkg.id} 
                  pkg={pkg} 
                  onViewDetails={setSelectedPackage} 
                />
              ))}
            </div>
          )}

          <div className="text-center mt-16">
            <Link to="/international" className="px-8 py-3 border border-[#c8832a] text-[#c8832a] text-xs font-semibold uppercase tracking-widest rounded-sm hover:bg-[#c8832a] hover:text-white transition-all">
              View All Packages
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 bg-[#1a1208] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="text-[#e8a84a] text-[11px] font-medium uppercase tracking-[0.18em] mb-3">Why Choose Us</p>
              <h2 className="font-serif text-4xl md:text-5xl mb-6">Travel With <em className="text-[#e8a84a] not-italic">Confidence</em></h2>
              <p className="text-white/55 text-lg leading-relaxed mb-10">
                We believe every journey should be as beautiful as the destination. Our team of seasoned travel experts curate each itinerary with care, passion, and deep local knowledge.
              </p>
              <Link to="/enquiry" className="px-8 py-4 bg-[#c8832a] text-white text-xs font-semibold uppercase tracking-widest rounded-sm hover:bg-[#8a5a1a] transition-all">
                Start Planning
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: "🗺️", title: "Expert Curation", desc: "Every package is personally vetted by our travel specialists with on-ground experience." },
                { icon: "💼", title: "End-to-End Support", desc: "From visa assistance to airport transfers — we handle every detail so you don't have to." },
                { icon: "💰", title: "Best Value Guaranteed", desc: "Premium experiences at honest prices, with transparent costing and no hidden fees." },
                { icon: "📞", title: "24/7 Travel Assistance", desc: "Our team is always reachable, no matter what time zone you're exploring." }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-sm hover:bg-[#c8832a]/10 hover:border-[#c8832a]/30 transition-all">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-white/45 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#fff9f3]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#c8832a] text-[11px] font-medium uppercase tracking-[0.18em] mb-3">Traveller Stories</p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1a1208]">Words That <em className="text-[#c8832a] not-italic">Warm Us</em></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Priya & Rohan S.", trip: "Bali Honeymoon", text: "The Bali honeymoon package was absolutely perfect. Every detail was taken care of — we just had to show up and fall in love with the place.", initial: "P" },
              { name: "Amit Sharma", trip: "Europe Explorer", text: "Booked the Europe Explorer package and it was the trip of a lifetime. Seamless arrangements, wonderful hotels, and the itinerary was spot-on.", initial: "A", accent: true },
              { name: "Sunita Mehta", trip: "Kerala Backwaters", text: "Kerala backwaters trip was magical. The houseboat stay, the food, the service — everything exceeded our expectations. Will definitely book again!", initial: "S" }
            ].map((testi, i) => (
              <div key={i} className={cn(
                "p-10 rounded-sm border shadow-sm flex flex-col h-full",
                testi.accent ? "bg-[#c8832a] border-[#c8832a] text-white" : "bg-white border-[#e8dcc8] text-[#3a2e1e]"
              )}>
                <div className={cn("text-sm mb-6", testi.accent ? "text-white/90" : "text-[#c8832a]")}>★★★★★</div>
                <p className="italic text-lg leading-relaxed mb-8 flex-grow">"{testi.text}"</p>
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center font-bold",
                    testi.accent ? "bg-white/20 text-white" : "bg-[#c8832a] text-white"
                  )}>{testi.initial}</div>
                  <div>
                    <strong className={cn("block text-sm", testi.accent ? "text-white" : "text-[#1a1208]")}>{testi.name}</strong>
                    <span className={cn("text-xs", testi.accent ? "text-white/60" : "text-[#7a6a52]")}>{testi.trip}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-32 text-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1800&q=80" alt="CTA" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h2 className="text-white font-serif text-4xl md:text-5xl mb-4">Your Dream Trip Is <em className="text-[#e8a84a] not-italic">One Click Away</em></h2>
          <p className="text-white/65 text-lg mb-10">Tell us where you want to go. We'll handle the rest.</p>
          <Link to="/enquiry" className="px-10 py-5 bg-[#c8832a] text-white text-sm font-semibold uppercase tracking-widest rounded-sm hover:bg-[#8a5a1a] transition-all">
            Plan My Journey
          </Link>
        </div>
      </section>

      <PackageModal pkg={selectedPackage} onClose={() => setSelectedPackage(null)} />
    </div>
  );
}
