import fs from "node:fs";
import path from "node:path";
import { siteFacts } from "./site-data.mjs";

const root = path.resolve(new URL("..", import.meta.url).pathname);
const appStoreUrl = siteFacts.appStoreUrl;

function json(value) {
  return JSON.stringify(value, null, 2).replaceAll("</script", "<\\/script");
}

function escAttr(value) {
  return String(value).replaceAll("&", "&amp;").replaceAll('"', "&quot;");
}

function homepageSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://wearra.app/#org",
        "name": "Wearra",
        "description": "Wearra is an AI virtual try-on, outfit planner, and digital closet app for iPhone.",
        "url": "https://wearra.app/",
        "email": "Support@wearra.app",
        "logo": "https://wearra.app/og-image.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer support",
          "email": "Support@wearra.app",
          "availableLanguage": ["English"]
        },
        "sameAs": [
          appStoreUrl,
          "https://www.instagram.com/wearraapp/"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://wearra.app/#website",
        "url": "https://wearra.app/",
        "name": "Wearra",
        "description": "Wearra is an AI virtual try-on, outfit planner, digital closet, and travel packing app for iPhone.",
        "publisher": { "@id": "https://wearra.app/#org" },
        "inLanguage": "en-US"
      },
      {
        "@type": "WebPage",
        "@id": "https://wearra.app/#webpage",
        "url": "https://wearra.app/",
        "name": siteFacts.homepageTitle,
        "description": siteFacts.homepageDescription,
        "isPartOf": { "@id": "https://wearra.app/#website" },
        "about": { "@id": "https://wearra.app/#app" },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://wearra.app/og-image.png",
          "width": 1200,
          "height": 630
        },
        "datePublished": "2026-04-20",
        "dateModified": siteFacts.updatedDate,
        "inLanguage": "en-US"
      },
      {
        "@type": "MobileApplication",
        "@id": "https://wearra.app/#app",
        "name": siteFacts.appStoreName,
        "alternateName": "Wearra",
        "applicationCategory": "LifestyleApplication",
        "applicationSubCategory": "Fashion",
        "operatingSystem": `${siteFacts.minimumOS} or later`,
        "url": "https://wearra.app/",
        "installUrl": appStoreUrl,
        "downloadUrl": appStoreUrl,
        "contentRating": "4+",
        "inLanguage": "en-US",
        "description": "Wearra helps iPhone users preview outfits on their own photo, plan looks from clothes they own, organize a digital closet, chat with an AI Stylist, log OOTDs, and build weather-aware packing lists.",
        "image": "https://wearra.app/og-image.png",
        "screenshot": [
          "https://wearra.app/screenshots/wearra-ai-outfit-planner-home-screen-20260620.webp",
          "https://wearra.app/screenshots/wearra-digital-closet-grid-iphone-20260620.webp",
          "https://wearra.app/screenshots/wearra-outfit-builder-iphone-20260620.webp",
          "https://wearra.app/screenshots/wearra-ai-stylist-chat-iphone-20260620.webp",
          "https://wearra.app/screenshots/wearra-outfit-planner-calendar-iphone-20260620.webp",
          "https://wearra.app/screenshots/wearra-packing-list-trip-form-iphone.webp"
        ],
        "featureList": [
          "Virtual Try On previews outfits on a user photo",
          "AI outfit planning from clothes saved in the closet",
          "Travel packing lists using trip and weather context",
          "AI Stylist chat for outfit questions",
          "Digital closet organization",
          "Weekly outfit planner and OOTD history"
        ],
        "offers": [
          {
            "@type": "Offer",
            "name": siteFacts.priceText,
            "price": "0",
            "priceCurrency": "USD",
            "description": siteFacts.pricingNote
          },
          {
            "@type": "Offer",
            "name": "Pro monthly",
            "price": siteFacts.proPriceValue,
            "priceCurrency": "USD",
            "description": `${siteFacts.proRenderAllowance} renders per month, AI Stylist chat, and personalised outfit suggestions.`
          },
          {
            "@type": "Offer",
            "name": `${siteFacts.topUpRenderAllowance}-render top-up`,
            "price": siteFacts.topUpPriceValue,
            "priceCurrency": "USD",
            "description": `${siteFacts.topUpRenderAllowance} extra renders that stack on Pro and never expire.`
          }
        ],
        "publisher": { "@id": "https://wearra.app/#org" }
      },
      {
        "@type": "VideoObject",
        "@id": "https://wearra.app/#rendering-demo-video",
        "name": "Wearra virtual try-on rendering demo",
        "description": "A short muted demo showing Wearra moving from outfit selection to a generated virtual try-on preview.",
        "thumbnailUrl": "https://wearra.app/videos/wearra-virtual-try-on-demo-poster.webp",
        "contentUrl": "https://wearra.app/videos/wearra-virtual-try-on-demo.mp4",
        "uploadDate": siteFacts.updatedDate,
        "duration": "PT10S",
        "encodingFormat": "video/mp4",
        "inLanguage": "en-US",
        "isPartOf": { "@id": "https://wearra.app/#webpage" }
      },
      {
        "@type": "FAQPage",
        "@id": "https://wearra.app/#faq",
        "mainEntity": [
          ["What is Wearra?", "Wearra is an iOS app that turns your closet into a smart wardrobe and uses AI to recommend daily outfits, chat as a personal stylist, plan your week, build packing lists, log OOTDs, and render virtual try-ons."],
          ["Is Wearra free?", `Wearra is free to download. Try On requires Pro, bonus credits, or a render pack. Pro is ${siteFacts.proPrice}/month for ${siteFacts.proRenderAllowance} renders, AI Stylist chat, and personalised suggestions.`],
          ["Can Wearra make packing lists?", "Yes. Tell Wearra the trip, and it builds a capsule from what you own, sized to your days and the forecast."],
          ["Does virtual try-on use my own body?", "Yes. Upload one photo of yourself, choose an outfit, and Wearra can show it on your body instead of a model."],
          ["Are my photos private?", "Your wardrobe data is local by default, and manual private iCloud backups are optional. Avatar and garment photos used for Try On are sent only to the AI/render provider used for that request. They are not used to train AI models by Wearra."]
        ].map(([name, text]) => ({
          "@type": "Question",
          "name": name,
          "acceptedAnswer": { "@type": "Answer", "text": text }
        }))
      }
    ]
  };
}

function replaceMeta(html, attribute, key, value) {
  const escaped = escAttr(value);
  const pattern = new RegExp(`(<meta ${attribute}="${key}" content=")[^"]*(">)`);
  return html.replace(pattern, `$1${escaped}$2`);
}

let html = fs.readFileSync(path.join(root, "index.html"), "utf8");
html = html
  .replace(/<title>[\s\S]*?<\/title>/, `<title>${escAttr(siteFacts.homepageTitle)}</title>`)
  .replace(/<h1 class="hero__title">[\s\S]*?<\/h1>/, `<h1 class="hero__title">${siteFacts.homepageH1}</h1>`)
  .replace(/<p class="hero__sub">[\s\S]*?<\/p>/, `<p class="hero__sub">${siteFacts.homepageSubheading}</p>`)
  .replace(/<meta name="last-modified" content="[^"]+">/, `<meta name="last-modified" content="${siteFacts.updatedDate}">`)
  .replace(/<meta property="article:modified_time" content="[^"]+">/, `<meta property="article:modified_time" content="${siteFacts.updatedDate}T00:00:00-07:00">`)
  .replace(/<p class="updated">Last updated <time datetime="[^"]+">[^<]+<\/time>\.<\/p>/, `<p class="updated">Last updated <time datetime="${siteFacts.updatedDate}">${siteFacts.updatedLabel}</time>.</p>`)
  .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, `<script type="application/ld+json">\n${json(homepageSchema())}\n</script>`);
html = replaceMeta(html, "name", "description", siteFacts.homepageDescription);
html = replaceMeta(html, "property", "og:title", siteFacts.homepageTitle);
html = replaceMeta(html, "property", "og:description", siteFacts.homepageDescription);
html = replaceMeta(html, "name", "twitter:title", siteFacts.homepageTitle);
html = replaceMeta(html, "name", "twitter:description", siteFacts.homepageDescription);
fs.writeFileSync(path.join(root, "index.html"), html);

let md = fs.readFileSync(path.join(root, "index.md"), "utf8");
md = md
  .replace(/Last updated: \d{4}-\d{2}-\d{2}\./, `Last updated: ${siteFacts.updatedDate}.`)
  .replace(/\$6\.99/g, siteFacts.proPrice)
  .replace(/\$1\.99/g, siteFacts.topUpPrice);
fs.writeFileSync(path.join(root, "index.md"), md);

console.log("Synchronized homepage metadata, JSON-LD, dates, and pricing facts.");
