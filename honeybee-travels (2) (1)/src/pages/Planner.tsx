import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Calendar, Wallet, Compass, Loader2, Sparkles, Map as MapIcon, ChevronRight, Utensils, Activity, Bot } from 'lucide-react';
import { cn } from '@/lib/utils';
import { LOCAL_ITINERARIES } from '../data/mockItineraries';

export interface ItineraryDay {
  day: number;
  places: string[];
  activities: string[];
  food: string[];
}

export interface Itinerary {
  destination: string;
  days: number;
  plan: ItineraryDay[];
}

const QUICK_DESTINATIONS = [
  { id: 'japan', label: 'Japan', icon: '🇯🇵' },
  { id: 'france', label: 'France', icon: '🇫🇷' },
  { id: 'switzerland', label: 'Switzerland', icon: '🇨🇭' },
  { id: 'bali', label: 'Bali', icon: '🇮🇩' },
  { id: 'kerala', label: 'Kerala', icon: '🌴' },
  { id: 'rajasthan', label: 'Rajasthan', icon: '🏰' },
  { id: 'ladakh', label: 'Ladakh', icon: '🏔️' },
  { id: 'goa', label: 'Goa', icon: '🏖️' },
];

const INTERESTS = [
  { id: 'beach', label: 'Beach', icon: '🏖️' },
  { id: 'mountains', label: 'Mountains', icon: '⛰️' },
  { id: 'adventure', label: 'Adventure', icon: '🧗' },
  { id: 'food', label: 'Food & Culture', icon: '🍜' },
  { id: 'history', label: 'History', icon: '🏛️' },
  { id: 'nature', label: 'Nature', icon: '🌿' },
];

export default function Planner() {
  const [destination, setDestination] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [budget, setBudget] = useState('50000');
  const [days, setDays] = useState('3');
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [itinerary, setItinerary] = useState<Itinerary | null>(null);

  const toggleInterest = (id: string) => {
    setSelectedInterests(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const generatePlan = async () => {
    if (!name || !email) {
      alert("Please enter your name and email to continue.");
      return;
    }
    setIsLoading(true);
    setItinerary(null);

    // Check for local itinerary match first
    const destKey = destination.toLowerCase().trim();
    if (LOCAL_ITINERARIES[destKey]) {
      // Simulate a small delay for "AI thinking"
      await new Promise(resolve => setTimeout(resolve, 1500));
      setItinerary(LOCAL_ITINERARIES[destKey]);
      setIsLoading(false);
      return;
    }

    try {
      const payload = {
        name,
        email,
        destination: destination || 'a surprise destination',
        budget: parseInt(budget) || 0,
        days: parseInt(days),
        interests: selectedInterests,
      };

      const response = await fetch('https://junaid-n8n.app.n8n.cloud/webhook/plan-trip', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        if (response.status === 500) {
          throw new Error("n8n Server Error (500): This usually means your n8n workflow is crashing or the 'Test Webhook' is not actively listening. If your workflow is active, try using the Production URL (remove '-test' from the URL).");
        }
        throw new Error(`Webhook failed with status: ${response.status}`);
      }

      const rawData = await response.json();
      console.log("Webhook raw response:", rawData);
      
      // n8n often returns an array of objects, or sometimes wraps it in a 'data' property
      let data = Array.isArray(rawData) ? rawData[0] : rawData;
      
      // Check if it's wrapped in a 'data' or 'body' property (common in some webhook setups)
      if (data && !data.plan && data.data) data = data.data;
      if (data && !data.plan && data.body) data = data.body;

      // If data is a string, try to parse it
      if (typeof data === 'string') {
        try {
          data = JSON.parse(data);
        } catch (e) {
          console.error("Failed to parse data string:", data);
        }
      }

      // If plan is a string, try to parse it
      if (data && typeof data.plan === 'string') {
        try {
          data.plan = JSON.parse(data.plan);
        } catch (e) {
          console.error("Failed to parse plan string:", data.plan);
        }
      }

      // Basic validation to ensure we have a plan
      if (data && data.plan && Array.isArray(data.plan)) {
        setItinerary(data as Itinerary);
      } else {
        console.error("Invalid itinerary structure:", data);
        throw new Error("Webhook response did not contain a valid itinerary plan. Check console for details.");
      }
    } catch (error) {
      console.error("Planner error:", error);
      alert("Failed to generate plan via webhook. Make sure the n8n workflow is active and returns the correct JSON structure.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#faf7f2] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#c8832a] text-[13px] font-semibold uppercase tracking-[0.4em] mb-6"
          >
            AI Travel Assistant
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[#1a1208] font-serif text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight tracking-tight font-bold"
          >
            Plan Your <br />
            <em className="text-[#c8832a] not-italic italic font-light tracking-normal">Dream Trip</em>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[#7a6a52] text-xl max-w-2xl mx-auto font-light leading-relaxed"
          >
            Tell us your preferences and let our AI craft the perfect day-by-day itinerary just for you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Input Section */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white p-8 rounded-2xl border border-[#e8dcc8] shadow-xl">
              <h2 className="font-serif text-2xl text-[#1a1208] mb-6 flex items-center gap-2">
                <Compass className="w-6 h-6 text-[#c8832a]" /> Preferences
              </h2>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#7a6a52]">Your Name</label>
                    <input 
                      type="text" 
                      required
                      value={name}
                      onChange={e => setName(e.target.value)}
                      placeholder="John Doe"
                      className="w-full bg-[#faf7f2] border border-[#e8dcc8] p-3 rounded-xl text-sm outline-none focus:border-[#c8832a] transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#7a6a52]">Email Address</label>
                    <input 
                      type="email" 
                      required
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="john@example.com"
                      className="w-full bg-[#faf7f2] border border-[#e8dcc8] p-3 rounded-xl text-sm outline-none focus:border-[#c8832a] transition-all"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#7a6a52]">Quick Select Destination</label>
                  <div className="flex flex-wrap gap-2">
                    {QUICK_DESTINATIONS.map(dest => (
                      <button
                        key={dest.id}
                        onClick={() => setDestination(dest.label)}
                        className={cn(
                          "px-3 py-1.5 rounded-full text-xs font-medium transition-all border",
                          destination === dest.label 
                            ? "bg-[#c8832a] text-white border-[#c8832a]" 
                            : "bg-white text-[#7a6a52] border-[#e8dcc8] hover:border-[#c8832a]"
                        )}
                      >
                        {dest.icon} {dest.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#7a6a52]">Destination (Optional)</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#c8832a]" />
                    <input 
                      type="text" 
                      value={destination}
                      onChange={e => setDestination(e.target.value)}
                      placeholder="e.g. Kyoto, Japan"
                      className="w-full bg-[#faf7f2] border border-[#e8dcc8] p-3 pl-10 rounded-xl text-sm outline-none focus:border-[#c8832a] transition-all"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#7a6a52]">Budget (₹)</label>
                  <div className="relative">
                    <Wallet className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#c8832a]" />
                    <input 
                      type="number"
                      value={budget}
                      onChange={e => setBudget(e.target.value)}
                      placeholder="e.g. 75000"
                      className="w-full bg-[#faf7f2] border border-[#e8dcc8] p-3 pl-10 rounded-xl text-sm outline-none focus:border-[#c8832a] transition-all"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#7a6a52]">Number of Days</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#c8832a]" />
                    <select 
                      value={days}
                      onChange={e => setDays(e.target.value)}
                      className="w-full bg-[#faf7f2] border border-[#e8dcc8] p-3 pl-10 rounded-xl text-sm outline-none focus:border-[#c8832a] transition-all appearance-none"
                    >
                      {[1,2,3,4,5,6,7,10,14].map(d => (
                        <option key={d} value={d}>{d} Days</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#7a6a52]">Interests</label>
                  <div className="grid grid-cols-2 gap-2">
                    {INTERESTS.map(interest => (
                      <button
                        key={interest.id}
                        onClick={() => toggleInterest(interest.id)}
                        className={cn(
                          "p-3 rounded-xl text-xs flex items-center gap-2 border transition-all",
                          selectedInterests.includes(interest.id)
                            ? "bg-[#c8832a] text-white border-[#c8832a]"
                            : "bg-[#faf7f2] text-[#7a6a52] border-[#e8dcc8] hover:border-[#c8832a]"
                        )}
                      >
                        <span>{interest.icon}</span> {interest.label}
                      </button>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={generatePlan}
                  disabled={isLoading}
                  className="w-full py-4 bg-[#1a1208] text-white text-xs font-semibold uppercase tracking-widest rounded-xl hover:bg-[#c8832a] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
                  {isLoading ? 'Generating Plan...' : 'Generate Itinerary'}
                </button>
              </div>
            </div>
          </div>

          {/* Response Section */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {isLoading ? (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-white p-12 rounded-2xl border border-[#e8dcc8] shadow-xl flex flex-col items-center justify-center text-center h-full min-h-[400px]"
                >
                  <div className="relative w-20 h-20 mb-6">
                    <div className="absolute inset-0 border-4 border-[#e8dcc8] rounded-full" />
                    <div className="absolute inset-0 border-4 border-[#c8832a] rounded-full border-t-transparent animate-spin" />
                    <Bot className="absolute inset-0 m-auto w-8 h-8 text-[#c8832a]" />
                  </div>
                  <h3 className="font-serif text-2xl text-[#1a1208] mb-2">Crafting Your Journey</h3>
                  <p className="text-[#7a6a52] max-w-xs">Our AI is analyzing thousands of destinations to find the perfect match for you...</p>
                </motion.div>
              ) : itinerary ? (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-8"
                >
                  <div className="bg-[#1a1208] p-8 rounded-2xl text-white flex items-center justify-between">
                    <div>
                      <h2 className="font-serif text-3xl mb-1">{itinerary.destination}</h2>
                      <p className="text-white/50 text-sm">{itinerary.days} Days Custom Itinerary</p>
                    </div>
                    <button 
                      onClick={generatePlan}
                      className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                      title="Regenerate"
                    >
                      <Sparkles className="w-5 h-5 text-[#e8a84a]" />
                    </button>
                  </div>

                  {/* Day Cards */}
                  <div className="space-y-6">
                    {itinerary.plan.map((day, idx) => (
                      <motion.div 
                        key={day.day}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white rounded-2xl border border-[#e8dcc8] shadow-lg overflow-hidden"
                      >
                        <div className="bg-[#faf7f2] p-4 border-b border-[#e8dcc8] flex items-center justify-between">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-[#c8832a]">Day {day.day}</span>
                          <ChevronRight className="w-4 h-4 text-[#e8dcc8]" />
                        </div>
                        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                          <div className="space-y-3">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-[#1a1208] flex items-center gap-2">
                              <MapIcon className="w-3 h-3 text-[#c8832a]" /> Places to Visit
                            </h4>
                            <ul className="space-y-2">
                              {day.places.map((p, i) => (
                                <li key={i} className="text-sm text-[#7a6a52] flex items-start gap-2">
                                  <span className="w-1 h-1 bg-[#c8832a] rounded-full mt-2 shrink-0" /> {p}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="space-y-3">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-[#1a1208] flex items-center gap-2">
                              <Activity className="w-3 h-3 text-[#c8832a]" /> Activities
                            </h4>
                            <ul className="space-y-2">
                              {day.activities.map((a, i) => (
                                <li key={i} className="text-sm text-[#7a6a52] flex items-start gap-2">
                                  <span className="w-1 h-1 bg-[#c8832a] rounded-full mt-2 shrink-0" /> {a}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="space-y-3">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-[#1a1208] flex items-center gap-2">
                              <Utensils className="w-3 h-3 text-[#c8832a]" /> Food & Dining
                            </h4>
                            <ul className="space-y-2">
                              {day.food.map((f, i) => (
                                <li key={i} className="text-sm text-[#7a6a52] flex items-start gap-2">
                                  <span className="w-1 h-1 bg-[#c8832a] rounded-full mt-2 shrink-0" /> {f}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Mock Map Section */}
                  <div className="bg-white p-8 rounded-2xl border border-[#e8dcc8] shadow-xl">
                    <h3 className="font-serif text-2xl text-[#1a1208] mb-6 flex items-center gap-2">
                      <MapIcon className="w-6 h-6 text-[#c8832a]" /> Suggested Route
                    </h3>
                    <div className="relative aspect-video bg-[#faf7f2] rounded-xl border border-dashed border-[#e8dcc8] flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/gray-geology.png')]" />
                      <div className="relative flex flex-col items-center gap-4">
                        <div className="flex items-center gap-8">
                          <div className="w-12 h-12 bg-white border-2 border-[#c8832a] rounded-full flex items-center justify-center font-bold text-[#c8832a]">A</div>
                          <div className="w-24 h-px bg-dashed border-t-2 border-dashed border-[#c8832a]" />
                          <div className="w-12 h-12 bg-white border-2 border-[#c8832a] rounded-full flex items-center justify-center font-bold text-[#c8832a]">B</div>
                          <div className="w-24 h-px bg-dashed border-t-2 border-dashed border-[#c8832a]" />
                          <div className="w-12 h-12 bg-white border-2 border-[#c8832a] rounded-full flex items-center justify-center font-bold text-[#c8832a]">C</div>
                        </div>
                        <p className="text-xs text-[#7a6a52] italic">Interactive map visualization would be embedded here</p>
                      </div>
                    </div>
                    <div className="mt-6 flex justify-end gap-4">
                      <button className="px-6 py-2 border border-[#c8832a] text-[#c8832a] text-[10px] font-bold uppercase tracking-widest rounded-lg hover:bg-[#c8832a] hover:text-white transition-all">
                        Export PDF
                      </button>
                      <button className="px-6 py-2 bg-[#c8832a] text-white text-[10px] font-bold uppercase tracking-widest rounded-lg hover:bg-[#8a5a1a] transition-all">
                        Save Itinerary
                      </button>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div className="bg-white/50 p-12 rounded-2xl border border-dashed border-[#e8dcc8] flex flex-col items-center justify-center text-center h-full min-h-[400px]">
                  <Sparkles className="w-12 h-12 text-[#e8dcc8] mb-4" />
                  <h3 className="font-serif text-2xl text-[#1a1208] mb-2">Ready to Explore?</h3>
                  <p className="text-[#7a6a52] max-w-xs">Fill in your preferences on the left to generate a personalized travel plan.</p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
