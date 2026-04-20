import ExperiencePage, { ExperienceData } from "@/components/ExperiencePage";

const data: ExperienceData = {
  id: "food-immersion",
  icon: "🍽️",
  tag: "Food & Cooking",
  title: "Armenian Kitchen Immersion",
  subtitle: "Cook four Armenian dishes from scratch with a local family. Learn the stories behind each one. Eat everything together.",
  duration: "Half day (approx 5 hours)",
  location: "Yerevan & surrounds",
  price: "From $55",
  groupSize: "2–8 people",
  heroDesc: "Armenian food is not restaurant food. It's home food — slow, seasonal, and made with a precision that comes from doing the same thing every week for decades. Dolma wrapped in grape leaves picked that morning. Ghapama, the pumpkin stuffed with rice and dried fruits, that only gets made in autumn. Gata, the layered pastry that every Armenian grandmother makes differently. This half-day experience takes you into a real home kitchen to learn from the source.",
  color: "#C45A0A",
  sections: [
    {
      heading: "Why food matters here",
      body: "In Armenia, cooking and eating together is how relationships are maintained, how history is passed down, and how identity is expressed. The table is never small and the food is never not enough. Learning to cook Armenian food is not a cooking class — it's an introduction to a whole way of being together.",
    },
    {
      heading: "What you'll cook",
      body: "The menu changes with the season but always includes four dishes. Dolma (stuffed vine leaves with spiced meat and rice) is the cornerstone. Lavash is baked fresh in the tonir. Ghapama or another seasonal dish depending on the time of year. And gata — the walnut-and-sugar pastry that is Armenia's unofficial national sweet. You will be eating everything you cook.",
    },
    {
      heading: "The recipes",
      body: "Before you leave, you'll receive handwritten recipe cards for everything you cooked. Not a printout — handwritten, in the host family's handwriting, with their personal notes and variations. Many guests say these cards become some of the most used items in their kitchen back home.",
    },
  ],
  itinerary: [
    { time: "Morning / early afternoon", desc: "Meet your host family at their home near Yerevan. Quick tour of the kitchen, garden, and pantry — see what's seasonal and available today." },
    { time: "Cooking begins", desc: "Start with dolma — washing and preparing vine leaves, making the filling, rolling and layering. This takes time and patience. Both will be rewarded." },
    { time: "Main session", desc: "Lavash in the tonir, then ghapama or the seasonal main dish. Your host explains the history and significance of each dish while you work side by side." },
    { time: "Gata", desc: "Make gata pastry — this is the most technical part. Layering, rolling, the specific fold that creates the flaky texture. Every family has their variation." },
    { time: "Lunch", desc: "Sit down together and eat everything you cooked. Your host family joins you. Wine or traditional drinks on the table." },
    { time: "End", desc: "Receive your handwritten recipe cards. Return to your accommodation, very full." },
  ],
  includes: [
    "Transport from/to central Yerevan",
    "Full cooking session with host family",
    "All ingredients included",
    "Lunch — everything you cooked together",
    "Local guide and translator",
    "Handwritten recipe cards for all dishes",
    "Small group (max 8 people)",
    "Apron and equipment provided",
  ],
  gallery: [
    { label: "Dolma preparation", color: "linear-gradient(160deg, #5A3A0A 0%, #A0621A 100%)" },
    { label: "Lavash in the tonir", color: "linear-gradient(160deg, #8B4A1A 0%, #C4782A 100%)" },
    { label: "The family table", color: "linear-gradient(160deg, #6B3A1A 0%, #B05A2A 100%)" },
  ],
};

export default function Page() {
  return <ExperiencePage data={data} />;
}
