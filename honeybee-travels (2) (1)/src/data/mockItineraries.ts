import { Itinerary } from '../pages/Planner';

export const LOCAL_ITINERARIES: Record<string, Itinerary> = {
  "japan": {
    destination: "Japan (Tokyo & Kyoto)",
    days: 7,
    plan: [
      {
        day: 1,
        places: ["Shinjuku Gyoen National Garden", "Meiji Jingu Shrine", "Shibuya Crossing"],
        activities: ["Walking tour of Harajuku", "Observation deck at Tokyo Metropolitan Govt Building", "Shopping in Shibuya"],
        food: ["Ichiran Ramen", "Street food in Takeshita Street", "Shibuya Sky bar drinks"]
      },
      {
        day: 2,
        places: ["Senso-ji Temple", "Tokyo Skytree", "Akihabara Electric Town"],
        activities: ["Traditional tea ceremony", "Exploring anime shops", "Sumida River cruise"],
        food: ["Asakusa Unagi", "Maid Cafe experience", "Izakaya dinner in Ueno"]
      },
      {
        day: 3,
        places: ["Tsukiji Outer Market", "Ginza District", "TeamLab Borderless"],
        activities: ["Sushi making class", "Digital art immersion", "Luxury window shopping"],
        food: ["Fresh Sashimi breakfast", "Michelin-starred Tempura", "Ginza cocktail bars"]
      },
      {
        day: 4,
        places: ["Fushimi Inari Shrine", "Kiyomizu-dera Temple", "Gion District"],
        activities: ["Hiking through 10,000 Torii gates", "Geisha spotting in Gion", "Sunset at Kiyomizu-dera"],
        food: ["Kyoto Kaiseki dinner", "Matcha soft serve", "Yudofu (Tofu hot pot)"]
      },
      {
        day: 5,
        places: ["Arashiyama Bamboo Grove", "Tenryu-ji Temple", "Iwatayama Monkey Park"],
        activities: ["Bamboo forest walk", "Feeding snow monkeys", "Saga Scenic Railway ride"],
        food: ["Arashiyama Yoshimura Soba", "Dango street snacks", "River-view dining"]
      },
      {
        day: 6,
        places: ["Nara Park", "Todai-ji Temple", "Kasuga Taisha"],
        activities: ["Feeding friendly deer", "Seeing the Great Buddha", "Lantern walk"],
        food: ["Nara Mochi", "Kakinoha-zushi (persimmon leaf sushi)", "Traditional tea house"]
      },
      {
        day: 7,
        places: ["Osaka Castle", "Dotonbori", "Umeda Sky Building"],
        activities: ["Castle tour", "Street food crawl", "Final souvenir shopping"],
        food: ["Takoyaki", "Okonomiyaki", "Kushikatsu"]
      }
    ]
  },
  "france": {
    destination: "France (Paris & Riviera)",
    days: 7,
    plan: [
      {
        day: 1,
        places: ["Eiffel Tower", "Champ de Mars", "Trocadéro"],
        activities: ["Ascending the Eiffel Tower", "Picnic on the lawn", "Seine River evening cruise"],
        food: ["Croissants from a local boulangerie", "Steak Frites", "Macarons from Ladurée"]
      },
      {
        day: 2,
        places: ["Louvre Museum", "Tuileries Garden", "Place de la Concorde"],
        activities: ["Viewing the Mona Lisa", "Strolling the gardens", "Art history tour"],
        food: ["Angelina Hot Chocolate", "Duck Confit", "French Onion Soup"]
      },
      {
        day: 3,
        places: ["Montmartre", "Sacré-Cœur Basilica", "Place du Tertre"],
        activities: ["Artist square visit", "Panoramic city views", "Walking tour of Amélie locations"],
        food: ["Crepes from street vendors", "Coq au Vin", "Local Montmartre wine"]
      },
      {
        day: 4,
        places: ["Palace of Versailles", "The Gardens", "The Trianon"],
        activities: ["Hall of Mirrors tour", "Biking in the gardens", "Musical Fountains show"],
        food: ["Lunch at Ore by Alain Ducasse", "Picnic by the Grand Canal", "Gourmet pastries"]
      },
      {
        day: 5,
        places: ["Nice Old Town", "Promenade des Anglais", "Castle Hill"],
        activities: ["Beach relaxation", "Flower market visit", "Sunset hike"],
        food: ["Socca (chickpea pancake)", "Salade Niçoise", "Gelato at Fenocchio"]
      },
      {
        day: 6,
        places: ["Monaco", "Monte Carlo Casino", "Prince's Palace"],
        activities: ["Watching the changing of the guard", "Casino visit", "Formula 1 track walk"],
        food: ["Mediterranean seafood", "Fine dining in Monte Carlo", "Local Barbajuans"]
      },
      {
        day: 7,
        places: ["Cannes", "La Croisette", "Îles de Lérins"],
        activities: ["Red carpet photo op", "Boat trip to the islands", "Luxury shopping"],
        food: ["Bouillabaisse", "Rosé wine tasting", "Provencal tartlets"]
      }
    ]
  },
  "switzerland": {
    destination: "Switzerland (Alps & Lakes)",
    days: 5,
    plan: [
      {
        day: 1,
        places: ["Zurich Old Town", "Lake Zurich", "Bahnhofstrasse"],
        activities: ["Walking tour of Limmat river", "Boat cruise", "Chocolate tasting"],
        food: ["Zürcher Geschnetzeltes", "Swiss Fondue", "Sprüngli chocolates"]
      },
      {
        day: 2,
        places: ["Lucerne Chapel Bridge", "Mount Pilatus", "Lion Monument"],
        activities: ["World's steepest cogwheel railway", "Lake Lucerne cruise", "Old town exploration"],
        food: ["Luzerner Chügelipastete", "Alpine cheese platter", "Swiss beer"]
      },
      {
        day: 3,
        places: ["Interlaken", "Harder Kulm", "Lake Brienz"],
        activities: ["Paragliding over the Alps", "Funicular ride for views", "Turquoise water boat trip"],
        food: ["Rösti with fried egg", "Raclette", "Local mountain trout"]
      },
      {
        day: 4,
        places: ["Jungfraujoch", "Ice Palace", "Sphinx Observatory"],
        activities: ["Train to the Top of Europe", "Walking on a glacier", "Snow fun park"],
        food: ["Highest altitude Indian buffet", "Hot chocolate at the top", "Swiss army chocolate"]
      },
      {
        day: 5,
        places: ["Grindelwald First", "Bachalpsee Lake", "Cliff Walk"],
        activities: ["First Flyer zip line", "Hiking to the alpine lake", "Adventure park"],
        food: ["Mountain hut lunch", "Apple strudel", "Swiss herbal tea"]
      }
    ]
  },
  "bali": {
    destination: "Bali, Indonesia",
    days: 5,
    plan: [
      {
        day: 1,
        places: ["Ubud Monkey Forest", "Ubud Art Market", "Tegalalang Rice Terrace"],
        activities: ["Feeding monkeys", "Bargain shopping", "Rice terrace swing"],
        food: ["Babi Guling (Suckling pig)", "Nasi Campur", "Fresh coconut water"]
      },
      {
        day: 2,
        places: ["Tirta Empul Temple", "Mount Batur", "Coffee Plantation"],
        activities: ["Holy water purification", "Volcano viewing", "Luwak coffee tasting"],
        food: ["Crispy Duck (Bebek Bengil)", "Satay Lilit", "Balinese sweets"]
      },
      {
        day: 3,
        places: ["Seminyak Beach", "Potato Head Beach Club", "Petitenget Temple"],
        activities: ["Surfing lessons", "Sunset beach clubbing", "Spa and massage"],
        food: ["Seafood grill on the beach", "Modern Balinese fusion", "Tropical fruit platters"]
      },
      {
        day: 4,
        places: ["Nusa Penida", "Kelingking Beach", "Broken Beach"],
        activities: ["Speedboat trip", "Cliff photography", "Snorkeling with Manta Rays"],
        food: ["Local Warung lunch", "Ikan Bakar (Grilled fish)", "Mango sticky rice"]
      },
      {
        day: 5,
        places: ["Uluwatu Temple", "Padang Padang Beach", "Jimbaran Bay"],
        activities: ["Kecak Fire Dance", "Sunbathing", "Farewell seafood dinner"],
        food: ["Jimbaran seafood feast", "Sambal Matah dishes", "Arak cocktails"]
      }
    ]
  },
  "kerala": {
    destination: "Kerala, India (God's Own Country)",
    days: 5,
    plan: [
      {
        day: 1,
        places: ["Munnar Tea Gardens", "Tea Museum", "Mattupetty Dam"],
        activities: ["Tea plantation walk", "Boating in the reservoir", "Elephant sightings"],
        food: ["Kerala Sadya on banana leaf", "Appam with Stew", "Masala Chai"]
      },
      {
        day: 2,
        places: ["Eravikulam National Park", "Anamudi Peak", "Lakkam Waterfalls"],
        activities: ["Spotting Nilgiri Tahr", "Nature photography", "Waterfall dip"],
        food: ["Malabar Parotta", "Beef/Veg Fry", "Banana Fritters (Pazham Pori)"]
      },
      {
        day: 3,
        places: ["Thekkady (Periyar)", "Periyar Lake", "Spice Plantations"],
        activities: ["Boating safari", "Elephant shower", "Spice garden tour"],
        food: ["Karimeen Pollichathu (Pearl Spot fish)", "Puttu and Kadala Curry", "Spiced tea"]
      },
      {
        day: 4,
        places: ["Alleppey Backwaters", "Houseboat Stay", "Vembanad Lake"],
        activities: ["Overnight houseboat cruise", "Village life observation", "Sunset over the paddy fields"],
        food: ["Toddy shop snacks", "Fresh backwater prawns", "Kerala Red Rice"]
      },
      {
        day: 5,
        places: ["Fort Kochi", "Chinese Fishing Nets", "Jew Town"],
        activities: ["Historical walking tour", "Watching Kathakali performance", "Antique shopping"],
        food: ["Kochi Seafood", "Fusion Cafe food", "Filter Coffee"]
      }
    ]
  },
  "rajasthan": {
    destination: "Rajasthan, India (Land of Kings)",
    days: 6,
    plan: [
      {
        day: 1,
        places: ["Jaipur City Palace", "Hawa Mahal", "Jantar Mantar"],
        activities: ["Royal museum tour", "Photography at the Pink City", "Astronomy exploration"],
        food: ["Piaz Kachori", "Lassi at Lassiwala", "Rajasthani Thali"]
      },
      {
        day: 2,
        places: ["Amer Fort", "Nahargarh Fort", "Jal Mahal"],
        activities: ["Elephant/Jeep ride to fort", "Sunset views over Jaipur", "Lake photography"],
        food: ["Laal Maas (Mutton curry)", "Gatte ki Sabzi", "Dal Baati Churma"]
      },
      {
        day: 3,
        places: ["Pushkar Lake", "Brahma Temple", "Pushkar Markets"],
        activities: ["Holy dip in the lake", "Evening Aarti", "Hippie market shopping"],
        food: ["Malpua", "Rabri", "Israeli Falafel (Pushkar style)"]
      },
      {
        day: 4,
        places: ["Udaipur City Palace", "Lake Pichola", "Jag Mandir"],
        activities: ["Palace tour", "Boat ride at sunset", "Island palace visit"],
        food: ["Ker Sangri", "Udaipur Lake-view dinner", "Mewari cuisine"]
      },
      {
        day: 5,
        places: ["Saheliyon-ki-Bari", "Fateh Sagar Lake", "Bagore Ki Haveli"],
        activities: ["Garden walk", "Speed boating", "Cultural folk dance show"],
        food: ["Kulhad Coffee", "Mirchi Bada", "Ghevar"]
      },
      {
        day: 6,
        places: ["Chittorgarh Fort", "Vijay Stambh", "Kirti Stambh"],
        activities: ["Exploring India's largest fort", "History storytelling tour", "Final shopping"],
        food: ["Local Rajasthani snacks", "Bajra Roti", "Churma Ladoo"]
      }
    ]
  },
  "ladakh": {
    destination: "Ladakh, India (The Last Shangri-La)",
    days: 6,
    plan: [
      {
        day: 1,
        places: ["Leh Market", "Shanti Stupa", "Leh Palace"],
        activities: ["Acclimatization walk", "Sunset views", "Historical exploration"],
        food: ["Thukpa", "Skyu", "Butter Tea"]
      },
      {
        day: 2,
        places: ["Magnetic Hill", "Sangam (Indus & Zanskar)", "Pathar Sahib Gurudwara"],
        activities: ["Experiencing gravity-defying hill", "River confluence viewing", "Spiritual visit"],
        food: ["Langar at Gurudwara", "Momos", "Apricot Juice"]
      },
      {
        day: 3,
        places: ["Khardung La Pass", "Nubra Valley", "Diskit Monastery"],
        activities: ["Driving on one of the world's highest roads", "Camel safari in Hunder", "Giant Buddha statue visit"],
        food: ["Maggi at high altitude", "Ladakhi bread", "Yak cheese"]
      },
      {
        day: 4,
        places: ["Pangong Tso Lake", "Spangmik Village"],
        activities: ["Lakeside camping", "Stargazing", "Photography of blue waters"],
        food: ["Campfire dinner", "Instant noodles", "Local stew"]
      },
      {
        day: 5,
        places: ["Hemis Monastery", "Thiksey Monastery", "Shey Palace"],
        activities: ["Monastery tour", "Morning prayer session", "Ancient ruins visit"],
        food: ["Mokthuk", "Tigmo", "Sea Buckthorn juice"]
      },
      {
        day: 6,
        places: ["Leh Main Bazaar", "Hall of Fame"],
        activities: ["Souvenir shopping", "War memorial visit", "Departure prep"],
        food: ["Final Ladakhi feast", "German Bakery treats", "Kahwa"]
      }
    ]
  },
  "goa": {
    destination: "Goa, India (Sunshine State)",
    days: 4,
    plan: [
      {
        day: 1,
        places: ["Baga Beach", "Calangute Beach", "Anjuna Flea Market"],
        activities: ["Water sports (Parasailing)", "Beach shack relaxation", "Shopping"],
        food: ["Fish Recheado", "Goan Prawn Curry", "Feni cocktails"]
      },
      {
        day: 2,
        places: ["Aguada Fort", "Sinquerim Beach", "Candolim"],
        activities: ["Historical fort tour", "Dolphin spotting boat trip", "Nightlife at Tito's Lane"],
        food: ["Bebinca", "Pork Vindaloo", "Kingfish fry"]
      },
      {
        day: 3,
        places: ["Old Goa Churches", "Mangueshi Temple", "Panjim Latin Quarter"],
        activities: ["Basilica of Bom Jesus visit", "Heritage walk in Fontainhas", "Casino cruise evening"],
        food: ["Goan Thali", "Chouriço (Goan sausage)", "Cashew juice"]
      },
      {
        day: 4,
        places: ["Dudhsagar Falls", "Spice Plantation", "Colva Beach"],
        activities: ["Jeep safari to waterfalls", "Spice farm lunch", "Sunset at South Goa"],
        food: ["Traditional Hindu Goan meal", "Xacuti", "Coconut sorbet"]
      }
    ]
  }
};
