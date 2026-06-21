---
title: "The Day Google Chat Clicked My Button Before I Did"
description: "A debugging journey of discovering how Google Chat link previews trigger webhook URLs before users even click them."
publishedAt: "2024-04-10"
tags: ["Debugging", "Google Chat", "Webhooks", "Java"]
---
**Introduction:**
Recently, while working on a project that sends dynamic links to Google Chat, I ran into a really strange bug — one that had me scratching my head for hours. Every time I sent a link, it would automatically trigger multiple times before the user even clicked it!

Here’s how I found the root cause and fixed it.

---

### 🧩 The Problem

In my project, I send a “Retry” or “Approval” link to users through Google Chat using a webhook.
The idea is simple — users click the link to perform an action (like retrying a failed job or approving a request).

But strangely, the links were getting triggered 5–6 times automatically, even though the users hadn’t clicked them yet.

---

### 🔍 Debugging Journey

I checked:
- My retry logic — ✅ fine
- Webhook code — ✅ fine
- Network logs — ✅ fine
- Server retries — ✅ none

Still, every time I sent the message, the link was hit multiple times.
That’s when I realized — something else was calling the URL before the user.

---

### 💡 The Discovery

While checking server logs, I noticed the `User-Agent` header looked like this:

```
Mozilla/5.0 (compatible; Google-Chat; +https://chat.google.com/)
```

That’s when it hit me — Google Chat automatically fetches link previews to show the thumbnail/summary inside the chat message.

So technically, it wasn’t the user clicking the link. It was Google Chat doing a preview fetch — and that was triggering my logic.

---

### 🛠️ The Fix

Simple but effective — I just added a condition to ignore requests from Google Chat’s user agent.

```java
String userAgent = request.getHeader("User-Agent");
if (userAgent != null && userAgent.contains("Google-Chat")) {
 // Skip execution for preview requests
 return ResponseEntity.ok("Preview ignored");
}
// normal execution logic
processUserAction();
```

With that small change, everything worked perfectly — no more auto retries or auto approvals!

---

### 🎯 The Takeaway

Sometimes the smallest things, like link previews, can cause the biggest confusion.
Always check the `User-Agent` when debugging unexpected API calls — it might not be your code at all!

---

### 💬 Closing Thought

Debugging isn’t just about fixing errors — it’s about understanding why something behaves unexpectedly.
And sometimes, the culprit is a helpful feature that’s too helpful 😄
