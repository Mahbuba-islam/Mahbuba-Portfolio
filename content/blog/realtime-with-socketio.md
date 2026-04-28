---
title: "Real-Time UIs with Socket.io and Next.js"
date: "2026-04-18"
description: "How I wire up a real-time chat and notification layer on top of a Next.js + Node backend."
tags: ["realtime", "socketio", "nextjs"]
---

Real-time features used to feel like dark magic. With Socket.io and a tiny bit
of plumbing, they're now a Tuesday afternoon project.

## The mental model

You have three moving parts:

1. A **client** that opens a persistent connection.
2. A **server** that fans out events to rooms.
3. A **store** (Postgres / Redis) that owns the source of truth.

```ts
// server.ts
io.on("connection", (socket) => {
  socket.on("message:send", async (payload) => {
    const msg = await db.message.create({ data: payload });
    io.to(payload.roomId).emit("message:new", msg);
  });
});
```

## Tips I learned the hard way

- **Always namespace events** like `message:new` — flat names rot fast.
- **Persist before you broadcast.** Optimism is for the UI, not the source of truth.
- **Use rooms** instead of filtering on the client.

Real-time isn't really about WebSockets — it's about a clear event vocabulary.
