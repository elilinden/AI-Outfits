# Wearra Support

We're a small, solo-developer operation. Here's how to get in touch and quick answers to common questions.

## Contact

- **Email:** [Support@wearra.app](mailto:Support@wearra.app)
- **Typical response time:** within 3 business days

When you email, it helps if you include: your account email, iPhone model + iOS version, what you were trying to do, and (if relevant) a screenshot.

## Frequently asked questions

### How do credits work?

Each virtual Try On render costs one credit.

- Wearra is free to download. Try On requires Pro, bonus credits, or a render pack.
- **Pro subscription:** 30 renders per month. Renders reset at the start of each billing period.
- **5-render top-up pack:** a one-time $1.99 consumable available to Pro subscribers. Top-up credits stack on top of your monthly Pro allowance and never expire.

Your current credit balance is shown on the Home screen and in **Settings → Credits & Subscription**.

### What does the Pro subscription include?

Pro gives you 30 try-on renders per month, plus AI stylist chat and personalized outfit suggestions tied to your wardrobe. Pricing and renewal terms are always displayed before you confirm the purchase.

Pro is billed through your Apple ID as an auto-renewing monthly subscription, billed at $6.99/month, and renews until you cancel.

### I need more renders this month — can I buy extras?

Yes. You can buy a **5-render top-up pack** ($1.99) from the paywall. Top-up credits stack on top of your Pro allowance and never expire.

### How do I cancel my subscription?

Subscriptions are managed by Apple, not by us. To cancel:

1. Open the **Settings** app on your iPhone.
2. Tap your name at the top.
3. Tap **Subscriptions**.
4. Tap **Wearra**.
5. Tap **Cancel Subscription**.

You'll keep Pro access until the end of the current billing period. You can also manage subscriptions at [apps.apple.com/account/subscriptions](https://apps.apple.com/account/subscriptions).

### How do I request a refund?

All charges are processed by Apple, so refunds come from Apple too. Request one at [reportaproblem.apple.com](https://reportaproblem.apple.com). If you think a charge is clearly wrong — for example, you were double-billed or the app failed to deliver what you paid for — email us and we'll help you with the request to Apple.

### A try-on render came out bad. What can I do?

AI-generated renders are not perfect. Unusual poses, busy backgrounds, tight crops, or uncommon garment types can trip up the model. A few things that help:

- Use a clear, front-facing avatar photo with good lighting.
- Use a garment photo on a plain background if possible.
- Try re-running the render — results vary each time.

If a render is badly broken, tap the **Report bad render** button on the result screen. Your report (the photos and your notes) helps us improve. For cases where a render clearly fails, email us and we'll credit you back.

### How do I delete my account and data?

Inside the app, go to **Settings → Danger Zone → Delete Account**. This starts a 30-day grace period:

- You're signed out on all devices.
- Your data is hidden from the app and inaccessible to you.
- We keep your data internally during that window to handle any chargebacks, fraud claims, or support disputes.

After 30 days, all user-identifying backend data we control is permanently deleted. Manual iCloud backups you created remain in your private iCloud until you delete them. We keep a minimal audit record (email + deletion date) for up to 12 months for fraud prevention and compliance.

If you change your mind during the 30-day window, email [Support@wearra.app](mailto:Support@wearra.app) and we'll cancel the deletion. If you can't access the in-app option at all, email us from the address linked to your account and we'll handle it manually.

Wardrobe items, outfits, and trip data stored locally on your iPhone are removed when you uninstall the app. If you manually created an iCloud backup, that backup remains in your private iCloud until you delete it. iCloud Backup is manual, not live sync, and restoring it replaces the local wardrobe on that device.

### Does Wearra include starter Try On renders?

Wearra is free to download. Try On requires Pro, bonus credits, or a render pack.

### What data does the app collect?

Short version: your account identifiers from Apple, Google, or email/password sign-in, photos you upload for Try On, the wardrobe items you enter, optional iCloud backups you create, AI Stylist chat turns, notification tokens if enabled, device/usage telemetry via Firebase Analytics, and crash logs via Firebase Crashlytics. Full details are in our [Privacy Policy](privacy.md).

### Where does my photo actually go when I render?

Your avatar and garment photo(s) are sent to the AI/render provider used for that request, which may include Google Gemini, Google Vertex AI, FASHN, fal.ai/Kling, or LightX. The render call does not include your email, display name, or account identifier. Details are in our [Privacy Policy](privacy.md#third-party-services).

### Are my photos used to train AI models?

We don't train AI models on your photos. AI/render providers receive your avatar and garment photos only to generate the result you requested. Provider-side retention and training rules are governed by each provider's terms and privacy policy — full details are in our [Privacy Policy](privacy.md#third-party-services).

### Why does the app want my calendar / location?

Both are optional. Calendar access is used to tailor outfit suggestions to your day; calendar contents are read on-device, and only the event titles for events you ask the assistant about are sent to our AI provider for those suggestions. Location is used to fetch the weather forecast — your latitude and longitude are sent to Open-Meteo with no account identifier attached, and the resulting weather plus approximate location may be included in AI prompts when you ask for weather-aware suggestions.

You can revoke either permission at any time in iOS **Settings → Wearra**.

### The app crashed / a feature isn't working.

First, make sure you're on the latest version from the App Store and your iPhone is running iOS 18 or later. If the issue persists, email us with your iPhone model, iOS version, and a description (screenshots help). Crash reports are automatically collected via Firebase Crashlytics.

### Is Wearra available on Android or web?

Not right now. Wearra is an iOS-only app for iPhone running iOS 18 or later.

### Is there a minimum age?

Yes — you must be at least 13 years old to use Wearra.

## Legal

- [Privacy Policy](privacy.md)
- [Terms of Service](terms.md)
