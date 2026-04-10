export const siteConfig = {
  name: "Stay Homes",
  url: "https://stayhomes.example",
  description:
    "Premium homestays and rental properties with refined design, trusted service, and a hospitality-first experience.",
  contact: {
    phone: "+1 (415) 555-0198",
    email: "hello@stayhomes.com",
    address: "18 Harbor Lane, Monterey, California",
  },
  structuredData: {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "Stay Homes",
    description:
      "Premium homestays and curated rental properties with hospitality-led service.",
    telephone: "+1-415-555-0198",
    email: "hello@stayhomes.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "18 Harbor Lane",
      addressLocality: "Monterey",
      addressRegion: "CA",
      postalCode: "93940",
      addressCountry: "US",
    },
    url: "https://stayhomes.example",
  },
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Listings", href: "/listings" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = navigation;

export const heroStats = [
  { value: "4.9/5", label: "Average guest rating" },
  { value: "24h", label: "Response time for requests" },
  { value: "12", label: "Signature homes available" },
];

export type ListingItem = {
  slug: string;
  name: string;
  location: string;
  price: string;
  summary: string;
  tags: string[];
  gradient: string;
};

export const listings: ListingItem[] = [
  {
    slug: "cedar-house",
    name: "The Cedar House",
    location: "Big Sur, California",
    price: "From $420/night",
    summary:
      "A warm wood-lined retreat with ocean light, private decks, and a slow-living atmosphere made for weekends that stretch.",
    tags: ["Ocean view", "3 bedrooms", "Fireplace"],
    gradient:
      "linear-gradient(150deg, #efe6dc 0%, #cc9960 32%, #496d64 100%)",
  },
  {
    slug: "atelier-residence",
    name: "Atelier Residence",
    location: "SoHo, New York",
    price: "From $510/night",
    summary:
      "A design-led loft with gallery calm, hospitality details, and walkable access to the best of downtown.",
    tags: ["City stay", "2 bedrooms", "Concierge"],
    gradient:
      "linear-gradient(145deg, #f3eadf 0%, #d7b18c 42%, #2a2d36 100%)",
  },
  {
    slug: "seabloom-villa",
    name: "Seabloom Villa",
    location: "Tulum, Mexico",
    price: "From $590/night",
    summary:
      "A private villa with tropical landscaping, indoor-outdoor living, and a softly luxurious mood for longer escapes.",
    tags: ["Private pool", "4 bedrooms", "Chef on request"],
    gradient:
      "linear-gradient(140deg, #f2efe5 0%, #7bb9a6 38%, #1b5b57 100%)",
  },
  {
    slug: "the-green-quarter",
    name: "The Green Quarter",
    location: "Portland, Oregon",
    price: "From $280/night",
    summary:
      "A beautifully detailed neighborhood home ideal for work trips, family stays, and creative city weekends.",
    tags: ["Remote work ready", "2 bedrooms", "Garden patio"],
    gradient:
      "linear-gradient(150deg, #efe4d7 0%, #97a778 40%, #31473d 100%)",
  },
  {
    slug: "montclair-manor",
    name: "Montclair Manor",
    location: "Charleston, South Carolina",
    price: "From $440/night",
    summary:
      "Classic architecture, layered interiors, and a host-ready layout suited to celebratory group stays.",
    tags: ["Historic district", "4 bedrooms", "Private courtyard"],
    gradient:
      "linear-gradient(150deg, #f6ede5 0%, #d6a27d 36%, #6a4d43 100%)",
  },
  {
    slug: "harbor-suite",
    name: "Harbor Suite",
    location: "Seattle, Washington",
    price: "From $330/night",
    summary:
      "A serene waterfront apartment with tailored finishes, skyline views, and premium amenities for longer city stays.",
    tags: ["Waterfront", "1 bedroom", "Fitness access"],
    gradient:
      "linear-gradient(145deg, #edf2f1 0%, #9db8c4 42%, #35515e 100%)",
  },
];

export const whyChooseUs = [
  {
    kicker: "Trust",
    title: "Clear standards across every property",
    description:
      "Every home follows the same onboarding, quality checks, and guest communication framework.",
  },
  {
    kicker: "Taste",
    title: "A portfolio that feels intentionally selected",
    description:
      "We avoid volume-first listings and focus on homes with atmosphere, comfort, and enduring visual quality.",
  },
  {
    kicker: "Care",
    title: "Service that feels warm and efficient",
    description:
      "Guests get responsive support without friction, from pre-arrival questions to in-stay requests.",
  },
  {
    kicker: "Flexibility",
    title: "Built for weekend escapes and longer living",
    description:
      "Our booking flow and recommendations support vacations, relocations, and slower seasonal stays.",
  },
];

export const testimonials = [
  {
    quote:
      "The house was beautiful, but what really stood out was how calm and seamless everything felt from inquiry to checkout.",
    name: "Lauren Kim",
    role: "Weekend guest, Big Sur",
  },
  {
    quote:
      "We needed a month-long furnished stay during a move and Stay Homes made it feel polished, personal, and easy.",
    name: "Marcus Reed",
    role: "Relocation guest, Seattle",
  },
  {
    quote:
      "They understand design-minded travelers. The recommendations were spot on, and the communication was excellent.",
    name: "Nina Alvarez",
    role: "Frequent traveler, New York",
  },
];

export const amenities = [
  "Fast Wi-Fi and workspace setup",
  "Arrival guidance and host support",
  "Professional housekeeping standards",
  "Premium linens and bath amenities",
  "Local recommendations on request",
  "Flexible options for extended stays",
];

export const aboutPage = {
  title: "We curate homes people can trust the moment they walk in.",
  description:
    "Stay Homes was built for guests who want the privacy of a rental with the confidence of refined hospitality.",
  principles: [
    {
      title: "Design-first curation",
      description:
        "We favor homes with material warmth, natural light, and a calm, lived-in elegance over generic inventory.",
    },
    {
      title: "Operational discipline",
      description:
        "Clear check-in systems, quality housekeeping, and responsive support keep the experience dependable.",
    },
    {
      title: "Guest-centered matching",
      description:
        "Recommendations consider pace, purpose, neighborhood feel, and how guests actually want to spend time.",
    },
    {
      title: "Owner-ready structure",
      description:
        "Our backend model is designed to scale into content management, property operations, and lead handling.",
    },
  ],
  stats: [
    { value: "98%", label: "Guests say the home matched expectations" },
    { value: "12+", label: "Sample luxury homes in the starter collection" },
    { value: "1 day", label: "Typical response window for tailored requests" },
  ],
};

export const listingPage = {
  title: "Homes that feel elevated, grounded, and genuinely comfortable.",
  description:
    "Browse a sample Stay Homes collection designed to show the range of environments, layouts, and service styles the brand can support.",
};

export const contactDetails = [
  {
    label: "Email",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
  {
    label: "Phone",
    value: siteConfig.contact.phone,
    href: `tel:${siteConfig.contact.phone.replace(/[^+\d]/g, "")}`,
  },
  {
    label: "Office",
    value: siteConfig.contact.address,
    href: "https://maps.google.com",
  },
];
