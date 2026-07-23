export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "list"; items: string[] }
  | { type: "image"; caption: string; src?: string; alt?: string }
  | { type: "cta"; label: string };

export interface BlogPost {
  slug: string;
  title: string;
  metaDescription: string;
  excerpt: string;
  date: string;
  heroImage?: { src: string; alt: string };
  thumbnail?: { src: string; alt: string };
  content: BlogBlock[];
  related: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "types-of-roofing-materials-calgary",
    title: "Types of Roofing Materials for Calgary Homes: Which One Is Right for You?",
    metaDescription:
      "Comparing roofing materials for your Calgary home? Learn about asphalt shingles, metal roofing, and more — including which options handle Calgary's weather best.",
    excerpt:
      "Comparing roofing materials for your Calgary home? Here's how asphalt shingles and metal roofing stack up against our weather.",
    date: "2026-01-12",
    thumbnail: { src: "/images/blog/calgary-roofing-asphalt-shingle-roof-4.webp", alt: "Close-up of an asphalt shingle roof in Calgary" },
    content: [
      {
        type: "p",
        text: "When it comes to choosing a roof for your Calgary home, the material you pick affects everything from durability to curb appeal to how well your roof handles our unpredictable weather — from summer hailstorms to harsh winter freeze-thaw cycles.",
      },
      { type: "h2", text: "Asphalt Shingles" },
      {
        type: "p",
        text: "Asphalt shingles remain the most popular roofing choice for Calgary homeowners, and for good reason. Unlike rigid materials, shingles have a flexible structure that resists wind damage and won't crack or lift the way brittle materials can during Alberta's temperature swings. They're lightweight, which reduces stress on your home's structure, and they come in a wide range of colors and styles to match any home's aesthetic. With proper installation, asphalt shingles can last 20-25 years even in Calgary's climate.",
      },
      {
        type: "image",
        caption: "Asphalt shingle roof installation",
        src: "/images/blog/calgary-roofing-asphalt-shingle-roof-4.webp",
        alt: "Close-up of an asphalt shingle roof on a Calgary home",
      },
      { type: "h2", text: "Metal Roofing" },
      {
        type: "p",
        text: "Metal roofing has grown in popularity across Calgary for its exceptional durability and ability to shed snow quickly — a real advantage during our long winters. While the upfront cost is higher than shingles, metal roofs can last 40-70 years with minimal maintenance.",
      },
      { type: "h2", text: "Which is right for you?" },
      {
        type: "p",
        text: "The best roofing material depends on your budget, the age and style of your home, and how long you plan to stay in the property. Four Brothers Exteriors provides free consultations to help Calgary homeowners choose the right roofing material for their specific needs and budget.",
      },
      { type: "cta", label: "Contact Four Brothers Exteriors" },
    ],
    related: ["roof-material-durability-weather-resistance-calgary", "roof-replacement-cost-calgary"],
  },
  {
    slug: "roof-material-durability-weather-resistance-calgary",
    title: "Roof Materials 101: Understanding Durability and Weather Resistance in Calgary",
    metaDescription:
      "Learn what makes certain roofing materials more durable in Calgary's climate — from summer heat to winter cold — and how to choose materials that protect your home year-round.",
    excerpt:
      "What makes a roofing material durable in Calgary's climate? Here's what to look for before your next install or replacement.",
    date: "2026-01-19",
    content: [
      {
        type: "p",
        text: "Calgary homeowners face a unique challenge when it comes to roofing: our climate swings from intense summer heat to brutal winter cold, often within the same week. That's why choosing durable, weather-resistant roofing materials matters more here than almost anywhere else in Canada.",
      },
      { type: "h2", text: "What Makes a Roofing Material Durable?" },
      {
        type: "p",
        text: "Quality roofing materials are manufactured to resist the freeze-thaw cycles that are so common in Alberta. Materials that expand and contract too much with temperature changes are more prone to cracking, warping, and premature failure. That's why we recommend materials specifically rated for extreme climate variation when installing or replacing roofs on Calgary homes.",
      },
      { type: "image", caption: "Roof material detail in changing Calgary weather" },
      { type: "h2", text: "Temperature Regulation" },
      {
        type: "p",
        text: "A quality roof does more than protect against the elements — it also helps regulate your home's internal temperature. Well-installed roofing materials help keep heat out during Calgary's hot summer months and prevent cold air infiltration during winter, which can translate into real energy savings on heating and cooling costs.",
      },
      { type: "h2", text: "Cost vs. Long-Term Value" },
      {
        type: "p",
        text: "While premium materials come with a higher upfront cost, they often provide better long-term value through extended lifespan and reduced maintenance needs. Our team at Four Brothers Exteriors can walk you through the cost-benefit of different material options based on your specific home and budget.",
      },
      { type: "cta", label: "Get a free consultation" },
    ],
    related: ["types-of-roofing-materials-calgary", "signs-you-need-a-roof-renovation-calgary"],
  },
  {
    slug: "signs-you-need-a-roof-renovation-calgary",
    title: "Do You Need a Roof Renovation? Signs Your Calgary Roof Needs Attention",
    metaDescription:
      "Not sure if your roof needs a repair or full renovation? Learn the warning signs Calgary homeowners should watch for, from worn shingles to damaged eavestroughs.",
    excerpt:
      "Not sure if your roof needs a repair or a full renovation? Here are the warning signs Calgary homeowners should watch for.",
    date: "2026-01-26",
    thumbnail: { src: "/images/blog/calgary-roofing-shingle-installation-3.webp", alt: "Roofer installing new roofing material on a Calgary home" },
    content: [
      {
        type: "p",
        text: "Roof renovation involves more than just replacing shingles — it's a comprehensive process that addresses the structural integrity of your entire roofing system. Here's what a proper roof renovation includes, and how to know if your Calgary home needs one.",
      },
      { type: "h2", text: "What Does Roof Renovation Involve?" },
      {
        type: "p",
        text: "A full roof renovation typically includes:",
      },
      {
        type: "list",
        items: [
          "Replacing the roof's carrier system (structural components) that have worn down over time",
          "Removing and replacing damaged, cracked, or unqualified shingles and tiles",
          "Repairing or replacing eavestroughs and gutters that have deteriorated and lost their effectiveness",
          "Addressing any underlying issues with roof decking or ventilation",
        ],
      },
      {
        type: "image",
        caption: "Roof renovation in progress on a Calgary home",
        src: "/images/blog/calgary-roofing-shingle-installation-3.webp",
        alt: "Roofer installing new roofing material during a Calgary roof renovation",
      },
      { type: "h2", text: "Signs You May Need a Roof Renovation" },
      {
        type: "list",
        items: [
          "Shingles that are curling, cracking, or missing granules",
          "Visible sagging in the roofline",
          "Water stains on your ceiling or in your attic",
          "Eavestroughs pulling away from the roof or no longer draining properly",
          "Your roof is 20+ years old and hasn't had major work done",
        ],
      },
      { type: "h2", text: "Why Calgary Homeowners Shouldn't Wait" },
      {
        type: "p",
        text: "Calgary's harsh weather — from hailstorms to heavy snow loads — can accelerate roof deterioration. Catching issues early through a proper renovation prevents small problems from becoming costly emergency repairs.",
      },
      { type: "cta", label: "Contact Four Brothers Exteriors" },
    ],
    related: ["how-to-spot-hail-damage-calgary-roof", "roof-replacement-cost-calgary"],
  },
  {
    slug: "roof-replacement-cost-calgary",
    title: "How Much Does a Roof Replacement Cost in Calgary?",
    metaDescription:
      "Wondering about roof replacement costs in Calgary? Learn what factors affect pricing and get an honest breakdown from local roofing experts.",
    excerpt:
      "Wondering what a roof replacement actually costs in Calgary? Here's an honest breakdown of what drives the price.",
    date: "2026-02-02",
    content: [
      {
        type: "p",
        text: "One of the most common questions Calgary homeowners ask is: “How much will my roof replacement actually cost?” While every project is different, understanding the key factors that affect pricing can help you budget accordingly and avoid surprises.",
      },
      { type: "h2", text: "Factors That Affect Roof Replacement Cost" },
      {
        type: "list",
        items: [
          "Roof size — larger roofs require more materials and labor",
          "Material choice — asphalt shingles are typically more affordable than metal roofing",
          "Roof complexity — roofs with multiple angles, valleys, or steep pitches take longer to install",
          "Removal of old roofing — tear-off and disposal of your existing roof adds to project scope",
          "Accessibility — roofs that are harder to access may require additional labor",
        ],
      },
      { type: "image", caption: "Roof replacement project on a Calgary home" },
      { type: "h2", text: "Why Free Quotes Matter" },
      {
        type: "p",
        text: "At Four Brothers Exteriors, we believe in honest, transparent pricing. That's why we offer free, no-obligation quotes for every Calgary homeowner — so you know exactly what you're paying for before any work begins. No hidden fees, no surprise costs.",
      },
      { type: "cta", label: "Request a free quote" },
    ],
    related: ["types-of-roofing-materials-calgary", "signs-you-need-a-roof-renovation-calgary"],
  },
  {
    slug: "how-to-spot-hail-damage-calgary-roof",
    title: "How to Spot Hail Damage on Your Calgary Roof",
    metaDescription:
      "Calgary is no stranger to hailstorms. Learn how to identify hail damage on your roof and why prompt inspection matters for insurance claims and roof longevity.",
    excerpt:
      "Even a single severe hailstorm can cause significant roof damage. Here's how to spot it before it turns into a leak.",
    date: "2026-02-09",
    heroImage: { src: "/images/blog/calgary-roofing-hail-damage-shingle-closeup-1.webp", alt: "Close-up of hail damage bruising on a Calgary asphalt shingle roof" },
    thumbnail: { src: "/images/blog/calgary-roofing-hail-impact-marks-circled-2.webp", alt: "Hail impact marks circled on a Calgary shingle roof" },
    content: [
      {
        type: "p",
        text: "Calgary sits in one of Canada's most hail-prone regions, and even a single severe storm can cause significant roof damage — sometimes without obvious visible signs from the ground.",
      },
      { type: "h2", text: "Common Signs of Hail Damage" },
      {
        type: "list",
        items: [
          "Dark spots or bruising on shingles where granules have been knocked loose",
          "Dents or dings on metal flashing, vents, or gutters",
          "Cracked or split shingles",
          "Granules collecting in your downspouts or gutters after a storm",
        ],
      },
      {
        type: "image",
        caption: "Hail damage inspection on a Calgary roof",
        src: "/images/blog/calgary-roofing-hail-impact-marks-circled-2.webp",
        alt: "Hail impact marks circled during a roof inspection in Calgary",
      },
      { type: "h2", text: "Why You Shouldn't Wait to Get an Inspection" },
      {
        type: "p",
        text: "Hail damage isn't always immediately visible, but left unaddressed, it can lead to leaks and more costly repairs down the line. Many home insurance policies also have time-sensitive windows for filing hail damage claims, making a prompt inspection important for both your roof's health and your insurance coverage.",
      },
      { type: "h2", text: "Free Roof Inspections After Storms" },
      {
        type: "p",
        text: "Following any significant hailstorm, Four Brothers Exteriors offers free roof inspections for Calgary homeowners to assess potential damage and help navigate the insurance claims process if needed.",
      },
      { type: "cta", label: "Schedule a free inspection" },
    ],
    related: ["signs-you-need-a-roof-renovation-calgary", "roof-material-durability-weather-resistance-calgary"],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(post: BlogPost): BlogPost[] {
  return post.related
    .map((slug) => getBlogPost(slug))
    .filter((p): p is BlogPost => Boolean(p));
}
