import hair1 from "@/assets/ta-hair-1.jpg.asset.json";
import hair2 from "@/assets/ta-hair-2.jpg.asset.json";
import hair3 from "@/assets/ta-hair-3.jpg.asset.json";
import hair4 from "@/assets/ta-hair-4.jpg.asset.json";
import hair5 from "@/assets/ta-hair-5.jpg.asset.json";
import hair6 from "@/assets/ta-hair-6.jpg.asset.json";
import hair7 from "@/assets/ta-hair-7.jpg.asset.json";
import nails1 from "@/assets/ta-nails-1.jpg.asset.json";
import nails2 from "@/assets/ta-nails-2.jpg.asset.json";
import nails3 from "@/assets/ta-nails-3.jpg.asset.json";
import nails4 from "@/assets/ta-nails-4.jpg.asset.json";


export type Service = {
  id: string;
  name: string;
  icon: string;
  description: string;
  from: number;
  duration: string;
  minutes: number;
};

export const services: Service[] = [
  {
    id: "hair",
    name: "Hair",
    icon: "sparkles",
    description: "Silk press, treatments, colour and blowouts finished with a mirror shine.",
    from: 320,
    duration: "1h 30m",
    minutes: 90,
  },
  {
    id: "braids",
    name: "Braids",
    icon: "waves",
    description: "Knotless, box braids and cornrows braided with a gentle, protective hand.",
    from: 450,
    duration: "3h 30m",
    minutes: 210,
  },
  {
    id: "dreadlocks",
    name: "Dreadlocks",
    icon: "git-merge",
    description: "Starter locs, retwists and interlocking for healthy, defined roots.",
    from: 380,
    duration: "2h 30m",
    minutes: 150,
  },
  {
    id: "wigs",
    name: "Wigs",
    icon: "crown",
    description: "Custom installs, revamps and melted lace frontals styled to your face.",
    from: 550,
    duration: "2h",
    minutes: 120,
  },
  {
    id: "haircuts",
    name: "Haircuts",
    icon: "scissors",
    description: "Precision shaping, trims and tapers with a personal consultation.",
    from: 180,
    duration: "45m",
    minutes: 45,
  },
  {
    id: "nails",
    name: "Nails",
    icon: "hand",
    description: "Gel, acrylic and soft nude sculpting with a soothing hand ritual.",
    from: 250,
    duration: "1h 15m",
    minutes: 75,
  },
  {
    id: "makeup",
    name: "Makeup",
    icon: "brush",
    description: "Soft glam, bridal and occasion artistry matched to your undertone.",
    from: 400,
    duration: "1h",
    minutes: 60,
  },
];

export type Specialist = {
  id: string;
  name: string;
  role: string;
  experience: string;
  speciality: string;
  rating: number;
  initials: string;
};

export const specialists: Specialist[] = [
  {
    id: "nomusa",
    name: "Nomusa Dlamini",
    role: "Senior Stylist",
    experience: "9 years",
    speciality: "Silk press & colour",
    rating: 4.9,
    initials: "ND",
  },
  {
    id: "thandeka",
    name: "Thandeka Mkhize",
    role: "Braiding Specialist",
    experience: "7 years",
    speciality: "Knotless braids & locs",
    rating: 5.0,
    initials: "TM",
  },
  {
    id: "leah",
    name: "Leah Naidoo",
    role: "Nail Artist",
    experience: "6 years",
    speciality: "Nude gel sculpting",
    rating: 4.8,
    initials: "LN",
  },
  {
    id: "zanele",
    name: "Zanele Khumalo",
    role: "Makeup Artist",
    experience: "8 years",
    speciality: "Soft glam & bridal",
    rating: 4.9,
    initials: "ZK",
  },
];

export type GalleryItem = {
  src: string;
  alt: string;
  category: "Hair" | "Nails" | "Braids";
  ratio: string;
};

export const gallery: GalleryItem[] = [
  { src: hair1.url, alt: "Knotless braids with curly ends styled at T.A Beauty Studio", category: "Braids", ratio: "3 / 4" },
  { src: hair2.url, alt: "Boho knotless braids paired with long green french nails", category: "Braids", ratio: "3 / 4" },
  { src: nails1.url, alt: "Long almond french tip nails with a soft nude base", category: "Nails", ratio: "3 / 4" },
  { src: hair3.url, alt: "Sleek jet black silk press with a glossy straight finish", category: "Hair", ratio: "3 / 4" },
  { src: nails2.url, alt: "Nude pink almond nails with hand-painted accent art", category: "Nails", ratio: "3 / 4" },
  { src: hair4.url, alt: "Straight sleek install styled with a side part", category: "Hair", ratio: "3 / 4" },
  { src: hair5.url, alt: "Honey blonde highlights on a straight blowout", category: "Hair", ratio: "3 / 4" },
  { src: nails3.url, alt: "Pearl-detail pedicure with soft pink toe nails", category: "Nails", ratio: "3 / 4" },
  { src: hair6.url, alt: "Caramel money-piece highlights styled bone straight", category: "Hair", ratio: "3 / 4" },
  { src: nails4.url, alt: "Glossy pearl embellished pedicure finish", category: "Nails", ratio: "3 / 4" },
  { src: hair7.url, alt: "Blonde highlighted sleek hair styled in the studio chair", category: "Hair", ratio: "3 / 4" },
];


export const testimonials = [
  {
    name: "Ayanda M.",
    service: "Knotless Braids",
    quote:
      "The calmest salon I have ever sat in. My braids were flawless and my scalp never hurt once.",
    rating: 5,
  },
  {
    name: "Refilwe S.",
    service: "Silk Press",
    quote:
      "Moonlight feels like a spa. The shine on my hair lasted almost three weeks — I will never go anywhere else.",
    rating: 5,
  },
  {
    name: "Precious K.",
    service: "Soft Glam Makeup",
    quote:
      "Zanele matched my skin perfectly for my wedding. Every photograph looked expensive and effortless.",
    rating: 5,
  },
];

export const salon = {
  name: "T.A Beauty Studio",
  phone: "+27 65 870 3801",
  phoneHref: "tel:+27658703801",
  whatsapp: "https://wa.me/27658703801",
  email: "",
  instagram: "https://instagram.com/t.a_beautystudio_",
  address: [
    "87 Smiso Nkwanyana Road",
    "Morningside",
    "Durban, KwaZulu-Natal",
    "South Africa",
  ],
  hours: "Monday – Friday · 08:30 – 18:00",
  weekendHours: "Saturday – Sunday · 08:30 – 19:00",
  mapEmbed:
    "https://www.google.com/maps?q=87+Smiso+Nkwanyana+Road,+Morningside,+Durban&output=embed",
};
export const timeSlots = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
];
