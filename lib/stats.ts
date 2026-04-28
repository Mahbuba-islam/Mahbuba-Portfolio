import fs from "node:fs";
import path from "node:path";

export type PostStats = {
  slug: string;
  views: number;
  likes: number;
};

export interface StatsBackend {
  get(slug: string): Promise<PostStats>;
  incrementViews(slug: string): Promise<PostStats>;
  incrementLikes(slug: string, by?: number): Promise<PostStats>;
}

// ---------------------------------------------------------------------------
// File-based backend (default).  Stores everything in `.data/stats.json`.
// Easy to swap for Vercel KV / Upstash Redis / Postgres later — just provide
// another implementation of StatsBackend.
// ---------------------------------------------------------------------------

const DATA_DIR = path.join(process.cwd(), ".data");
const DATA_FILE = path.join(DATA_DIR, "stats.json");

type Store = Record<string, { views: number; likes: number }>;

function readStore(): Store {
  try {
    if (!fs.existsSync(DATA_FILE)) return {};
    return JSON.parse(fs.readFileSync(DATA_FILE, "utf8")) as Store;
  } catch {
    return {};
  }
}

function writeStore(store: Store): void {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(DATA_FILE, JSON.stringify(store, null, 2), "utf8");
}

class FileStatsBackend implements StatsBackend {
  async get(slug: string): Promise<PostStats> {
    const store = readStore();
    const entry = store[slug] ?? { views: 0, likes: 0 };
    return { slug, ...entry };
  }

  async incrementViews(slug: string): Promise<PostStats> {
    const store = readStore();
    const entry = store[slug] ?? { views: 0, likes: 0 };
    entry.views += 1;
    store[slug] = entry;
    writeStore(store);
    return { slug, ...entry };
  }

  async incrementLikes(slug: string, by = 1): Promise<PostStats> {
    const store = readStore();
    const entry = store[slug] ?? { views: 0, likes: 0 };
    entry.likes = Math.max(0, entry.likes + by);
    store[slug] = entry;
    writeStore(store);
    return { slug, ...entry };
  }
}

// ---------------------------------------------------------------------------
// Singleton — change this one line to swap implementations.
// e.g. `export const stats: StatsBackend = new KvStatsBackend();`
// ---------------------------------------------------------------------------

export const stats: StatsBackend = new FileStatsBackend();
