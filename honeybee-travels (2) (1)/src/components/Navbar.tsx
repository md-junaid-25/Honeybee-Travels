import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'International', path: '/international' },
  { name: 'Domestic', path: '/domestic' },
  { name: 'Honeymoon', path: '/honeymoon' },
  { name: 'Plan Your Trip', path: '/planner' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src="/images/main-logo.png" alt="Logo" className="w-10 h-10 rounded shadow-sm" />
          <span className={cn(
            "font-serif text-2xl font-bold tracking-tight",
            isScrolled ? "text-[#1a1208]" : "text-[#1a1208]"
          )}>
            Honeybee <em className="text-[#c8832a] not-italic italic">Travels</em>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-[13px] font-semibold uppercase tracking-[0.15em] transition-all duration-300",
                location.pathname === link.path
                  ? "text-[#c8832a]"
                  : isScrolled ? "text-[#1a1208] hover:text-[#c8832a]" : "text-[#1a1208] hover:text-[#c8832a]"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/enquiry"
            className={cn(
              "px-6 py-2.5 border-2 rounded-full text-[11px] font-semibold uppercase tracking-[0.2em] transition-all duration-300",
              isScrolled
                ? "border-[#c8832a] text-[#c8832a] hover:bg-[#c8832a] hover:text-white"
                : "border-[#1a1208] text-[#1a1208] hover:bg-[#1a1208] hover:text-white"
            )}
          >
            Enquire Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={cn("w-6 h-6", "text-[#1a1208]")} />
          ) : (
            <Menu className={cn("w-6 h-6", "text-[#1a1208]")} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#faf7f2] border-t border-[#e8dcc8] p-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-semibold uppercase tracking-widest",
                location.pathname === link.path ? "text-[#c8832a]" : "text-[#1a1208]"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/enquiry"
            className="text-sm font-medium uppercase tracking-wider text-[#c8832a]"
          >
            Enquire Now
          </Link>
        </div>
      )}
    </nav>
  );
}
