# Privacy Policy

*Wearra · Effective April 20, 2026*

This Privacy Policy explains what information Wearra collects when you use the app, why we collect it, and the choices you have. We try to say this in plain English — if anything is unclear, email us at [Support@wearra.app](mailto:Support@wearra.app).

Wearra is operated by Eli Linden, a sole developer operating in the United States ("we," "us," or "Wearra").

## What we collect

### Information you give us directly

- **Account info.** When you sign in with Apple, Google, or email/password, we receive the account identifiers needed to create and secure your account, such as your email address, display name if provided, sign-in provider, and an internal Firebase UID.
- **Photos you upload.** Wardrobe item photos, avatar photos, and garment photos you submit for virtual try-on rendering.
- **Wardrobe details.** Outfit notes, purchase prices, brand names, wear counts, tags, categories, and style preferences you enter.
- **Feedback.** Bad-render reports, attached photos, and any log bundles you choose to send through the in-app "Send to Developer" option.

### Device permissions we request

- **Camera.** To photograph clothing items and create your avatar.
- **Photo Library.** To import clothing photos and save try-on renders.
- **Location (while using the app).** For weather-appropriate outfit suggestions. We pass your latitude and longitude to Open-Meteo — no account identifier is sent.
- **Calendar (read-only).** To suggest outfits appropriate for your day's events. Calendar contents are read on-device; only the event titles for events you ask the assistant about are sent to our AI provider for outfit suggestions. They are not stored on our servers unless included in a chat turn you choose to send.
- **Notifications.** For optional reminders and alerts (for example, when a render finishes). If notifications are enabled, Firebase Cloud Messaging (FCM) and Apple Push Notification service (APNs) tokens may be stored with your account so we can deliver reminders and admin pushes.

You can revoke any of these at any time in iOS **Settings → Wearra**.

### Information collected automatically

- **Device information.** Device model, iOS version, app version, locale, and session length.
- **Crash reports.** Stack traces and non-fatal errors via Firebase Crashlytics.
- **Usage events.** Screen views and custom events (e.g., render start/finish, button taps) via Firebase Analytics.
- **Performance data.** Response times, render durations, and other performance metrics used to diagnose slowness and regressions.
- **Purchase history.** Records of your in-app subscription and top-up purchases, linked to your account, so we can unlock the features you paid for and reconcile credit balances. Apple handles the underlying payment data — we do not receive your credit card or Apple ID credentials.
- **Approximate location.** Country-level, derived from IP by Firebase Analytics. No precise GPS is sent with analytics events.
- **DeviceCheck token.** An opaque, per-device token provided by Apple's DeviceCheck. This is *not* your Apple ID, not the IDFA, and cannot be used to identify you across other apps. We use it only to store two bits of information per device to prevent abuse of credit-grant and promo-code flows.

### Information stored on your device and optional iCloud backups

The following is stored locally on your iPhone using Apple's SwiftData framework and is not uploaded to our backend unless you explicitly use a feature that requires it:

- Your full wardrobe (photos, names, prices, brands, purchase dates, wear counts, tags, categories)
- Outfits and outfit history (compositions, hero images, notes)
- Packing trips
- Style preferences
- A cached snapshot of your profile (credit counts)

You can manually back up wardrobe data and photos to your private iCloud. iCloud Backup is manual, not live sync. Restore replaces the local wardrobe on that device. Uninstalling the app removes local app data from that device, but manual iCloud backups remain in your private iCloud unless you delete them.

### Information stored in our cloud (Google Firestore)

- `/users/{uid}` — email, display name if provided, sign-in provider, monthly render count, subscription snapshot, and notification tokens if enabled
- `/users/{uid}/creditGrants/{id}` — credit history (amount, reason, source, timestamps)
- `/users/{uid}/badRenderReports/{id}` — photos, notes, item IDs, and the provider that produced the problematic render
- `/users/{uid}/logDumps/{id}` — optional log bundles you send via "Send to Developer"
- AI Stylist chat turns — your prompts, assistant responses, timestamps, and any wardrobe or context references you share with the assistant
- `/debug_logs/{id}` — render debug info (photos, provider, input params) generated when a try-on runs, so we can diagnose issues
- `/redeemCodes/{code}` — promo code state (we manage this; it isn't user-editable)

## How we use it

- **Virtual Try On rendering.** We send your avatar and garment photos to the AI/render provider used for that request so it can generate the rendered image you requested. Providers may include Google Gemini, Google Vertex AI, FASHN, fal.ai/Kling, and LightX.
- **AI chat and outfit suggestions.** Your prompts and the wardrobe context you share with the assistant are sent to Google Gemini 2.5 Flash. Chat turns are also logged to Google Firestore so the app can maintain conversation history and diagnose support issues.
- **Automatic item tagging.** When you add a clothing photo, it may be sent to Google Gemini for vision-based categorization (type, color, style).
- **Weather-aware suggestions.** Your coordinates are sent to Open-Meteo to fetch the local forecast.
- **Subscription management.** Apple handles billing; we receive subscription status through StoreKit so we can unlock Pro features.
- **Abuse prevention.** We use Apple's DeviceCheck to limit repeated credit grants and promo-code abuse from the same physical iPhone.
- **Debugging and improvement.** Crash reports, usage analytics, and opt-in debug log uploads.
- **Support.** To respond when you email us.

We do not sell or share your personal information. We do not show ads. We do not use your photos to train AI models on our end, and AI/render providers receive photos only to return the result you requested. Provider terms and privacy policies govern how that data is handled on their side.

## Third-party AI processing

Wearra uses AI and render providers to power chat, item tagging, outfit suggestions, and virtual Try On. Depending on the feature and provider used for a request, data may be transmitted to Google Gemini, Google Vertex AI, FASHN, fal.ai/Kling, or LightX for processing:

- Photos of you (avatar) and your clothing items, used for virtual Try On rendering and item tagging.
- Your prompts, assistant chat turns, and wardrobe context you choose to share with the AI Stylist.
- Calendar event titles, used only when you request outfit suggestions for upcoming events.
- Approximate location and current weather conditions, used to suggest weather-appropriate outfits.

We do not transmit names, contacts, payment data, or other calendar metadata to AI/render providers. By using Wearra's AI and rendering features, you consent to your data being processed by those providers under their terms in addition to ours.

## Third-party services

The following third parties may receive data from Wearra in order for the app to function.

### Google

| Service | Purpose | Data shared |
|---|---|---|
| Firebase Authentication | Sign-in via Apple, Google, or email/password | Email, display name if provided, sign-in provider, Firebase UID |
| Firebase Firestore | User profile, credit records, reports, debug logs, AI Stylist chat turns | Account data, uploaded photos, app events, chat prompts and responses |
| Firebase Storage | Debug photo uploads when a render fails | Photos from the failed render |
| Firebase Remote Config | Feature flags and API keys delivered at runtime | App/device metadata only |
| Firebase Cloud Messaging | Push notification delivery for reminders and admin pushes | FCM registration token, APNs token, account association |
| Firebase Analytics | Usage events and device telemetry | Device model, iOS version, app version, locale, events, IP-derived country |
| Firebase Crashlytics | Crash and non-fatal error reporting | Stack traces, device state at crash |
| Google Cloud Functions | Server-side logic: `claimFreeCredits`, `redeemCode`, `submitBadRenderReport`, `alertWebhook` | Request payloads relevant to each function (e.g., DeviceCheck token, promo code, report content) |
| Google Gemini 2.5 Flash | Chat, outfit suggestions, and item categorization | Your prompts, wardrobe context, item photos for tagging, and — when you ask for event- or weather-aware suggestions — calendar event titles plus approximate location and weather |
| Google Gemini 2.5 Flash Image | Virtual Try On rendering | Avatar photo, garment photo(s), render request metadata |
| Google Vertex AI (`virtual-try-on-001`) | Virtual Try On rendering | Avatar photo, garment photo(s), render request metadata |

Google's privacy policy: [policies.google.com/privacy](https://policies.google.com/privacy). Firebase-specific details: [firebase.google.com/support/privacy](https://firebase.google.com/support/privacy).

### Other AI/render providers

| Provider | Purpose | Data shared |
|---|---|---|
| FASHN | Virtual Try On rendering | Avatar photo, garment photo(s), render request metadata |
| fal.ai / Kling | AI rendering | Avatar photo, garment photo(s), prompt or render request metadata |
| LightX | Virtual Try On rendering | Avatar photo, garment photo(s), render request metadata |

### Apple

| Service | Purpose | Data shared |
|---|---|---|
| StoreKit 2 | Subscription and in-app purchase billing, refunds, receipts | Purchase receipts; Apple handles payment data |
| DeviceCheck | Abuse prevention (2 bits of state per physical device) | Opaque per-device token |
| Apple Push Notification service (APNs) | Delivery of push notifications | APNs device token |
| iCloud | Manual wardrobe backup and restore | Wardrobe data and photos you choose to back up to your private iCloud |

Apple's privacy policy: [apple.com/legal/privacy](https://www.apple.com/legal/privacy/).

### Weather

| Provider | Purpose | Data shared | Policy |
|---|---|---|---|
| Open-Meteo | Local weather forecast for outfit suggestions | Latitude and longitude only — no identifier | [open-meteo.com/en/terms](https://open-meteo.com/en/terms) |

> **About provider-side retention.** Once data reaches an AI/render provider, retention and handling are governed by that provider's terms and privacy policy. We do not separately control or store that data on the provider's side.

## Your rights

### Everyone

- **Access:** request a copy of the data we hold about you.
- **Correction:** ask us to fix inaccurate data.
- **Deletion:** delete your account from within the app (**Settings → Danger Zone → Delete Account**), or email us and we'll do it for you. See "Account deletion and data retention" below for what happens next.

### California residents (CCPA / CPRA)

If you live in California, you have the right to:

- Know what personal information we collect, use, and disclose.
- Request deletion of your personal information.
- Correct inaccurate personal information.
- Opt out of the "sale" or "sharing" of your personal information. **We do not sell or share your personal information** as those terms are defined by the CCPA.
- Not be discriminated against for exercising these rights.

To exercise any of these rights, email [Support@wearra.app](mailto:Support@wearra.app). We verify requests using the email address associated with your account.

### EU / UK residents (GDPR / UK GDPR)

If you are in the European Economic Area, the United Kingdom, or Switzerland, you have the right to:

- Access your data and receive a copy in a portable format.
- Have your data corrected or erased.
- Restrict or object to processing.
- Withdraw consent at any time where processing is based on consent.
- Lodge a complaint with your local data protection authority.

Our legal bases for processing are: **contract** (to provide the try-on service you requested), **legitimate interest** (abuse prevention, debugging, improving the app), and **consent** (optional analytics and notifications where required). When your data is transferred outside the EEA/UK — for example, to our US-based backend or to AI/render providers — we rely on standard contractual clauses or the provider's own transfer mechanisms.

## Data retention

- **Try-on photos.** Stored briefly during processing and removed from our Firebase Storage after the render completes or within 30 days, whichever is sooner. Retention on an AI/render provider's side is governed by that provider's terms.
- **Account data.** Kept for as long as your account is active.
- **On-device and iCloud backup data.** Your wardrobe, outfit history, and trip data stay on your iPhone by default. If you manually back up to private iCloud, that backup is controlled by your iCloud account. Restore replaces the local wardrobe on that device.
- **Analytics and crash logs.** Retained according to Firebase's defaults (typically up to 14 months for analytics; shorter for crash logs).

### Account deletion and data retention

You may delete your account at any time from **Settings → Danger Zone → Delete Account**. When you do, your account enters a **30-day grace period**. During this period:

- You are signed out of the app on all devices.
- Your data is hidden from the app and inaccessible to you.
- We retain your data internally so we can respond to chargebacks, fraud claims, and support disputes.

After 30 days, all user-identifying data we control in our backend (profile, photos, outfits, credit history, reports) is permanently and irrevocably deleted. Manual iCloud backups you created are stored in your private iCloud and remain under your control until you delete them. We retain a minimal audit record (email, deletion date) for up to 12 months for fraud prevention and regulatory compliance.

To cancel a scheduled deletion, email [Support@wearra.app](mailto:Support@wearra.app) within the 30-day window.

## Children's privacy

Wearra is not directed at children under 13, and we do not knowingly collect personal information from anyone under 13. If you believe a child under 13 has given us information, email [Support@wearra.app](mailto:Support@wearra.app) and we will delete it.

## Security

Data in transit is encrypted using TLS. Data at rest in Firebase is encrypted by Google. Access to our backend is restricted. No system is perfectly secure, but we take reasonable steps to protect your information.

## Changes to this policy

If we make material changes, we'll update the effective date at the top of this page and, for significant changes, show a notice inside the app the next time you open it. Continuing to use Wearra after the change means you accept the updated policy.

## Contact

Questions, requests, or concerns? Email [Support@wearra.app](mailto:Support@wearra.app). We respond within 3 business days.
