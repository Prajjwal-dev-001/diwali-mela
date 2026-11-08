import { a as t, C as s, F as l } from "./festival-config-DMHGmm_6.js";
const o = { gender: "boy", outfit: "everyday" },
  r = {
    everyday: {
      name: "Roz ka look",
      price: 0,
      colour: 3768182,
      style: "kurta",
    },
    // Female Custom 3D Outfits
    pink_lehenga: {
      name: "Pretty Baby-Pink Lehenga Set",
      price: 0,
      colour: 16756941, // 0xffb0cd
      style: "pink_lehenga",
      gender: "girl",
    },
    festive_saree: {
      name: "Elegant Festive Saree",
      price: 0,
      colour: 12720219, // 0xc2185b
      style: "saree",
      gender: "girl",
    },
    jeans_kurti: {
      name: "Trendy Baggy Jeans & Short Kurti",
      price: 0,
      colour: 4620980, // 0x4682b4
      style: "jeans_kurti",
      gender: "girl",
    },
    lehenga_rose: {
      name: "Gulabi lehenga",
      price: 0,
      colour: 14772888,
      style: "lehenga",
      gender: "girl",
    },
    lehenga_lilac: {
      name: "Lilac lehenga",
      price: 0,
      colour: 11171274,
      style: "lehenga",
      gender: "girl",
    },
    // Male Handsome Festive Outfits
    kurta_royal: {
      name: "Royal Gold & Black Sherwani",
      price: 0,
      colour: 2039583, // 0x1f1f1f
      style: "sherwani",
      gender: "boy",
    },
    kurta: {
      name: "Teal festive kurta",
      price: 0,
      colour: 2329734,
      style: "kurta",
      gender: "boy",
    },
    kurta_saffron: {
      name: "Kesari kurta",
      price: 0,
      colour: 15309880,
      style: "kurta",
      gender: "boy",
    },
    kurta_maroon: {
      name: "Maroon celebration kurta",
      price: 0,
      colour: 9582926,
      style: "kurta",
      gender: "boy",
    },
    casual_jeans: {
      name: "Couple College Casuals",
      price: 0,
      colour: 2837630, // 0x2b4c7e
      style: "casual",
      gender: "boy",
    },
    suit_blue: {
      name: "Royal blue festive suit",
      price: 0,
      colour: 5466822,
      style: "kurta",
      gender: "boy",
    },
  };
function n(a) {
  return (
    !!a &&
    !Array.isArray(a) &&
    ["boy", "girl"].includes(a.gender) &&
    Object.hasOwn(r, a.outfit)
  );
}
function h(a = o) {
  const e = n(a) ? a : o;
  return { role: e.gender === "girl" ? "girl" : "man", ...r[e.outfit] };
}
const m = '<p class="creator-credit">Created by uglubuglu ❤️💖</p>',
  d = {
    "₹10 coin": "₹10 ka sikka",
    "₹20 note": "₹20 ka note",
    "School ID from class 5": "Class 5 ka school ID",
    "One unmatched sock": "Ek akela moza",
    "Remote that controls nothing": "Remote jo kisi kaam ka nahi",
    "Forgotten cricket ball": "Bhooli hui cricket ball",
    "Plastic bag full of plastic bags": "Plastic bag mein aur plastic bags",
    "Biscuit tin… full of sewing supplies":
      "Biscuit ke dabbe mein silai ka samaan",
  },
  i = {
    saveKey: "apni-diwali-v1",
    reward: 99999,
    temple: { donations: [0, 0, 0], wishLength: 240, maxWishes: 20 },
    speed: 4.2,
    reach: 2.2,
    cracker: {
      particles: 160,
      lifetime: 5,
      cycle: 1.8,
      speed: 3,
      variation: 4,
      gravity: 7,
      size: 0.15,
      color: 16766084,
    },
    discoveries: [],
    chores: [],
    searches: [],
    products: {
      diyas: {
        name: "Mitti ke diyas",
        price: 0,
        description: "Darwaaze ke liye chhe pyaare diye.",
        stall: 0,
        max: 1,
      },
      toran: {
        name: "Gende ka toran",
        price: 0,
        description: "Darwaaze par phoolon ki roshni.",
        stall: 0,
        max: 1,
      },
      rangoli: {
        name: "Rangoli colours",
        price: 0,
        description: "Aangan mein phoolon wali rangoli banao.",
        stall: 1,
        max: 1,
      },
      lights: {
        name: "Naye light bulbs",
        price: 0,
        description: "Pichhle saal wali lights ke liye.",
        stall: 1,
        max: 1,
      },
      fountain: {
        name: "Tara fountain",
        price: 0,
        description: "Game mein sunhare taaron ki barsaat.",
        stall: 2,
        max: 8,
      },
    },
    stalls: l,
    missions: [
      [
        "iglu~uglu house · Romantic Diwali",
        "Apne partner ke sath iglu~uglu house ghoomo, bedroom mein time spend karo, aur Diwali mela explore karo!",
      ],
    ],
    aartis: {
      ganesh: {
        id: "Yuex2EnsGiY",
        title: "Ganesh aarti",
        start: 0,
        fallback: {
          id: "IJKafzL8kLQ",
          title: "Ganesh aarti · Rajshri Soul",
          start: 0,
        },
      },
      lakshmi: {
        id: "SyqgAt-T0iQ",
        title: "Lakshmi aarti",
        start: 0,
        fallback: {
          id: "E_fiT84vk9s",
          title: "Lakshmi aarti · Shemaroo Bhakti",
          start: 0,
          fallback: {
            id: "oec7CXRAfeE",
            title: "Lakshmi aarti · Shemaroo alternate",
            start: 0,
          },
        },
      },
    },
    music: [
      { id: "b5WF7yZcc1w", title: "1. Ghar More Pardesiya", start: 0 },
      { id: "P8PWN1OmZOA", title: "2. Aaj Phir Tum Pe Pyar Aaya Hai", start: 0 },
      { id: "BddP6PYo2gs", title: "3. Mohabbat Barsa Dena Tu - Sawan Aaya Hai", start: 0 },
      { id: "dsWWU5eBwQ8", title: "4. Sanam Re", start: 0 },
      { id: "H5tJ1zB4n2E", title: "5. Kangna Tera Ni", start: 0 },
    ],
  },
  k = {
    home: {
      name: "iglu~uglu house",
      subtitle: "Sharma ji ki colony",
      spawn: { x: 0, z: 12 },
      bounds: { minX: -10.6, maxX: 10.6, minZ: -9.5, maxZ: 13.5 },
      arrivals: { neighborhood: { x: 0, z: 12 }, market: { x: 0, z: 12 } },
    },
    neighborhood: {
      name: "Sharma Colony",
      subtitle: "Ghar, gali aur apne log",
      spawn: { x: 0, z: 13 },
      bounds: { minX: -16.5, maxX: 16.5, minZ: -18.5, maxZ: 18.5 },
      arrivals: { home: { x: 0, z: 12 }, market: { x: 0, z: -15 } },
    },
    market: {
      name: "Diwali Bazaar",
      subtitle: "Diwali mela · Bazaar, mithai aur jhoole",
      spawn: { x: 0, z: 23 },
      bounds: { minX: -26, maxX: 26, minZ: -59, maxZ: 27 },
    },
  };
for (const [a, e] of Object.entries(t))
  i.products[a] = {
    name: e.title,
    price: 0,
    description:
      "Game wala patakha · Haath mein lo, rakho, jalao, phir peeche hato.",
    stall: e.stall,
    max: 12,
  };
for (const [a, e] of Object.entries(s))
  i.products["colour_" + a] = {
    name: e.name + " rang",
    price: 0,
    description: "Apni circle rangoli mein baar-baar istemaal karo.",
    stall: 1,
    max: 1,
  };
Object.assign(i.products, {
  soanpapdi: {
    name: "Sona Papdi gift box",
    price: 0,
    description: "Wahi gift jo ghoomkar wapas aata hai.",
    stall: 5,
    max: 3,
  },
  laddoo: {
    name: "Motichoor laddoo",
    price: 0,
    description: "Mele mein ek meetha sa break.",
    stall: 5,
    max: 8,
  },
  jalebi: {
    name: "Garam jalebi",
    price: 0,
    description: "Kadhai se seedhi, garam aur kurkuri.",
    stall: 6,
    max: 8,
  },
  chai: {
    name: "Adrak chai",
    price: 0,
    description: "Ek cup sukoon.",
    stall: 6,
    max: 8,
  },
  kurta: {
    name: "Diwali wala teal kurta",
    price: 0,
    description: "Diwali par bag se nikaalkar pehno.",
    stall: 7,
    max: 1,
  },
});
i.products.rangoli.description =
  "Shuru ke rang: gulabi, haldi aur safed. Yahan aur shades lo.";
i.effectPrices = { laddoo: 0, sky: 0, name: 0, ravan: 0 };
for (const [a, e] of Object.entries(r))
  a !== "everyday" &&
    (i.products[a] = {
      name: e.name,
      price: 0,
      description:
        "Free romantic Diwali look. Bag ya Almirah se jab chahe badlo.",
      stall: 7,
      max: 1,
    });
i.friendMusic = { ...i.music[0], title: "Doston wali rangoli" };
export { m as C, o as D, d as F, k as M, r as O, i as a, h as b, n as v };
