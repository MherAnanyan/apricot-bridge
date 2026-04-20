import ExperiencePage, { ExperienceData } from "@/components/ExperiencePage";

const data: ExperienceData = {
  id: "forest-night",
  icon: "🌲",
  tag: "Nature",
  title: "Night in the Forest",
  subtitle: "Sleep under ancient trees in Dilijan. No WiFi, no agenda — just fire, fog, and the sound of the beech forest at night.",
  duration: "1 night / 2 days",
  location: "Dilijan National Park, Tavush",
  price: "From $89",
  groupSize: "2–8 people",
  heroDesc: "Dilijan is called the 'Armenian Switzerland' — and for good reason. Its forests are ancient, dense, and alive in a way that you feel the moment you step off the road. This experience takes you deep into them. You'll arrive in the afternoon, set up in a traditional wooden shelter, cook over an open fire as the light fades, and fall asleep to sounds you've probably never heard before. In the morning, the fog rolls in through the trees. Breakfast is made slowly. There's nowhere to be.",
  color: "#3B6B2A",
  sections: [
    {
      heading: "Why the Dilijan forest?",
      body: "The Dilijan National Park covers 28,000 hectares of some of the most biodiverse forest in the Caucasus. Hornbeam, beech, oak — trees that have been here for centuries. The area has been protected since Soviet times but feels wilder and more real than most 'nature reserves' in the world. There are no loud tour groups here. Just the forest.",
    },
    {
      heading: "What you'll actually experience",
      body: "This isn't glamping. The shelter is simple, warm, and wooden — the kind Armenian shepherds have used for generations. Dinner is cooked on an open fire: khorovats (barbecue), bread, fresh herbs, local cheese. Your guide was born in this region and knows every trail, every sound, every season. You'll take a night walk. You'll see stars you forgot existed. You'll sleep well.",
    },
    {
      heading: "Morning in the forest",
      body: "The best part of a forest night is the morning. Mist moves through the trees. Everything is quiet. Breakfast is slow — Armenian coffee, eggs, lavash, honey. There's a short morning hike before the drive back to Yerevan. Most guests say they feel different on the drive home. Lighter, somehow.",
    },
  ],
  itinerary: [
    { time: "Afternoon — Day 1", desc: "Pickup from Yerevan. Drive north through Sevan and into the Tavush region (approx 2.5 hours). Stop at a local bakery on the way." },
    { time: "Late afternoon", desc: "Arrive at camp. Set up, short orientation walk with your guide, collect firewood." },
    { time: "Evening", desc: "Open fire dinner — khorovats, fresh bread, salads, local cheese, wine or local beer. Campfire until late." },
    { time: "Night", desc: "Optional night walk through the forest with guide. Stargazing. Sleep in the wooden shelter." },
    { time: "Morning — Day 2", desc: "Slow breakfast. Morning fog walk. Coffee by the fire." },
    { time: "Late morning", desc: "Short forest hike to a viewpoint or hidden waterfall, depending on season." },
    { time: "Afternoon", desc: "Return drive to Yerevan. Arrive by early evening." },
  ],
  includes: [
    "Private transport from/to Yerevan",
    "Experienced local forest guide",
    "Traditional wooden shelter",
    "Campfire dinner (khorovats, bread, cheese, wine)",
    "Breakfast and morning coffee",
    "All firewood and camp equipment",
    "Night walk and morning hike",
    "Small group (max 8 people)",
  ],
  gallery: [
    { label: "Ancient beech forest, Dilijan", color: "linear-gradient(160deg, #2D5A1B 0%, #4A8C2A 100%)" },
    { label: "Campfire dinner", color: "linear-gradient(160deg, #8B5A2E 0%, #C4813A 100%)" },
    { label: "Morning fog", color: "linear-gradient(160deg, #3B5A3B 0%, #6B8C6B 100%)" },
  ],
};

export default function Page() {
  return <ExperiencePage data={data} />;
}
