import React from 'react';
import { MapPin, Clock } from 'lucide-react';
import { Package } from '@/types';
import { formatPrice } from '@/lib/utils';
import { motion } from 'motion/react';

export interface PackageCardProps {
  pkg: Package;
  onViewDetails: (pkg: Package) => void;
}

const PackageCard: React.FC<PackageCardProps> = ({ pkg, onViewDetails }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-sm overflow-hidden shadow-[0_4px_32px_rgba(26,18,8,0.09)] border border-[#e8dcc8] group hover:-translate-y-1 transition-all duration-300"
    >
      <div className="relative h-[210px] overflow-hidden">
        <img 
          src={pkg.image} 
          alt={pkg.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <span className="absolute top-4 left-4 bg-[#c8832a] text-white text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-sm">
          {pkg.category}
        </span>
      </div>
      
      <div className="p-6">
        <div className="flex gap-4 mb-3">
          <span className="flex items-center gap-1 text-[11px] text-[#7a6a52]">
            <MapPin className="w-3 h-3" /> {pkg.destination}
          </span>
          <span className="flex items-center gap-1 text-[11px] text-[#7a6a52]">
            <Clock className="w-3 h-3" /> {pkg.duration}
          </span>
        </div>
        <h3 className="font-serif text-xl text-[#1a1208] mb-2">{pkg.title}</h3>
        <p className="text-sm text-[#7a6a52] line-clamp-2 leading-relaxed">
          {pkg.description}
        </p>
      </div>

      <div className="flex items-center justify-between px-6 py-4 border-t border-[#e8dcc8] bg-[#faf7f2]">
        <div className="flex flex-col">
          <strong className="font-serif text-xl text-[#c8832a] font-light">
            {formatPrice(pkg.price)}
          </strong>
          <span className="text-[10px] text-[#7a6a52] uppercase tracking-wider">per person</span>
        </div>
        <button 
          onClick={() => onViewDetails(pkg)}
          className="px-4 py-2 bg-[#c8832a] text-white text-[11px] font-semibold uppercase tracking-wider rounded-sm hover:bg-[#8a5a1a] transition-colors"
        >
          View Details
        </button>
      </div>
    </motion.div>
  );
};

export default PackageCard;
