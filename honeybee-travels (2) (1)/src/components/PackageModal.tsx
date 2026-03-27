import { X, MapPin, Clock, Tag } from 'lucide-react';
import { Package } from '@/types';
import { formatPrice } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

interface PackageModalProps {
  pkg: Package | null;
  onClose: () => void;
}

export default function PackageModal({ pkg, onClose }: PackageModalProps) {
  if (!pkg) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#1a1208]/75 backdrop-blur-sm"
        />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-white rounded-sm max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl z-10"
        >
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center bg-black/10 hover:bg-black/20 rounded-full transition-colors z-20"
          >
            <X className="w-5 h-5" />
          </button>

          <img src={pkg.image} alt={pkg.title} className="w-full h-[300px] object-cover" />

          <div className="p-8 md:p-10">
            <span className="inline-block bg-[#c8832a] text-white text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-sm mb-4">
              {pkg.category}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#1a1208] mb-6">{pkg.title}</h2>
            
            <div className="flex flex-wrap gap-6 mb-8 pb-8 border-b border-[#e8dcc8]">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-widest text-[#1a1208] font-bold">Destination</span>
                <span className="text-sm text-[#7a6a52] flex items-center gap-1"><MapPin className="w-3 h-3" /> {pkg.destination}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-widest text-[#1a1208] font-bold">Duration</span>
                <span className="text-sm text-[#7a6a52] flex items-center gap-1"><Clock className="w-3 h-3" /> {pkg.duration}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-widest text-[#1a1208] font-bold">Category</span>
                <span className="text-sm text-[#7a6a52] flex items-center gap-1"><Tag className="w-3 h-3" /> {pkg.category}</span>
              </div>
            </div>

            <p className="text-[#7a6a52] leading-relaxed mb-8 text-lg font-light">
              {pkg.description}
            </p>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="font-serif text-3xl text-[#c8832a] font-light">
                {formatPrice(pkg.price)} <small className="text-sm text-[#7a6a52] font-sans font-normal">per person</small>
              </div>
              <div className="flex gap-4">
                <Link 
                  to={`/enquiry?package=${encodeURIComponent(pkg.title)}`}
                  className="px-8 py-3 bg-[#c8832a] text-white text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-[#8a5a1a] transition-all shadow-lg shadow-[#c8832a]/20"
                >
                  Enquire About This Package
                </Link>
                <button 
                  onClick={onClose}
                  className="px-8 py-3 border border-[#c8832a] text-[#c8832a] text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-[#c8832a] hover:text-white transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
