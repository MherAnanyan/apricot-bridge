import ExperiencePage, { ExperienceData } from "@/components/ExperiencePage";

const data: ExperienceData = {
  id: "lake-sevan",
  icon: "🌅",
  tag: "Overnight",
  title: "Lake Sevan Sunset Camp",
  subtitle: "Barbecue on the shore of the highest lake in the Caucasus. Watch the sky turn black and fill with stars. Wake up and swim at sunrise.",
  duration: "1 night / 2 days",
  location: "Lake Sevan, Gegharkunik",
  price: "From $95",
  groupSize: "2–8 people",
  heroDesc: "Lake Sevan sits at 1,900 metres above sea level. It covers 1,242 square kilometres. On a clear day the water is so blue it looks like the sky fell into the mountains. This overnight experience is simple: drive up as the sun starts to go down, set up camp on the shore, cook over a fire, watch the sky do things you've never seen it do before, sleep, swim at sunrise, eat Sevan trout for breakfast. That's it. That's enough.",
  color: "#185FA5",
  sections: [
    {
      heading: "Lake Sevan",
      body: "Sevan is the largest lake in Armenia and one of the largest freshwater high-altitude lakes in the world. It's fed by 28 rivers and drained by one. The water is extraordinarily clear — you can see 5–6 metres down in calm conditions. The shoreline stretches for 260km, and most of it is completely undeveloped. Finding a quiet spot to camp is not difficult if you know where to look.",
    },
    {
      heading: "The night sky",
      body: "At nearly 2,000 metres altitude, with minimal light pollution, the sky above Sevan on a clear night is genuinely extraordinary. The Milky Way is visible with the naked eye. Your guide will point out constellations and explain the Armenian names for them — Armenian astronomers have been mapping the sky since ancient times. Bring a warm layer. Even in summer, nights by the lake get cold.",
    },
    {
      heading: "Sevan trout",
      body: "Ishkhan — Sevan trout — is one of the most prized fish in the Caucasus. It lives only in this lake. Breakfast the morning after the camp is freshly caught ishkhan, cooked simply over the fire with herbs and lemon. It's been described by more than one guest as the best fish they've ever eaten. The combination of altitude, cold water, and morning hunger probably helps.",
    },
  ],
  itinerary: [
    { time: "Afternoon — Day 1", desc: "Pickup from Yerevan. Drive east along the Sevanavank road to the camp location (approx 1.5 hours). Stop at Sevanavank monastery on the peninsula." },
    { time: "Late afternoon", desc: "Set up camp on the shore. First swim if the weather allows — the water is cold and completely clear." },
    { time: "Sunset", desc: "Watch the sun set over the western mountains. Photographs. Silence. This part is worth the whole trip." },
    { time: "Evening", desc: "Campfire barbecue on the shore — khorovats, grilled vegetables, fresh bread. Local wine. Stars begin to appear." },
    { time: "Night", desc: "Stargazing session with your guide. Sleep in camp tents or under the open sky if the weather is good." },
    { time: "Early morning — Day 2", desc: "Sunrise over the lake. Morning swim. Coffee by the fire." },
    { time: "Breakfast", desc: "Freshly cooked Sevan trout (ishkhan) with herbs, eggs, lavash, honey." },
    { time: "Late morning", desc: "Slow pack up. Drive back to Yerevan, arriving by midday." },
  ],
  includes: [
    "Private transport from/to Yerevan",
    "Lakeside camp setup and tents",
    "Campfire barbecue dinner",
    "Sevan trout breakfast",
    "Morning coffee and snacks",
    "Stargazing session with guide",
    "Sevanavank monastery visit",
    "All camp equipment provided",
    "Small group (max 8 people)",
  ],
  gallery: [
    { label: "Lake Sevan at sunset", color: "linear-gradient(160deg, #0A2A5A 0%, #185FA5 100%)" },
    { label: "Campfire on the shore", color: "linear-gradient(160deg, #5A2A0A 0%, #A05A1A 100%)" },
    { label: "Morning mist on the water", color: "linear-gradient(160deg, #1A3A5A 0%, #3A6A8A 100%)" },
  ],
};

export default function Page() {
  return <ExperiencePage data={data} />;
}
