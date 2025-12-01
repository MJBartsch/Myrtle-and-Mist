

import { Product, PillarData, Article, MoonPhaseInfo, LightZone } from './types';

export const MIST_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Coastal Pine Candle",
    price: 28,
    image: "https://images.unsplash.com/photo-1602523961358-f9f03dd557db?q=80&w=1000&auto=format&fit=crop",
    category: "Home Fragrance",
    description: "Notes of sea salt, pine needle, and driftwood.",
    affiliateUrl: "#"
  },
  {
    id: 2,
    name: "Lavender Mist Linen Spray",
    price: 22,
    image: "https://images.unsplash.com/photo-1595867275556-912534f3d1df?q=80&w=1000&auto=format&fit=crop",
    category: "Wellness",
    description: "Organic lavender distillate to calm the mind before sleep.",
    affiliateUrl: "#"
  },
  {
    id: 3,
    name: "Ceramic Tea Set",
    price: 65,
    image: "https://images.unsplash.com/photo-1565126880099-231cb87a55e2?q=80&w=1000&auto=format&fit=crop",
    category: "Home Goods",
    description: "Hand-thrown ceramic teapot with two matching cups.",
    affiliateUrl: "#"
  },
  {
    id: 4,
    name: "Eucalyptus Bath Soak",
    price: 34,
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?q=80&w=1000&auto=format&fit=crop",
    category: "Body Care",
    description: "Mineral-rich salts infused with eucalyptus and peppermint.",
    affiliateUrl: "#"
  },
  {
    id: 5,
    name: "Moonstone Crystal",
    price: 15,
    image: "https://images.unsplash.com/photo-1610449909772-2303c73448a5?q=80&w=800",
    category: "Crystals",
    description: "A stone of new beginnings. Promotes intuition and empathy.",
    affiliateUrl: "#"
  },
  {
    id: 6,
    name: "Essential Oil Blend",
    price: 24,
    image: "https://images.unsplash.com/photo-1608571424266-edeb294db33e?q=80&w=800",
    category: "Aromatherapy",
    description: "Custom blend for grounding and centering.",
    affiliateUrl: "#"
  }
];

export const MYRTLE_PRODUCTS: Product[] = [
  {
    id: 101,
    name: "Monstera Deliciosa",
    price: 45,
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=1000&auto=format&fit=crop",
    category: "Live Plants",
    description: "The classic Swiss Cheese plant. Requires bright, indirect light.",
    affiliateUrl: "#"
  },
  {
    id: 102,
    name: "Terracotta Pot (10\")",
    price: 18,
    image: "https://images.unsplash.com/photo-1459156212016-c812468e2115?q=80&w=1000&auto=format&fit=crop",
    category: "Planters",
    description: "Breathable clay pot, perfect for aroids and succulents.",
    affiliateUrl: "#"
  },
  {
    id: 103,
    name: "Brass Misting Spray",
    price: 32,
    image: "https://images.unsplash.com/photo-1622226830588-4303328e370a?q=80&w=1000&auto=format&fit=crop",
    category: "Tools",
    description: "Solid brass mister for humidity-loving tropicals.",
    affiliateUrl: "#"
  },
  {
    id: 104,
    name: "Fiddle Leaf Fig",
    price: 85,
    image: "https://images.unsplash.com/photo-1597054707621-397441865922?q=80&w=1000&auto=format&fit=crop",
    category: "Live Plants",
    description: "Large, sculptural tree. A statement piece for any room.",
    affiliateUrl: "#"
  },
  {
    id: 105,
    name: "LED Grow Light Bulb",
    price: 35,
    image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=800",
    category: "Lighting",
    description: "Full spectrum bulb that fits standard lamps.",
    affiliateUrl: "#"
  },
  {
    id: 106,
    name: "Pruning Shears",
    price: 22,
    image: "https://images.unsplash.com/photo-1416879895648-5b605060d636?q=80&w=800",
    category: "Tools",
    description: "Carbon steel blades for clean, healthy cuts.",
    affiliateUrl: "#"
  },
  {
    id: 107,
    name: "Lunar Planting Calendar",
    price: 15,
    image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?q=80&w=800",
    category: "Books",
    description: "Guide to planting by the phases of the moon.",
    affiliateUrl: "#"
  }
];

export const NAV_LINKS = [
  { name: 'The Guide', href: '#', view: 'pillar', dropdownKey: 'guide' },
  { name: 'Journal', href: '#journal', view: 'home', dropdownKey: 'journal' },
  { name: 'Tools', href: '#tools', view: 'home', dropdownKey: null },
  { name: 'Gear', href: '#gear', view: 'home', dropdownKey: null },
  { name: 'Assistant', href: '#muse', view: 'home', dropdownKey: null },
];

export const THEME_CONTENT = {
  myrtle: {
    tagline: "Growth • Sunlight • Structure",
    headline: "Bring Life Inside",
    subheadline: "Everything you need to cultivate your own indoor jungle. Scientific plant care meets modern design.",
    cta: "Shop Botanicals",
    heroImage: "https://picsum.photos/id/106/1920/1080", 
    aboutHeadline: "Rooted in Science, Grown with Love",
    aboutText: "Myrtle is dedicated to the biology of plants. We provide healthy, acclimated specimens and the precise tools you need to help them thrive.",
    assistantName: "Myrtle Bot",
    assistantRole: "Botanical Specialist"
  },
  mist: {
    tagline: "Silence • Balance • Serenity",
    headline: "Breathe in the Silence",
    subheadline: "Curated essentials for a mindful home and a grounded spirit. Discover the art of slow living.",
    cta: "Explore Collection",
    heroImage: "https://picsum.photos/id/10/1920/1080", 
    aboutHeadline: "Born from the Earth, Crafted for the Soul",
    aboutText: "Mist is a sanctuary for the senses. We source ethical botanicals and materials designed to evoke calm and restore balance.",
    assistantName: "Mist Muse",
    assistantRole: "Wellness Companion"
  }
};

export const MEDITATION_QUOTES = {
  myrtle: [
    "Nature does not hurry, yet everything is accomplished. — Lao Tzu",
    "A seed neither fears light nor darkness, but uses both to grow.",
    "Look deep into nature, and then you will understand everything better. — Einstein",
    "To plant a garden is to believe in tomorrow.",
  ],
  mist: [
    "Quiet the mind, and the soul will speak. — Ma Jaya Sati Bhagavati",
    "The way is not in the sky. The way is in the heart. — Buddha",
    "Your calm mind is the ultimate weapon against your challenges.",
    "In the midst of movement and chaos, keep stillness inside of you.",
  ]
};

export const BREATHING_PATTERNS = [
  { name: "Relax (4-7-8)", inhale: 4, hold: 7, exhale: 8, holdEmpty: 0 },
  { name: "Box (4-4-4-4)", inhale: 4, hold: 4, exhale: 4, holdEmpty: 4 },
  { name: "Balance (5-5)", inhale: 5, hold: 0, exhale: 5, holdEmpty: 0 },
];

export const MOON_PHASES: MoonPhaseInfo[] = [
  {
    name: "New Moon",
    myrtleAction: "Sow Above Ground",
    myrtleDesc: "Water pull is rising. Good for planting leafy greens and annuals.",
    mistAction: "Set Intentions",
    mistDesc: "The sky is dark. A time for new beginnings and manifesting seeds of thought.",
    recommendedProductId: 107
  },
  {
    name: "Waxing Crescent",
    myrtleAction: "Graft & Prune",
    myrtleDesc: "Light increases. Sap flow is stimulated. Focus on structural support.",
    mistAction: "Visualization",
    mistDesc: "Energy is building. Visualize your goals taking shape.",
    recommendedProductId: 106
  },
  {
    name: "First Quarter",
    myrtleAction: "Fertilize",
    myrtleDesc: "Peak absorption time. Nutrients are pulled up efficiently.",
    mistAction: "Take Action",
    mistDesc: "Resistance may appear. Push through blocks and commit to the path.",
    recommendedProductId: 102
  },
  {
    name: "Waxing Gibbous",
    myrtleAction: "Repotting",
    myrtleDesc: "High energy for root establishment before the full moon peak.",
    mistAction: "Refinement",
    mistDesc: "Review progress. Edit your life and focus on what is working.",
    recommendedProductId: 102
  },
  {
    name: "Full Moon",
    myrtleAction: "Harvest",
    myrtleDesc: "Moisture content is highest in leaves. Harvest herbs and aromatics now.",
    mistAction: "Release & Celebrate",
    mistDesc: "Illumination. Bring gratitude for abundance and release what doesn't serve.",
    recommendedProductId: 5
  },
  {
    name: "Waning Gibbous",
    myrtleAction: "Prune Fruit Trees",
    myrtleDesc: "Energy moves down to roots. Good for root growth.",
    mistAction: "Gratitude",
    mistDesc: "Share your abundance. A time for giving back.",
    recommendedProductId: 106
  },
  {
    name: "Last Quarter",
    myrtleAction: "Sow Root Crops",
    myrtleDesc: "Gravitational pull is high, light decreases. Plant carrots, onions, potatoes.",
    mistAction: "Forgiveness",
    mistDesc: "Release grudges. Clear the emotional field.",
    recommendedProductId: 4
  },
  {
    name: "Waning Crescent",
    myrtleAction: "Weed & Pest Control",
    myrtleDesc: "Rest period. Remove unwanted growth. Prepare soil.",
    mistAction: "Rest & Restore",
    mistDesc: "Go inward. Recuperate energy before the new cycle begins.",
    recommendedProductId: 2
  }
];

export const LIGHT_ZONES: LightZone[] = [
  {
    minFc: 1000,
    label: "Direct Sun",
    description: "Intense, unfiltered beams. Leaves feel warm to the touch.",
    plants: [
      { name: "Cactus" },
      { name: "Succulents" },
      { name: "Bird of Paradise" },
      { name: "Croton" }
    ],
    recommendedProductId: 102
  },
  {
    minFc: 500,
    label: "Bright Indirect",
    description: "The 'Goldilocks' zone. Casts a sharp shadow, but no direct beams.",
    plants: [
      { name: "Monstera", linkView: 'article', linkId: 'monstera-guide' },
      { name: "Fiddle Leaf Fig" },
      { name: "Alocasia" },
      { name: "Pothos", linkView: 'pillar', linkId: 'genus-pothos' }
    ],
    recommendedProductId: 101
  },
  {
    minFc: 100,
    label: "Medium Light",
    description: "Casts a soft, blurry shadow. Good for maintenance, not rapid growth.",
    plants: [
      { name: "ZZ Plant" },
      { name: "Philodendron", linkView: 'pillar', linkId: 'genus-philodendron' },
      { name: "Dracaena" },
      { name: "Parlor Palm" }
    ],
    recommendedProductId: 103
  },
  {
    minFc: 0,
    label: "Low Light",
    description: "Reading a book is difficult. Survival mode for most plants.",
    plants: [
      { name: "Snake Plant", linkView: 'pillar', linkId: 'genus-sansevieria' },
      { name: "Cast Iron Plant" },
      { name: "Peace Lily" }
    ],
    recommendedProductId: 105
  }
];

// Reusing same IDs for categories across articles for simplicity in filtering
const CAT_PROFILES = 'profiles';
const CAT_TECHNIQUE = 'technique'; // Propagation, Pruning
const CAT_ENV = 'environment'; // Design, Space
const CAT_MIND = 'mindfulness'; // Meditation, Rituals

export const ARTICLES: Article[] = [
  {
    id: 'monstera-guide',
    category: CAT_PROFILES,
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=1200&auto=format&fit=crop',
    relatedProductIds: [101, 102, 103, 106],
    myrtle: {
      title: 'The Ultimate Guide to Monstera Care',
      excerpt: 'From Fenestration to Air Layering: The complete handbook for growing the undisputed King of Aroids.',
      quickOverview: [
        { label: 'Light', value: 'Bright Indirect' },
        { label: 'Water', value: 'Soak & Dry' },
        { label: 'Difficulty', value: 'Moderate' },
        { label: 'Toxicity', value: 'Yes (Pets)' },
      ],
      content: `
        <p class="lead text-xl mb-8 leading-relaxed">There are few plants as iconic as the <a href="#">Monstera deliciosa</a>. With its massive, glossy leaves and signature splits (fenestrations), it has become the undisputed queen of the indoor jungle. Native to the tropical rainforests of <a href="#">Southern Mexico</a> and Central America, the Monstera is often called the "Swiss Cheese Plant" or "Split-Leaf Philodendron" (though, botanically speaking, it is not a true philodendron).</p>

        <p class="mb-8">Whether you are a beginner looking to buy your first plant or an enthusiast hoping to master air layering, this guide covers everything you need to know.</p>

        <h2 id="care-basics" class="text-2xl font-bold mt-10 mb-6">Part 1: The Basics of Care</h2>

        <!-- Interactive Care Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div class="p-6 rounded-lg border border-myrtle-accent/20 bg-myrtle-secondary/30 backdrop-blur-sm hover:-translate-y-1 transition-transform">
             <div class="text-myrtle-accent mb-2">
               <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
             </div>
             <h4 class="font-bold text-myrtle-text text-sm uppercase tracking-wide mb-1">Light</h4>
             <p class="text-xs text-gray-600">Bright indirect. East-facing window is ideal. No light = No holes.</p>
          </div>
          <div class="p-6 rounded-lg border border-myrtle-accent/20 bg-myrtle-secondary/30 backdrop-blur-sm hover:-translate-y-1 transition-transform">
             <div class="text-myrtle-accent mb-2">
               <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
             </div>
             <h4 class="font-bold text-myrtle-text text-sm uppercase tracking-wide mb-1">Water</h4>
             <p class="text-xs text-gray-600">"Soak and Dry" method. Allow top 2-3 inches to dry completely.</p>
          </div>
          <div class="p-6 rounded-lg border border-myrtle-accent/20 bg-myrtle-secondary/30 backdrop-blur-sm hover:-translate-y-1 transition-transform">
             <div class="text-myrtle-accent mb-2">
               <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>
             </div>
             <h4 class="font-bold text-myrtle-text text-sm uppercase tracking-wide mb-1">Humidity</h4>
             <p class="text-xs text-gray-600">Thrives in 60%+. Brown crispy tips usually mean dry air.</p>
          </div>
        </div>

        <h3 class="text-xl font-bold mb-4">The "Split" Secret</h3>
        <p class="mb-4 text-gray-700">Fenestrations (holes) are the plant's way of letting light pass through to lower leaves in the canopy. If your Monstera produces only small, heart-shaped leaves with no holes, it is <strong>starving for light</strong>. No light = no need for holes.</p>

        <h3 class="text-xl font-bold mb-4 mt-8">Soil Recipe: The Aroid Mix</h3>
        <p class="mb-4 text-gray-700">Standard potting soil is often too dense. You need a chunky mix that allows oxygen to reach the roots.</p>
        <ul class="list-disc pl-5 mb-6 text-gray-700 space-y-1">
            <li>40% Potting Soil</li>
            <li>30% Orchid Bark</li>
            <li>20% Perlite</li>
            <li>10% Worm Castings</li>
        </ul>

        <!-- Embedded Product Card (Myrtle) -->
        <div class="my-8 group relative overflow-hidden rounded-xl border border-myrtle-accent/20 bg-white/70 backdrop-blur-md p-6 transition-all hover:shadow-xl hover:-translate-y-1 sm:flex sm:items-center sm:gap-6 hover:border-myrtle-accent/40">
          <div class="relative h-32 w-full shrink-0 overflow-hidden rounded-lg sm:w-32 shadow-sm border border-white/50">
            <img src="https://images.unsplash.com/photo-1459156212016-c812468e2115?q=80&w=400&auto=format&fit=crop" alt="Terracotta Pot" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
          </div>
          <div class="mt-4 sm:mt-0">
            <span class="mb-1 block text-[10px] font-bold uppercase tracking-widest text-myrtle-accent">Essential Gear</span>
            <h4 class="mb-2 font-geo text-lg font-bold text-myrtle-text">Breathable Terracotta Planter</h4>
            <p class="mb-4 text-sm text-gray-600">Prevents root rot by allowing soil to breathe.</p>
            <button class="rounded-sm bg-myrtle-accent px-5 py-2 text-[10px] font-bold uppercase tracking-widest text-white transition-all hover:bg-myrtle-text active:scale-95 shadow-sm">Check Price</button>
          </div>
        </div>

        <h2 id="advanced-care" class="text-2xl font-bold mt-10 mb-6">Part 2: Advanced Care & Propagation</h2>
        
        <div class="relative overflow-hidden rounded-xl border border-myrtle-accent/30 bg-white/40 p-6 my-8 backdrop-blur-md shadow-sm">
          <div class="absolute top-0 left-0 w-1.5 h-full bg-myrtle-accent/80"></div>
          <h4 class="font-bold text-myrtle-accent mb-2 uppercase tracking-wide text-xs">Support is Mandatory</h4>
          <p class="text-sm text-gray-700 leading-relaxed font-medium">In nature, Monstera deliciosa is a climber. If you don't provide support (Moss Pole or Totem), it will sprawl horizontally. Gently tie the <strong>main vine</strong> to the pole, but never tie the petioles (leaf stems), as they need to rotate to face the sun.</p>
        </div>

        <h3 class="text-xl font-bold mb-4">Propagation Level 2: Air Layering</h3>
        <p class="mb-4 text-gray-700">Best for large, mature vines to ensure 100% success before cutting.</p>
        <ol class="list-decimal pl-5 mb-8 text-gray-700 space-y-3">
           <li><strong>Locate:</strong> Find a node on the mother plant.</li>
           <li><strong>Prep:</strong> Make a small shallow incision just below the node.</li>
           <li><strong>Wrap:</strong> Pack damp sphagnum moss around the node and incision.</li>
           <li><strong>Seal:</strong> Wrap the moss ball tightly with clear plastic wrap.</li>
           <li><strong>Wait:</strong> In a few weeks, roots will fill the moss. Cut below the roots and pot immediately.</li>
        </ol>

        <h2 id="varieties" class="text-2xl font-bold mt-10 mb-6">Part 3: Rare Varieties</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <h5 class="font-bold text-myrtle-text">Monstera Adansonii</h5>
                <p class="text-xs text-gray-600">"Swiss Cheese Vine." Smaller leaves, more holes, trailing growth.</p>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <h5 class="font-bold text-myrtle-text">Monstera Peru</h5>
                <p class="text-xs text-gray-600">Thick, puckered, dinosaur-skin leaves. Does not split.</p>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <h5 class="font-bold text-myrtle-text">Thai Constellation</h5>
                <p class="text-xs text-gray-600">Lab-created. Stable cream/yellow "starry" variegation.</p>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <h5 class="font-bold text-myrtle-text">Monstera Albo</h5>
                <p class="text-xs text-gray-600">The holy grail. Dark green with stark white patches. Prone to rot.</p>
            </div>
        </div>

        <h2 id="troubleshooting" class="text-2xl font-bold mt-10 mb-6">Part 4: Troubleshooting</h2>
        
        <div class="space-y-4 mb-12">
          <!-- Yellow Leaves Accordion -->
          <details class="group p-5 border border-gray-200 rounded-lg cursor-pointer bg-white shadow-sm transition-all hover:shadow-md">
            <summary class="font-bold text-myrtle-text flex justify-between items-center list-none">
              <span class="flex items-center"><span class="w-2 h-2 rounded-full bg-yellow-400 mr-3"></span>Yellow Leaves?</span>
              <span class="transition-transform duration-300 group-open:rotate-180 text-myrtle-accent">▼</span>
            </summary>
            <div class="mt-4 text-gray-600 text-sm border-t border-gray-100 pt-4">
              <p>Usually overwatering. The soil is staying wet too long. If yellowing starts at the bottom, it could be Nitrogen deficiency.</p>
            </div>
          </details>

           <!-- Pests Accordion -->
          <details class="group p-5 border border-gray-200 rounded-lg cursor-pointer bg-white shadow-sm transition-all hover:shadow-md">
            <summary class="font-bold text-myrtle-text flex justify-between items-center list-none">
              <span class="flex items-center"><span class="w-2 h-2 rounded-full bg-red-400 mr-3"></span>Pest Alert: Thrips</span>
              <span class="transition-transform duration-300 group-open:rotate-180 text-myrtle-accent">▼</span>
            </summary>
            <div class="mt-4 text-gray-600 text-sm border-t border-gray-100 pt-4">
              <p class="mb-2">Thrips look like tiny black or yellow rice grains. They suck sap, leaving leaves silvery/rusty.</p>
              <p><strong>The Fix:</strong> Shower leaves to knock them off. Treat with Neem Oil every 3-4 days for a month.</p>
            </div>
          </details>
        </div>
        
        <p class="text-gray-700 italic border-l-4 border-gray-300 pl-4">Note: Monstera is toxic to pets. Intense oral irritation if chewed.</p>
      `
    },
    mist: {
      title: 'Monstera: The Energy of Abundance',
      excerpt: 'The King of Aroids is a powerful symbol of expansion. Learn how to align its generous energy with your home.',
      quickOverview: [
        { label: 'Element', value: 'Wood' },
        { label: 'Planet', value: 'Jupiter' },
        { label: 'Chakra', value: 'Heart (Anahata)' },
        { label: 'Archetype', value: 'The Ruler' },
      ],
      content: `
        <p class="lead text-xl mb-8 leading-relaxed text-gray-300">In the energetic body of the home, plants act as conductors. The <a href="#">Monstera Deliciosa</a>, with its massive, expansive leaves and vigorous growth habit, is the ultimate symbol of <strong>abundance without restriction</strong>.</p>
        
        <!-- Interactive Energy Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div class="p-6 rounded-lg border border-mist-accent/20 bg-white/5 backdrop-blur-md hover:-translate-y-1 transition-transform">
             <div class="text-mist-accent mb-2">
               <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
             </div>
             <h4 class="font-bold text-white text-sm uppercase tracking-wide mb-1">Energy</h4>
             <p class="text-xs text-gray-400">Outward, expanding, taking up space. Masculine energy.</p>
          </div>
          <div class="p-6 rounded-lg border border-mist-accent/20 bg-white/5 backdrop-blur-md hover:-translate-y-1 transition-transform">
             <div class="text-mist-accent mb-2">
               <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
             </div>
             <h4 class="font-bold text-white text-sm uppercase tracking-wide mb-1">Placement</h4>
             <p class="text-xs text-gray-400">Wealth Corner (South-East). Avoid the bedroom (too active).</p>
          </div>
          <div class="p-6 rounded-lg border border-mist-accent/20 bg-white/5 backdrop-blur-md hover:-translate-y-1 transition-transform">
             <div class="text-mist-accent mb-2">
               <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
             </div>
             <h4 class="font-bold text-white text-sm uppercase tracking-wide mb-1">Ritual</h4>
             <p class="text-xs text-gray-400">New beginnings, financial growth, generosity.</p>
          </div>
        </div>

        <h2 id="feng-shui" class="text-2xl font-bold mt-8 mb-4 text-white">Feng Shui: The Wood Element</h2>
        <p class="mb-4 text-gray-300">The Monstera embodies the Wood element in its most active form. It is upward, outward, and dominating. In Feng Shui, we place this plant in the <strong>Wealth Corner</strong> (the far left corner of your home from the front door) to stimulate financial growth.</p>
        
        <blockquote class="border-l-4 border-mist-accent pl-6 italic text-lg my-8 text-gray-400 bg-white/5 py-4 pr-4 rounded-r-lg">
          "As the leaves split (fenestrate), they allow light to pass through—a reminder that true abundance is not about hoarding, but about letting energy flow through you to others."
        </blockquote>

        <h2 id="growth-ritual" class="text-2xl font-bold mt-8 mb-4 text-white">Ritual: Taking Up Space</h2>
        <p class="mb-6 text-gray-300">Many of us are taught to shrink, to be quiet, to not inconvenience others. The Monstera teaches the opposite lesson. Use this plant as a meditation anchor when you are feeling small.</p>

        <ul class="space-y-4 text-gray-300">
           <li class="flex gap-3">
              <span class="text-mist-accent">✦</span>
              <span><strong>Visualization:</strong> Sit by your Monstera. Close your eyes. Imagine your energy field expanding to fill the room, just as the Monstera fills its pot.</span>
           </li>
           <li class="flex gap-3">
              <span class="text-mist-accent">✦</span>
              <span><strong>Affirmation:</strong> "I have the right to grow. I have the right to be seen."</span>
           </li>
        </ul>

        <!-- Embedded Product Card (Mist) -->
        <div class="my-8 group relative overflow-hidden rounded-xl border border-mist-accent/20 bg-white/5 backdrop-blur-md p-6 transition-all hover:shadow-lg hover:bg-white/10 hover:border-mist-accent/40 hover:-translate-y-1 sm:flex sm:items-center sm:gap-6">
          <div class="relative h-32 w-full shrink-0 overflow-hidden rounded-lg sm:w-32 border border-white/10">
            <img src="https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?q=80&w=400&auto=format&fit=crop" alt="Cleansing Salts" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-90" />
          </div>
          <div class="mt-4 sm:mt-0">
            <span class="mb-1 block text-[10px] font-bold uppercase tracking-widest text-mist-accent">Ritual Tool</span>
            <h4 class="mb-2 font-serif text-lg text-white">Purification Bath Salts</h4>
            <p class="mb-4 text-sm text-gray-300">Cleanse your energy field before tending to your sacred space.</p>
            <button class="rounded-sm bg-mist-accent px-5 py-2 text-[10px] font-bold uppercase tracking-widest text-mist-bg transition-all hover:bg-white hover:text-mist-bg active:scale-95 shadow-md shadow-mist-accent/20">View Apothecary</button>
          </div>
        </div>

        <div class="bg-mist-secondary p-6 rounded-lg border border-mist-accent/20 my-8">
           <h4 class="font-bold text-mist-accent mb-4">Watering Intention</h4>
           <p class="text-sm text-gray-300 mb-2">When you water your Monstera, speak these words:</p>
           <p class="italic text-white font-serif text-lg">"I nourish you, as I nourish my own capacity to grow. Expand, climb, and take up space."</p>
        </div>
      `
    }
  },
  {
    id: 'propagation-101',
    category: CAT_TECHNIQUE,
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1591958911259-b42d50275810?q=80&w=1200&auto=format&fit=crop',
    relatedProductIds: [103, 102],
    myrtle: {
      title: 'Propagation Mastery: Water vs. Soil',
      excerpt: 'Stop rotting your cuttings. We break down the exact node placement and humidity requirements for success.',
      quickOverview: [
        { label: 'Method', value: 'Stem Cutting' },
        { label: 'Success Rate', value: 'High' },
        { label: 'Timeframe', value: '3-6 Weeks' },
        { label: 'Medium', value: 'Water / Perlite' },
      ],
      content: `
        <p class="lead text-xl mb-6">Propagation is the closest thing to magic in the plant world. Taking a piece of a living thing and creating an entirely new genetic clone? That is power.</p>

        <h2 id="node-identification" class="text-2xl font-bold mt-8 mb-4">The Node is Everything</h2>
        <p class="mb-4">You cannot propagate a leaf. You need a <strong>node</strong>—the knobby joint on the stem where the leaf meets the main vine. This is where the undifferentiated cells live that can transform into roots.</p>

        <div class="bg-myrtle-bg border-l-4 border-myrtle-accent p-6 my-8 rounded-r-lg shadow-sm">
          <h4 class="font-bold text-myrtle-accent mb-2 uppercase tracking-wide text-xs">Pro Tip: The Callous</h4>
          <p class="text-sm">After you cut, wait! Let the cut end dry out (callous) for 2-4 hours before putting it in water. This drastically reduces the chance of rot.</p>
        </div>

        <h2 id="methods" class="text-2xl font-bold mt-8 mb-4">Water vs. Soil Propagation</h2>
        <p class="mb-6">Which method reigns supreme? It depends on your patience level.</p>
        
        <p>Start with Pothos or Philodendrons in water. Once you master those, move on to the woody stems like Ficus.</p>
      `
    },
    mist: {
      title: 'Propagation as Rebirth Ritual',
      excerpt: 'The spiritual practice of cutting away the old to cultivate new life. Patience, trust, and the water element.',
      quickOverview: [
        { label: 'Concept', value: 'Renewal' },
        { label: 'Element', value: 'Water' },
        { label: 'Season', value: 'Spring / New Moon' },
        { label: 'Intention', value: 'Multiplication' },
      ],
      content: `
        <p class="lead text-xl mb-6">Propagation is an exercise in faith. It requires us to wound the mother plant, to sever a connection, in the hope that something new will emerge from the void.</p>

        <h2 id="severing" class="text-2xl font-bold mt-8 mb-4">The Sacred Cut</h2>
        <p class="mb-4">Cutting is a violent act, but it is necessary for growth. In our own lives, we often hold onto things (relationships, habits, beliefs) that have grown too leggy or weak. Propagation teaches us that <strong>pruning is an act of love</strong>.</p>
        
        <blockquote class="border-l-4 border-mist-accent pl-6 italic text-lg my-8 text-gray-300">
          "We must be willing to let go of the life we planned so as to have the life that is waiting for us."
        </blockquote>

        <h2 id="water-gazing" class="text-2xl font-bold mt-8 mb-4">Water Gazing (Scrying)</h2>
        <p class="mb-6">When you place your cuttings in glass vessels, you create a portal. Use your propagation station as an altar for <strong>patience</strong>.</p>
      `
    }
  },
  {
    id: 'sacred-spaces',
    category: CAT_ENV,
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=1200&auto=format&fit=crop',
    relatedProductIds: [1, 2, 4],
    myrtle: {
      title: 'Biophilic Design: Science of Sanctuary',
      excerpt: 'How incorporating natural elements into your home architecture lowers cortisol and improves cognitive function.',
      quickOverview: [
        { label: 'Strategy', value: 'Biophilia' },
        { label: 'Benefit', value: 'Stress Reduction' },
        { label: 'Key Element', value: 'Natural Light' },
        { label: 'Target', value: 'Home Office' },
      ],
      content: `
         <p class="lead text-xl mb-6">It is not just a trend; it is biology. Humans evolved in nature, yet we spend 90% of our time indoors. Biophilic design is the architecture of reconnecting our nervous systems to the environment.</p>
         <p class="mb-4">Studies show that even <em>looking</em> at a plant reduces heart rate variability. You don't need a forest view. Placing a single, architectural plant in your direct line of sight while working can reduce fatigue.</p>
      `
    },
    mist: {
      title: 'Designing Your Sacred Space',
      excerpt: 'How to arrange your physical environment to support your emotional and spiritual well-being.',
      quickOverview: [
        { label: 'Element', value: 'Fire / Light' },
        { label: 'Location', value: 'Low Traffic' },
        { label: 'Vibe', value: 'Grounded' },
        { label: 'Tool', value: 'Altar' },
      ],
      content: `
        <p class="lead text-xl mb-6 text-gray-300">A sacred space is not about religion; it is about <em>reclaiming territory</em> for your nervous system. In a world of constant notifications, you need a physical anchor for peace.</p>
        <h2 id="flow-pillars" class="text-2xl font-bold mt-8 mb-4 text-white">The Three Pillars of Flow</h2>
        <p class="mb-4 text-gray-300">To create a space that actually shifts your mood, you need to engage the senses. Visuals are not enough.</p>
      `
    }
  },
  {
    id: 'meditation-basics',
    category: CAT_MIND,
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?q=80&w=1200&auto=format&fit=crop',
    relatedProductIds: [3, 1],
    myrtle: {
      title: 'Neuroscience of Mindfulness',
      excerpt: 'What actually happens to your grey matter when you meditate? The science of neuroplasticity.',
      quickOverview: [
        { label: 'Mechanism', value: 'Neuroplasticity' },
        { label: 'Benefit', value: 'Focus' },
        { label: 'Time', value: '10 Mins/Day' },
        { label: 'Region', value: 'Prefrontal Cortex' },
      ],
      content: `
        <p class="lead text-xl mb-6">Meditation is often sold as magic, but it is actually mechanism. It is a workout for the prefrontal cortex, the part of the brain responsible for executive function and impulse control.</p>
        <h2 id="plasticity" class="text-2xl font-bold mt-8 mb-4">Rewiring the Brain</h2>
        <p class="mb-4">Neuroplasticity is the brain's ability to reorganize itself by forming new neural connections.</p>
      `
    },
    mist: {
      title: 'Meditation for the Restless Mind',
      excerpt: 'You don’t need to stop thinking to meditate. Learn the flow state technique for busy brains.',
      quickOverview: [
        { label: 'Style', value: 'Vipassana' },
        { label: 'Posture', value: 'Seated' },
        { label: 'Focus', value: 'Breath' },
        { label: 'Goal', value: 'Presence' },
      ],
      content: `
        <p class="lead text-xl mb-6 text-gray-300">"I can't meditate; my mind is too busy." That is exactly why you need to meditate. You don't go to the gym because you are already strong; you go to get strong.</p>
        <h2 id="empty-mind-myth" class="text-2xl font-bold mt-8 mb-4 text-white">The Myth of "Emptying the Mind"</h2>
        <p class="mb-4 text-gray-300">Meditation is not about stopping thoughts. It is about <strong>noticing</strong> them.</p>
      `
    }
  }
];

export const PILLAR_CONTENT: Record<'myrtle' | 'mist', PillarData> = {
  myrtle: {
    title: "The Botanical Science",
    subtitle: "From Soil to Success",
    description: "The definitive, evidence-based authority on houseplant survival, troubleshooting, and propagation. We strip away the myths and focus on the biology.",
    image: "https://images.unsplash.com/photo-1463320726281-696a485928c7?q=80&w=2070&auto=format&fit=crop",
    categories: [
      { 
        id: CAT_PROFILES, 
        title: "Plant Profiles", 
        description: "Deep dives into specific species.", 
        icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" 
      },
      { 
        id: CAT_TECHNIQUE, 
        title: "Technique & Care", 
        description: "Watering, pruning, and propagation methods.", 
        icon: "M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" 
      },
      { 
        id: CAT_ENV, 
        title: "Environment", 
        description: "Light, soil, and humidity control.", 
        icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
      },
      { 
        id: CAT_MIND, 
        title: "Neuro-Wellness", 
        description: "The psychology of green spaces.", 
        icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" 
      }
    ],
    sections: [
      {
        id: "genus-monstera",
        title: "Genus: Monstera",
        categoryId: CAT_PROFILES,
        content: `
          <p class="mb-6">The darlings of the aroid world. Native to tropical regions of the Americas, Monstera are hemiepiphytes (climbing plants) known for their fenestrations. They are generally forgiving, fast-growing, and visually striking.</p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="p-4 bg-white border border-gray-100 rounded-lg shadow-sm">
               <h4 class="font-bold text-myrtle-text text-lg mb-2">M. Deliciosa</h4>
               <span class="text-xs font-bold uppercase tracking-wide text-green-600 bg-green-50 px-2 py-1 rounded-sm mb-2 inline-block">The Classic</span>
               <p class="text-sm text-gray-600">The giant Swiss Cheese Plant. Needs space. Leaves can reach 3ft wide.</p>
            </div>
            <div class="p-4 bg-white border border-gray-100 rounded-lg shadow-sm">
               <h4 class="font-bold text-myrtle-text text-lg mb-2">M. Adansonii</h4>
               <span class="text-xs font-bold uppercase tracking-wide text-green-600 bg-green-50 px-2 py-1 rounded-sm mb-2 inline-block">The Vine</span>
               <p class="text-sm text-gray-600">Smaller, perforated leaves. Fast vining growth suitable for hanging baskets or moss poles.</p>
            </div>
            <div class="p-4 bg-white border border-gray-100 rounded-lg shadow-sm">
               <h4 class="font-bold text-myrtle-text text-lg mb-2">M. Peru (Karstenianum)</h4>
               <span class="text-xs font-bold uppercase tracking-wide text-green-600 bg-green-50 px-2 py-1 rounded-sm mb-2 inline-block">The Texture</span>
               <p class="text-sm text-gray-600">Deeply corrugated, stiff leaves. Does not split (fenestrate). Slow grower.</p>
            </div>
          </div>
        `
      },
      {
        id: "genus-philodendron",
        title: "Genus: Philodendron",
        categoryId: CAT_PROFILES,
        content: `
          <p class="mb-6">One of the largest genera in the Araceae family. Philodendrons are diverse, ranging from vining heart-leaf varieties to massive self-heading (tree-like) specimens. They are toxic to pets but excellent air purifiers.</p>
          
          <div class="space-y-4">
             <div class="flex items-start gap-4 p-4 border border-gray-100 rounded-lg bg-white">
                <div class="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold shrink-0">H</div>
                <div>
                  <h4 class="font-bold text-myrtle-text">P. Hederaceum (Heartleaf)</h4>
                  <p class="text-sm text-gray-600">The unkillable vine. Low light tolerant, communicates thirst by curling leaves. Perfect for beginners.</p>
                </div>
             </div>
             <div class="flex items-start gap-4 p-4 border border-gray-100 rounded-lg bg-white">
                <div class="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-pink-700 font-bold shrink-0">P</div>
                <div>
                  <h4 class="font-bold text-myrtle-text">P. Erubescens (Pink Princess)</h4>
                  <p class="text-sm text-gray-600">Famous for pink variegation. Needs brighter light to maintain color. A climbing variety.</p>
                </div>
             </div>
             <div class="flex items-start gap-4 p-4 border border-gray-100 rounded-lg bg-white">
                <div class="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-700 font-bold shrink-0">B</div>
                <div>
                  <h4 class="font-bold text-myrtle-text">P. Birkin</h4>
                  <p class="text-sm text-gray-600">Self-heading (grows upright in a rosette). Deep green leaves with striking white pinstripes.</p>
                </div>
             </div>
          </div>
        `
      },
      {
        id: "genus-pothos",
        title: "Genus: Epipremnum (Pothos)",
        categoryId: CAT_PROFILES,
        content: `
          <p class="mb-6">Often confused with Philodendrons, Epipremnum are the ultimate survivor plants. Native to Mo'orea, they can tolerate low light and erratic watering better than almost any other tropical.</p>
          
          <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
             <div class="text-center p-4 bg-gray-50 rounded-lg">
                <span class="block w-3 h-3 rounded-full bg-yellow-300 mx-auto mb-2"></span>
                <h5 class="font-bold text-sm">Golden</h5>
                <span class="text-[10px] text-gray-500">Fastest growing</span>
             </div>
             <div class="text-center p-4 bg-gray-50 rounded-lg">
                <span class="block w-3 h-3 rounded-full bg-white border border-gray-200 mx-auto mb-2"></span>
                <h5 class="font-bold text-sm">Marble Queen</h5>
                <span class="text-[10px] text-gray-500">Needs bright light</span>
             </div>
             <div class="text-center p-4 bg-gray-50 rounded-lg">
                <span class="block w-3 h-3 rounded-full bg-lime-400 mx-auto mb-2"></span>
                <h5 class="font-bold text-sm">Neon</h5>
                <span class="text-[10px] text-gray-500">Chartreuse color</span>
             </div>
          </div>
        `
      },
      {
        id: "genus-sansevieria",
        title: "Genus: Sansevieria (Snake Plant)",
        categoryId: CAT_PROFILES,
        content: `
          <p class="mb-6">Taxonomically reclassified as <em>Dracaena</em>, but we still call them Snake Plants. These are CAM plants—they release oxygen at night, making them ideal bedroom companions.</p>
          
          <ul class="list-disc pl-5 space-y-2 text-sm text-gray-700">
             <li><strong>Laurentii:</strong> The standard snake plant with yellow margins. Can reach 4ft tall.</li>
             <li><strong>Cylindrica:</strong> Round, spear-like leaves that fan out or can be braided.</li>
             <li><strong>Masoniana (Whale Fin):</strong> Produces singular, massive, paddle-like leaves.</li>
          </ul>
        `
      },
      {
        id: "environment",
        title: "Understanding Your Environment: Light & Air",
        categoryId: CAT_ENV,
        content: `
          <p class="mb-4">Most beginners kill plants because they misunderstand "bright indirect light." Let's fix that. Photosynthesis is the engine of growth, and without adequate photons, your fertilizer means nothing.</p>
          <h3 class="text-xl font-bold mt-6 mb-3">Light Spectrum & Placement</h3>
          <p class="mb-4">Windows are not created equal. <strong>North-facing</strong> windows offer gentle, consistent low light—perfect for Calatheas. <strong>South-facing</strong> windows (in the Northern Hemisphere) are the powerhouse, offering intense direct beams that can scorch sensitive leaves but fuel <a href="#" class="text-myrtle-accent font-bold underline decoration-2">Fiddle Leaf Figs</a>.</p>
        `
      },
      {
        id: "foundation",
        title: "The Foundation: Soil, Water, & Nutrients",
        categoryId: CAT_TECHNIQUE,
        content: `
          <p class="mb-4">Roots need oxygen just as much as water. The "dirt" from your backyard will suffocate a potted plant. You need a substrate that balances moisture retention with rapid drainage.</p>
          <h3 class="text-xl font-bold mt-6 mb-3">Ideal Soil Composition</h3>
          <p class="mb-4">For most aroids (Monstera, Philodendron), we recommend the "Jungle Mix": 50% Potting Soil, 30% Orchid Bark, and 20% Perlite. This creates pockets of air that allow roots to thrive.</p>
        `
      }
    ]
  },
  mist: {
    title: "The Sanctuary Blueprint",
    subtitle: "Energy, Intention, & Flow",
    description: "Connect spiritual practices to everyday life. We focus on mindfulness, energy work, and practical application for the modern soul.",
    image: "https://images.unsplash.com/photo-1518151596349-f5383a8b422a?q=80&w=2070&auto=format&fit=crop",
    categories: [
      { 
        id: CAT_MIND, 
        title: "Mindfulness", 
        description: "Meditation and breathwork practices.", 
        icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
      },
      { 
        id: CAT_ENV, 
        title: "Sacred Spaces", 
        description: "Feng Shui and altar creation.", 
        icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
      },
      { 
        id: CAT_TECHNIQUE, 
        title: "Rituals", 
        description: "Daily practices for grounding.", 
        icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" 
      },
      { 
        id: CAT_PROFILES, 
        title: "Symbolism", 
        description: "Archetypes and plant meanings.", 
        icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" 
      }
    ],
    sections: [
      {
        id: "energy-body",
        title: "The Energy Body: Principles of Alignment",
        categoryId: CAT_TECHNIQUE,
        content: `
          <p class="mb-4">You are more than a physical vessel. You are a complex system of energetic flows. Understanding this is the first step to balance.</p>
          <h3 class="text-xl font-bold mt-6 mb-3">Intentionality & Manifestation</h3>
          <p class="mb-4">Intention is simply directed energy. Where attention goes, energy flows. Before you start your day, sit for two minutes and set a single word as your anchor. This is the seed of manifestation.</p>
        `
      },
      {
        id: "sacred-space",
        title: "Sacred Space & Environmental Flow",
        categoryId: CAT_ENV,
        content: `
          <p class="mb-4">Your home is an extension of your energy field. A cluttered space leads to a cluttered mind.</p>
          <h3 class="text-xl font-bold mt-6 mb-3">Clearing Negative Energy</h3>
          <p class="mb-4">Stagnant energy accumulates in corners. Use sound (bells, clapping) or smoke (sage, palo santo) to move this energy. Ideally, do this with the windows open to allow the old to escape.</p>
        `
      }
    ]
  }
};
