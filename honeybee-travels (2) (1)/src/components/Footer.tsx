import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#1a1208] text-white/40 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src="/images/main-logo.png" alt="Logo" className="w-10 h-10 rounded" />
              <span className="font-serif text-2xl text-white">
                Honeybee <em className="text-[#c8832a] not-italic">Travels</em>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Crafting extraordinary travel experiences since 2025. Your journey, our passion.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-xs uppercase tracking-widest hover:text-[#e8a84a] transition-colors">Facebook</a>
              <a href="#" className="text-xs uppercase tracking-widest hover:text-[#e8a84a] transition-colors">Instagram</a>
              <a href="#" className="text-xs uppercase tracking-widest hover:text-[#e8a84a] transition-colors">WhatsApp</a>
            </div>
          </div>

          <div>
            <h5 className="text-white text-xs font-semibold uppercase tracking-[0.14em] mb-6">Quick Links</h5>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-[#e8a84a] transition-colors">Home</Link></li>
              <li><Link to="/international" className="hover:text-[#e8a84a] transition-colors">International Trips</Link></li>
              <li><Link to="/domestic" className="hover:text-[#e8a84a] transition-colors">Domestic Trips</Link></li>
              <li><Link to="/honeymoon" className="hover:text-[#e8a84a] transition-colors">Honeymoon Packages</Link></li>
              <li><Link to="/enquiry" className="hover:text-[#e8a84a] transition-colors">Enquiry</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white text-xs font-semibold uppercase tracking-[0.14em] mb-6">Popular Destinations</h5>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-[#e8a84a] transition-colors">Bali, Indonesia</a></li>
              <li><a href="#" className="hover:text-[#e8a84a] transition-colors">Paris, France</a></li>
              <li><a href="#" className="hover:text-[#e8a84a] transition-colors">Kerala, India</a></li>
              <li><a href="#" className="hover:text-[#e8a84a] transition-colors">Maldives</a></li>
              <li><a href="#" className="hover:text-[#e8a84a] transition-colors">Rajasthan, India</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white text-xs font-semibold uppercase tracking-[0.14em] mb-6">Contact Us</h5>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <span>📍</span>
                <span>Bengaluru - 560001</span>
              </li>
              <li className="flex gap-3">
                <span>📞</span>
                <span>+91 98765 43210</span>
              </li>
              <li className="flex gap-3">
                <span>✉️</span>
                <a href="mailto:info@honeybeetravels.com" className="hover:text-[#e8a84a] transition-colors">info@honeybeetravels.com</a>
              </li>
              <li className="flex gap-3">
                <span>🕐</span>
                <span>Mon–Sat: 9AM – 7PM</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/20">
          <p>© 2025 Honeybee Travels. All rights reserved.</p>
          <p>Designed with ♥ for wanderers.</p>
        </div>
      </div>
    </footer>
  );
}
