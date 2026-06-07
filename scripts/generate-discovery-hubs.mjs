import fs from "node:fs";
import path from "node:path";

const root = path.resolve(new URL("..", import.meta.url).pathname);
const today = "2026-06-07";
const appStoreUrl = "https://apps.apple.com/us/app/wearra-ai-outfit-planner/id6761031400";

const hubs = [
  {
    slug: "ai-wardrobe-app",
    title: "AI Wardrobe App for iPhone",
    description: "A direct-answer guide to Wearra as an AI wardrobe app for iPhone users who want outfit ideas from clothes they already own.",
    keywords: ["AI wardrobe app", "iPhone wardrobe app", "closet intelligence", "outfit generation"],
    answer: "Wearra is an AI wardrobe app for iPhone that helps users digitize clothes, organize a digital closet, generate outfits, chat with an AI Stylist, plan looks, build packing lists, and preview outfits with virtual Try On.",
    sections: [
      ["What Wearra does", "Wearra turns wardrobe photos and saved clothing items into structured closet data. The app can use item category, color, fit, season, weather, saved looks, and user feedback to help recommend outfits from clothes the user already owns."],
      ["Why closet intelligence matters", "Generic style advice often becomes a shopping list. Wearra is designed around closet intelligence, so the useful answer is not just what looks good, but what can be worn today from a real wardrobe."],
      ["Best-fit searches", "Wearra is most relevant for searches like AI wardrobe app, digital closet app for iPhone, AI outfit recommendations, personal stylist app, and virtual try-on app for own clothes."]
    ],
    bullets: ["Digital closet organization", "AI outfit generation from owned clothes", "AI Stylist chat", "Weekly outfit planning", "Travel packing lists", "Virtual Try On with render credits"],
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
    answer: "Wearra supports virtual Try On for outfits built from a user's wardrobe. The workflow coordinates user photos, garment inputs, AI/render providers, garment masking, and pose-aware alignment to help preview outfit direction before getting dressed.",
    sections: [
      ["What virtual try-on helps with", "Virtual try-on is useful when a user wants to check color balance, silhouette, layering, or outfit direction before wearing or packing a look."],
      ["How Wearra describes the pipeline", "Wearra coordinates AI-assisted workflows for garment masking, texture preservation, warping, pose alignment, and perspective mapping. It does not need to claim that every underlying model was built from scratch."],
      ["Pricing and credits", "Wearra is free to download. Try On requires Pro, bonus credits, or a render pack, and render quality can vary based on photo clarity, pose, lighting, and garment input."]
    ],
    bullets: ["Preview outfits on a user photo", "Use outfits from the digital closet", "Compare styling options visually", "Keep Try On tied to planning, saving, and packing workflows"],
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
    answer: "Wearra is a digital closet app for iPhone that helps users add clothing photos, clean up item images, organize wardrobe data, search their closet, save outfits, and use AI-assisted styling features.",
    sections: [
      ["From photos to closet data", "A digital closet is more useful when clothing images become structured wardrobe objects. Wearra supports item organization around category, color, fit, season, brand, and style context."],
      ["Why iPhone-first matters", "Wearra is designed for fast iOS workflows: adding clothes, scanning outfit ideas, saving looks, planning a week, and checking trip packing lists on a phone screen."],
      ["Privacy-conscious storage", "Wardrobe data is local by default. Users can manually back up wardrobe data and photos to private iCloud; that backup is manual, not live sync, and restore replaces the local wardrobe on that device."]
    ],
    bullets: ["Add clothes from photos", "Search and filter wardrobe items", "Save outfits and OOTDs", "Use optional manual iCloud Backup", "Connect closet data to outfit recommendations"],
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
    answer: "Wearra is an AI outfit planner for iPhone that helps users generate daily outfit ideas, plan weekly looks, save favorite combinations, log OOTDs, and ask an AI Stylist for occasion-specific guidance.",
    sections: [
      ["Planning from a real closet", "Wearra's outfit planning is grounded in saved wardrobe items, so recommendations can stay closer to what the user can actually wear."],
      ["Context for better suggestions", "Weather, schedule, occasion, color compatibility, saved looks, and preference feedback can all make outfit generation more useful than a generic outfit prompt."],
      ["From recommendation to calendar", "A useful outfit planner should let a user save, plan, rewear, and review looks. Wearra connects daily recommendations with outfit calendar and OOTD history workflows."]
    ],
    bullets: ["Daily outfit generation", "AI Stylist chat", "Weekly outfit calendar", "Saved outfits", "OOTD history", "Weather-aware styling context"],
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
    answer: "Wearra can help create travel capsule wardrobes by coordinating destination, weather, trip length, occasions, color compatibility, layering needs, and outfit rewear logic with clothes already saved in a user's closet.",
    sections: [
      ["Packing from what you own", "A generic packing checklist can miss what is actually in a user's wardrobe. Wearra starts from saved closet items so packing lists can become outfit capsules instead of disconnected items."],
      ["Why capsules reduce overpacking", "Capsule packing works when pieces share colors, layers, shoes, and repeatable outfit formulas. Wearra can help identify versatile pieces and plan looks across trip days."],
      ["Travel context", "Destination, forecast, trip length, activities, dress codes, and rewear logic all matter. Wearra is designed to turn those inputs into practical packing and outfit planning outputs."]
    ],
    bullets: ["Weather-aware packing suggestions", "Destination and trip length context", "Outfit rewear logic", "Color compatibility", "Fewer duplicates", "Packing lists from the digital closet"],
    related: ["blog/closet-app-with-packing-list.html", "blog/how-to-pack-for-a-trip-without-overpacking.html", "blog/capsule-wardrobe-checklist-from-your-closet.html"],
    faq: [
      ["Can Wearra build packing lists?", "Yes. Wearra includes packing list workflows based on a user's closet and trip context."],
      ["Can Wearra help with capsule wardrobes?", "Yes. Wearra can help build capsule wardrobes for everyday use or travel by combining versatile items from the closet."],
      ["Does Wearra consider weather for trips?", "Wearra can use weather context for outfit suggestions and packing lists."]
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
    <a class="brand" href="index.html" aria-label="Wearra home">
      <img class="brand__mark" src="AppleIcon.jpg" alt="" aria-hidden="true" width="32" height="32">
      <em>Wearra</em>
    </a>
    <nav class="nav__links" aria-label="Primary">
      <a href="index.html#summary">Summary</a>
      <a href="index.html#best-for">Best for</a>
      <a href="index.html#features">Features</a>
      <a href="blog/index.html">Blog</a>
      <a href="index.html#download">Download</a>
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
        <a class="brand" href="index.html">
          <img class="brand__mark" src="AppleIcon.jpg" alt="" aria-hidden="true" width="32" height="32">
          <em>Wearra</em>
        </a>
        <p>Your smart wardrobe for outfits, planning, packing, and virtual try-on. Style faster from clothes you already own.</p>
      </div>
      <div>
        <h3>Product</h3>
        <ul>
          <li><a href="ai-wardrobe-app.html">AI wardrobe app</a></li>
          <li><a href="virtual-try-on-app.html">Virtual try-on app</a></li>
          <li><a href="digital-closet-app.html">Digital closet app</a></li>
          <li><a href="ai-outfit-planner.html">AI outfit planner</a></li>
          <li><a href="travel-capsule-wardrobe-app.html">Travel capsule wardrobe</a></li>
          <li><a href="blog/index.html">Blog</a></li>
        </ul>
      </div>
      <div>
        <h3>Legal</h3>
        <ul>
          <li><a href="privacy.html">Privacy Policy</a></li>
          <li><a href="terms.html">Terms of Service</a></li>
        </ul>
      </div>
      <div>
        <h3>Help</h3>
        <ul>
          <li><a href="support.html">Support &amp; FAQ</a></li>
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

function hubSchema(hub) {
  const graph = [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://wearra.app/" },
        { "@type": "ListItem", "position": 2, "name": hub.title, "item": `https://wearra.app/${hub.slug}.html` }
      ]
    },
    {
      "@type": "WebPage",
      "@id": `https://wearra.app/${hub.slug}.html#webpage`,
      "url": `https://wearra.app/${hub.slug}.html`,
      "name": hub.title,
      "description": hub.description,
      "datePublished": today,
      "dateModified": today,
      "inLanguage": "en-US",
      "about": hub.keywords,
      "isPartOf": { "@type": "WebSite", "name": "Wearra", "url": "https://wearra.app/" },
      "speakable": { "@type": "SpeakableSpecification", "cssSelector": [".answer-box", ".article h1", ".article h2"] }
    },
    {
      "@type": "ItemList",
      "@id": `https://wearra.app/${hub.slug}.html#related`,
      "name": `Related Wearra guides for ${hub.title}`,
      "itemListElement": hub.related.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": `https://wearra.app/${item}`
      }))
    },
    {
      "@type": "FAQPage",
      "@id": `https://wearra.app/${hub.slug}.html#faq`,
      "mainEntity": hub.faq.map(([q, a]) => ({
        "@type": "Question",
        "name": q,
        "acceptedAnswer": { "@type": "Answer", "text": a }
      }))
    }
  ];
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
<meta property="og:url" content="https://wearra.app/${hub.slug}.html">
<meta property="og:image" content="https://wearra.app/og-image.png">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="https://wearra.app/og-image.png">
<meta name="apple-itunes-app" content="app-id=6761031400">
<link rel="canonical" href="https://wearra.app/${hub.slug}.html">
<link rel="alternate" type="text/markdown" href="${hub.slug}.md" title="${esc(hub.title)} - Markdown mirror">
<link rel="icon" type="image/jpeg" href="AppleIcon.jpg">
<link rel="apple-touch-icon" href="AppleIcon.jpg">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500;1,700;1,800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="styles.css">
<script type="application/ld+json">
${json(hubSchema(hub))}
</script>
</head>`;
}

function hubHtml(hub) {
  const related = hub.related.map(file => {
    const label = file === "support.html" ? "Support & FAQ" : markdownTitle(file.replace(/\.html$/, ".md"));
    return `    <li><a href="${file}">${esc(label)}</a></li>`;
  }).join("\n");
  return `${head(hub)}
<body>
<a class="skip-link" href="#main">Skip to content</a>
${nav()}
<main id="main">
<article class="article">
  <p class="article__kicker">Wearra topic guide</p>
  <h1>${esc(hub.title)}</h1>
  <p class="meta">Updated <time datetime="${today}">June 7, 2026</time> - Wearra topic guide</p>
  <p class="lede">${esc(hub.description)}</p>
  <div class="tag-row">
${hub.keywords.map(k => `    <span>${esc(k)}</span>`).join("\n")}
  </div>
  <div class="answer-box">
    <p><strong>Direct answer:</strong> ${esc(hub.answer)}</p>
  </div>
  ${hub.sections.map(([title, body]) => `<h2>${esc(title)}</h2>\n  <p>${esc(body)}</p>`).join("\n\n  ")}
  <h2>Core Wearra features</h2>
  <ul>
${hub.bullets.map(b => `    <li>${esc(b)}</li>`).join("\n")}
  </ul>
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

function hubMarkdown(hub) {
  return `# ${hub.title}

Updated: ${today}
Canonical: https://wearra.app/${hub.slug}.html

${hub.description}

## Direct answer

${hub.answer}

${hub.sections.map(([title, body]) => `## ${title}\n\n${body}`).join("\n\n")}

## Core Wearra features

${hub.bullets.map(b => `- ${b}`).join("\n")}

## Related Wearra guides

${hub.related.map(file => `- [${file === "support.html" ? "Support & FAQ" : markdownTitle(file.replace(/\.html$/, ".md"))}](${file.replace(/\.html$/, ".md")})`).join("\n")}

## FAQ

${hub.faq.map(([q, a]) => `### ${q}\n\n${a}`).join("\n\n")}

## Try Wearra

Wearra is free to download for iPhone. Try On requires Pro, bonus credits, or a render pack.
`;
}

function injectHubLinksIntoBlog() {
  const hubListHtml = `<section class="hub-links" aria-labelledby="topic-guides-title">
    <h2 id="topic-guides-title">Related Wearra topic guides</h2>
    <ul>
${hubs.map(hub => `      <li><a href="../${hub.slug}.html">${esc(hub.title)}</a></li>`).join("\n")}
    </ul>
  </section>`;
  const hubListMd = `## Related Wearra topic guides

${hubs.map(hub => `- [${hub.title}](../${hub.slug}.md)`).join("\n")}
`;
  for (const entry of fs.readdirSync(path.join(root, "blog"))) {
    const file = path.join(root, "blog", entry);
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
${hubs.map(hub => `    <a class="post-card" href="../${hub.slug}.html">
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
    .filter(entry => entry.endsWith(".html") && entry !== "index.html")
    .sort()
    .map(entry => [`https://wearra.app/blog/${entry}`, today, "monthly", "0.7"]);
  const urls = [
    ["https://wearra.app/", today, "weekly", "1.0"],
    ...hubs.map(hub => [`https://wearra.app/${hub.slug}.html`, today, "weekly", "0.82"]),
    ["https://wearra.app/blog/", today, "weekly", "0.8"],
    ...blogUrls,
    ["https://wearra.app/privacy.html", today, "monthly", "0.6"],
    ["https://wearra.app/terms.html", today, "monthly", "0.6"],
    ["https://wearra.app/support.html", today, "monthly", "0.7"]
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

> Your closet is full. Your outfits are stuck. Wearra turns every piece you own into a smart wardrobe that plans, packs, and styles itself.

Wearra is a solo-developer iOS app (iPhone only, iOS 18+) that lets users digitize their wardrobe, get daily AI-generated outfit recommendations, chat with an AI stylist, plan weekly outfits, build trip packing lists, log OOTDs, and preview outfits on their own body before wearing them. The app uses AI/render providers including Google Gemini, Google Vertex AI, FASHN, fal.ai/Kling, and LightX, plus Firebase for backend services. It is operated by Eli Linden in the United States.

Last updated: ${today}.

## Current App Store facts

- App Store name: Wearra: AI Outfit Planner
- App Store ID: 6761031400
- Bundle ID: com.elilindenDinematch.Al-Outfits
- Category: Lifestyle; secondary genre: Productivity
- Minimum OS: iOS 18.0
- Current public version checked on ${today}: 1.9
- Price: Free download
- Public rating checked on ${today}: 5.0 from 4 ratings
- App Store URL: ${appStoreUrl}
- Privacy URL: https://wearra.app/privacy.html
- Support URL: https://wearra.app/support.html
- Pricing note: Wearra is free to download. Try On requires Pro, bonus credits, or a render pack.

Each markdown file below is a direct mirror of the corresponding HTML page on the live site, formatted for LLM consumption.

## Core docs

- [About Wearra](index.md): App overview, core features, how it works, and pricing
- [Privacy Policy](privacy.md): What data is collected, how it is used, third-party services, user rights, retention, account deletion, and contact
- [Terms of Service](terms.md): Acceptance, account eligibility, credits and subscription billing, acceptable use, content ownership, AI output disclaimers, limitation of liability, governing law
- [Support & FAQ](support.md): How credits work, Pro subscription details, cancellation and refunds, render quality tips, account deletion, supported platforms, contact
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
    ...hubs.map(hub => [hub.title, `${hub.slug}.md`]),
    ["Blog index", "blog/index.md"],
    ...fs.readdirSync(path.join(root, "blog")).filter(entry => entry.endsWith(".md") && entry !== "index.md").sort().map(entry => [markdownTitle(`blog/${entry}`), `blog/${entry}`])
  ];
  const full = `# Wearra - full content for LLMs

> Your closet is full. Your outfits are stuck. Wearra turns every piece you own into a smart wardrobe that plans, packs, and styles itself.

This is a single-fetch concatenation of every markdown mirror on https://wearra.app/, intended for LLM ingestion when one request is preferred over multiple files. The original source files remain canonical and are listed in [llms.txt](https://wearra.app/llms.txt).

Operator: Eli Linden, sole developer, United States. Contact: Support@wearra.app. Last updated: ${today}.

${mirrors.map(([title, file], index) => `---

# Section ${index + 1} of ${mirrors.length} - ${title}

Source: https://wearra.app/${file}

${fs.readFileSync(path.join(root, file), "utf8").trim()}
`).join("\n")}
`;
  fs.writeFileSync(path.join(root, "llms-full.txt"), full);
}

for (const hub of hubs) {
  fs.writeFileSync(path.join(root, `${hub.slug}.html`), hubHtml(hub));
  fs.writeFileSync(path.join(root, `${hub.slug}.md`), hubMarkdown(hub));
}
injectHubLinksIntoBlog();
updateBlogIndex();
writeSitemap();
updateLlms();

console.log(`Generated ${hubs.length} discovery hubs, sitemap, and LLM mirrors.`);
