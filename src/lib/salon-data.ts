import moon1 from "@/assets/moon-1.jpg.asset.json";
import moon2 from "@/assets/moon-2.jpg.asset.json";
import moon3 from "@/assets/moon-3.jpg.asset.json";
import moon4 from "@/assets/moon-4.jpg.asset.json";
import moon5 from "@/assets/moon-5.jpg.asset.json";
import moon6 from "@/assets/moon-6.jpg.asset.json";
import moon7 from "@/assets/moon-7.jpg.asset.json";
import moon8 from "@/assets/moon-8.jpg.asset.json";
import moon9 from "@/assets/moon-9.jpg.asset.json";
import moon10 from "@/assets/moon-10.jpg.asset.json";
import moon11 from "@/assets/moon-11.jpg.asset.json";
import moon12 from "@/assets/moon-12.jpg.asset.json";


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
  category: "Hair" | "Nails" | "Braids" | "Makeup" | "Wigs";
  ratio: string;
};

export const gallery: GalleryItem[] = [
  { src: moon1.url, alt: "Sleek high bun styled to a glass finish", category: "Hair", ratio: "3 / 4" },
  { src: moon4.url, alt: "Feed-in cornrows with knotless braid ponytail", category: "Braids", ratio: "3 / 4" },
  { src: moon10.url, alt: "Chrome and nude almond gel nails", category: "Nails", ratio: "3 / 4" },
  { src: moon2.url, alt: "Soft glam makeup with a nude satin lip", category: "Makeup", ratio: "3 / 4" },
  { src: moon3.url, alt: "Silk pressed bob with a glossy straight finish", category: "Wigs", ratio: "3 / 4" },
  { src: moon5.url, alt: "Sculpted cornrow pattern braided close to the scalp", category: "Braids", ratio: "3 / 4" },
  { src: moon11.url, alt: "Hand-painted floral nail art on nude almond nails", category: "Nails", ratio: "3 / 4" },
  { src: moon7.url, alt: "Sleek pulled-back ponytail with a laid hairline", category: "Hair", ratio: "3 / 4" },
  { src: moon6.url, alt: "Swirled cornrow braiding detail from above", category: "Braids", ratio: "3 / 4" },
  { src: moon8.url, alt: "Long straight ponytail install styled sleek", category: "Wigs", ratio: "3 / 4" },
  { src: moon9.url, alt: "Bridal soft glam with a low chignon", category: "Makeup", ratio: "3 / 4" },
  { src: moon12.url, alt: "Polished soft glam finish with defined brows", category: "Makeup", ratio: "3 / 4" },
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
  name: "Moonlight Beauty Salon",
  phone: "+27 31 000 0000",
  phoneHref: "tel:+27310000000",
  whatsapp: "https://wa.me/27310000000",
  email: "hello@moonlightbeauty.co.za",
  instagram: "https://instagram.com",
  address: [
    "223 Kwamnyandu Shopping Centre",
    "341 Griffiths Mxenge Highway",
    "Umlazi, KwaZulu-Natal",
    "South Africa",
  ],
  hours: "Monday – Sunday · 09:00 – 18:00",
  mapEmbed:
    "https://www.google.com/maps?q=Kwamnyandu+Shopping+Centre,+341+Griffiths+Mxenge+Highway,+Umlazi&output=embed",
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
