import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { travelService } from '@/services/api';
import { MapPin, Phone, Mail, MessageSquare, Clock, Target, Shield, Zap } from 'lucide-react';

export default function Enquiry() {
  const location = useLocation();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    package: '',
    travelDate: '',
    travellers: '2',
    budget: '₹30,000 – ₹60,000',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const pkg = params.get('package');
    if (pkg) {
      setFormData(prev => ({ ...prev, package: pkg }));
    }
  }, [location]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      const res = await travelService.submitEnquiry(formData);
      if (res.success) {
        setSuccess(true);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          package: '',
          travelDate: '',
          travellers: '2',
          budget: '₹30,000 – ₹60,000',
          message: '',
        });
      }
    } catch (err) {
      setError('Failed to send enquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#faf7f2]">
      {/* Hero */}
      <div className="pt-40 pb-20 px-6 text-center bg-gradient-to-br from-[#1a1208] to-[#2e1f08]">
        <p className="text-[#e8a84a] text-[11px] font-medium uppercase tracking-[0.2em] mb-4">Let's Talk Travel</p>
        <h1 className="text-white font-serif text-5xl md:text-6xl lg:text-7xl mb-6">Plan Your <em className="text-[#e8a84a] not-italic">Journey</em></h1>
        <p className="text-white/60 text-lg md:text-xl font-light max-w-2xl mx-auto">Fill in your details and our travel experts will get back to you within 24 hours.</p>
      </div>

      <section className="py-24 bg-[#fff9f3]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            {/* Info Side */}
            <div>
              <p className="text-[#c8832a] text-[11px] font-medium uppercase tracking-[0.18em] mb-3">Get In Touch</p>
              <h2 className="font-serif text-4xl text-[#1a1208] mb-6">We'd Love to <em className="text-[#c8832a] not-italic">Hear</em> From You</h2>
              <p className="text-[#7a6a52] text-lg leading-relaxed mb-10">
                Whether you have a specific destination in mind or just a vague sense of wanderlust — our team is here to help you design the perfect journey.
              </p>

              <ul className="space-y-6 mb-12">
                <li className="flex items-start gap-4 text-[#7a6a52]">
                  <MapPin className="w-5 h-5 text-[#c8832a] mt-1" />
                  <span>Bengaluru – 560001, Karnataka</span>
                </li>
                <li className="flex items-start gap-4 text-[#7a6a52]">
                  <Phone className="w-5 h-5 text-[#c8832a] mt-1" />
                  <span>+91 98765 43210 (Mon–Sat, 9AM–7PM IST)</span>
                </li>
                <li className="flex items-start gap-4 text-[#7a6a52]">
                  <Mail className="w-5 h-5 text-[#c8832a] mt-1" />
                  <a href="mailto:info@honeybeetravels.com" className="hover:text-[#c8832a] transition-colors">info@honeybeetravels.com</a>
                </li>
                <li className="flex items-start gap-4 text-[#7a6a52]">
                  <MessageSquare className="w-5 h-5 text-[#c8832a] mt-1" />
                  <span>WhatsApp: +91 98765 43210</span>
                </li>
              </ul>

              <div className="bg-[#1a1208] p-8 rounded-sm">
                <p className="text-white/50 text-[10px] font-bold uppercase tracking-widest mb-6">Why reach out?</p>
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <Zap className="w-5 h-5 text-[#e8a84a]" />
                    <div>
                      <strong className="block text-white text-sm mb-1">24-Hour Response</strong>
                      <span className="text-white/45 text-xs">We respond to every enquiry within one business day.</span>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <Target className="w-5 h-5 text-[#e8a84a]" />
                    <div>
                      <strong className="block text-white text-sm mb-1">Custom Itineraries</strong>
                      <span className="text-white/45 text-xs">Every plan is tailor-made to match your budget and interests.</span>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <Shield className="w-5 h-5 text-[#e8a84a]" />
                    <div>
                      <strong className="block text-white text-sm mb-1">Zero Spam Promise</strong>
                      <span className="text-white/45 text-xs">We will never share your information with third parties.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="bg-white p-10 rounded-sm border border-[#e8dcc8] shadow-xl">
              <h2 className="font-serif text-2xl text-[#1a1208] mb-8">Send Us an Enquiry</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#7a6a52]">First Name *</label>
                    <input 
                      type="text" 
                      required
                      value={formData.firstName}
                      onChange={e => setFormData({...formData, firstName: e.target.value})}
                      placeholder="Riya"
                      className="bg-[#faf7f2] border border-[#e8dcc8] p-3 rounded-sm text-sm outline-none focus:border-[#c8832a] focus:ring-2 focus:ring-[#c8832a]/10 transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#7a6a52]">Last Name *</label>
                    <input 
                      type="text" 
                      required
                      value={formData.lastName}
                      onChange={e => setFormData({...formData, lastName: e.target.value})}
                      placeholder="Sharma"
                      className="bg-[#faf7f2] border border-[#e8dcc8] p-3 rounded-sm text-sm outline-none focus:border-[#c8832a] focus:ring-2 focus:ring-[#c8832a]/10 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#7a6a52]">Email Address *</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      placeholder="riya@example.com"
                      className="bg-[#faf7f2] border border-[#e8dcc8] p-3 rounded-sm text-sm outline-none focus:border-[#c8832a] focus:ring-2 focus:ring-[#c8832a]/10 transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#7a6a52]">Phone Number *</label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                      placeholder="+91 98765 43210"
                      className="bg-[#faf7f2] border border-[#e8dcc8] p-3 rounded-sm text-sm outline-none focus:border-[#c8832a] focus:ring-2 focus:ring-[#c8832a]/10 transition-all"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#7a6a52]">Package of Interest</label>
                  <select 
                    value={formData.package}
                    onChange={e => setFormData({...formData, package: e.target.value})}
                    className="bg-[#faf7f2] border border-[#e8dcc8] p-3 rounded-sm text-sm outline-none focus:border-[#c8832a] focus:ring-2 focus:ring-[#c8832a]/10 transition-all appearance-none"
                  >
                    <option value="">— Select a Package —</option>
                    <option>Paris & Swiss Alps Explorer</option>
                    <option>Bali Honeymoon Escape</option>
                    <option>Kerala Backwaters Bliss</option>
                    <option>Rajasthan Royal Heritage</option>
                    <option>Maldives Paradise Retreat</option>
                    <option>Thailand Tropical Adventure</option>
                    <option>Ladakh High Altitude Trek</option>
                    <option>Santorini Sunset Romance</option>
                    <option>Custom / Other</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#7a6a52]">Travel Date</label>
                    <input 
                      type="date" 
                      value={formData.travelDate}
                      onChange={e => setFormData({...formData, travelDate: e.target.value})}
                      className="bg-[#faf7f2] border border-[#e8dcc8] p-3 rounded-sm text-sm outline-none focus:border-[#c8832a] focus:ring-2 focus:ring-[#c8832a]/10 transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#7a6a52]">Number of Travellers</label>
                    <select 
                      value={formData.travellers}
                      onChange={e => setFormData({...formData, travellers: e.target.value})}
                      className="bg-[#faf7f2] border border-[#e8dcc8] p-3 rounded-sm text-sm outline-none focus:border-[#c8832a] focus:ring-2 focus:ring-[#c8832a]/10 transition-all appearance-none"
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3–4</option>
                      <option>5–8</option>
                      <option>Group (9+)</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#7a6a52]">Approximate Budget (per person)</label>
                  <select 
                    value={formData.budget}
                    onChange={e => setFormData({...formData, budget: e.target.value})}
                    className="bg-[#faf7f2] border border-[#e8dcc8] p-3 rounded-sm text-sm outline-none focus:border-[#c8832a] focus:ring-2 focus:ring-[#c8832a]/10 transition-all appearance-none"
                  >
                    <option>Under ₹30,000</option>
                    <option>₹30,000 – ₹60,000</option>
                    <option>₹60,000 – ₹1,00,000</option>
                    <option>₹1,00,000 – ₹2,00,000</option>
                    <option>Above ₹2,00,000</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#7a6a52]">Tell Us More About Your Dream Trip</label>
                  <textarea 
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    placeholder="Any specific destinations, activities, or special occasions you'd like us to plan around?"
                    className="bg-[#faf7f2] border border-[#e8dcc8] p-3 rounded-sm text-sm outline-none focus:border-[#c8832a] focus:ring-2 focus:ring-[#c8832a]/10 transition-all min-h-[120px] resize-none"
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#c8832a] text-white text-xs font-semibold uppercase tracking-widest rounded-sm hover:bg-[#8a5a1a] transition-all disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending…' : 'Send Enquiry →'}
                </button>

                <p className="text-[10px] text-[#7a6a52] text-center italic">* Required fields. We respect your privacy and will never spam you.</p>

                {success && (
                  <div className="p-4 bg-green-50 border border-green-200 text-green-700 text-sm rounded-sm text-center animate-in fade-in zoom-in duration-300">
                    ✅ Thank you! Your enquiry has been received. Our team will contact you within 24 hours.
                  </div>
                )}

                {error && (
                  <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-sm rounded-sm text-center animate-in fade-in zoom-in duration-300">
                    ❌ {error}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
