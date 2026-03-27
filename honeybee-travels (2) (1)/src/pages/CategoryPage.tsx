import { useState, useEffect } from 'react';
import { travelService } from '@/services/api';
import { Package } from '@/types';
import PackageCard from '@/components/PackageCard';
import PackageModal from '@/components/PackageModal';
import { motion } from 'motion/react';

interface CategoryPageProps {
  category: 'International' | 'Domestic' | 'Honeymoon';
  title: string;
  subtitle: string;
  eyebrow: string;
  heroImage: string;
}

export default function CategoryPage({ category, title, subtitle, eyebrow, heroImage }: CategoryPageProps) {
  const [packages, setPackages] = useState<Package[]>([]);
  const [filteredPackages, setFilteredPackages] = useState<Package[]>([]);
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const data = await travelService.getPackages({ category });
        setPackages(data);
        setFilteredPackages(data);
      } catch (error) {
        console.error("Failed to load packages", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, [category]);

  const handleFilter = (destination: string) => {
    setActiveFilter(destination);
    if (destination === 'all') {
      setFilteredPackages(packages);
    } else {
      setFilteredPackages(packages.filter(p => p.destination === destination));
    }
  };

  const uniqueDestinations = Array.from(new Set<string>(packages.map(p => p.destination)));

  return (
    <div className="min-h-screen bg-[#faf7f2]">
      {/* Hero */}
      <div 
        className="pt-40 pb-20 px-6 text-center relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(135deg, rgba(26,18,8,0.85) 0%, rgba(26,18,8,0.5) 100%), url('${heroImage}')` }}
      >
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-[#e8a84a] text-[11px] font-medium uppercase tracking-[0.2em] mb-4">{eyebrow}</p>
          <h1 className="text-white font-serif text-5xl md:text-6xl lg:text-7xl mb-6">
            {title.split(' ')[0]} <em className="text-[#e8a84a] not-italic">{title.split(' ').slice(1).join(' ')}</em>
          </h1>
          <p className="text-white/60 text-lg md:text-xl font-light">{subtitle}</p>
        </div>
      </div>

      {/* Content */}
      <section className="py-20 bg-[#fff9f3]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filters */}
          {packages.length > 0 && (
            <div className="flex flex-wrap gap-3 justify-center mb-16">
              <button 
                onClick={() => handleFilter('all')}
                className={`px-6 py-2 rounded-full text-[11px] font-semibold uppercase tracking-wider border transition-all ${
                  activeFilter === 'all' 
                    ? "bg-[#c8832a] text-white border-[#c8832a]" 
                    : "bg-white text-[#7a6a52] border-[#e8dcc8] hover:border-[#c8832a]"
                }`}
              >
                All Destinations
              </button>
              {uniqueDestinations.map(dest => (
                <button 
                  key={dest}
                  onClick={() => handleFilter(dest)}
                  className={`px-6 py-2 rounded-full text-[11px] font-semibold uppercase tracking-wider border transition-all ${
                    activeFilter === dest 
                      ? "bg-[#c8832a] text-white border-[#c8832a]" 
                      : "bg-white text-[#7a6a52] border-[#e8dcc8] hover:border-[#c8832a]"
                  }`}
                >
                  {dest.split(',')[0]}
                </button>
              ))}
            </div>
          )}

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map(i => (
                <div key={i} className="bg-white rounded-sm h-[400px] animate-pulse border border-[#e8dcc8]" />
              ))}
            </div>
          ) : filteredPackages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPackages.map(pkg => (
                <PackageCard 
                  key={pkg.id} 
                  pkg={pkg} 
                  onViewDetails={setSelectedPackage} 
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-5xl mb-6">✈️</div>
              <h3 className="font-serif text-2xl text-[#1a1208] mb-2">No packages found</h3>
              <p className="text-[#7a6a52]">Check back soon — we're always adding new destinations!</p>
            </div>
          )}
        </div>
      </section>

      <PackageModal pkg={selectedPackage} onClose={() => setSelectedPackage(null)} />
    </div>
  );
}
