import { BusinessInfo, ServiceItem, GalleryItem, ReviewItem, ProcessStep, DesignPrinciple } from '../types';

export const BUSINESS_DATA: BusinessInfo = {
  name: 'Classy Interior',
  hindiName: 'क्लासी इंटीरियर',
  category: 'Interior Designer',
  rating: 4.9,
  totalReviews: 36,
  phoneDisplay: '063931 26578',
  phoneRaw: '06393126578',
  whatsappNumber: '916393126578',
  addressLine1: 'G-680, Awas Vikas, No. 1, Kalyanpur',
  addressLine2: 'Kanpur, Uttar Pradesh 208017',
  city: 'Kanpur',
  state: 'Uttar Pradesh',
  postalCode: '208017',
  country: 'India',
  plusCode: 'F7W3+2P Kanpur, Uttar Pradesh',
  hoursNote: 'Opens at 9:00 AM on Saturday. Contact us for current availability.',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Classy+Interior+G-680+Awas+Vikas+No+1+Kalyanpur+Kanpur+Uttar+Pradesh+208017',
  directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=G-680,+Awas+Vikas,+No.+1,+Kalyanpur,+Kanpur,+Uttar+Pradesh+208017,+India',
};

export const IMAGES = {
  hero: '/src/assets/images/hero_luxury_living_room_1792163202184.jpg',
  intro: '/src/assets/images/intro_interior_editorial_1792163204161.jpg',
  feature: '/src/assets/images/feature_dramatic_space_1792163204272.jpg',
  kitchen: '/src/assets/images/service_modular_kitchen_1792163204757.jpg',
  bedroom: '/src/assets/images/service_bedroom_sanctuary_1792163204797.jpg',
  commercial: '/src/assets/images/service_commercial_studio_1792163223653.jpg',
  lounge: '/src/assets/images/gallery_lounge_detail_1792163224057.jpg',
  dining: '/src/assets/images/gallery_dining_architecture_1792163224300.jpg',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'residential-interiors',
    number: '01',
    title: 'Residential Interiors',
    description: 'Create beautiful, comfortable living spaces that reflect individual preferences and contemporary lifestyle.',
    image: IMAGES.hero,
    features: ['Holistic Spatial Layouts', 'Custom Millwork & Cabinetry', 'Tone & Material Harmony']
  },
  {
    id: 'living-room-design',
    number: '02',
    title: 'Living Room Design',
    description: 'Explore balanced layouts, furniture styling, architectural lighting, and harmonious color palettes for everyday luxury.',
    image: IMAGES.lounge,
    features: ['Curated Seating Arrangements', 'Architectural Cove Illumination', 'Textural Contrast & Accents']
  },
  {
    id: 'bedroom-interiors',
    number: '03',
    title: 'Bedroom Interiors',
    description: 'Discover calming bedroom concepts with thoughtful materials, rich acoustic textures, and restful atmospheric lighting.',
    image: IMAGES.bedroom,
    features: ['Bespoke Upholstered Headboards', 'Warm Layered Bedside Lighting', 'Serene Neutral Material Palettes']
  },
  {
    id: 'modular-kitchen-concepts',
    number: '04',
    title: 'Modular Kitchen Concepts',
    description: 'Explore modern kitchen layouts with an emphasis on seamless appearance, premium surfaces, and practical organization.',
    image: IMAGES.kitchen,
    features: ['Calacatta Marble & Smoked Oak', 'Concealed Storage Architecture', 'Ergonomic Workflow Systems']
  },
  {
    id: 'commercial-interiors',
    number: '05',
    title: 'Commercial Interiors',
    description: 'Present design concepts for modern offices, creative studios, and boutique business spaces tailored to client goals.',
    image: IMAGES.commercial,
    features: ['Executive Boardroom Concepts', 'Acoustic Wall Treatment', 'Refined Reception & Client Lounges']
  },
  {
    id: 'space-planning-styling',
    number: '06',
    title: 'Space Planning & Styling',
    description: 'Explore tailored furniture arrangements, material combinations, sculptural accents, and decorative details.',
    image: IMAGES.intro,
    features: ['Art & Sculptural Placement', 'Custom Natural Finish Consultations', 'Proportion & Balance Guidance']
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Contemporary Double-Height Salon',
    category: 'Living Rooms',
    image: IMAGES.hero,
    description: 'Bespoke travertine central table, floor-to-ceiling drapery, and fluted acoustic wood panelling in warm ivory and walnut.',
    dimensions: 'High-Ceiling Residence',
    paletteNotes: 'Ivory · Walnut · Travertine'
  },
  {
    id: 'gal-2',
    title: 'Architectural Executive Boardroom',
    category: 'Commercial Spaces',
    image: IMAGES.commercial,
    description: 'Executive round conference arrangement with natural leather seating, acoustic fluted timber walls, and seamless glass partitions.',
    dimensions: 'Creative Studio / Office',
    paletteNotes: 'Cognac · Warm Timber · Charcoal'
  },
  {
    id: 'gal-3',
    title: 'Serene Master Suite & Acoustic Slats',
    category: 'Bedrooms',
    image: IMAGES.bedroom,
    description: 'Tufted natural linen wall, brushed champagne gold pendants, and textured wool rug designed for restful retreat.',
    dimensions: 'Master Suite Sanctuary',
    paletteNotes: 'Soft Beige · Champagne Gold · Warm White'
  },
  {
    id: 'gal-4',
    title: 'Calacatta Waterfall Modular Kitchen',
    category: 'Kitchens',
    image: IMAGES.kitchen,
    description: 'Matte graphite flush millwork paired with honed Calacatta marble waterfall counter and smoked oak breakfast counter.',
    dimensions: 'Open-Concept Culinary Area',
    paletteNotes: 'Graphite · Calacatta Marble · Smoked Oak'
  },
  {
    id: 'gal-5',
    title: 'Curved Bouclé Lounge & Architectural Niche',
    category: 'Modern Interiors',
    image: IMAGES.lounge,
    description: 'Sculptural curved seating, perimeter ceiling cove illumination, and bespoke fluted coffee table in an airy modern residence.',
    dimensions: 'Modern Living Pavilion',
    paletteNotes: 'Oatmeal · Brass · Warm Plaster'
  },
  {
    id: 'gal-6',
    title: 'Formal Panoramic Dining Space',
    category: 'Modern Interiors',
    image: IMAGES.dining,
    description: 'Sculptural organic oak dining table anchored by a delicate brass tube chandelier overlooking landscaped views.',
    dimensions: 'Formal Dining Pavilion',
    paletteNotes: 'Natural Oak · Polished Brass · Raw Linen'
  },
  {
    id: 'gal-7',
    title: 'Textured Entry Foyer & Fluted Credenza',
    category: 'Living Rooms',
    image: IMAGES.intro,
    description: 'Bespoke fluted tambour credenza topped with natural marble, ribbed brass sconce, and hand-applied lime plaster walls.',
    dimensions: 'Entrance Foyer Gallery',
    paletteNotes: 'Fluted Oak · Travertine · Champagne Brass'
  },
  {
    id: 'gal-8',
    title: 'Penthouse Salon with Floating Hearth',
    category: 'Modern Interiors',
    image: IMAGES.feature,
    description: 'Dramatic bookmatched marble partition with integrated linear flame hearth, slatted acoustic ceiling, and skyline vistas.',
    dimensions: 'Urban Penthouse Living',
    paletteNotes: 'Bookmatched Marble · Deep Charcoal · Timber'
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    quote: 'Aapka interior design literally next level hai, bilkul luxury vibes de raha hai.',
    source: 'Google Review Verified Customer',
    rating: 5,
    verified: true,
    theme: 'Luxury Interior Design'
  },
  {
    id: 'rev-2',
    quote: 'It was amazing to visit and hospitality awesome. There were nice people.',
    source: 'Google Review Verified Customer',
    rating: 5,
    verified: true,
    theme: 'Friendly Hospitality'
  },
  {
    id: 'rev-3',
    quote: 'Best Interior Designer in Kanpur.',
    source: 'Google Review Verified Customer',
    rating: 5,
    verified: true,
    theme: 'Design Excellence in Kanpur'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'DISCOVER',
    description: 'Understand the client’s space, lifestyle needs, aesthetic preferences, and vision.',
    detail: 'We begin with an in-depth dialogue about how you live, your functional priorities, spatial circulation, and aesthetic aspirations.'
  },
  {
    step: '02',
    title: 'PLAN',
    description: 'Explore layout ideas, color palettes, materials, and structural design direction.',
    detail: 'Developing scale layout options, lighting schemes, texture boards, and harmonious material pairings for each individual room.'
  },
  {
    step: '03',
    title: 'DESIGN',
    description: 'Develop the selected design concept and refine every architectural detail.',
    detail: 'Refining millwork details, bespoke cabinetry plans, fixture specifications, and finishes down to the millimeter.'
  },
  {
    step: '04',
    title: 'FINALIZE',
    description: 'Discuss the next steps, project scope, and implementation arrangements with the client.',
    detail: 'Transparent review of timelines, craftsmanship coordination, procurement arrangements, and step-by-step execution roadmap.'
  }
];

export const DESIGN_PRINCIPLES: DesignPrinciple[] = [
  {
    title: 'Thoughtful Design',
    description: 'Spaces should reflect the people who use them.',
    detail: 'A truly luxurious space feels effortless because every dimension, walkway, and surface is intentionally attuned to daily routines.'
  },
  {
    title: 'Balanced Aesthetics',
    description: 'Combine materials, lighting, colors, and furniture harmoniously.',
    detail: 'We balance cool stone with warm wood, soft woven textiles with refined metal, creating visual depth without visual noise.'
  },
  {
    title: 'Personal Expression',
    description: 'Explore concepts that suit individual tastes and lifestyles.',
    detail: 'Interior design is not about repeating trends; it is about crafting an authentic sanctuary that feels uniquely personal.'
  },
  {
    title: 'Attention to Detail',
    description: 'Small design choices can influence the overall atmosphere of a space.',
    detail: 'From architectural shadow gaps to the exact warmth of ambient lighting, true luxury resides in meticulous execution.'
  }
];
