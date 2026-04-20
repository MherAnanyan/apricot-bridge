import ExperiencePage, { ExperienceData } from "@/components/ExperiencePage";

const data: ExperienceData = {
  id: "hiking-dilijan",
  icon: "🏔️",
  tag: "Hiking",
  title: "Hiking the Dilijan Trails",
  subtitle: "Trek through ancient beech forests, find hidden monasteries, and swim in a mountain stream. Lunch prepared by your guide's mother.",
  duration: "Full day (approx 10 hours)",
  location: "Dilijan, Tavush Region",
  price: "From $70",
  groupSize: "2–8 people",
  heroDesc: "The trails around Dilijan are some of the most beautiful and least-visited in the entire Caucasus. You'll walk through forest that has barely changed in a thousand years, past 12th-century monasteries still used by monks, along rivers cold enough to make your feet go numb in seconds. Your guide grew up in these forests. The picnic lunch is made by his mother that morning and brought in a basket. This detail matters more than it sounds.",
  color: "#5A7A3A",
  sections: [
    {
      heading: "The trails",
      body: "The main trail system in Dilijan runs for over 100km through the national park. For this day experience, your guide selects the route based on your fitness level, the season, and what's worth seeing that specific day — wildflowers in May, mushrooms in September, snow on the higher paths in winter. The route typically covers 12–18km with around 400m elevation gain. No technical climbing required.",
    },
    {
      heading: "The monasteries",
      body: "Hidden in the forest above Dilijan are several medieval monasteries that most tourists never see because they don't know where to look. Goshavank, founded in the 12th century, contains some of the finest stone carving in Armenia. Haghartsin, surrounded by ancient trees, is one of the most atmospheric places in the country. Your guide knows them both — and knows when they're quiet.",
    },
    {
      heading: "The picnic",
      body: "This is not trail mix and energy bars. The picnic is prepared that morning by your guide's mother — lavash, fresh herbs, white cheese, cured meats, tomatoes, boiled eggs, homemade preserves, and usually something baked. You'll eat it by a stream or at a viewpoint, depending on the route. It's one of the most-mentioned parts of this experience in every review we've ever received.",
    },
  ],
  itinerary: [
    { time: "Early morning", desc: "Pickup from Yerevan or Dilijan. Drive to trail head (approx 2 hours from Yerevan, 20 min from Dilijan town)." },
    { time: "Morning hike", desc: "Set off on the main forest trail. Your guide explains the flora, fauna, and history along the way. Stop at the first monastery." },
    { time: "Midday", desc: "Picnic lunch at a stream crossing or mountain viewpoint. Take your time — this is the best part." },
    { time: "Afternoon hike", desc: "Continue to the second monastery or viewpoint, depending on energy and route. Optional: swim in the mountain stream." },
    { time: "Late afternoon", desc: "Descend through the forest, taking a different route back. Visit a local village at the trail's end." },
    { time: "Evening", desc: "Drive back to Yerevan or Dilijan. Optional dinner stop at a local roadside restaurant." },
  ],
  includes: [
    "Private transport from/to Yerevan or Dilijan",
    "Experienced local hiking guide",
    "Homemade picnic lunch by guide's family",
    "2 monastery visits with history",
    "Forest and river trails",
    "Small group (max 8 people)",
    "Water and snacks throughout",
    "Trail map and route notes",
  ],
  gallery: [
    { label: "Beech forest trail, Dilijan", color: "linear-gradient(160deg, #2A4A1A 0%, #4A7A2A 100%)" },
    { label: "Haghartsin monastery", color: "linear-gradient(160deg, #3A5A3A 0%, #6A8A5A 100%)" },
    { label: "Mountain stream crossing", color: "linear-gradient(160deg, #1A3A4A 0%, #3A6A7A 100%)" },
  ],
};

export default function Page() {
  return <ExperiencePage data={data} />;
}
