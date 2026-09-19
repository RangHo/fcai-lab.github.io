import type { EnhancedImgAttributes } from "@sveltejs/enhanced-img";

/**
 * A single image, processed by the `@sveltejs/enhanced-img` plugin and ready
 * to be handed to `<enhanced:img />`.
 */
export type EnhancedImg = EnhancedImgAttributes["src"];

/**
 * The images of one directory under `$lib/images`, ordered by file name.
 */
export type Collection = EnhancedImg[];

/**
 * Every image under `$lib/images`, imported eagerly so that Vite resizes and
 * re-encodes them at build time. Dropping a file into one of the directories
 * is enough to pick it up.
 */
const rawImages = import.meta.glob<EnhancedImg>(
  "./images/*/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp}",
  { eager: true, import: "default", query: { enhanced: true } },
);

const collections: Record<string, Collection> = {};

for (const path of Object.keys(rawImages).sort()) {
  const [name] = path.replace(/^\.\/images\//, "").split("/");
  (collections[name] ??= []).push(rawImages[path]);
}

function collection(name: string): Collection {
  return collections[name] ?? [];
}

/**
 * Every collection, keyed by the name of its directory.
 *
 * ```ts
 * import images from "$lib/images";
 *
 * images["front-page"];
 * ```
 */
export default collections;

// A named export per directory under `$lib/images`. ECMAScript modules cannot
// declare their exports at run time, so a new directory needs a line here --
// but the images *inside* a directory are always picked up on their own.

export const frontPage = collection("front-page");
