import ExperiencePage, { ExperienceData } from "@/components/ExperiencePage";

const data: ExperienceData = {
  id: "wine-trail",
  icon: "🍷",
  tag: "Wine & Culture",
  title: "Wine & Apricot Trail",
  subtitle: "Drive south through the oldest wine country in the world. Taste wine pressed by hand. Eat at a winemaker's table.",
  duration: "Full day (approx 11 hours)",
  location: "Areni, Vayots Dzor",
  price: "From $75",
  groupSize: "2–8 people",
  heroDesc: "In 2011, archaeologists found a winery inside the Areni-1 cave dating to 6,100 years ago — the oldest known winemaking facility in the world. It's in Armenia. The tradition never stopped. Today the Areni region produces some of the most interesting wine in the Caucasus, made from grape varieties found nowhere else. This trip takes you there — to the cave, to the vineyards, to a family winery, and to an apricot orchard that looks like a painting in spring.",
  color: "#993C6E",
  sections: [
    {
      heading: "Areni-1: the world's oldest winery",
      body: "The cave sits above the village of Areni, carved into the red cliff face of the Vayots Dzor gorge. Inside, archaeologists found wine press equipment, storage jars, and grape seeds dating back to 4100 BC. The cave is still open and you can walk through it. Standing inside, knowing that humans have been making wine here for over 6,000 years, is a strange and powerful feeling.",
    },
    {
      heading: "The wine",
      body: "Areni Noir is the dominant grape of the region — deep, dark, with a tartness that's unique to these mountain vineyards. You'll taste it at a family winery where wine is still made in clay amphorae buried underground, exactly as it was thousands of years ago. No tour group. A table, some glasses, and the winemaker himself.",
    },
    {
      heading: "The apricots",
      body: "Armenia and the apricot have a relationship that goes back to the beginning. The Latin name for apricot is Prunus armeniaca — the Armenian plum. The Ararat valley orchards in spring, when the trees are in bloom, are one of the most beautiful things in this part of the world. In summer you eat them straight off the tree, warm from the sun.",
    },
  ],
  itinerary: [
    { time: "Morning", desc: "Pickup from Yerevan. Drive south through the Ararat plain, past Mount Ararat, into the Vayots Dzor gorge (approx 1.5 hours)." },
    { time: "Late morning", desc: "Visit the Areni-1 archaeological cave. Walk through the ancient winery with your guide." },
    { time: "Midday", desc: "Family winery visit and tasting. Sit at the winemaker's table, taste Areni Noir and white wines, learn the ancient clay vessel method." },
    { time: "Afternoon", desc: "Walk through apricot and pomegranate orchards (seasonal — spectacular in April/May bloom, fruitful in July/August)." },
    { time: "Late afternoon", desc: "Lunch at a family table in the village. Wine, local food, no rush." },
    { time: "Evening", desc: "Drive back to Yerevan through the gorge at golden hour. Arrive by evening." },
  ],
  includes: [
    "Private transport from/to Yerevan",
    "Areni-1 cave visit with guide",
    "Family winery visit and wine tasting",
    "Apricot & pomegranate orchard walk",
    "Family lunch with local wines",
    "Local expert guide",
    "Bottle of Areni wine to take home",
    "Small group (max 8 people)",
  ],
  gallery: [
    { label: "Vayots Dzor gorge & vineyards", color: "linear-gradient(160deg, #6B2A4A 0%, #993C6E 100%)" },
    { label: "Areni-1 cave winery", color: "linear-gradient(160deg, #8B3A2A 0%, #C45A3A 100%)" },
    { label: "Apricot orchards in bloom", color: "linear-gradient(160deg, #C45A0A 0%, #E8A040 100%)" },
  ],
};

export default function Page() {
  return <ExperiencePage data={data} />;
}
