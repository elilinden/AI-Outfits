import fs from "node:fs";
import path from "node:path";
import { siteFacts } from "./site-data.mjs";

const root = path.resolve(new URL("..", import.meta.url).pathname);
const today = siteFacts.updatedDate;
const appStoreUrl = siteFacts.appStoreUrl;

function cleanPath(file) {
  if (file === "index.html" || file === "/") return "/";
  if (file === "blog/index.html" || file === "blog/") return "/blog/";
  if (file.endsWith(".html")) return `/${file.replace(/\.html$/, "/")}`;
  return file.startsWith("/") ? file : `/${file}`;
}

function cleanUrl(file) {
  return `https://wearra.app${cleanPath(file)}`;
}

const hubs = [
  {
    slug: "ai-wardrobe-app",
    title: "AI Wardrobe App for iPhone",
    description: "A direct-answer guide to Wearra as an AI wardrobe app for iPhone users who want outfit ideas from clothes they already own.",
    keywords: ["AI wardrobe app", "iPhone wardrobe app", "closet intelligence", "outfit generation"],
    image: "screenshots/wearra-ai-outfit-planner-home-screen.webp",
    imageAlt: "Wearra iPhone home screen with outfit ideas and AI Stylist access",
    answer: "Wearra is an AI outfit planner and digital closet app for iPhone that helps users digitize clothes, organize a digital closet, generate outfits, chat with an AI Stylist, plan looks, build packing lists, and preview outfits with virtual Try On.",
    sections: [
      ["What Wearra does", "Wearra turns wardrobe photos and saved clothing items into structured closet data. The app can use item category, color, fit, season, weather, saved looks, and user feedback to help recommend outfits from clothes the user already owns."],
      ["Why closet intelligence matters", "Generic style advice often becomes a shopping list. Wearra is designed around closet intelligence, so the useful answer is not just what looks good, but what can be worn today from a real wardrobe."],
      ["Common use cases", "Wearra is useful for people who want one iPhone app for closet organization, outfit ideas, virtual try-on previews, weekly outfit planning, and trip packing."]
    ],
    bullets: ["Digital closet organization", "AI outfit generation from owned clothes", "AI Stylist chat", "Weekly outfit planning", "Travel packing lists", "Virtual Try On with render credits"],
    comparison: [
      ["Manual closet list", "Good for remembering items", "No AI outfit generation or visual workflow"],
      ["Generic styling app", "Good for broad inspiration", "May not know what the user owns"],
      ["Wearra", "Connects digital closet, outfit planning, Try On, and packing", "Works best after users add their real clothes"]
    ],
    extraSections: [
      {
        title: "Three real closet examples",
        bullets: [
          "A summer internship closet can turn black trousers, straight jeans, a white tee, a button-down, cardigan, blazer, sneakers, loafers, and one coat into work, commute, dinner, and casual outfits.",
          "A small campus wardrobe can reuse two jeans, one skirt, four tops, a hoodie, and two shoes across class, study sessions, errands, and weekend plans.",
          "A travel-heavy closet can save airport outfits, dinner looks, and repeatable layers so packing starts from proven combinations instead of a blank checklist."
        ]
      },
      {
        title: "Before and after: camera roll to outfit ideas",
        paragraphs: [
          "Before Wearra, closet photos often live as scattered camera-roll images or screenshots from shopping receipts. After setup, those pieces become searchable wardrobe items with categories, colors, seasons, brands, and saved outfit context.",
          "Once the closet is structured, Wearra can support more useful outfit recommendations because it is choosing from clothes the user already owns instead of turning every suggestion into another shopping prompt."
        ]
      },
      {
        title: "Best for / not best for",
        table: {
          headings: ["Best for", "Not best for"],
          rows: [
            ["iPhone users who want outfit ideas from their own closet", "People looking for a shopping-only fashion marketplace"],
            ["Wardrobes with enough saved items to create useful combinations", "Users who do not want to photograph or import clothing items"],
            ["Planning, packing, Try On, and AI Stylist workflows in one place", "People who only need a simple notes checklist"]
          ]
        }
      }
    ],
    related: ["blog/best-ai-wardrobe-app-iphone.html", "blog/ai-outfit-recommendations-from-your-closet.html", "blog/ai-wardrobe-app-privacy-photos.html"],
    faq: [
      ["Is Wearra an AI wardrobe app?", "Yes. Wearra is an iPhone AI wardrobe app that combines a digital closet, AI outfit recommendations, AI Stylist chat, planning, packing, and virtual Try On."],
      ["Does Wearra recommend outfits from my closet?", "Yes. Wearra is designed to generate outfit ideas from wardrobe items a user has saved in the app."],
      ["Is Wearra free?", "Wearra is free to download. Try On requires Pro, bonus credits, or a render pack."]
    ]
  },
  {
    slug: "virtual-try-on-app",
    title: "Virtual Try-On App for Your Own Clothes",
    description: "How Wearra supports virtual try-on workflows for users who want to preview outfits from their own wardrobe on iPhone.",
    keywords: ["virtual try-on app", "AI try-on app", "garment masking", "outfit rendering"],
    image: "videos/wearra-virtual-try-on-demo-poster.webp",
    imageAlt: "Wearra virtual try-on rendering demo poster",
    video: {
      src: "videos/wearra-virtual-try-on-demo.mp4",
      poster: "videos/wearra-virtual-try-on-demo-poster.webp",
      title: "Wearra virtual try-on rendering demo",
      description: "A short muted demo showing a Wearra virtual try-on render moving from outfit selection to a generated preview."
    },
    answer: "Wearra previews outfits from clothes saved in a user's wardrobe on the user's own photo. Try On coordinates the selected outfit, the user's photo, and AI/render providers to create a visual preview for color balance, silhouette, layering, and outfit direction before getting dressed.",
    sections: [
      ["What virtual try-on helps with", "Virtual try-on is useful when a user wants to check color balance, silhouette, layering, or outfit direction from clothing they already saved before wearing or packing a look."],
      ["How Wearra describes the workflow", "Wearra coordinates AI-assisted rendering workflows for user photos and wardrobe items. It does not claim that every underlying model was built from scratch, and generated previews should be treated as styling guidance rather than exact tailoring or fit predictions."],
      ["Pricing and credits", "Wearra is free to download. Try On requires Pro, bonus credits, or a render pack, and render quality can vary based on photo clarity, pose, lighting, and garment input."]
    ],
    bullets: ["Preview outfits on a user photo", "Use outfits from the digital closet", "Compare styling options visually", "Keep Try On tied to planning, saving, and packing workflows"],
    comparison: [
      ["Mirror check", "Fast and familiar", "Only works with clothes already on body"],
      ["Model/catalog try-on", "Useful while shopping", "Not based on the user's wardrobe"],
      ["Wearra Try On", "Preview owned-clothes outfits on a user photo", "AI render results can vary with photo quality"]
    ],
    extraSections: [
      {
        title: "Good photo vs bad photo",
        table: {
          headings: ["Good input photo", "Harder input photo"],
          rows: [
            ["Clear lighting, full outfit area visible, simple background", "Dim lighting, heavy shadows, mirror glare, or cropped body"],
            ["Front-facing pose with arms and garments easy to identify", "Twisted pose, hidden garment edges, or hands covering clothing"],
            ["Garment photos with clean shape and visible texture", "Wrinkled, folded, or partially blocked garment photos"]
          ]
        }
      },
      {
        title: "Try-on result limitations",
        paragraphs: [
          "Virtual Try On is a preview tool, not a tailoring guarantee. Results can vary with lighting, body pose, garment shape, texture, and how much of the clothing item is visible.",
          "The most useful way to treat a render is as an outfit direction check: color balance, silhouette, layering, and whether a look is worth saving, packing, or trying on in real life."
        ]
      },
      {
        title: "Demo video transcript",
        video: true,
        paragraphs: [
          "The demo shows a Wearra virtual try-on workflow moving from a selected outfit to a generated preview on a phone-sized screen. The video is muted, so the workflow is understandable without sound.",
          "Try On requires Pro, bonus credits, or a render pack. Wearra is free to download, and render credits are used only when a Try On render is requested."
        ]
      }
    ],
    related: ["blog/best-virtual-try-on-app-own-clothes.html", "blog/virtual-try-on-photo-tips.html", "support.html"],
    faq: [
      ["Can Wearra try on my own clothes?", "Wearra is built around a user's saved wardrobe, so Try On can be part of previewing looks from items they own."],
      ["Do virtual try-on results always look exact?", "No. AI renders can vary. Clear photos, simple backgrounds, and front-facing poses usually help."],
      ["Which providers can Wearra use?", "Wearra may use AI/render providers including Google Gemini, Google Vertex AI, FASHN, fal.ai/Kling, and LightX depending on the feature and request."]
    ]
  },
  {
    slug: "digital-closet-app",
    title: "Digital Closet App for iPhone",
    description: "A clear overview of Wearra as a digital closet app for organizing, searching, styling, and reusing clothes on iPhone.",
    keywords: ["digital closet app", "closet organizer app", "wardrobe organizer iPhone", "iOS styling app"],
    image: "screenshots/wearra-digital-closet-grid-iphone.webp",
    imageAlt: "Wearra digital closet grid with categories, search, favorites, and clothing item cards",
    answer: "Wearra is an AI outfit planner and digital closet app for iPhone that helps users add clothing photos, clean up item images, organize wardrobe data, search their closet, save outfits, and use AI-assisted styling features.",
    sections: [
      ["From photos to closet data", "A digital closet is more useful when clothing images become structured wardrobe objects. Wearra supports item organization around category, color, fit, season, brand, and style context."],
      ["Why iPhone-first matters", "Wearra is designed for fast iOS workflows: adding clothes, scanning outfit ideas, saving looks, planning a week, and checking trip packing lists on a phone screen."],
      ["Privacy-conscious storage", "Wardrobe data is local by default. Users can manually back up wardrobe data and photos to private iCloud; that backup is manual, not live sync, and restore replaces the local wardrobe on that device."]
    ],
    bullets: ["Add clothes from photos", "Search and filter wardrobe items", "Save outfits and OOTDs", "Use optional manual iCloud Backup", "Connect closet data to outfit recommendations"],
    comparison: [
      ["Camera roll album", "Easy to start", "Hard to search by category, color, outfit, or trip"],
      ["Spreadsheet", "Structured tracking", "Not visual enough for daily styling"],
      ["Wearra", "Visual digital closet connected to outfit generation", "Requires iPhone on iOS 18 or later"]
    ],
    extraSections: [
      {
        title: "Closet setup checklist",
        bullets: [
          "Start with high-use items first: favorite tops, bottoms, shoes, layers, and dresses.",
          "Use clear photos with the garment shape visible and avoid busy backgrounds when possible.",
          "Add categories, colors, seasons, and brand details that will actually help you search later.",
          "Save full outfits as you wear them so the closet learns useful combinations, not just individual items."
        ]
      },
      {
        title: "Item-tagging examples",
        table: {
          headings: ["Item", "Useful tags", "Why it helps"],
          rows: [
            ["Black straight-leg trousers", "bottoms, black, work, year-round", "Easy to reuse for office, dinner, and travel outfits"],
            ["White ribbed tank", "top, white, summer, layering", "Works as a base layer or warm-weather top"],
            ["Tan trench coat", "outerwear, tan, rain, travel", "Useful for weather-aware packing and outfit planning"]
          ]
        }
      },
      {
        title: "Common digitizing mistakes",
        bullets: [
          "Adding only special-event clothes and skipping the everyday basics that actually build most outfits.",
          "Using dark or cropped photos that make color and garment shape harder to recognize.",
          "Treating the closet as a one-time catalog instead of updating it when clothes are donated, archived, or worn often."
        ]
      }
    ],
    related: ["blog/digital-closet-app-iphone-ios-18.html", "blog/how-to-digitize-your-closet-iphone.html", "blog/closet-organization-app-vs-spreadsheet.html"],
    faq: [
      ["What is a digital closet app?", "A digital closet app creates a searchable version of a user's wardrobe so clothing can be organized, styled, planned, and reused more easily."],
      ["Does Wearra support iCloud Backup?", "Yes. Users can manually back up wardrobe data and photos to private iCloud. It is not live sync."],
      ["Does Wearra support Apple sign-in?", "Wearra supports Apple, Google, and email/password sign-in."]
    ]
  },
  {
    slug: "ai-outfit-planner",
    title: "AI Outfit Planner for Daily Looks",
    description: "How Wearra helps plan daily and weekly outfits with AI recommendations, closet context, weather, and saved looks.",
    keywords: ["AI outfit planner", "outfit planner app", "weekly outfit planning", "AI stylist"],
    image: "screenshots/wearra-outfit-planner-calendar-iphone.webp",
    imageAlt: "Wearra planner calendar screen for scheduling outfits by day",
    answer: "Wearra is an AI outfit planner for iPhone that helps users generate daily outfit ideas, plan weekly looks, save favorite combinations, log OOTDs, and ask an AI Stylist for occasion-specific guidance.",
    sections: [
      ["Planning from a real closet", "Wearra's outfit planning is grounded in saved wardrobe items, so recommendations can stay closer to what the user can actually wear."],
      ["Context for better suggestions", "Weather, schedule, occasion, color compatibility, saved looks, and preference feedback can all make outfit generation more useful than a generic outfit prompt."],
      ["From recommendation to calendar", "A useful outfit planner should let a user save, plan, rewear, and review looks. Wearra connects daily recommendations with outfit calendar and OOTD history workflows."]
    ],
    bullets: ["Daily outfit generation", "AI Stylist chat", "Weekly outfit calendar", "Saved outfits", "OOTD history", "Weather-aware styling context"],
    comparison: [
      ["Calendar app", "Shows what is happening", "Does not suggest clothes"],
      ["Weather app", "Shows conditions", "Does not know closet items"],
      ["Wearra", "Combines outfit ideas, closet context, and planning", "Needs wardrobe data for best results"]
    ],
    related: ["blog/ai-outfit-planner-weather-calendar.html", "blog/how-to-plan-outfits-for-the-week.html", "blog/what-to-wear-when-you-have-nothing-to-wear.html"],
    faq: [
      ["Can Wearra plan outfits for the week?", "Yes. Wearra supports weekly outfit planning."],
      ["Can I ask Wearra what to wear?", "Yes. AI Stylist chat can help with outfit questions, occasions, travel, and combinations from a saved wardrobe."],
      ["Does Wearra replace personal judgment?", "No. Wearra provides styling suggestions and AI outputs that users should review for comfort, fit, and appropriateness."]
    ]
  },
  {
    slug: "travel-capsule-wardrobe-app",
    title: "Travel Capsule Wardrobe App",
    description: "How Wearra helps build travel capsule wardrobes and packing lists from clothes users already own.",
    keywords: ["travel capsule wardrobe app", "packing list app", "AI packing list", "capsule wardrobe"],
    image: "screenshots/wearra-packing-list-trip-form-iphone.webp",
    imageAlt: "Wearra trip form for creating a packing list by destination, dates, and activities",
    answer: "Wearra can help create travel capsule wardrobes by coordinating destination, weather, trip length, occasions, color compatibility, layering needs, and outfit rewear logic with clothes already saved in a user's closet.",
    sections: [
      ["Packing from what you own", "A generic packing checklist can miss what is actually in a user's wardrobe. Wearra starts from saved closet items so packing lists can become outfit capsules instead of disconnected items."],
      ["Why capsules reduce overpacking", "Capsule packing works when pieces share colors, layers, shoes, and repeatable outfit formulas. Wearra can help identify versatile pieces and plan looks across trip days."],
      ["Travel context", "Destination, forecast, trip length, activities, dress codes, and rewear logic all matter. Wearra is designed to turn those inputs into practical packing and outfit planning outputs."]
    ],
    bullets: ["Weather-aware packing suggestions", "Destination and trip length context", "Outfit rewear logic", "Color compatibility", "Fewer duplicates", "Packing lists from the digital closet"],
    comparison: [
      ["Generic packing list", "Prevents forgetting basics", "Does not know user wardrobe"],
      ["Notes app", "Flexible", "Easy to overpack duplicates"],
      ["Wearra", "Builds capsules from saved closet items", "Best after closet setup"]
    ],
    related: ["blog/closet-app-with-packing-list.html", "blog/how-to-pack-for-a-trip-without-overpacking.html", "blog/capsule-wardrobe-checklist-from-your-closet.html"],
    faq: [
      ["Can Wearra build packing lists?", "Yes. Wearra includes packing list workflows based on a user's closet and trip context."],
      ["Can Wearra help with capsule wardrobes?", "Yes. Wearra can help build capsule wardrobes for everyday use or travel by combining versatile items from the closet."],
      ["Does Wearra consider weather for trips?", "Wearra can use weather context for outfit suggestions and packing lists."]
    ]
  },
  {
    slug: "packing-list-app",
    title: "AI Travel Packing List App for Clothes You Own",
    description: "How Wearra helps create weather-aware travel packing lists and trip outfits from a user's own digital closet.",
    keywords: ["AI packing list app", "packing list app", "travel outfit planner", "closet packing list"],
    image: "screenshots/wearra-packing-list-trip-form-iphone.webp",
    imageAlt: "Wearra new trip screen for building packing lists from closet items",
    answer: "Wearra is an AI outfit planner and digital closet app for iPhone that can help build travel packing lists from clothes a user already owns, using destination, trip duration, weather, activities, dress codes, capsule coordination, and outfit rewear logic.",
    sections: [
      ["Why closet-based packing is different", "A normal packing checklist starts with generic categories. Wearra starts with saved closet items, which helps turn packing into a set of actual outfits."],
      ["Example packing flow", "For a 10-day Europe trip, a user might build around three bottoms, seven tops, two layers, one dress or nicer outfit, two pairs of shoes, and accessories that repeat across walking days, transit, casual dinners, and dress-code-specific plans."],
      ["Privacy context", "Trip data and wardrobe items stay part of the user's wardrobe workflow. Manual iCloud Backup is optional and restore replaces the local wardrobe on that device."]
    ],
    bullets: ["Destination and dates", "Trip duration", "Weather-aware outfit planning", "Activity and dress-code context", "Capsule coordination", "Rewear logic", "Packing lists from closet items"],
    comparison: [
      ["Generic checklist", "Good for toiletries and basics", "Does not know outfits"],
      ["Weather app", "Good for forecast", "Does not know closet"],
      ["Wearra", "Builds clothing lists from saved garments", "Requires closet setup for best results"]
    ],
    extraSections: [
      {
        title: "Sample packing capsules",
        table: {
          headings: ["Trip length", "Example capsule", "Outfit logic"],
          rows: [
            ["3 days", "2 bottoms, 3 tops, 1 layer, 1 shoe, 1 dress or flexible extra", "Each top works with both bottoms; one layer handles weather changes"],
            ["5 days", "3 bottoms, 5 tops, 2 layers, 2 shoes, accessories", "Shoes and layers cover casual, dinner, and weather shifts without duplicating everything"],
            ["7 days", "3 bottoms, 6 tops, 2 layers, 2 shoes, 1 laundry or rewear plan", "Repeat bottoms and layers while rotating tops and accessories"]
          ]
        }
      },
      {
        title: "Example: 10-day Europe trip from 18 closet items",
        paragraphs: [
          "A 10-day Europe packing capsule might include dark jeans, black trousers, one skirt, a simple dress, white tee, striped tee, button-down, knit top, lightweight sweater, blazer, rain layer, sneakers, loafers, belt, small bag, scarf, earrings, and one sleep or lounge set.",
          "That set can cover travel days, walking-heavy sightseeing, casual dinners, museum days, a nicer evening, and weather changes by repeating bottoms, layers, and shoes instead of packing unrelated full outfits for every day."
        ]
      },
      {
        title: "How weather and destination change the list",
        paragraphs: [
          "Destination affects fabric, shoe choice, layers, and how much rewear is realistic. Rain pushes closed shoes and outerwear higher; hot weather favors breathable tops; business trips require sharper repeatable pieces.",
          "Wearra's packing workflow is most useful when the closet is already digitized because it can start from real items and build combinations around the forecast and trip length."
        ]
      }
    ],
    related: ["blog/closet-app-with-packing-list.html", "blog/how-to-pack-for-a-trip-without-overpacking.html", "travel-capsule-wardrobe-app.html"],
    faq: [
      ["Can Wearra make packing lists?", "Yes. Wearra supports packing list workflows from a user's digital closet."],
      ["Does Wearra use destination weather?", "Wearra can use weather context when creating outfit suggestions and packing lists."],
      ["Is packing included with the closet?", "Packing is part of Wearra's broader wardrobe planning workflow."]
    ]
  },
  {
    slug: "ai-stylist-app",
    title: "AI Stylist App for iPhone",
    description: "How Wearra works as an AI stylist app that gives outfit guidance from a user's own wardrobe.",
    keywords: ["AI stylist app", "personal stylist app", "AI fashion assistant", "wardrobe stylist app"],
    image: "screenshots/wearra-ai-stylist-chat-iphone.webp",
    imageAlt: "Wearra AI Stylist chat answering a wardrobe question with suggested clothing items",
    answer: "Wearra is an AI stylist app for iPhone that connects chat-based styling advice to a user's digital closet, saved outfits, outfit planner, packing lists, and virtual Try On workflow.",
    sections: [
      ["Why closet context matters", "An AI stylist is more practical when it can recommend outfits from items the user has actually saved, instead of giving generic style advice."],
      ["Example prompts", "Users can ask what to wear to an interview, how to style one dress three ways, what to pack for a trip, or which shoes work with a saved outfit."],
      ["From advice to action", "Wearra's stylist chat sits inside the same app as outfit saving, planning, packing, and Try On, so advice can become an outfit decision."]
    ],
    bullets: ["AI Stylist chat", "Closet-aware outfit prompts", "Occasion and weather context", "Saved looks", "Try On and planning actions"],
    comparison: [
      ["Generic chatbot", "Flexible questions", "No built-in closet"],
      ["Human stylist", "Personal judgment", "More expensive and less immediate"],
      ["Wearra", "Closet-aware styling inside an iPhone workflow", "AI suggestions still need user review"]
    ],
    related: ["blog/ai-stylist-chat-wardrobe-app.html", "blog/ai-outfit-recommendations-from-your-closet.html", "ai-outfit-planner.html"],
    faq: [
      ["Does Wearra include an AI Stylist?", "Yes. Wearra includes AI Stylist chat as part of its styling workflow."],
      ["Can I ask about occasions?", "Yes. Users can ask for outfit ideas for work, travel, events, casual plans, and dress codes."],
      ["Are chat turns stored?", "AI Stylist chat turns are logged to Firestore as described in Wearra's privacy policy."]
    ]
  },
  {
    slug: "capsule-wardrobe-app",
    title: "Capsule Wardrobe App for iPhone",
    description: "How Wearra helps users build capsule wardrobes and repeatable outfit formulas from clothing they already own.",
    keywords: ["capsule wardrobe app", "capsule wardrobe planner", "minimal wardrobe app", "outfit formula app"],
    image: "screenshots/wearra-outfit-recommendations-iphone.webp",
    imageAlt: "Wearra outfit builder screen with clothing carousel and Shuffle, Try On, and Save actions",
    answer: "Wearra is an AI outfit planner and digital closet app for iPhone that can help users build capsule wardrobes by combining versatile closet items into repeatable outfit formulas.",
    sections: [
      ["Capsules from real items", "A useful capsule wardrobe starts with clothes the user actually owns. Wearra can help identify repeatable combinations from saved closet items."],
      ["Example capsule", "A 12-piece capsule might include two bottoms, one dress, four tops, two layers, two shoes, and one accessory set that can become many outfits."],
      ["Where AI helps", "AI can suggest pairings, color compatibility, rewear options, and occasion-specific variations without turning every answer into a shopping list."]
    ],
    bullets: ["Closet inventory", "Outfit formulas", "Color compatibility", "Rewear planning", "Travel and everyday capsules"],
    comparison: [
      ["Pinterest capsule", "Good inspiration", "May require buying new items"],
      ["Spreadsheet capsule", "Good planning", "Less visual"],
      ["Wearra", "Builds from saved wardrobe items", "Works best with clear closet photos"]
    ],
    related: ["blog/capsule-wardrobe-checklist-from-your-closet.html", "blog/sustainable-wardrobe-app-use-what-you-own.html", "travel-capsule-wardrobe-app.html"],
    faq: [
      ["Can Wearra help with a capsule wardrobe?", "Yes. Wearra can help build outfit formulas and capsule wardrobes from saved closet items."],
      ["Is Wearra only for minimal wardrobes?", "No. It can help organize and style both small capsules and larger closets."],
      ["Can capsules be used for travel?", "Yes. Travel capsule planning is one of Wearra's packing-list use cases."]
    ]
  },
  {
    slug: "iphone-wardrobe-app",
    title: "iPhone Wardrobe App for Outfits, Try-On, and Packing",
    description: "Why Wearra is built as an iPhone-first wardrobe app for digital closet organization, outfit planning, virtual try-on, and packing.",
    keywords: ["iPhone wardrobe app", "wardrobe app iOS", "iOS closet app", "iPhone outfit planner"],
    image: "screenshots/wearra-iphone-wardrobe-home-screen.webp",
    imageAlt: "Wearra iPhone home screen showing outfit ideas and saved outfits",
    answer: "Wearra is an AI outfit planner and digital closet app for iPhone. It is built for iOS 18 or later and combines digital closet organization, AI Stylist chat, outfit planning, virtual Try On, OOTD history, and packing lists.",
    sections: [
      ["Why iPhone-first matters", "Wardrobe decisions happen quickly: while getting dressed, packing, checking the weather, or saving an outfit. Wearra keeps those flows on the device users already have with them."],
      ["What the app combines", "Wearra combines closet capture, searchable item cards, daily outfit ideas, AI Stylist chat, Try On, outfit calendar, OOTD history, and trip packing."],
      ["Privacy and platform", "Wearra supports iPhone on iOS 18 or later, supports Apple, Google, and email/password sign-in, and keeps wardrobe data local by default with optional manual iCloud Backup."]
    ],
    bullets: ["iPhone app", "iOS 18 or later", "Digital closet", "AI outfit planner", "Virtual Try On", "Packing lists"],
    comparison: [
      ["Notes app", "Always available", "No wardrobe intelligence"],
      ["Photo albums", "Visual archive", "No outfit generation"],
      ["Wearra", "iPhone-first wardrobe and styling workflow", "Available for iOS 18 or later"]
    ],
    related: ["blog/digital-closet-app-iphone-ios-18.html", "blog/how-to-digitize-your-closet-iphone.html", "ai-wardrobe-app.html"],
    faq: [
      ["Is Wearra available on iPhone?", "Yes. Wearra is built for iPhone on iOS 18 or later."],
      ["Is Wearra available on Android?", "Wearra is currently positioned as an iPhone app."],
      ["Does Wearra support Apple sign-in?", "Wearra supports Apple, Google, and email/password sign-in."]
    ]
  }
];

function esc(value) {
  return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}

function json(value) {
  return JSON.stringify(value, null, 2).replaceAll("</script", "<\\/script");
}

function markdownTitle(file) {
  const text = fs.readFileSync(path.join(root, file), "utf8");
  return (text.match(/^# (.+)$/m)?.[1] || file).trim();
}

function nav() {
  return `<header class="nav" id="nav">
  <div class="container nav__inner">
    <a class="brand" href="/" aria-label="Wearra home">
      <img class="brand__mark" src="/AppleIcon-64.webp" alt="" aria-hidden="true" width="32" height="32">
      <em>Wearra</em>
    </a>
    <nav class="nav__links" aria-label="Primary">
      <a href="/#summary">Summary</a>
      <a href="/#best-for">Best for</a>
      <a href="/#features">Features</a>
      <a href="/blog/">Guides</a>
      <a href="/about/">About</a>
      <a href="/#download">Download</a>
    </nav>
    <a class="btn btn--primary" href="${appStoreUrl}" target="_blank" rel="noopener">Get the app</a>
  </div>
</header>`;
}

function footer() {
  return `<footer class="footer">
  <div class="container">
    <div class="footer__top">
      <div class="footer__brand">
        <a class="brand" href="/">
          <img class="brand__mark" src="/AppleIcon-64.webp" alt="" aria-hidden="true" width="32" height="32">
          <em>Wearra</em>
        </a>
        <p>Your smart wardrobe for outfits, planning, packing, and virtual try-on. Style faster from clothes you already own.</p>
      </div>
      <div>
        <h3>Product</h3>
        <ul>
          <li><a href="/ai-wardrobe-app/">AI wardrobe app</a></li>
          <li><a href="/virtual-try-on-app/">Virtual try-on app</a></li>
          <li><a href="/digital-closet-app/">Digital closet app</a></li>
          <li><a href="/ai-outfit-planner/">AI outfit planner</a></li>
          <li><a href="/ai-stylist-app/">AI stylist app</a></li>
          <li><a href="/packing-list-app/">Packing list app</a></li>
          <li><a href="/capsule-wardrobe-app/">Capsule wardrobe app</a></li>
          <li><a href="/iphone-wardrobe-app/">iPhone wardrobe app</a></li>
          <li><a href="/travel-capsule-wardrobe-app/">Travel capsule wardrobe</a></li>
          <li><a href="/blog/">Guides</a></li>
        </ul>
      </div>
      <div>
        <h3>Legal</h3>
        <ul>
          <li><a href="/privacy/">Privacy Policy</a></li>
          <li><a href="/terms/">Terms of Service</a></li>
        </ul>
      </div>
      <div>
        <h3>Help</h3>
        <ul>
          <li><a href="/about/">About Wearra</a></li>
          <li><a href="/support/">Support &amp; FAQ</a></li>
          <li><a href="mailto:Support@wearra.app">Contact us</a></li>
        </ul>
      </div>
    </div>
    <div class="footer__bot">
      <span>© <span id="yr"></span> Wearra. All rights reserved.</span>
      <span><a href="mailto:Support@wearra.app">Support@wearra.app</a></span>
    </div>
  </div>
</footer>`;
}

function script() {
  return `<script>
(function(){
  var yr=document.getElementById('yr'); if(yr) yr.textContent=new Date().getFullYear();
  var nav=document.getElementById('nav');
  function onScroll(){ if(!nav) return; nav.classList.toggle('is-scrolled', window.scrollY>4); }
  document.addEventListener('scroll', onScroll, {passive:true});
  onScroll();
})();
</script>`;
}

function breadcrumbs(items) {
  return `<nav class="breadcrumbs" aria-label="Breadcrumb">
${items.map((item, index) => item.href
  ? `  <a href="${item.href}">${esc(item.label)}</a>${index < items.length - 1 ? ' <span aria-hidden="true">&gt;</span>' : ''}`
  : `  <span aria-current="page">${esc(item.label)}</span>`).join("\n")}
</nav>`;
}

function hubSchema(hub) {
  const cleanHubUrl = cleanUrl(`${hub.slug}.html`);
  const graph = [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://wearra.app/" },
        { "@type": "ListItem", "position": 2, "name": hub.title, "item": cleanUrl(`${hub.slug}.html`) }
      ]
    },
    {
      "@type": "WebPage",
      "@id": `${cleanHubUrl}#webpage`,
      "url": cleanHubUrl,
      "name": hub.title,
      "description": hub.description,
      "datePublished": today,
      "dateModified": today,
      "inLanguage": "en-US",
      "about": hub.keywords,
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": `https://wearra.app/${hub.image}`,
        "caption": hub.imageAlt
      },
      "isPartOf": { "@type": "WebSite", "name": "Wearra", "url": "https://wearra.app/" },
      "speakable": { "@type": "SpeakableSpecification", "cssSelector": [".answer-box", ".article h1", ".article h2"] }
    },
    {
      "@type": "ItemList",
      "@id": `${cleanUrl(`${hub.slug}.html`)}#related`,
      "name": `Related Wearra guides for ${hub.title}`,
      "itemListElement": hub.related.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": cleanUrl(item)
      }))
    },
    {
      "@type": "FAQPage",
      "@id": `${cleanUrl(`${hub.slug}.html`)}#faq`,
      "mainEntity": hub.faq.map(([q, a]) => ({
        "@type": "Question",
        "name": q,
        "acceptedAnswer": { "@type": "Answer", "text": a }
      }))
    }
  ];
  if (hub.video) {
    graph.push({
      "@type": "VideoObject",
      "@id": `${cleanHubUrl}#video`,
      "name": hub.video.title,
      "description": hub.video.description,
      "thumbnailUrl": `https://wearra.app/${hub.video.poster}`,
      "contentUrl": `https://wearra.app/${hub.video.src}`,
      "uploadDate": today,
      "encodingFormat": "video/mp4",
      "inLanguage": "en-US",
      "isPartOf": { "@id": `${cleanHubUrl}#webpage` }
    });
  }
  return { "@context": "https://schema.org", "@graph": graph };
}

function head(hub) {
  return `<!DOCTYPE html>
<html lang="en" class="no-js">
<head>
<script>document.documentElement.classList.replace('no-js','js');</script>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
<meta name="theme-color" content="#FAF6EE">
<title>${esc(hub.title)} - Wearra</title>
<meta name="description" content="${esc(hub.description)}">
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
<meta property="og:title" content="${esc(hub.title)} - Wearra">
<meta property="og:description" content="${esc(hub.description)}">
<meta property="og:type" content="article">
<meta property="og:url" content="${cleanUrl(`${hub.slug}.html`)}">
<meta property="og:image" content="https://wearra.app/og-image.png">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="https://wearra.app/og-image.png">
<meta name="apple-itunes-app" content="app-id=6761031400, app-argument=https://wearra.app/">
<link rel="canonical" href="${cleanUrl(`${hub.slug}.html`)}">
<link rel="alternate" type="text/markdown" href="/${hub.slug}.md" title="${esc(hub.title)} - Markdown mirror">
<link rel="icon" type="image/webp" href="/AppleIcon-64.webp">
<link rel="apple-touch-icon" href="/AppleIcon.jpg">
<link rel="stylesheet" href="/styles.css">
<script type="application/ld+json">
${json(hubSchema(hub))}
</script>
</head>`;
}

function hubHtml(hub) {
  const related = hub.related.map(file => {
    const label = file === "support.html" ? "Support & FAQ" : markdownTitle(file.replace(/\.html$/, ".md"));
    return `    <li><a href="${cleanPath(file)}">${esc(label)}</a></li>`;
  }).join("\n");
  const extraSections = (hub.extraSections || []).map(section => extraSectionHtml(section, hub)).join("\n\n  ");
  return `${head(hub)}
<body>
<a class="skip-link" href="#main">Skip to content</a>
${nav()}
<main id="main">
<article class="article">
  ${breadcrumbs([{ label: "Home", href: "/" }, { label: "Guides", href: "/blog/" }, { label: hub.title }])}
  <p class="article__kicker">Wearra topic guide</p>
  <h1>${esc(hub.title)}</h1>
  <p class="meta">Updated <time datetime="${today}">${siteFacts.updatedLabel}</time> - Wearra topic guide</p>
  <p class="lede">${esc(hub.description)}</p>
  <figure class="article-media">
    <img src="/${hub.image}" alt="${esc(hub.imageAlt)}" loading="lazy" decoding="async" width="720" height="1565">
    <figcaption>${esc(hub.imageAlt)}</figcaption>
  </figure>
  <div class="answer-box">
    <p><strong>Direct answer:</strong> ${esc(hub.answer)}</p>
  </div>
  ${hub.sections.map(([title, body]) => `<h2>${esc(title)}</h2>\n  <p>${esc(body)}</p>`).join("\n\n  ")}
  <h2>Core Wearra features</h2>
  <ul>
${hub.bullets.map(b => `    <li>${esc(b)}</li>`).join("\n")}
  </ul>
  <h2>Comparison</h2>
  <table>
    <caption>${esc(hub.title)} comparison</caption>
    <thead>
      <tr><th scope="col">Option</th><th scope="col">Strength</th><th scope="col">Tradeoff</th></tr>
    </thead>
    <tbody>
${hub.comparison.map(row => `      <tr>${row.map(cell => `<td>${esc(cell)}</td>`).join("")}</tr>`).join("\n")}
    </tbody>
  </table>
  ${extraSections}
  <section class="hub-links" aria-labelledby="related-title">
    <h2 id="related-title">Related Wearra guides</h2>
    <ul>
${related}
    </ul>
  </section>
  <h2 id="faq">FAQ</h2>
  <div class="faq">
${hub.faq.map(([q, a]) => `    <details>\n      <summary>${esc(q)}</summary>\n      <p>${esc(a)}</p>\n    </details>`).join("\n")}
  </div>
  <h2>Try Wearra</h2>
  <p>Wearra is free to download for iPhone. Try On requires Pro, bonus credits, or a render pack.</p>
  <p><a class="btn btn--primary" href="${appStoreUrl}" target="_blank" rel="noopener">Get the app</a></p>
</article>
</main>
${footer()}
${script()}
</body>
</html>
`;
}

function extraSectionHtml(section, hub) {
  const paragraphs = (section.paragraphs || []).map(text => `  <p>${esc(text)}</p>`).join("\n");
  const bullets = section.bullets?.length ? `  <ul>\n${section.bullets.map(item => `    <li>${esc(item)}</li>`).join("\n")}\n  </ul>` : "";
  const table = section.table ? `  <table>
    <caption>${esc(section.title)}</caption>
    <thead>
      <tr>${section.table.headings.map(heading => `<th scope="col">${esc(heading)}</th>`).join("")}</tr>
    </thead>
    <tbody>
${section.table.rows.map(row => `      <tr>${row.map(cell => `<td>${esc(cell)}</td>`).join("")}</tr>`).join("\n")}
    </tbody>
  </table>` : "";
  const video = section.video && hub.video ? `  <figure class="article-media">
    <video controls muted playsinline preload="metadata" poster="/${hub.video.poster}" aria-label="${esc(hub.video.title)}">
      <source src="/${hub.video.src}" type="video/mp4">
      <track kind="captions" src="/videos/wearra-virtual-try-on-demo.vtt" srclang="en" label="English captions" default>
      <a href="/${hub.video.src}">Watch the Wearra virtual try-on rendering demo.</a>
    </video>
    <figcaption>${esc(hub.video.description)}</figcaption>
  </figure>` : "";
  return `<h2>${esc(section.title)}</h2>
${video}
${paragraphs}
${bullets}
${table}`;
}

function hubMarkdown(hub) {
  const extraMd = (hub.extraSections || []).map(section => extraSectionMarkdown(section, hub)).join("\n\n");
  return `# ${hub.title}

Updated: ${today}
Canonical: ${cleanUrl(`${hub.slug}.html`)}

${hub.description}

## Direct answer

${hub.answer}

${hub.sections.map(([title, body]) => `## ${title}\n\n${body}`).join("\n\n")}

## Core Wearra features

${hub.bullets.map(b => `- ${b}`).join("\n")}

## Comparison

| Option | Strength | Tradeoff |
| --- | --- | --- |
${hub.comparison.map(row => `| ${row.join(" | ")} |`).join("\n")}

${extraMd ? `${extraMd}\n\n` : ""}## Related Wearra guides

${hub.related.map(file => `- [${file === "support.html" ? "Support & FAQ" : markdownTitle(file.replace(/\.html$/, ".md"))}](${file.replace(/\.html$/, ".md")})`).join("\n")}

## FAQ

${hub.faq.map(([q, a]) => `### ${q}\n\n${a}`).join("\n\n")}

## Try Wearra

Wearra is free to download for iPhone. Try On requires Pro, bonus credits, or a render pack.
`;
}

function extraSectionMarkdown(section, hub) {
  const parts = [`## ${section.title}`];
  if (section.video && hub.video) {
    parts.push(`[Watch the Wearra virtual try-on rendering demo](/${hub.video.src})`);
  }
  if (section.paragraphs?.length) parts.push(section.paragraphs.join("\n\n"));
  if (section.bullets?.length) parts.push(section.bullets.map(item => `- ${item}`).join("\n"));
  if (section.table) {
    parts.push(`| ${section.table.headings.join(" | ")} |
| ${section.table.headings.map(() => "---").join(" | ")} |
${section.table.rows.map(row => `| ${row.join(" | ")} |`).join("\n")}`);
  }
  return parts.join("\n\n");
}

function injectHubLinksIntoBlog() {
  const hubListHtml = `<section class="hub-links" aria-labelledby="topic-guides-title">
    <h2 id="topic-guides-title">Related Wearra topic guides</h2>
    <ul>
${hubs.map(hub => `      <li><a href="/${hub.slug}/">${esc(hub.title)}</a></li>`).join("\n")}
    </ul>
  </section>`;
  const hubListMd = `## Related Wearra topic guides

${hubs.map(hub => `- [${hub.title}](../${hub.slug}.md)`).join("\n")}
`;
  for (const entry of fs.readdirSync(path.join(root, "blog"))) {
    const file = path.join(root, "blog", entry);
    const indexFile = path.join(file, "index.html");
    if (fs.existsSync(indexFile)) {
      let html = fs.readFileSync(indexFile, "utf8");
      html = html.replace(/\n  <section class="hub-links"[\s\S]*?  <\/section>\n/g, "\n");
      html = html.replace("  <h2>Try Wearra</h2>", `  ${hubListHtml}\n  <h2>Try Wearra</h2>`);
      fs.writeFileSync(indexFile, html);
    }
    if (entry.endsWith(".html") && entry !== "index.html") {
      let html = fs.readFileSync(file, "utf8");
      html = html.replace(/\n  <section class="hub-links"[\s\S]*?  <\/section>\n/g, "\n");
      html = html.replace("  <h2>Try Wearra</h2>", `  ${hubListHtml}\n  <h2>Try Wearra</h2>`);
      fs.writeFileSync(file, html);
    }
    if (entry.endsWith(".md") && entry !== "index.md") {
      let md = fs.readFileSync(file, "utf8");
      md = md.replace(/\n## Related Wearra topic guides\n[\s\S]*?(?=\n## Try Wearra)/, "");
      md = md.replace("\n## Try Wearra", `\n${hubListMd}\n## Try Wearra`);
      fs.writeFileSync(file, md);
    }
  }
}

function updateBlogIndex() {
  const hubCards = `<h2>Core topic guides</h2>
  <div class="post-list">
${hubs.map(hub => `    <a class="post-card" href="/${hub.slug}/">
      <p class="meta">Topic hub</p>
      <h2>${esc(hub.title)}</h2>
      <p>${esc(hub.description)}</p>
    </a>`).join("\n")}
  </div>`;
  const indexHtml = path.join(root, "blog", "index.html");
  let html = fs.readFileSync(indexHtml, "utf8");
  html = html.replace(/\n  <h2>Core topic guides<\/h2>[\s\S]*?(?=\n  <h2>AI wardrobe guides<\/h2>)/, "");
  html = html.replace("  <h2>AI wardrobe guides</h2>", `  ${hubCards}\n\n  <h2>AI wardrobe guides</h2>`);
  fs.writeFileSync(indexHtml, html);

  const indexMd = path.join(root, "blog", "index.md");
  let md = fs.readFileSync(indexMd, "utf8");
  md = md.replace(/\n## Core topic guides\n[\s\S]*?(?=\n## AI wardrobe guides)/, "");
  md = md.replace("## AI wardrobe guides", `## Core topic guides\n\n${hubs.map(hub => `- [${hub.title}](../${hub.slug}.md): ${hub.description}`).join("\n")}\n\n## AI wardrobe guides`);
  fs.writeFileSync(indexMd, md);
}

function writeSitemap() {
  const blogUrls = fs.readdirSync(path.join(root, "blog"))
    .filter(entry => entry.endsWith(".md") && entry !== "index.md")
    .sort()
    .map(entry => [cleanUrl(`blog/${entry.replace(/\.md$/, ".html")}`), today, "monthly", "0.7"]);
  const urls = [
    ["https://wearra.app/", today, "weekly", "1.0"],
    ...hubs.map(hub => [cleanUrl(`${hub.slug}.html`), today, "weekly", "0.82"]),
    [cleanUrl("about.html"), today, "monthly", "0.7"],
    ["https://wearra.app/blog/", today, "weekly", "0.8"],
    ...blogUrls,
    [cleanUrl("privacy.html"), today, "monthly", "0.6"],
    [cleanUrl("terms.html"), today, "monthly", "0.6"],
    [cleanUrl("support.html"), today, "monthly", "0.7"]
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(([loc, lastmod, changefreq, priority]) => `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`).join("\n")}
</urlset>
`;
  fs.writeFileSync(path.join(root, "sitemap.xml"), xml);
}

function updateLlms() {
  const blogMarkdown = fs.readdirSync(path.join(root, "blog"))
    .filter(entry => entry.endsWith(".md") && entry !== "index.md")
    .sort()
    .map(entry => `- [${markdownTitle(`blog/${entry}`)}](blog/${entry})`)
    .join("\n");
  const hubMarkdown = hubs.map(hub => `- [${hub.title}](${hub.slug}.md): ${hub.description}`).join("\n");
  const llms = `# Wearra

> Wearra helps iPhone users preview outfits on their own photo, plan looks from their closet, and build weather-aware trip packing lists.

Wearra is an AI virtual try-on, outfit planner, and digital closet app for iPhone. It lets users digitize their wardrobe, get daily AI-generated outfit recommendations, chat with an AI stylist, plan weekly outfits, build weather-aware trip packing lists, log OOTDs, and preview outfits on their own photo before wearing them. The app uses AI/render providers including Google Gemini, Google Vertex AI, FASHN, fal.ai/Kling, and LightX, plus Firebase for backend services. Wearra is independently operated in the United States.

Last updated: ${today}.

## Current App Store facts

- App Store name: ${siteFacts.appStoreName}
- App Store ID: ${siteFacts.appStoreId}
- Category: ${siteFacts.appCategory}; secondary genre: ${siteFacts.secondaryGenre}
- Minimum OS: ${siteFacts.minimumOS}
- Price: ${siteFacts.priceText}
- App Store URL: ${appStoreUrl}
- Privacy URL: ${cleanUrl("privacy.html")}
- Support URL: ${cleanUrl("support.html")}
- Pricing note: ${siteFacts.pricingNote}

Each markdown file below is a direct mirror of the corresponding HTML page on the live site, formatted for LLM consumption. HTML pages are the canonical search pages; robots.txt directs major search crawlers away from markdown mirrors.

## Core docs

- [About Wearra](index.md): App overview, core features, how it works, and pricing
- [Privacy Policy](privacy.md): What data is collected, how it is used, third-party services, user rights, retention, account deletion, and contact
- [Terms of Service](terms.md): Acceptance, account eligibility, credits and subscription billing, acceptable use, content ownership, AI output disclaimers, limitation of liability, governing law
- [Support & FAQ](support.md): How credits work, Pro subscription details, cancellation and refunds, render quality tips, account deletion, supported platforms, contact
- [About Wearra](about.md): Official description, app details, press contact, assets, privacy summary, and App Store facts
- [Blog index](blog/index.md): All Wearra blog posts, split into AI wardrobe guides and practical style guides

## Topic hubs

${hubMarkdown}

## Blog posts

${blogMarkdown}

## Optional

- [llms-full.txt](llms-full.txt): Single-file concatenation of all markdown mirrors, for agents that prefer one fetch
- [Privacy: third-party services](privacy.md#third-party-services): Tables of every third-party that receives data from the app
- [ai.txt](ai.txt): AI training and inference permissions
- [robots.txt](robots.txt): Crawler permissions for search engines and AI bots
- [sitemap.xml](sitemap.xml): Full URL inventory with last-modified timestamps
`;
  fs.writeFileSync(path.join(root, "llms.txt"), llms);

  const mirrors = [
    ["Landing page", "index.md"],
    ["Privacy Policy", "privacy.md"],
    ["Terms of Service", "terms.md"],
    ["Support & FAQ", "support.md"],
    ["About Wearra", "about.md"],
    ...hubs.map(hub => [hub.title, `${hub.slug}.md`]),
    ["Blog index", "blog/index.md"],
    ...fs.readdirSync(path.join(root, "blog")).filter(entry => entry.endsWith(".md") && entry !== "index.md").sort().map(entry => [markdownTitle(`blog/${entry}`), `blog/${entry}`])
  ];
  const full = `# Wearra - full content for LLMs

> Wearra helps iPhone users preview outfits on their own photo, plan looks from their closet, and build weather-aware trip packing lists.

This is a single-fetch concatenation of every markdown mirror on https://wearra.app/, intended for LLM ingestion when one request is preferred over multiple files. The original source files remain canonical and are listed in [llms.txt](https://wearra.app/llms.txt). HTML pages are the canonical search pages; robots.txt directs major search crawlers away from markdown mirrors.

Operator: Wearra, independently operated in the United States. Contact: Support@wearra.app. Last updated: ${today}.

${mirrors.map(([title, file], index) => `---

# Section ${index + 1} of ${mirrors.length} - ${title}

Source: https://wearra.app/${file}

${fs.readFileSync(path.join(root, file), "utf8").trim()}
`).join("\n")}
`;
  fs.writeFileSync(path.join(root, "llms-full.txt"), full);
}

for (const hub of hubs) {
  const hubDir = path.join(root, hub.slug);
  fs.rmSync(hubDir, { recursive: true, force: true });
  fs.mkdirSync(hubDir, { recursive: true });
  fs.writeFileSync(path.join(hubDir, "index.html"), hubHtml(hub));
  fs.writeFileSync(path.join(root, `${hub.slug}.md`), hubMarkdown(hub));
}
injectHubLinksIntoBlog();
updateBlogIndex();
writeSitemap();
updateLlms();

console.log(`Generated ${hubs.length} discovery hubs, sitemap, and LLM mirrors.`);
