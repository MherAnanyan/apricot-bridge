import ExperiencePage, { ExperienceData } from "@/components/ExperiencePage";

const data: ExperienceData = {
  id: "village-day",
  icon: "🏡",
  tag: "Village Life",
  title: "One Day Village Life",
  subtitle: "Wake up on a real Armenian farm. Work, cook, eat, and sit at a family table. Go home a different person.",
  duration: "Full day (approx 12 hours)",
  location: "Lori Region, Northern Armenia",
  price: "From $65",
  groupSize: "2–8 people",
  heroDesc: "This is not a demonstration. You're not watching a family perform village life for tourists. You're joining one for the day. The Hovhannisyan family in the Lori region has been farming this land for generations. When you arrive, they put you to work. The cow needs milking. The tonir needs lighting. The garden needs attention. Lunch is what you grew, harvested, and cooked together. By the time you sit down to eat, you've earned it.",
  color: "#8B5A2E",
  sections: [
    {
      heading: "The Lori region",
      body: "Lori sits in the north of Armenia, a landscape of gorges, rivers, and old stone villages that feel untouched by the last hundred years. The air is different here. Cleaner, colder, pine-scented. The villages are small — some have fewer than 50 families — and the pace of life is completely different from Yerevan. This is where Armenia's agricultural heart still beats.",
    },
    {
      heading: "The family",
      body: "You'll spend the day with a real host family — not a guesthouse, not a restaurant. They grow their own vegetables, keep cows and chickens, and make everything from scratch. Your guide acts as translator. The grandmother will absolutely try to feed you more than you can eat. This is non-negotiable.",
    },
    {
      heading: "Lavash in the tonir",
      body: "The highlight for most guests is baking lavash. The tonir is a clay oven built into the ground, fired with wood. The dough is stretched thin on a pillow-shaped cushion and slapped against the inside of the oven wall in one smooth motion. Getting this right takes practice. You will fail several times. Everyone laughs. The lavash you eventually produce is the best bread you've ever eaten.",
    },
  ],
  itinerary: [
    { time: "Early morning", desc: "Pickup from Yerevan. Drive north to Lori (approx 2 hours). Arrive at the family farm as morning chores begin." },
    { time: "Morning", desc: "Farm work — milking, feeding animals, collecting eggs, garden work. Your guide explains everything. The family teaches, you follow." },
    { time: "Late morning", desc: "Cooking session. Lavash baking in the tonir, dolma preparation, fresh herb salads. This is hands-on — you're cooking, not watching." },
    { time: "Midday", desc: "Sit-down family lunch at a long table. Everything on the table was grown or made here. Local wine or mulberry vodka (if you want it)." },
    { time: "Afternoon", desc: "Rest, walk around the village, visit neighbours, or help with afternoon chores. No rush." },
    { time: "Late afternoon", desc: "Coffee and sweets. Say goodbye. Drive back to Yerevan, arriving by evening." },
  ],
  includes: [
    "Private transport from/to Yerevan",
    "Full day with host family",
    "All meals (breakfast, lunch, afternoon coffee)",
    "Lavash baking session in tonir",
    "Farm work activities",
    "Local guide and translator",
    "Recipe cards to take home",
    "Small group (max 8 people)",
  ],
  gallery: [
    { label: "Stone farmhouse, Lori region", color: "linear-gradient(160deg, #6B4A2A 0%, #A07040 100%)" },
    { label: "Baking lavash in the tonir", color: "linear-gradient(160deg, #C45A0A 0%, #E8941A 100%)" },
    { label: "Family lunch table", color: "linear-gradient(160deg, #5A3A1A 0%, #8B6040 100%)" },
  ],
};

export default function Page() {
  return <ExperiencePage data={data} />;
}
